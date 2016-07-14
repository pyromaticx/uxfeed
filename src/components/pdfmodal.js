import React, {Component} from 'react';
import moment from 'moment';
export default class PDFModal extends Component {
  constructor() {
    super();
    this.state = {
      companyName: '',
      collectionTitle: '',
      modalPage: '1',
      recs: false,
      cogWalk: 'N/A',
      herEval: 'N/A',
      infoArch: 'N/A',
      intDesign: 'N/A',
      visDesign: 'N/A',
      jsOpts: 'N/A',
      loading: false
    }
  }
  render() {
    var wrapper = {
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(100,100,100,0.5)',
      position: 'fixed',
      top: 0,
      zIndex: '1100',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalBox = {
      height: '80%',
      width: '80%',
      backgroundColor: '#f9f9f9',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'column'
    },
    pageStyle= {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'column'
    },
    inputs = {
      width: '300px'
    },
    backButton = '';
    if(this.state.recs) {
      backButton = this.state.modalPage == '1' ? <button className='btn btn-default' type='button' onClick={() => {this.changePage('2')}}>Recommendations</button> : <button className='btn btn-default' type='button' onClick={() => {this.changePage('1')}}>Title</button>
    }
    var fileName = 'GoLiveLabs UxPass ' + this.state.companyName + ' ' + this.state.collectionTitle + ' ' + moment(Date.now()).format('MM-DD-YY h.mm.ss a');
    console.log('loading:', this.props.loading)
    console.log("exe summary", this.state.recs);
    return (
      <div style={wrapper}>
        <div style={modalBox}>
          <div style={{height: '25px', width: '100%', display: 'flex', alignItems: 'center'}}>
            <span style={{fontSize: '25px', color: '#333', marginLeft: '95%'}} className='fa fa-times' onClick={() => this.props.close()}></span>
          </div>
          {this.state.modalPage == '1' ?
          <div style={pageStyle}>
            <label htmlFor='docTitle'>Document Title:</label>
            <input style={inputs} name='docTitle' placeholder='Enter a document title' value={this.state.collectionTitle} onChange={(event) => {this.updateTitle(event)}} />
            <label htmlFor='collectionTitle'>Client / Product:</label>
            <input style={inputs} name='collectionTitle' placeholder='Client / Product' value={this.state.companyName} onChange={(event) => {this.updateCompany(event)}} />
          </div>
            :
          <div style={pageStyle}>
            <label htmlFor='cogwalk'>Cognitive Walkthrough</label>
            <input name='cogwalk' type='text' style={inputs} value={this.state.cogWalk} onChange={(event) => {this.cogWalkChange(event)}} />
            <label htmlFor='hereval'>Heuristic Evaluation</label>
            <input name='hereval' type='text' style={inputs} value={this.state.herEval} onChange={(event) => {this.herEvalChange(event)}} />
            <label htmlFor='infoArch'>Information Architecture</label>
            <input name='infoArch' type='text' style={inputs} value={this.state.infoArch} onChange={(event) => {this.infoArchChange(event)}} />
            <label htmlFor='intDesign'>Interaction Design</label>
            <input name='intDesign' type='text' style={inputs} value={this.state.intDesign} onChange={(event) => {this.intDesignChange(event)}} />
            <label htmlFor='visDesign'>Visual Design</label>
            <input name='visDesign' type='text' style={inputs} value={this.state.visDesign} onChange={(event) => {this.visDesignChange(event)}} />
            <label htmlFor='jsOpts'>Programming Optimization</label>
            <input name='jsOpts' type='text' style={inputs} value={this.state.jsOpts} onChange={(event) => {this.jsOptsChange(event)}} />
          </div>}

          <span>
            <label style={{marginRight: '5px'}} htmlFor='recs'>Enable Executive Summary</label>
            <input name='recs' type='checkbox' onChange={(event) => {this.enableRecs(event)}}/>
          </span>
          {this.state.loading === true ? "Preparing your PDF Report..." : <button className='btn btn-primary' type='button' onClick={() => {
            this.setState({
              loading: true
            });
            if(this.state.companyName.length < 1 || this.state.collectionTitle.length < 1) {
              return alert("Please enter a title and company name");
            }
            this.props.callback({
              companyName: this.state.companyName,
              collectionTitle: this.state.collectionTitle,
              fileName: fileName,
              recs: this.state.recs,
              cogWalk: this.state.cogWalk,
              herEval: this.state.herEval,
              infoArch: this.state.infoArch,
              intDesign: this.state.intDesign,
              visDesign: this.state.visDesign,
              jsOpts: this.state.jsOpts,
          })}}>Prepare PDF file</button>}

          <p>File Name: {fileName}</p>
          {backButton}
        </div>
      </div>
    );
  }
  cogWalkChange(event) {
    this.setState({
      cogWalk: event.target.value
    });
  }
  intDesignChange(event) {
    this.setState({
      intDesign: event.target.value
    });
  }
  jsOptsChange(event) {
    this.setState({
      jsOpts: event.target.value
    });
  }
  visDesignChange(event) {
    this.setState({
      visDesign: event.target.value
    });
  }
  infoArchChange(event) {
    this.setState({
      infoArch: event.target.value
    });
  }
  herEvalChange(event) {
    this.setState({
      herEval: event.target.value
    });
  }
  updateCompany(event) {
    this.setState({
      companyName: event.target.value,
    });
  }
  updateTitle(event) {
    this.setState({
      collectionTitle: event.target.value
    });
  }
  changePage(page) {
    this.setState({
      modalPage: page
    });
    if(!this.state.recs) {
      this.setState({
        modalPage: page
      });
    } else {
      this.setState({
        modalPage: page
      });
    }
  }

  enableRecs() {

    if(this.state.recs == false) {
      this.setState({
        recs: true,
      });
    } else {
      this.setState({
        recs: false,
      });
    }
    this.forceUpdate();
  }
  submit() {

  }
}
