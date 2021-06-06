import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateProject } from '../../store/actions/projectActions'
import { Redirect,useLocation } from 'react-router-dom'
import {Link} from 'react-router-dom'



class UpdateProject extends Component {
    constructor(props) {
        super(props);
  
        this.state = props.location.state.project;
        console.log(this.state);

      }
//   state = {
//     title: '',
//     content: ''
//     }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
      console.log(this.state);
      this.props.updateProject(this.state);
      this.props.history.push('/');
  }
    render() {

    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
                <h5 className="grey-text text-darken-3">Update Project</h5>
                <label style={{float: "left"}} htmlFor="content">Project Content</label>
                <div className="input-field">
                
            <input type="text" id='title' value={this.state.title} onChange={this.handleChange} />
            
                </div>
                <label style={{float: "left"}} htmlFor="content">Project Content</label>
          <div className="input-field">
            <textarea id="content" value={this.state.content} className="materialize-textarea" onChange={this.handleChange}></textarea>
           
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Update</button>
          </div>
        </form>
      </div>
    )
  }
}

//export default UpdateProject

const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth
    }
  }
 
 const mapDispatchToProps = dispatch => {
   return {
    updateProject: (project) => dispatch(updateProject(project))
   }
 }
 
export default connect(null, mapDispatchToProps)(UpdateProject)