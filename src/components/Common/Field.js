import React, { Component } from "react";

class Field extends Component {
  render() {
    return (
      this.props.elementName === 'input' ?
        <div className={`form-group ${this.props.class || ''}`}>
          <input
            className="form-control"
            id={this.props.name}
            type={this.props.type}
            placeholder={this.props.placeholder}
            name={this.props.name}
            data-validation-required-message="Please enter your name."
            onChange={this.props.onChange}
            onBlur={this.props.onBlur}
          />
            <p className="help-block text-danger">
            {
              (this.props.touched && this.props.error) &&
              <span>{this.props.errors}</span>
            }
            </p>
          </div>
          :
        <div className="form-group form-group-textarea mb-md-0">
          <textarea
            className="form-control"
            id={this.props.name}
            placeholder={this.props.placeholder}
            name={this.props.name}
            data-validation-required-message="Please enter a message."
            onChange={this.props.onChange}
            onBlur={this.props.onBlur}
          />
          <p className="help-block text-danger">
            {
              (this.props.touched && this.props.error) &&
              <span>{this.props.errors}</span>
            }
          </p>
      </div>
    )
  }
}

export default Field;