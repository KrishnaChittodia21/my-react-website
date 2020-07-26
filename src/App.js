import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';

import PageWrapper from "./components/PageWrapper"

//Pages
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";

import AdminWrapper from "./components/AdminWrapper";
import LoginWrapper from "./components/LoginWrapper";

import Login from "./components/Pages/Login";
import Dashboard from "./components/Pages/Dashboard";

class App extends Component {
  render(){
    return (
      <Router>
        <Route
          path="/admin"
          render={ props => {
            return (
              <div>
              {
                (this.props.auth.token) ?
                <AdminWrapper>
                  <Dashboard/>
                </AdminWrapper>
                :
                <LoginWrapper>
                  <Login/>
                </LoginWrapper>
              }
              </div>
            )
          }}
        />
          <Route
            exact={true}
            path="/"
            render= { props => (
              <PageWrapper>
                <Home {...props}/>
              </PageWrapper>
            )}
          />
          <Route
            path="/about"
            render= { props => (
              <PageWrapper>
                <About {...props}/>
              </PageWrapper>
            )}
          />
          <Route
            path="/contact"
            render= { props => (
              <PageWrapper>
                <Contact {...props}/>
              </PageWrapper>
            )}
          />
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
