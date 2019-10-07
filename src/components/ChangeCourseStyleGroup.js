import React from "react";

export default class CourseHeader extends React.Component {
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-default wbdv-button wbdv-grid-layout"
          aria-label="Grid Layout"
          onClick={ () => this.props.setCourseStyle("grid")}
        >
          <span className="glyphicon glyphicon-th" aria-hidden="true"></span>
        </button>
        <button
          type="button"
          className="btn btn-default wbdv-button wbdv-list-layout"
          aria-label="List Layout"
          onClick={ () => this.props.setCourseStyle("table")}
        >
          <span
            className="glyphicon glyphicon-th-list"
            aria-hidden="true"
          ></span>
        </button>
        <button
          type="button"
          className="btn btn-default wbdv-header wbdv-sort"
          aria-label="Sort"
        >
          <span className="glyphicon glyphicon-font" aria-hidden="true"></span>
        </button>
      </div>
    );
  }

}
