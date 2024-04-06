import { useState } from "react";

function Clear() {
  var STUDENT = {
    name: "",
    gender: "",
    state: "",
    pin: "",
  };
  const [student, setStudent] = useState(STUDENT);
  const [isFormSubmit, setIsFormSubmit] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }

  const handleReset = () => {
    selectedOption('');
  }

  var handleChange = (event) => {
    setStudent({ ...student, [event.target.name]: event.target.value });
  };

  function formReset() {
    setStudent(STUDENT);
  }
  function formSubmit() {
    setIsFormSubmit(true);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>Registration</h1>
      </div>

      <div className="row">
        <div className="label">
          <label>
            Name: <sup className="err"> *</sup>
          </label>
        </div>
        <div className="input">
          <input
            name="name"
            type="text"
            value={student.name}
            placeholder="your name"
            onChange={handleChange}
            onFocus={()=> setIsFormSubmit(false)}
          ></input>
          <br />
          {isFormSubmit && student.name === "" && <small className="err">error</small>}
        </div>
      </div>

      <div className="row">
        <div className="label">
          <label>
            Gender: <sup className="err"> *</sup>
          </label>
        </div>
        <div className="input">
          <input
            type="radio"
            name="gender"
            value="Male"
            // checked={selectedOption == "Male"}
            onChange={handleChange}
            onFocus={()=> setIsFormSubmit(false)}
          ></input>
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value="Female"
            // checked={selectedOption == "Female"}
            onChange={handleChange}
            onFocus={()=> setIsFormSubmit(false)}
          ></input>
          <label>Female</label>
          <br />
          {isFormSubmit && student.gender === "" && <small className="err">error</small>}
        </div>
      </div>

      <div className="row">
        <div className="label">
          <label>
            State: <sup className="err"> *</sup>
          </label>
        </div>
        <div className="input">
          <select name="state" value={student.state} onChange={handleChange} onFocus={()=> setIsFormSubmit(false)}>
            <option value="">select state</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Bihar">Bihar</option>
          </select>
          <br />
          {isFormSubmit && student.state == "" && <small className="err">error</small>}
        </div>
      </div>

      <div className="row">
        <div className="label">
          <label>
            PIN: <sup className="err">* </sup>{" "}
          </label>
        </div>
        <div className="input">
          <input
            name="pin"
            type="text"
            value={student.pin}
            maxLength={6}
            pattern="{0-9}{6}"
            placeholder="your address pin"
            onChange={handleChange}
            onFocus={()=> setIsFormSubmit(false)}
          ></input>
          <br />
          {isFormSubmit && student.pin == "" && <small className="err">error</small>}
        </div>
      </div>

      <div className="btn-group">
        <div className="btn">
          <button onClick={formSubmit}>SUBMIT</button>
          <button onClick={formReset}>RESET</button>
        </div>
      </div>

      <div>
        <h2>Details:-</h2>
        <h5>Name: {student.name}</h5>
        <h5>Gender: {student.gender}</h5>
        <h5>State: {student.state}</h5>
        <h5>Pin: {student.pin}</h5>
      </div>
    </div>
  );
}
export default Clear;




