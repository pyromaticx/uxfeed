import React, {Component} from 'react';
import Annotation from './annotation.js';
import moment from 'moment';
import SideBar from './sidebar.js';
import DashboardProfileCard from './dashboardProfileCard';
import api from './api/api.js';
import Loader from './loader.js';
import FilterBar from './filterbar.js';
import PDFTemplate from './pdftemplate.js';
import PDFModal from './pdfmodal.js';
export default class UserPage extends Component {
    intervalID
    resizeListener
    constructor(props) {
        super(props);
        this.state = {
            expanded: true,
            getResponse: [],
            contentWidth: window.innerWidth <= 1024 ? '100%' : '85%',
            scaleValue: this.handleResize(),
            collect: false,
            collectedAnnotations: [],
            modalActive: false,
            modal: {}
        };
    }

    componentDidMount() {
        this.getUpdated();
        window.setInterval(this.getUpdated.bind(this), 20000);
    }
    handleResize() {
        var contentWidth = window.innerWidth <= 1024 ? '100%' : '85%';
        var scaleValue;

        if(window.innerWidth >= 1280) {
          scaleValue = 2.9;
        } else if (window.innerWidth >= 1024) {
          scaleValue = 3.5;
        } else {
          scaleValue = 4;
        }

        this.setState({
            contentWidth: contentWidth,
            scaleValue: scaleValue
        });
        return scaleValue;
    }
    updateCommentsCB(commentObj) {
      // !!! TODO: Add PATCH request to update comment array in DB !!!
      console.log(commentObj)
    }
    getUpdated() {
        switch (this.props.route.path) {
            case 'annotations': {
                api.annotations().then((data) => {
                    var sortedByPinId = data.sort(function(a, b) {
                        return a.annotationId - b.annotationId;
                    }).reverse();
                    this.setState({
                        getResponse: sortedByPinId
                    });
                });
                break;
            }
            case 'username/:username': {
                api.getUser(this.props.params.username).then((data) => {
                    console.log(data);
                    var sortedByPinId = data.sort(function(a, b) {
                          return a.annotationId - b.annotationId;
                    }).reverse();
                    this.setState({
                        getResponse: sortedByPinId
                    });
                });
                break;
            }
        }
    }
    expander() {
      console.log('userpage')
      this.setState({
        expanded: this.state.expanded == true ? false : true
      });

    }
    annotationRender() {
      var Annotations = this.state.getResponse.map((annotation, idx) => {
          return (
              <Annotation
                  key={annotation.annotationId}
                  expanded={this.state.expanded}
                  annotation={annotation}
                  scale={this.state.scaleValue}
                  updateCommentsCB={this.updateCommentsCB}
                  addToCollection={this.addToCollection.bind(this)}
                  color={this.props.color}/>);
      });
      return Annotations;
    }
    beginCollecting(submit) {
      if(!this.state.collect) {
        this.setState({
          collect: true
        });
      } else {
        this.setState({
          collect: false
        });
        if (submit == 'buttonClicked') {
            this.setState({
              modalActive: true,
              modal: (<PDFModal close={() => this.closeModal()} callback={(data) => {this.submitCollection(data)}}/>)
            });

        }

      }
    }
    addToCollection(annotation) {
      if(this.state.collect == false) {
        return false;
      } else {
        var collected = this.state.collectedAnnotations;
        var exists = collected.filter(function(anno, idx) {
          if(anno.annotationId === annotation.annotationId) {
            return true;
          }
          return false;
        });
        if(exists.length == 0) {
          collected.push(annotation);
          //console.log(collected);
          this.setState({
            collectedAnnotations: collected
          });
          return true;
        } else {
          var removed = collected.filter(function(anno) {
            return anno.annotationId != annotation.annotationId;
          });
          this.setState({
            collectedAnnotations: removed
          });
          return false;
        }
      }
    }
    closeModal() {
      this.setState({
        collect: false,
        collectedAnnotations: [],
        modalActive: false,
        modal: {}
      });

    }
    submitCollection(data) {
      this.setState({
        modalActive: false,
        modal: {},

      });

      var strings = PDFTemplate(this.state.collectedAnnotations, data);

      api.html2pdf(strings, data.fileName).done((resp) => {
        setTimeout(() => {
          var a = document.createElement('a');
          document.body.appendChild(a);
          a.style = 'display: none';
          a.href = resp;
          a.download = 'title.pdf';
          a.click();
          api.addToUserCollections(this.props.userDetails.userId, this.state.collectedAnnotations, data, resp).done(function() {console.log('Collection posted to ', this.props.userDetails.userId)})
        }, 100)
      });

    }
    render() {

        var pageWrapper = {
                width: '100%',
                minHeight : '100vh',
                display: 'flex',
                justifyContent: 'space-between',

            },
            leftBarWrapper = {
                width: '30%',
                marginRight: '25px'

            },
            annotationWrapper = {
                minWidth: '300px',
                width: '100%',
                paddingBottom: '20px',
                display: 'flex',
                justifyContent: this.state.getResponse.length > 0 ? 'flex-start' : 'center',
                alignItems: 'center',
                flexDirection: 'column'
            },
            leftBarContent = [{
              title: 'Create a collection',
              callback: (event) => {this.beginCollecting(event)},
              activeText: 'After selecting the annotations you would like in your collection, click below to export them to PDF',
              button: true,
              buttonText: 'Create Collection'
            }],
            rightBar = {
              width: '30%'
            };
            //rightBarContent = [{title: 'Most Used Pin Type', value: ''}, {title: 'Most Used Emojii', value: ''}, {title: 'Most Searched', value: ''}, {title: 'Most Votes', value: ''}, {title: 'Most Active Reviewed', value: ''}, {title: 'Most Pins', value: ''}];
        return (
            <div style={pageWrapper}>
                {this.state.modalActive ? this.state.modal : ''}
                <div style={leftBarWrapper}>
                    <SideBar
                        icon="fa-filter"
                        title='Tools'
                        content={leftBarContent}
                        color={this.props.color} />
                </div>
                <div style={annotationWrapper}>
                  <Loader annotations={this.state.getResponse.length} color={this.props.color} />
                  {this.state.getResponse.length > 0 ? this.annotationRender() : 'You have not annotated anything yet!'}
                </div>
                <div style={rightBar}></div>
            </div>
        );
        /*
        <FilterBar
        expandCB={() => this.expander()}
        expanded={this.state.expanded}
        displayed={this.state.getResponse.length > 0 ? true : false}
        color={this.props.color} />
        */
    }
}
