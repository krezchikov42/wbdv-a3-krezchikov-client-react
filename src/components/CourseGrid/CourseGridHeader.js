import React from "react";


export default class CourseGridHeader extends React.Component {
  render() {
    return (
        <table className="table">
          <thead className="bg-light">
            <tr className=" d-none d-sm-table-row">
              <th>Recent Documents</th>
              <th>Owned by me</th>
              <th>
                <button
                  type="button"
                  className="btn btn-default wbdv-button wbdv-grid-layout"
                  aria-label="Left Align"
                >
                  <span
                    className="glyphicon glyphicon-th"
                    aria-hidden="true"
                  ></span>
                </button>
                <button
                  type="button"
                  className="btn btn-default wbdv-button wbdv-list-layout"
                  aria-label="Left Align"
                >
                  <span
                    className="glyphicon glyphicon-th-list"
                    aria-hidden="true"
                  ></span>
                </button>
                <button
                  type="button"
                  className="btn btn-default wbdv-header wbdv-sort"
                  aria-label="Left Align"
                >
                  <span
                    className="glyphicon glyphicon-font"
                    aria-hidden="true"
                  ></span>
                </button>
              </th>
            </tr>
          </thead>
        </table>
    );
  }
}
