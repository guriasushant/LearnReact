import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(false);

  const [roll, setRoll] = useState("");
  const [rollError, setRollError] = useState(false);

  const [stuClass, setStuClass] = useState("");
  const [stuClassError, setStuClassError] = useState(false);

  const [state, setState] = useState("");
  const [stateError, setStateError] = useState(false);

  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState(false);

  const [pin, setPin] = useState("");
  const [pinError, setPinError] = useState(false);

  const [gender, setGender] = useState("");
  const [genderError, setGenderError] = useState(false);

  

  function submitForm() {
    if (firstName === "" || firstName === undefined) {
      setFirstNameError(true);
    } else if (lastName === "" || lastName === undefined) {
      setLastNameError(true);
    } else if (roll === "" || roll === undefined) {
      setRollError(true);
    } else if (stuClass === "" || stuClass === undefined) {
      setStuClassError(true);
    } else if (state === "" || state === undefined) {
      setStateError(true);
    } else if (gender === "" || gender === undefined) {
      setGenderError(true);
    } else if (address === "" || address === undefined) {
      setAddressError(true);
    } else if (pin === "" || pin === undefined) {
      setPinError(true);
    } else {
      alert(
        "first" +
          firstName +
          "/nlast " +
          lastName +
          "/nroll " +
          roll +
          "/nclass " +
          stuClass +
          "/naddress: " +
          address +
          "/npin: " +
          pin +
          "/nstate: " +
          state
      );
    }
  }

  return (
    <div className="App">
      <div className="studentForm">
        <h1>Student Form</h1>
        <br></br>

        <div className="row">
          <label>
            First Name: <sup>* </sup>
          </label>
          <input
            type="text"
            id="firstname"
            placeholder="first name"
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
            onFocus={() => setFirstNameError(false)}
          ></input>
          {firstNameError && (
            <small className="errorMsg"> First name is required</small>
          )}
        </div>

        <div className="row">
          <label>
            Last Name: <sup>* </sup>
          </label>
          <input
            type="text"
            id="lastname"
            placeholder="last name"
            onChange={(event) => {
              setLastName(event.target.value);
            }}
            onFocus={() => setLastNameError(false)}
          ></input>
          {lastNameError && (
            <small className="errorMsg"> Last name is required</small>
          )}
        </div>

        <div className="row">
          <label>
            Roll No: <sup>* </sup>
          </label>
          <input
            type="number"
            id="rollno"
            placeholder="roll no."
            onChange={(event) => {
              setRoll(event.target.value);
            }}
            onFocus={() => setRollError(false)}
          ></input>
          {rollError && (
            <small className="errorMsg"> Roll No. is required</small>
          )}
        </div>

        <div className="row">
          <label>
            Class <sup>* </sup>
          </label>
          <select
            onChange={(event) => {
              setStuClass(event.target.value);
            }}
            onFocus={() => setStuClassError(false)}
          >
            <option value={""}>select class</option>
            <option value={"1"}>1</option>
            <option value={"2"}>2</option>
            <option value={"3"}>3</option>
            <option value={"4"}>4</option>
            <option value={"5"}>5</option>
          </select>
          {stuClassError && (
            <small className="errorMsg"> Class is required</small>
          )}
        </div>

        <div className="row">
          <label>
            State <sup>* </sup>
          </label>
          <select
            onChange={(event) => {
              setState(event.target.value);
            }}
            onFocus={() => setStateError(false)}
          >
            <option value={""}>select state</option>
            <option value={"Jharkhand"}>Jharkhand</option>
            <option value={"Maharastra"}>Maharastra</option>
            <option value={"Bihar"}>Bihar</option>
            <option value={"Uttarpradesh"}>Uttarpradesh</option>
            <option value={"Goa"}>Goa</option>
            <option value={"Gujarat"}>Gujarat</option>
            <option value={"Punjab"}>Punjab</option>
          </select>
          {stateError && <small className="errorMsg"> State is required</small>}
        </div>

        <div className="row">
          <label>
            Gender: <sup>* </sup>
          </label>
          <label>Male: </label>
          <input
            type="radio"
            id="gender"
            value={"male"}
            name="gender"
            onChange={(event) => {
              setGender(event.target.value);
            }}
            onFocus={() => setGenderError(false)}
          ></input>
          <label>Female: </label>
          <input
            type="radio"
            id="gender"
            value={"male"}
            name="gender"
            onChange={(event) => {
              setGender(event.target.value);
            }}
            onFocus={() => setGenderError(false)}
          ></input>
          {genderError && (
            <small className="errorMsg"> Roll No. is required</small>
          )}
        </div>

        <div>
          <label>
            Address: <sup>* </sup>
          </label>
          <textarea
            type="address"
            id="address"
            placeholder="Full address"
            onChange={(event) => {
              setAddress(event.target.value);
            }}
            onFocus={() => setAddressError(false)}
          ></textarea>
          {addressError && (
            <small className="errorMsg"> Address is required</small>
          )}
        </div>

        <div>
          <label>
            PIN: <sup>* </sup>
          </label>
          <input
            type="number"
            id="pin"
            placeholder="Pin code"
            onChange={(event) => {
              setPin(event.target.value);
            }}
            onFocus={() => setPinError(false)}
          ></input>
          {pinError && (
            <small className="errorMsg"> PIN code is required</small>
          )}
        </div>

        <div className="btnGroup">
          <button className="submitBtn" onClick={submitForm}>
            Submit{" "}
          </button>
          <button className="resetBtn">Reset </button>
        </div>
      </div>
    </div>
  );
}

export default App;
