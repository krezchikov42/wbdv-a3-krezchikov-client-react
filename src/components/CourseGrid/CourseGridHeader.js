import React from "react";
import ChangeCourseStyleGroup from '../ChangeCourseStyleGroup'


export default class CourseGridHeader extends React.Component {
  render() {
    return (
        <table className="table">
          <thead className="bg-light">
            <tr className=" d-none d-sm-table-row">
              <th>Recent Documents</th>
              <th>Owned by me</th>
              <th>
                <ChangeCourseStyleGroup setCourseStyle={this.props.setCourseStyle}/>
              </th>
            </tr>
          </thead>
        </table>
    );
  }
}
