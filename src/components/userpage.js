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
import SearchBox from './searchbox.js';
import SocialOptions from './socialoptions.js';
import SlidesModal from './slidesmodal.js';
import SlidesTemplate from './slidestemplate.js';

export default class UserPage extends Component {
    intervalID
    resizeListener
    constructor(props) {
        super(props);
        if(!JSON.parse(localStorage.getItem('user')) || !localStorage.getItem('auth')) {
          return window.location = window.location.origin + '/#/login';
        }
        this.state = {
            expanded: true,
            getResponse: [],
            contentWidth: window.innerWidth <= 1024 ? '100%' : '85%',

            collect: false,
            collectedAnnotations: [],
            modalActive: false,
            modal: {},
            loading: false,
            userCollections: [],
            status: 'You have not annotated anything yet!',
            page: 0,
            user: (function() {
              try {
                return JSON.parse(localStorage.user);
              } catch(e) {
                return {};
              }
            }()),
            collectionData: {}
        };
    }

    componentDidMount() {
        this.getUpdated();

    }
    handsleResize() {
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

    }
    getUpdated() {
        switch (this.props.route.path) {
            case 'annotations': {
                api.annotations(this.state.page).then((data) => {
                    var sortedByPinId = data.sort(function(a, b) {
                        return a.annotationId - b.annotationId;
                    }).reverse();
                    this.setState({
                        getResponse: sortedByPinId,
                        status: ''
                    });
                });
                break;
            }
            case 'username/:username': {
                api.getUser(this.props.params.username, this.state.page).then((data) => {

                    if(data.error) {
                      this.setState({
                        status: 'You are not authorized to view this resource'
                      });
                      return;
                    }
                    var sortedByPinId = data.sort(function(a, b) {
                          return a.annotationId - b.annotationId;
                    }).reverse();
                    var oldCopy = this.state.getResponse;

                      var allAnno = oldCopy.concat(sortedByPinId);
                      this.setState({
                          getResponse: allAnno
                      });

                });

                api.getUserCollections(this.state.user.userName).then((data) => {
                  console.warn(data);
                  this.setState({
                    userCollections: data
                  });

                })
                break;
            }
            case 'collections/:collectionId': {
                api.getCollectionAnnotations(this.props.params.collectionId).then((data) => {
                  console.log(data);
                  var sortedByPinId = JSON.parse(data.annotations).sort(function(a, b) {
                        return a.annotationId - b.annotationId;
                  }).reverse();
                  this.setState({
                      getResponse: sortedByPinId,
                      collectionData: data
                  });
                })
                if(this.state.user.userName) {
                  api.getUserCollections(this.state.user.userName).then((data) => {
                    this.setState({
                      userCollections: data
                    });

                  })
                }
                break;
            }
        }
        this.render();
    }
    expander() {
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

          return (
              <Annotation
                  key={annotation.annotationId}
                  refresh={this.getUpdated}
                  selected={this.isSelected(annotation)}
                  expanded={this.state.expanded}
                  annotation={annotation}
                  route={this.props.route}
                  scale={this.state.scaleValue}
                  updateCommentsCB={this.updateCommentsCB}
                  addToCollection={this.addToCollection.bind(this)}
                  color={this.props.color}/>);
      });
      return Annotations;
    }
    beginCollecting(submit, reportType) {
      if(!this.state.collect) {
        this.setState({
          collect: true
        });
      } else {
        this.setState({
          collect: false
        });
        if (submit == 'buttonClicked') {
            if(reportType == 'pdf') {
              this.setState({
                modalActive: true,
                modal: (<PDFModal close={() => this.closeModal()} loading={this.state.loading} callback={(data) => {this.submitCollection(data, 'pdf')}}/>)
              });
            } else if (reportType == 'slides') {
              this.setState({
                modalActive: true,
                modal: (<PDFModal slides={true} close={() => this.closeModal()} loading={this.state.loading} callback={(data) => {this.submitCollection(data, 'slides')}}/>)
              })
            }

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
    submitCollection(data, reportType) {
      this.setState({
        loading: true
      });
      if(reportType == 'pdf') {
        var strings = PDFTemplate(this.state.collectedAnnotations, data);
        api.html2pdf(strings, data.fileName).done((resp) => {
            this.setState({
              loading: false,
              modalActive: false,
              modal: {},
              collectedAnnotations: []
            });
            api.addToUserCollections(this.state.user.userName, this.state.collectedAnnotations, resp, data.fileName).done(function(response) {console.log(response)})
            this.setState({
              loading: false,
              modalActive: true,
              modal: (<SlidesModal type="pdf"fileName={data.fileName} status={!data.err ? "Success": "Failed"} src={resp} close={() => {this.closeModal()}}/>),
              collectedAnnotations: []
            });
        });
      } else if (reportType == 'slides') {
        var htmlStrings = SlidesTemplate(this.state.collectedAnnotations, data);
        this.setState({
          loading: false,
          modalActive: false,
          modal: {},
          collectedAnnotations: []
        })
        api.string2html(htmlStrings, data.fileName).done((resp) => {
          console.log(resp);
          api.addToUserCollections(this.state.user.userName, this.state.collectedAnnotations, resp, data.fileName).done(function(response) {console.log(response)})
          this.setState({
            loading: false,
            modalActive: true,
            modal: (<SlidesModal type="slides" fileName={data.fileName} status={!data.err ? "Success": "Failed"} src={resp} close={() => {this.closeModal()}}/>),
            collectedAnnotations: []
          });
        });

      }

    }
    downloadFile(file) {
      var a = document.createElement('a');
      document.body.appendChild(a);
      a.style = 'display: none';
      a.href = file.exportURI;
      a.download = 'title.pdf';
      a.click();
    }
    listFiles(page) {
      var pageStart = (page - 1) * 5;
      var pageEnd = page * 5;
      if(this.state.userCollections instanceof Array && this.state.userCollections.length < 1) {
        return (
          <div style={{width: '100%', textAlign: 'center', marginTop: '20px', marginBottom: '20px'}}>
            <p>You have not created any files yet.</p>
          </div>
        )
      }
      var files = this.state.userCollections.filter(function(col, idx) {
        if(col.fileName) {
          return true;
        } else {
          return false;
        }
      });

      var displayFiles = files.map((file, idx) => {
          var fileType = file.exportURI.substring(file.exportURI.lastIndexOf('.') + 1, file.exportURI.length);
          var fileIconClass;
          switch(fileType) {
            case 'pdf': {
              fileIconClass = 'fa-file-pdf-o';
              break;
            }
            case 'html': {
              fileIconClass = 'fa-file-code-o';
            }
          }
          return (
            <div onClick={() => {this.downloadFile(file)}} key={idx+file} style={{width: '100%', textAlign: 'left', marginTop: '20px', marginBottom: '20px', display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'center'}}>
              <span style={{height: '100%', width: '40px', fontSize: '30px'}}className={"fa " + fileIconClass}></span><p style={{width: '100%', paddingLeft: '10px'}}>{file.fileName}</p>
            </div>
          );

      });

      return displayFiles.reverse();
    }
    listCollections(page) {
      var pageStart = (page - 1) * 5;
      var pageEnd = page * 5;
      var files = this.state.userCollections.filter(function(col) {
        if(col.fileName) {
          return true;
        } else {
          return false;
        }
      });
      if(files.length == 0) {
        return (
          <div style={{width: '100%', textAlign: 'center', marginTop: '20px', marginBottom: '20px'}}>
            <p>You have not created a collection yet.</p>
          </div>
        )
      }
      var displayCols = files.map((col, idx) => {
        return (
            <div onClick={() => {this.gotoCollection(col.collectionId)}} key={idx+col+'col'} style={{width: '100%', textAlign: 'center', marginTop: '20px', marginBottom: '20px'}}>
              <p>{col.fileName}</p>
            </div>
          );

        /*
        if(idx >= pageStart && idx < pageEnd) {
        return (
            <div onClick={() => {this.gotoCollection(col.collectionId)}} key={idx+col+'col'} style={{width: '100%', textAlign: 'center', marginTop: '20px', marginBottom: '20px'}}>
              <p>{col.fileName}</p>
            </div>
          );
        } else {
          return;
        }*/
      })
      return displayCols.reverse();
    }
    gotoCollection(id) {
      window.location = window.location.origin + '/#/collections/' + id
    }
    turnPage(newPage) {
      if(newPage < 0) {
        newPage = 0;
      }
      this.setState({
        page: newPage
      });
      setTimeout(this.getUpdated.bind(this),0);
      //$("html, body").animate({ scrollTop: "0px" });

    }
    annotationLoader(annotations) {
      if(annotations.length > 0) {
        this.setState({
          getResponse: annotations
        });
      }
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
                marginRight: '25px',
                minWidth: '300px'
            },
            annotationWrapper = {
                minWidth: '300px',
                width: '100%',
                paddingBottom: '20px',
                display: 'flex',
                justifyContent: this.state.getResponse.length > 0 ? 'flex-start' : 'center',
                alignItems: 'center',
                flexDirection: 'column',
                height: '100%'
            },
            leftBarContent = [{
              title: 'Create a PDF',
              callback: (event) => {this.beginCollecting(event, 'pdf')},
              activeText: 'After selecting the annotations you would like in your collection, click below to export them to PDF',
              button: 'true',
              buttonText: 'Create Collection',
              activeColor: this.props.color.primary
            },
            {
              title: 'Create a slideshow',
              callback: (event) => {this.beginCollecting(event, 'slides')},
              activeText: 'After selecting the annotations you would like in your collection, click below to export them to slides',
              button: 'true',
              buttonText: 'Create Slideshow',
              activeColor: this.props.color.primary
            },
            {
              title: 'My Files',
              callback: () => {},
              activeText: this.listFiles(1),
              button: 'page',
              id: 'files',
              activeColor: this.props.color.primary

            },{
              title: 'My Collections',
              callback: () => {},
              activeText: this.listCollections(1),
              button: false,
              id: 'collections',
              activeColor: this.props.color.primary,

            }],
            rightBar = {
              width: '30%',
              minWidth: '300px'
            },
            pageButtons = {


            },
            searchBox = {
              marginTop: '20px',
              boxShadow: '0 3px 15px 1px #777',
            };

            var collectionDetail = [{
              title: 'Sharing',
              callback: () => {},
              activeText: (<div><p>Share this collection on:</p><SocialOptions collection={this.state.collectionData}/></div>),
              button: false,
              id: 'collectionsTools',
              activeColor: this.props.color.primary,
            }];
            //rightBarContent = [{title: 'Most Used Pin Type', value: ''}, {title: 'Most Used Emojii', value: ''}, {title: 'Most Searched', value: ''}, {title: 'Most Votes', value: ''}, {title: 'Most Active Reviewed', value: ''}, {title: 'Most Pins', value: ''}];

        return (
            <div style={pageWrapper}>
                {this.state.modalActive ? this.state.modal : ''}
                <div style={leftBarWrapper}>
                    <DashboardProfileCard color={this.props.color} />

                    {this.state.user.userName ? <SideBar
                        icon="fa-filter"
                        title='Tools'
                        content={leftBarContent}
                        color={this.props.color} /> : '' }


                </div>
                <div style={annotationWrapper}>

                  <div style={{width: '100%', textAlign: 'center', marginBottom: '20px'}}>
                    <SearchBox color={this.props.route.color} path={this.props.route.path} collection={this.state.collectionData} callback={(annotations) => {this.annotationLoader(annotations)}} />
                    <h5>{this.state.collectionData.fileName}</h5>
                    <div style={{width: '100%', paddingLeft: '25%', paddingRight: '25%', textAlign: 'center', marginBottom: '20px'}}>
                      {this.props.route.path == "username/:username" ? "" : <SocialOptions user={this.state.user} collection={this.state.collectionData}/>}
                    </div>
                  </div>
                  <Loader annotations={this.state.getResponse.length} color={this.props.color} />
                  {this.state.getResponse.length > 0 ? this.annotationRender() : this.state.status}
                    {this.props.route.path == "username/:username" ?  <button onClick={() => {this.turnPage(this.state.page + 1)}} type='button'>More</button> : ''}
                    {this.props.route.path == "annotations" ? <button onClick={() => {this.turnPage(this.state.page + 1)}} type='button'>More</button> : ''}

                </div>
                <div style={rightBar}>
                </div>
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
