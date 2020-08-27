import React, { Component } from 'react';
import {Link as RouterLink} from 'react-router-dom';
import TableView from '../../Common/TableView';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit'
import * as AdminActions from '../../../store/actions/adminActions';


const columns = [
  { label: 'ID', name: 'id' },
  { label: 'Title', name: 'title' },
]

const styles = theme => ({
  fab: {
    position: 'fixed',
    bottom: '50px',
    right: '50px'
  }
})
class Posts extends Component {

  componentDidMount() {
    this.props.getPosts(this.props.auth.token);
  }

  render() {
    const posts = this.props.admin.posts;
    const { classes, auth: { profile } } = this.props;
    return (
      <div>
        <h1>Posts</h1>
          <TableView
            rows={posts}
            columns={columns}
            role={ profile && profile.length > 0 ? "subscriber": "admin"}
          />
          <Fab component={RouterLink} to="/admin/posts/add" color="secondary" aria-label="Add" className={classes.fab}>
            <EditIcon/>
          </Fab>
      </div>
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
    getPosts: (token) => {
      dispatch(AdminActions.getPosts(token));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Posts));