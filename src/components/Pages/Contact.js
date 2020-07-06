import React, { Component } from "react";
import Field from "../Common/Field";
import { withFormik } from "formik";
import * as yup from "yup";

const fields = {
  sections: [
    [
      { name: 'name', elementName: 'input', type: 'text', placeholder: 'Your Name*' },
      { name: 'email', elementName: 'input', type: 'email', placeholder: 'Your email*' },
      { name: 'phone', elementName: 'input', class :'mb-md-0', type: 'text', placeholder: 'Your phone number*' },
    ],
    [
      { name: 'message', elementName: 'testArea', type: 'text', placeholder: 'Type your message*' },
    ]
  ]
}

class Contact extends Component {
  render() {
    return (
      <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                
                <form onSubmit={ this.props.handleSubmit } id="contactForm" noValidate={true} name="sentMessage">
                    <div className="row align-items-stretch mb-5">
                      {
                        fields.sections.map((section, sectionIndex) => {
                          return (
                            <div className="col-md-6" key={sectionIndex}>
                              {
                                section.map((field, i) => {
                                  return <Field {...field} key={i}
                                      value={this.props.values[field.name]}
                                      name={field.name}
                                      onChange={this.props.handleChange}
                                      onBlur={this.props.handleBlur}
                                      touched={this.props.touched[field.name]}
                                      errors={this.props.errors[field.name]}
                                  />
                                })
                              }
                            </div>
                          )
                        })
                      }    
                    </div>
                    <div className="text-center">
                        <div id="success"></div>
                        <button
                          className="btn btn-primary btn-xl text-uppercase"
                          id="sendMessageButton"
                          type="submit"
                        >
                        Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    phone: '',
    message: '',
  }),
  validationSchema: yup.object().shape({
    name: yup.string().min(3, "Your name is longer than that").required("You must give your name"),
    email: yup.string().email('You need to give us your email').required('You must enter email'),
    phone: yup.string().min(10, 'Please provide you 10 digit phone number').max(11, 'you cannot have number more than 10').required('Provide us your number'),
    message: yup.string().min(500, 'Please provide some info').required()

  }),
  handleSubmit: ( values, { setSubmitting }) => {
    alert("You've submitted the form", JSON.stringify(values));
  }
})(Contact);