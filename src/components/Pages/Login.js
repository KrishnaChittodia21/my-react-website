import React, { Component } from 'react';
import Field from '../Common/Field';
import { withFormik } from 'formik';
import * as yup from 'yup';

const fields = [
  { name: 'email', elementName: 'input', type: 'email', placeholder: 'Your email'},
  { name: 'password', elementName: 'input', type: 'password', placeholder: 'Your Password'},
]

class Login extends Component {

  render() {
    return (
      <div className="login-page">
        <div className="container">
          <div className="login-form">
            <di className="row">
              <h1>Login</h1>
            </di>
            <div className="row">
              <form onSubmit={this.props.handleSubmit}>
                { fields.map((f, i) => {
                  return (
                    <div className="col-md-12">
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
              </form>
              <div className="col-md-12">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: ''
  }),
  validationSchema: yup.object().shape({
    email: yup.string().email('Email is invalid').required('You need to login with email address'),
    password: yup.string().required('You need to enter password')
  }),
  handleSubmit: (values, { setSubmitting }) => {
    console.log('Login attempt', values);
  }
})(Login);