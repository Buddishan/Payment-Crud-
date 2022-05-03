import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { Link } from "react-router-dom";
 
const Record = (props) => (
  <tr>
    
    
    <td>{props.record.paymentType}</td>
    <td>{props.record.cardHolder}</td>
    <td>{props.record.expDate}</td>
    <td>{props.record.cvvNo}</td>
    <td>{props.record.cardNo}</td>
    <td>{props.record.cardHolderAddress}</td>
    <td>{props.record.price}</td>
    <td>
      <Link to={"/update/" + props.record._id}>Edit</Link> |
      <a
        href="/admin/payments"
        onClick={() => {
          props.deleteRecord(props.record._id);
          this.props.history.push("/admin/payments");
        }}
      >
        Delete
      </a>
    </td>
  </tr>
);
 
export default class RecordList extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
    this.deleteRecord = this.deleteRecord.bind(this);
    this.state = { records: [] };
  }
 
  // This method will get the data from the database.
  componentDidMount() {
    axios
      .get("http://localhost:8070/payment/")
      .then((response) => {
        this.setState({ records: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
 
  // This method will delete a record based on the method
  deleteRecord(id) {
    axios.delete("http://localhost:8070/payment/delete/" + id).then((response) => {
      console.log(response.data);
    });
 
    this.setState({
      record: this.state.records.filter((el) => el._id !== id),
    });
  }
 
  // This method will map out the users on the table
  recordList() {
    return this.state.records.map((currentrecord) => {
      return (
        <Record
          record={currentrecord}
          deleteRecord={this.deleteRecord}
          key={currentrecord._id}
        />
      );
    });
  }

//   filterData(records,searchKey){
//     const result=records.filter((accommodations)=>
//     accommodations.name.toLowerCase().includes(searchKey)||
//     accommodations.location.toLowerCase().includes(searchKey)||
//     accommodations.type.toLowerCase().includes(searchKey)
    
    
//     )
//     this.setState({records:result})
//  }

//  handleSerchArea=(e) =>{
     
//      const searchKey=e.currentTarget.value;
//      console.log(searchKey);
//      axios
//      .get("http://localhost:8070/accommodation/")
//      .then((response) => {
//        this.filterData(response.data,searchKey);
//        console.log("successfull");
//      });
     

//  }
 
  // This following section will display the table with the records of individuals.
  render() {
    return (
      <div>
        <div><nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className= "container-fluid">
          <a className="navbar-brand" href="/admin_panel/home"style={{color:"red "}}>Payment details management</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    {/* <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/admin_panel/accommodation_admin">All Accommadations <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/admin_panel/accommodation_admin/addnew">Add new Accommodation</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/admin_panel/accommodation_admin/accommodation_servations">All Accommodation reservations</a>
      </li>
    </ul> */}
  </div>
          </div>
  
</nav></div>
{/* <nav class="navbar navbar-light bg-light">
                        <form class="form-inline">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleSerchArea} />
                            
                        </form>
                        </nav> */}
          
        <br/><br/><br/><br/>
      <div className="container">
        
       <div><h3> Payment Record List</h3></div> 
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              
              
              <th>paymentType</th>
              <th>cardHolder</th>
              <th>expDate</th>
              <th>cvvNo</th>
              <th>cardNo</th>
              <th>cardHolderAddress</th>
              <th>price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.recordList()}</tbody>
        </table>
      </div>
      </div>
    );
  }
}
