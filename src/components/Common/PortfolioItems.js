import React, { Component } from "react";
import { Link } from "react-router-dom";

class PortfolioItems extends Component {

  render() {
    return (
      <div className="col-md-4 col-sm-6 portfolio-item">
        <Link className="portfolio-link" data-toggle="modal" to="#portfolioModal1">
          <div className="portfolio-hover">
            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
          </div>
          <img className="img-fluid" src={this.props.image} alt="" />
        </Link>
        <div className="portfolio-caption">
          <div className="portfolio-caption-heading">{this.props.title}</div>
          <div className="portfolio-caption-subheading text-muted">{this.props.subtitle}</div>
        </div>
      </div>
    )
  }
}

export default PortfolioItems;