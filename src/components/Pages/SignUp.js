import React, { Component } from 'react';
import Field from '../Common/Field';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import * as yup from 'yup';
import * as AuthActions from '../../store/actions/authActions'

const fields = [
  { name: 'email', elementName: 'input', type: 'email', placeholder: 'Your email'},
  { name: 'name', elementName: 'input', type: 'text', placeholder: 'Your Name'},
  { name: 'password', elementName: 'input', type: 'password', placeholder: 'Your Password'},
  { name: 'password2', elementName: 'input', type: 'password', placeholder: 'Confirm Password'},
]

class SignUp extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="container">
          <div className="login-form">
            <div className="row">
              <h1>Sign Up</h1>
            </div>
            <div>
              <form className="row" onSubmit={ (e) => {
                e.preventDefault();
                this.props.register(this.props.values.name, this.props.values.email, this.props.values.password);
              }}>
                { fields.map((f, i) => {
                  return (
                    <div className="col-md-6">
                      <Field
                        key={i}
                        {...f}
                        value={this.props.values[f.name]}
                        name={f.name}
                        onChange={this.props.handleChange}
                        onBlur={this.props.handleBlur}
                        touched={this.props.touched[f.name]}
                        errors={this.props.errors[f.name]}
                      />
                    </div>
                  )
                })}
                <div className="col-md-12">
                  <p className="text-danger text-center">{this.props.auth.error || ''}</p>
                  <button className="btn btn-primary">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    register: (name, email, pass) => {
      dispatch(AuthActions.register(name, email, pass));
    } 
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFormik({
  mapPropsToValues: () => ({
    email: '',
    name: '',
    password: '',
    password2: '',
  }),
  validationSchema: yup.object().shape({
    name: yup.string().required('You name is required'),
    email: yup.string().email('Email is invalid').required('You need to login with email address'),
    password: yup.string().min(8, 'Password needs to be atleast 8 characters long').required('You need to enter password'),
    password2: yup.string().required('You need to enter your password again').test('pass-match', 'Passwords don\'t match',function(value) {
        const { password } = this.parent;
        return password === value;
    }),
  })
})(SignUp));
