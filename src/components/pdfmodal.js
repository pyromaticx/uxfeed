import React, {Component} from 'react';
import moment from 'moment';
export default class PDFModal extends Component {
  constructor(props) {
    super(props);
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
      loading: false,
      instruction: 'Finish',
      reportTypeString: this.props.slides ? 'Slides' : 'PDF Report'
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
      height: '70%',
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
    inputRow = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    inputBlock = {
      display: 'flex',
      flexDirection: 'column'
    },
    inputs = {
      width: '300px'
    },
    backButton = '';
    if(this.state.recs) {
      backButton = this.state.modalPage == '1' ? <button className='btn btn-default' type='button' onClick={() => {this.changePage('2')}}>Recommendations</button> : <button className='btn btn-default' type='button' onClick={() => {this.changePage('1')}}>Title</button>
    }
    var fileName = this.state.collectionTitle + " " + this.state.companyName + ' ' + moment(Date.now()).format('MM-DD-YY h.mm.ss a');
    return (
      <div style={wrapper}>
        <div style={modalBox}>
          <div style={{height: '25px', width: '100%', display: 'flex', alignItems: 'center'}}>
            {this.state.modalPage == '1' ? <span style={{position: 'absolute', left: '50%', top: '15%', transform: 'translateX(-50%)', fontSize: '25px'}}>{"Create " + this.state.reportTypeString}</span> : "" }
            <span style={{fontSize: '25px', color: '#333', marginLeft: '95%'}} className='fa fa-times' onClick={() => this.closeModal()}></span>
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
            <div style={inputRow}>
              <div style={inputBlock}>
                <label htmlFor='cogwalk'>Cognitive Walkthrough</label>
                <input maxLength="500" name='cogwalk' type='text' style={inputs} value={this.state.cogWalk} onChange={(event) => {this.cogWalkChange(event)}} />
              </div>
              <div style={inputBlock}>
                <label htmlFor='hereval'>Heuristic Evaluation</label>
                <input maxLength="500" name='hereval' type='text' style={inputs} value={this.state.herEval} onChange={(event) => {this.herEvalChange(event)}} />
              </div>
            </div>
            <div style={inputRow}>
              <div style={inputBlock}>
                <label htmlFor='infoArch'>Information Architecture</label>
                <input maxLength="500" name='infoArch' type='text' style={inputs} value={this.state.infoArch} onChange={(event) => {this.infoArchChange(event)}} />
              </div>
              <div style={inputBlock}>
                <label htmlFor='intDesign'>Interaction Design</label>
                <input maxLength="500" name='intDesign' type='text' style={inputs} value={this.state.intDesign} onChange={(event) => {this.intDesignChange(event)}} />
              </div>
            </div>
            <div style={inputRow}>
              <div style={inputBlock}>
                <label htmlFor='visDesign'>Visual Design</label>
                <input maxLength="500" name='visDesign' type='text' style={inputs} value={this.state.visDesign} onChange={(event) => {this.visDesignChange(event)}} />
              </div>
              <div style={inputBlock}>
                <label htmlFor='jsOpts'>Programming Optimization</label>
                <input maxLength="500" name='jsOpts' type='text' style={inputs} value={this.state.jsOpts} onChange={(event) => {this.jsOptsChange(event)}} />
              </div>
            </div>
          </div>
        }

          <span>
            <label style={{marginRight: '5px'}} htmlFor='recs'>Enable Executive Summary</label>
            <input id="recbox" name='recs' type='checkbox' onChange={(event) => {this.enableRecs(event)}}/>
          </span>
          {this.state.loading === true ? "Preparing your " + this.state.reportTypeString + "..." : <button className='btn btn-primary' type='button' onClick={() => {
            if(this.state.companyName.length < 1 || this.state.collectionTitle.length < 1) {
              alert("Please enter a title and company name");
              return;
            }

            if(this.state.recs && this.state.modalPage == '1') {
              return this.changePage('2');
            }
            this.setState({
              loading: true
            });

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
          })}}>{this.state.instruction}</button>}

          <p>File Name: {fileName}</p>

        </div>
      </div>
    );
  }
  closeModal() {
    if(this.state.modalPage == '2') {
      this.setState({
        modalPage: '1',
        recs: false
      });
      $("#recbox").removeAttr("checked");
    } else {
      this.props.close();
    }
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
    if(this.state.recs && page == 2) {
      this.setState({
        modalPage: page,
        instruction: 'Finish'
      })
    }
    this.setState({
      modalPage: page
    });

  }

  enableRecs() {

    if(this.state.recs == false) {
      this.setState({
        recs: true,
        instruction: 'Next'
      });
    } else {
      this.setState({
        recs: false,
        instruction: 'Finish'
      });
    }
    this.forceUpdate();
  }
  submit() {

  }
}
