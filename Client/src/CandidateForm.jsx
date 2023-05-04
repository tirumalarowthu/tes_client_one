import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const CandidateForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [area, setArea] = useState("")
  const [errorMessage, setErrorMessage] = useState("");
  const [mcqCount, setMcqCount] = usestate(0);
  cont [codeCount, setcodeCount] = useState(0);
  const [passpercentage, setpassPercentage] = useState(0);

  const changeEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const changeNameHandler = (e) => {
    setName(e.target.value);
    console.log(e.target.value)
  }

  const changeAreaHandler = (e) => {
    setArea(e.target.value);
  }

  const submitHandler = (e) => {
    console.log(area)
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email address!");
      return;
    }

    axios
      .post("http://localhost:701/register", { email , name, area, mcqCount, codeCount, passpercentage})
      .then((res) => {
        alert(res.data);
        setEmail("");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Error occurred while registering");
      });
  };


  return (
    <div className="container">
      <center>
      <h2>Add Candidate</h2>
        <form onSubmit={submitHandler}>
        <div style={{ width: "250px" }}>
            <label htmlFor="email">Enter Name : </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={changeNameHandler}
            />
          </div>
          <br />
          <div style={{ width: "250px" }}>
            <label htmlFor="email">Enter Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={changeEmailHandler}
            />
          </div>
          <br />
          <div style={{ width: "250px" }}>
          <label for="area">Select Area : </label>
          <select name="area" id="area" onChange={changeAreaHandler}>
            <option value="SOFTWARE">SOFTWARE</option>
            <option value="EMBEDDED">EMBEDDED</option>
            <option value="VLSI">VLSI</option>
          </select>
          </div>
          <br />
          {/* Add a button to input a numerical value starting from 5 and ending at 10 */}
          <div style={{ width: "250px" }}>
            <label for="mcqcount">Set MCQ count:</label>
            <input
            type="number"
            className="form-control"
            id="mcqcount"
            placeholder="Enter MCQ count"
            // change min value and max value that can be entered
            min={5}
            max={10}
            />
          </div>
          <br />
          <div style={{ width: "250px" }}>
            <label for="codecount">Set Code Questions count:</label>
            <input
            type="number"
            className="form-control"
            id="codecount"
            placeholder="Enter Code Questions count"
            min={5}
            max={10}
            />
          </div>
          <br />
          <div style={{ width: "250px" }}>
            <label for="passpercentage">Set Pass percentage:</label>
            <input
            type="number"
            className="form-control"
            id="passpercentage"
            placeholder="Values between 0 and 100"
            min={0}
            max={100}
          />
          </div>
          <button type="submit" className="btn btn-dark mt-3">
            ADD
          </button>
          {errorMessage && (
            <div className="mt-3 text-center text-danger">{errorMessage}</div>
          )}
        </form>
      </center>
    </div>
  );
};

export default CandidateForm;
