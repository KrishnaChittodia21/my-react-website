import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import { withFormik, Form } from 'formik';
import { FormikTextField } from 'formik-material-fields';
import * as Yup from 'yup';
import * as AdminActions from '../../../store/actions/adminActions';

const styles = theme => ({
  container: {
    margin: theme.spacing.unit * 3
  },
  formControl: {
    margin: theme.spacing.unit
  }
})

class AddPost extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <h1>Add Post</h1>
        <Form>
          <FormikTextField 
            name="title"
            label="Title"
            margin="normal"
            onChange={e => this.props.setFieldValue('slug', e.target.value.toLowerCase().replace(/ /g, '_'))}
            fullWidth
          />
          <FormikTextField 
            name="slug"
            label="Slug"
            margin="normal"
          />
          <FormikTextField 
            name="content"
            label="Content"
            margin="normal"
            fullWidth
          />
        </Form>
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  admin: state.admin
})

const mapDispatchToProps = dispatch => ({

})

export default withFormik({
  mapPropsToValues: () => ({
    title: '',
    slug: '',
    createdAt: '',
    status: false
  }),
  validationSchema: Yup.object().shape({
    title: Yup.string().required('Title is required'),
    slug: Yup.string().required(),
    content: Yup.string().required()
  }),
  handleSubmit: (values, { setSubmitting }) => {
    
  }
})(withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPost)));