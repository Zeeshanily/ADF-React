import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetail from "./components/projects/ProjectDetail";
import CreateProject from "./components/projects/CreateProject";
import UpdateProject from "./components/projects/UpdateProject";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import './App.css';
import Contacts from './components/Contacts';
class App extends Component {
  render() {


    return (
      <BrowserRouter>
      <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            
            <Route path='/project/:id' component={ProjectDetail} />
            
            <Route path='/signin' component={SignIn} />
            
            <Route path='/signup' component={SignUp} />
            <Route path='/createproject' component={CreateProject} />
            <Route path='/updateproject' component={UpdateProject} />
        
            
          </Switch>
      </div>
    </BrowserRouter>);
  }
}

export default App;

    {/*<Route path='/contacts' component={Contacts} />*/}

{/*import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Contacts from './components/Contacts';
function App() {
  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <Contacts> </Contacts>
      </div>
    </div>
  );}


export default App; */}
