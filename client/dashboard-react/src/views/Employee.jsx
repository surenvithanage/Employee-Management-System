import React, { Component, useRef } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { MDBTable, MDBTableHead, MDBTableBody, MDBDataTable } from 'mdbreact';
import Modal from 'react-responsive-modal';
import axios from 'axios';
import { any } from "prop-types";
import ReactToPrint from 'react-to-print';


class Employee extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      firstname: '',
      lastname: '',
      nic: '',
      address: '',
      email: '',
      phonenumber: '',
      salary: '',
      employeetype: '',
      username: '',
      password: '',
      employees: [],
      opencoursecreate: false,
      opencourseupdate: false,
      dataset: any
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleUpdate(e) {
    e.preventDefault();
    const employee = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      nic: this.state.nic,
      address: this.state.address,
      email: this.state.email,
      phonenumber: this.state.phonenumber,
      salary: this.state.salary,
      employeetype: this.state.employeetype,
      username: this.state.username,
      password: this.state.password
    }
    axios.put('http://localhost:3000/customers/update/' + this.state.id, employee)
      .then(res => alert('Successfully Updated Employee : ' + res))
      .catch(err => {
        alert('Error Updating Employee : ' + err)
      });
    this.componentDidMount();
  }

  handleSubmit(e) {
    e.preventDefault();
    const employee = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      nic: this.state.nic,
      address: this.state.address,
      email: this.state.email,
      phonenumber: this.state.phonenumber,
      salary: this.state.salary,
      employeetype: this.state.employeetype,
      username: this.state.username,
      password: this.state.password
    }
    axios.post('http://localhost:3000/customers/insert', employee)
      .then(res => alert('Successfully Created Employee : ' + res))
      .catch(err => {
        alert('Error Creating Employee : ' + err)
      });
  }

  componentDidMount() {
    axios.get('http://localhost:3000/customers').then(
      data => {
        console.log('EMPLOYEE LIST RESPONSE : ' + JSON.stringify(data.data));
        this.setState({
          employees: data.data
        });

        let posts = this.state.employees.map((post) => {
          return (
            {
              id: post.firstname,
              firstname: post.firstname,
              lastname: post.lastname,
              nic: post.nic,
              address: post.address,
              email: post.email,
              phonenumber: post.phonenumber,
              salary: post.salary,
              employeetype: post.employeetype,
              username: post.username,
              password: post.password
            }
          )
        });
      }
    )
  }

  deleteEmployee(employeeid) {
    axios.delete('http://localhost:3000/customers/delete/' + employeeid).then(
      data => {
        console.log('DELETE RESPONSE : ' + JSON.stringify(data));
        this.componentDidMount();
      },
      err => {
        console.log('DELETE RESPONSE ERROR : ' + JSON.stringify(err));
      }
    )
  }

  onOpenModal1 = () => {
    this.setState({ opencoursecreate: true });
  };

  onCloseModal1 = () => {
    this.setState({ opencoursecreate: false });
    this.componentDidMount();
  };

  onOpenModal = (id) => {
    axios.get('http://localhost:3000/customers/update/' + id).then(
      data => {
        console.log('FIND RESPONSE : ' + JSON.stringify(data));
        this.setState({
          id: data.data.id,
          firstname: data.data.firstname,
          lastname: data.data.lastname,
          nic: data.data.nic,
          address: data.data.address,
          email: data.data.email,
          phonenumber: data.data.phonenumber,
          salary: data.data.salary,
          employeetype: data.data.employeetype,
          username: data.data.username,
          password: data.data.password
        });
      }
    )
    this.setState({ opencourseupdate: true });
  };

  onCloseModal = () => {
    this.setState({ opencourseupdate: false });
    this.componentDidMount();
  };

  render() {
    const data = {
      columns: [
        {
          label: 'ID',
          field: 'id',
          sort: 'asc',
          width: 150
        },
        {
          label: 'First Name',
          field: 'firstname',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Last Name',
          field: 'lastname',
          sort: 'asc',
          width: 270
        },
        {
          label: 'NIC',
          field: 'nic',
          sort: 'asc',
          width: 200
        },
        {
          label: 'Address',
          field: 'address',
          sort: 'asc',
          width: 100
        },
        {
          label: 'Email',
          field: 'email',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Phone Number',
          field: 'phonenumber',
          sort: 'asc',
          width: 100
        },
        {
          label: 'Salary',
          field: 'salary',
          sort: 'asc',
          width: 100
        },
        {
          label: 'Employee Type',
          field: 'employeetype',
          sort: 'asc',
          width: 100
        },
        {
          label: 'Username',
          field: 'username',
          sort: 'asc',
          width: 100
        },
        {
          label: 'Password',
          field: 'password',
          sort: 'asc',
          width: 100
        }
      ],
      rows: this.state.employees
    };
    const { opencoursecreate } = this.state;
    const { opencourseupdate } = this.state;
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <div className="col-md-12">
              <div className="row">
                <h3><b>Employee Management</b></h3>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-6">
                </div>
                <div className="col-md-2">
                <button className="btn btn-primary" onClick={() => window.print()}>Generate Report</button>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-2">
                  <button className="btn btn-primary" onClick={this.onOpenModal1}>Create New Employee</button>
                </div>
              </div>
              <div className="row">
                <MDBTable>
                  <MDBTableHead>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>NIC</th>
                      <th>Address</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>Salary</th>
                      <th>Employee Type</th>
                      <th>Username</th>
                      <th>Password</th>
                      <th>Options</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    {
                      this.state.employees.map(emp => {
                        return (
                          <tr key={emp.id}>
                            <td>{emp.firstname}</td>
                            <td>{emp.lastname}</td>
                            <td>{emp.nic}</td>
                            <td>{emp.address}</td>
                            <td>{emp.email}</td>
                            <td>{emp.phonenumber}</td>
                            <td>{emp.salary}</td>
                            <td>{emp.employeetype}</td>
                            <td>{emp.username}</td>
                            <td>{emp.password}</td>
                            <td>
                              <button className="btn btn-warning btn-sm" onClick={this.onOpenModal.bind(this, emp.id)} style={{ marginRight: '15px' }}> EDIT </button>
                              <button className="btn btn-danger  btn-sm" onClick={this.deleteEmployee.bind(this, emp.id)}> DELETE </button>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </MDBTableBody>
                </MDBTable>
              </div>
            </div>
            <Modal open={opencoursecreate} onClose={this.onCloseModal1} center>
              <h4>Create New Employee</h4>
              <hr />
              <form onSubmit={this.handleSubmit} style={{ width: '500px' }}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="First Name"
                    className='form-control form-control-lg'
                    name="firstname"
                    onChange={this.handleInputChange}
                    value={this.state.firstname}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className='form-control form-control-lg'
                    name="lastname"
                    onChange={this.handleInputChange}
                    value={this.state.lastname}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="NIC"
                    className='form-control form-control-lg'
                    name="nic"
                    onChange={this.handleInputChange}
                    value={this.state.nic}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Address"
                    className='form-control form-control-lg'
                    name="address"
                    onChange={this.handleInputChange}
                    value={this.state.address}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email"
                    className='form-control form-control-lg'
                    name="email"
                    onChange={this.handleInputChange}
                    value={this.state.email}
                  />
                </div>
                {/* <div className="form-group">
                  <select
                    name="instructor"
                    className='form-control form-control-lg'
                    onChange={this.handleInputChange}
                    value={this.state.instructor}
                  >
                    {
                      this.state.users.map(ro => {
                        return (
                          <option key={ro._id} value={ro._id}>{ro.firstname}</option>
                        )
                      })
                    }
                  </select>
                </div> */}
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className='form-control form-control-lg'
                    name="phonenumber"
                    onChange={this.handleInputChange}
                    value={this.state.phonenumber}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Salary"
                    className='form-control form-control-lg'
                    name="salary"
                    onChange={this.handleInputChange}
                    value={this.state.salary}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Employee Type"
                    className='form-control form-control-lg'
                    name="employeetype"
                    onChange={this.handleInputChange}
                    value={this.state.employeetype}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Username"
                    className='form-control form-control-lg'
                    name="username"
                    onChange={this.handleInputChange}
                    value={this.state.username}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Password"
                    className='form-control form-control-lg'
                    name="password"
                    onChange={this.handleInputChange}
                    value={this.state.password}
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Create Employee
                                     </button>
                </div>
              </form>
            </Modal>
            {/* Update Form */}
            <Modal open={opencourseupdate} onClose={this.onCloseModal} center>
              <h2>Update Course</h2>
              <hr />
              <form onSubmit={this.handleUpdate} style={{ width: '700px' }}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="First Name"
                    className='form-control form-control-lg'
                    name="firstname"
                    onChange={this.handleInputChange}
                    value={this.state.firstname}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className='form-control form-control-lg'
                    name="lastname"
                    onChange={this.handleInputChange}
                    value={this.state.lastname}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="NIC"
                    className='form-control form-control-lg'
                    name="nic"
                    onChange={this.handleInputChange}
                    value={this.state.nic}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Address"
                    className='form-control form-control-lg'
                    name="address"
                    onChange={this.handleInputChange}
                    value={this.state.address}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email"
                    className='form-control form-control-lg'
                    name="email"
                    onChange={this.handleInputChange}
                    value={this.state.email}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className='form-control form-control-lg'
                    name="phonenumber"
                    onChange={this.handleInputChange}
                    value={this.state.phonenumber}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Salary"
                    className='form-control form-control-lg'
                    name="salary"
                    onChange={this.handleInputChange}
                    value={this.state.salary}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Employee Type"
                    className='form-control form-control-lg'
                    name="employeetype"
                    onChange={this.handleInputChange}
                    value={this.state.employeetype}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Username"
                    className='form-control form-control-lg'
                    name="username"
                    onChange={this.handleInputChange}
                    value={this.state.username}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Password"
                    className='form-control form-control-lg'
                    name="password"
                    onChange={this.handleInputChange}
                    value={this.state.password}
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Update Employee
                                     </button>
                </div>
              </form>
            </Modal>
          </Row>
        </Grid>
      </div>
    );
  }
}

const Example = () => {
  const componentRef = useRef();
  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <Employee ref={componentRef} />
    </div>
  );
};

export default Employee;