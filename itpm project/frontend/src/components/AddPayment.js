import React, { useState } from "react";
import axios from "axios";

 

export default function AddPayment() {

    const [paymentType, setpaymentType] = useState("");
    const [cardHolder, setcardHolder] = useState("");
    const [expDate, setexpDate] = useState("");
    const [cvvNo, setcvvNo] = useState("");
    const [cardNo, setcardNo] = useState("");
    const [cardHolderAddress, setcardHolderAddress] = useState("");
    const [price, setprice] = useState("");

    function sendData(e) {
        e.preventDefault();
        const newPayment = {
            paymentType,
            cardHolder,
            expDate,
            cvvNo,
            cardNo,
            cardHolderAddress,
            price,
        };
        console.log(newPayment);
        axios.post("http://localhost:8070/payment/add", newPayment).then(() => {
            alert("Payment added");
        }).catch((err) => {
            alert(err);
        });
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/admin_panel/home" style={{ color: "red " }}>Payment </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        
                        {/* <li className="nav-item">
              <a className="nav-link" href="/admin_panel/accommodation_admin/addnew">Add new Accommodation</a>
            </li> */}



                    </ul>

                </div>
            </nav>
            <br /><br /><br /><br /><br />

            <div className="container">
                <form className="row g-3 needs-validation" novalidate onSubmit={sendData}>

                    <div className="col-md-4">
                        <label for="name" className="form-label">payment type</label>
                        <input type="text" className="form-control " id="validationServer02" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required
                            onChange={(e) => {
                                setpaymentType(e.target.value);

                            }} />

                        <div className="valid-feedback">
                            Looks good!
                        </div>

                    </div>

                    <div className="col-md-4">
                        <label for="price" className="form-label">price</label>
                        <input type="number" className="form-control " id="validationServer02" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required
                            onChange={(e) => {
                                setprice(e.target.value);

                            }} />

                        <div className="valid-feedback">

                        </div>

                    </div>
                    <div className="col-md-4">
                        <label for="cardholdername" className="form-label">card holder name</label>
                        <input type="text" className="form-control " id="validationServer02" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required
                            onChange={(e) => {
                                setcardHolder(e.target.value);
                            }} />
                        <div id="validationServerUsernameFeedback" className="invalid-feedback">
                            Enter owner's name
                        </div>
                    </div>

                    <div className="col-md-6">
                        <label for="location" className="form-label">card holder address</label>
                        <input type="text" className="form-control " id="validationServer03" aria-describedby="validationServer03Feedback" required
                            onChange={(e) => {
                                setcardHolderAddress(e.target.value);

                            }} />

                        <div id="validationServer03Feedback" className="invalid-feedback">
                            Please provide a valid city.
                        </div>

                    </div>

                    <div className="col-md-3">
                        <label for="cvv" className="form-label">card no</label>
                        <input type="number" className="form-control " id="validationServer05" aria-describedby="validationServer05Feedback" required
                            onChange={(e) => {
                                setcardNo(e.target.value);

                            }} />

                        <div id="validationServer05Feedback" className="invalid-feedback">

                        </div>

                    </div>
                    <div className="col-md-3">
                        <label for="cvv" className="form-label">cvv</label>
                        <input type="number" className="form-control " id="validationServer05" aria-describedby="validationServer05Feedback" required
                            onChange={(e) => {
                                setcvvNo(e.target.value);

                            }} />

                        <div id="validationServer05Feedback" className="invalid-feedback">

                        </div>

                    </div>
                    <div className="col-md-4">
                        <label for="expdate" className="form-label">exp date</label>
                        <input type="date" className="form-control " id="validationServer02" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required
                            onChange={(e) => {
                                setexpDate(e.target.value);

                            }} />

                        <div className="valid-feedback">

                        </div>

                    </div>

                    <br />
                    <br />
                    <br />
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">Pay now</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
