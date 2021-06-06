import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import moment from 'moment';
import {Link} from 'react-router-dom'
const ProjectDetails = (props) => {
  const { project } = props;
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
          <div className="card-action grey lighten-4 grey-text">

                  {/*<Link to={'/project/' + project.id} key={project.id}>
             <ProjectSummary project={project}  /> */}
            <Link  to={{
                  pathname: "/updateproject",
                  state: {
                    project
                  },
                }}>
                    <div className="btn bg-white text-primary" >
                          <i className="fas fa-pencil-alt"></i>
                    </div>
                </Link> 

            
                <div className="btn bg-white text-danger" >
                    <i className="far fa-trash-alt"></i>
                </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null
  return {
    project: project
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'projects'
  }])
)(ProjectDetails)