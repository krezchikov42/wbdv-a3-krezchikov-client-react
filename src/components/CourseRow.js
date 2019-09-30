import React from "react";
import PropTypes from "prop-types";

export default class CourseRow extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <span
            class="glyphicon glyphicon-book wbdv-row wbdv-icon"
            aria-hidden="true"
          />
          <a
            class="wbdv-row wbdv-title"
            href="../course_editor/course_editor.template.client.html"
          >
            Thinking of Funny Class Names and Many Suprises
          </a>
        </td>
        <td class="wbdv-row wbdv-owner">me</td>
        <td class="wbdv-row wbdv-modified-date">20:10 pm</td>
        <td>
          <button
            type="button"
            class="btn btn-outline-light wbdv-row wbdv-button wbdv-delete"
            aria-label="Remove Course"
          >
            <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </button>
        </td>
      </tr>
    );
  }
}

// CourseRow.PropTypes = {
//     course_name: PropTypes.string,

// }
