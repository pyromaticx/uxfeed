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
            modal: {},
            loading: false,
            userCollections: []
        };
    }

    componentDidMount() {
        this.getUpdated();
        window.setInterval(this.getUpdated.bind(this), 2000);
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

                api.getUserCollections(this.props.params.username).then((data) => {
                  console.log(data)
                  this.setState({
                    userCollections: data
                  });

                })
                break;
            }
            case 'collection/:collectionId': {
                api.getCollectionAnnotations(this.props.params.collectionId).then((data) => {
                  var sortedByPinId = data.annotations.sort(function(a, b) {
                        return a.annotationId - b.annotationId;
                  }).reverse();
                  this.setState({
                      getResponse: sortedByPinId
                  });
                })
                api.getUserCollections(this.props.params.username).then((data) => {
                  console.log(data)
                  this.setState({
                    userCollections: data
                  });

                })
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
    isSelected(annotation) {

      var selected = this.state.collectedAnnotations.filter(function(collectedAnno) {
        if(collectedAnno.annotationId === annotation.annotationId) {
          return true;
        }
        return false;
      })
      if(selected.length > 0) {
        return true;
      }
      return false;
    }
    annotationRender() {
      var Annotations = this.state.getResponse.map((annotation, idx) => {
          console.warn(this.isSelected(annotation))
          return (
              <Annotation
                  key={annotation.annotationId}
                  selected={this.isSelected(annotation)}
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
              modal: (<PDFModal close={() => this.closeModal()} loading={this.state.loading} callback={(data) => {this.submitCollection(data)}}/>)
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
        loading: true
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
          api.addToUserCollections(this.props.params.username, this.state.collectedAnnotations, resp, data.fileName).done(function(response) {console.log(response)})
          this.setState({
            loading: false,
            modalActive: false,
            modal: {},
            collectedAnnotations: []
          })
        }, 100)
      });

    }
    downloadFile(file) {
      var a = document.createElement('a');
      document.body.appendChild(a);
      a.style = 'display: none';
      a.href = file.exportURI;
      a.download = 'title.pdf';
      a.click();
    }
    listFiles() {
      var files = this.state.userCollections.filter(function(col) {
        if(col.fileName) {
          return true;
        } else {
          return false;
        }
      });
      var displayFiles = files.map((file, idx) => {
        return (
          <div onClick={() => {this.downloadFile(file)}} key={idx+file} style={{width: '100%', textAlign: 'center', marginTop: '20px', marginBottom: '20px'}}>
            <p>{file.fileName}</p>
          </div>
        );
      })
      return displayFiles;
    }
    listCollections() {
      var files = this.state.userCollections.filter(function(col) {
        if(col.fileName) {
          return true;
        } else {
          return false;
        }
      });
      var displayCols = files.map((col, idx) => {
        return (
          <div onClick={() => {this.gotoCollection(col.collectionId)}} key={idx+col+'col'} style={{width: '100%', textAlign: 'center', marginTop: '20px', marginBottom: '20px'}}>
            <p>{col.fileName}</p>
          </div>
        );
      })
      return displayCols;
    }
    gotoCollection(id) {
      window.location = 'http://uxpass.com/#/collections/' + id
    }
    render() {

        var pageWrapper = {
                width: '100%',
                minHeight : '100vh',
                display: 'flex',
                justifyContent: 'space-between',

            },
            leftBarWrapper = {
                width: '40%',
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
            },
            {
              title: 'My Files',
              callback: () => {},
              activeText: this.listFiles(),
              button: false,
              activeColor: this.props.color.six
            },{
              title: 'Collections',
              callback: () => {},
              activeText: this.listCollections(),
              button: false,
              activeColor: this.props.color.four
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
