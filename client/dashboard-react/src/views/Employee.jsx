import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { MDBDataTable } from 'mdbreact';


class Employee extends Component {
  render() {
    // const data = {
    //   columns: [
    //     {
    //       label: 'Name',
    //       field: 'name',
    //       sort: 'asc',
    //       width: 150
    //     },
    //     {
    //       label: 'Position',
    //       field: 'position',
    //       sort: 'asc',
    //       width: 270
    //     },
    //     {
    //       label: 'Office',
    //       field: 'office',
    //       sort: 'asc',
    //       width: 200
    //     },
    //     {
    //       label: 'Age',
    //       field: 'age',
    //       sort: 'asc',
    //       width: 100
    //     },
    //     {
    //       label: 'Start date',
    //       field: 'date',
    //       sort: 'asc',
    //       width: 150
    //     },
    //     {
    //       label: 'Salary',
    //       field: 'salary',
    //       sort: 'asc',
    //       width: 100
    //     }
    //   ],
    //   rows: [
    //     {
    //       name: 'Tiger Nixon',
    //       position: 'System Architect',
    //       office: 'Edinburgh',
    //       age: '61',
    //       date: '2011/04/25',
    //       salary: '$320'
    //     }
    //   ]
    // };
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            {/* <MDBDataTable
              striped
              bordered
              hover
              data={data}
            /> */}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Employee;