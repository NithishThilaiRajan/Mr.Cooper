
import { useState } from "react";
import './App.css';
import Axios from "axios";
function App() {
const [name,setName]=useState("");
const [email,setEmail]=useState(0);
const [password,setPassword]=useState("");
const [position,setPosition]=useState("");
const [address,setAddress]=useState(0);

// const displayInfo=()=>{
// console.log(name+age+country+position+wage)
// };


const addEmployee = () => {
  
  Axios.post("http://localhost:3001/create", {
    name: name,
    email: email,
    password: password,
    position: position,
    address: address,
  }).then(() => {
    console.log("Employee Registered Successfully..");
  });
};


const getEmployees = () => {
  Axios.get("http://localhost:3001/employees").then((response) => {
    console.log(response.data);
  });
};

return (
    <div className="App">
      Mr.Cooper Group
      <div className="information">
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>EMAIL:</label>
        <input
          type="text"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label>Password:</label>
        <input
          type="text"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <label>Position:</label>
        <input
          type="text"
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        />
        <label>Address</label>
        <input
          type="text"
          onChange={(event) => {
            setAddress(event.target.value);
          }}
        />
      <button onClick={addEmployee}>Add Employee</button>
      </div>
      <div className="employees">
        <button onClick={getEmployees}>Show Employees</button>
     </div>
        
    </div>
  );
}

export default App;
