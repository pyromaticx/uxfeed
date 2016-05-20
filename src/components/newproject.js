import React, {Component} from 'react';

export default class NewProject extends Component {
  constructor() {
    super();
    this.state = {
      projectName: '',
      projectType: '',
      skills: [],
      description: ''
    }
  }
  handleTypeSelect(event) {
    this.setState({
      projectType: event.target.value
    });
  }
  handleNameChange(event) {
    this.setState({
      projectName: event.taget.value
    });
  }
  handleSkillsChange(event) {
    var skills = event.target.value.split(',');
    skills = skills.map(function(el) {return el.trim()})
    this.setState({
      skills: skills
    });
  }
  handleDescChange(event) {
    this.setState({
      description: event.target.value
    });
  }
  fileInputChange(event) {
    event.stopPropagation();
    event.preventDefault();
    this.handleFileUpload(event.target.files)
  }
  fileInputDrop(event) {
    event.stopPropagation();
    event.preventDefault();
    var dt = event.dataTransfer;
    var files = dt.files;
    this.handleFileUpload(files);
  }
  handleFileUpload(files) {
    console.log(files[0].size, files[0].type)
  }
  prevent(event) {
    event.stopPropagation();
    event.preventDefault();
  }
  render() {
    var formWrapper = {
      width: window.innerWidth < 1024 ? '90%' : '75%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'

    },
    selectBox = {
      width: '100%',
      marginBottom: '50px'
    },
    inputLabels = {
      fontSize: '25px',
      fontWeight: 'bold'
    },
    uploaderBox = {
      padding: '20px',
      width: '75%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px dashed ' + this.props.color.secondary,
      marginBottom: '50px'
    },
    uploaderInput = {
      display: 'none'
    },
    divBox = {
      width: '75%'
    }
    return(
      <div style={formWrapper}>
        <div style={divBox}>
          <label htmlFor='worktype'><span style={inputLabels}>What type of testing do you require?</span><br/></label>
          <select style={selectBox} className='form-control' name="worktype" onChange={(event) => {this.handleTypeSelect(this.file)}}>
            <option value="uxtesting">Usability Testing</option>
            <option value="scalability">Scalability Testing</option>
            <option value="penetration">Penetration Testing</option>
            <option value="design">Design Testing</option>
          </select>
        </div>
        <div style={divBox}>
        <span style={inputLabels}>What is your project about?</span>
        <br />
        <label style={{marginLeft: '5px'}} htmlFor='projectName'>Project Name:</label>
        <input
          name='projectName'
          type='text'
          style={selectBox}
          value={this.state.projectName}
          placeholder='Enter a project name here'
          onChange={(event) => {this.handleNameChange(event)}}
          className='form-control' />
        </div>
        <div style={divBox}>
        <span style={inputLabels}>Tell us more about your project</span>
        <br />
        <label style={{marginLeft: '5px'}} htmlFor='reqskills'>Required Skills</label>
        <input
          name='reqskills'
          type='text'
          style={selectBox}
          value={this.state.requiredSkills}
          placeholder='Enter skills separated by comma'
          onChange={(event) => {this.handleSkillsChange(event)}}
          className='form-control' />
        </div>
        <div style={divBox}>
          <label style={{marginLeft: '5px'}} htmlFor='reqskills'>Describe your project</label>
          <textarea
            name='description'
            type='text'
            rows='4'
            style={selectBox}
            value={this.state.description}
            placeholder='Describe your project here'
            onChange={(event) => {this.handleDescChange(event)}}
            className='form-control' />
        </div>
        <label className="file" style={uploaderBox} onDragOver={(event) => {this.prevent(event)}} onDragEnter={(event) => {this.prevent(event)}} onDrop={(event) => {this.fileInputDrop(event)}}>
          <span>Click or drag files here to add them</span>
          <input style={uploaderInput} type="file" id="file" onChange={(event) => {this.fileInputChange(event)}} multiple />
          <span className="file-custom"></span>
        </label>
      </div>

    );
  }
}
