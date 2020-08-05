import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';

import PageWrapper from "./components/PageWrapper"

//Pages
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Single from "./components/Pages/Single";
import Blog from "./components/Pages/Blog";

//Admin pages
import Posts from "./components/Pages/Admin/Posts";
import Users from "./components/Pages/Admin/Users";
import Dashboard from "./components/Pages//Admin/Dashboard";
import AddPost from "./components/Pages//Admin/AddPost";

import AdminWrapper from "./components/AdminWrapper";
import LoginWrapper from "./components/LoginWrapper";

import Login from "./components/Pages/Login";

class App extends Component {
  render(){
    return (
      <Router>
        <Route
          path="/admin/users"
          exact={true}
          render={ props => {
            return (
              <div>
              {
                (this.props.auth.token) ?
                <AdminWrapper>
                  <Users/>
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
          path="/admin/posts/:view/:id"
          exact={true}
          render= { props => {
            return (
              <div>
                {
                  (this.props.auth.token) ?
                  <AdminWrapper>
                    <AddPost/>
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
          path="/admin/posts/:view"
          exact={true}
          render= { props => {
            return (
              <div>
                {
                  (this.props.auth.token) ?
                  <AdminWrapper>
                    <AddPost/>
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
          path="/admin/posts"
          exact={true}
          render={ props => {
            return (
              <div>
              {
                (this.props.auth.token) ?
                <AdminWrapper>
                  <Posts/>
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
          path="/admin"
          exact={true}
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
            path="/blog/:slug"
            render= { props => (
              <PageWrapper>
                <Single {...props}/>
              </PageWrapper>
            )}
          />
          <Route
            path="/blog"
            render= { props => (
              <PageWrapper>
                <Blog {...props}/>
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
