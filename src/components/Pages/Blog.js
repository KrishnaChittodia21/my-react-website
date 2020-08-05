import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link as RouterLink } from 'react-router-dom';
import Header from "../Common/Header"
import image from "../assets/img/about.jpg"
import * as SiteActions from '../../store/actions/siteActions';

class Blog extends Component {
  componentDidMount() {
    this.props.getPosts(0);
  }

  render() {
    return (
      <Header
          title="Blog"
          subtitle="Read all of our stories"
          showButton={false}
          image={image}
        />
    )
  }
}

const mapStateToProps = state => ({
  site: state.site
})

const mapDispatchToProps = dispatch => ({
  getPosts: (skip) => {
    dispatch(SiteActions.getPosts(skip))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Blog));