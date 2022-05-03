import logo from './logo.svg';
 import {BrowserRouter as Router, Route} from"react-router-dom"
import AddPayment from './components/AddPayment';
import AdminPayment from'./components/AdminPayments';
import updatePayment from './components/updatePayment';
import './App.css';
import Header from './components/header';


function App() {
  return (
    <Router>

      <div >
      

        <Route path="/payment" exact component={AddPayment} />
        <Route path="/admin/payments" exact component={AdminPayment} />
        <Route path="/update/:id" exact component={updatePayment} />
      </div>


    </Router>

  );
}

export default App;
