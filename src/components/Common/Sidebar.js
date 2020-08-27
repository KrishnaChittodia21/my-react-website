import React, { Component } from 'react';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import FaceIcon from '@material-ui/icons/Face';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import * as AuthActions from '../../store/actions/authActions';
import * as AdminActions from '../../store/actions/adminActions';

function ListItemLink(props) {
  return <ListItem button component={RouterLink} {...props} />;
}


class Sidebar extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    this.props.logout();
  }
  render() {
    return (
      <List>
        <ListItemLink to="/admin">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemLink>
        <ListItemLink to="/admin/posts">
            <ListItemIcon>
              <FileCopyIcon />
            </ListItemIcon>
            <ListItemText primary="Posts" />
        </ListItemLink>
        <ListItemLink to="/admin/users">
            <ListItemIcon>
              <FaceIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
        </ListItemLink>
        <ListItem button onClick={e => this.handleLogout(e)}>
            <ListItemIcon>
              <ExitToAppIcon/>
            </ListItemIcon>
            <ListItemText primary="Logout" />
        </ListItem>
      </List>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    admin: state.admin
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(AuthActions.logout(), AdminActions.logout())
      // dispatch(AdminActions.logout())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);