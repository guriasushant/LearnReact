import { useState } from "react";

var STUDENT = {
  firstname: "",
  lastname: "",
  rollno: "",
  stuClass: "",
  gender: "",
  state: "",
  address: "",
  pin: "",
};

function StudentRegistration() {
  const [student, setStudent] = useState(STUDENT);
  const [isFormSubmit, setIsFormSubmit] = useState(false);

  var handleChange = (event) => {
    setStudent({ ...student, [event.target.name]: event.target.value });
  };

  function formReset() {
    setStudent(STUDENT);
  }

  function formSubmit() {
    setIsFormSubmit(true);
    // if (formValidation()) {
    //   alert(
    //     "First Name: " +
    //     student.firstname +
    //     "\nLast Name: " +
    //     student.lastname +
    //     "\nRoll No: " +
    //     student.rollno +
    //     "\nClass: " +
    //     student.stuClass +
    //     "\nGender: " +
    //     student.gender +
    //     "\nAddress: " +
    //     student.address +
    //     "\nPIN: " +
    //     student.pin
    //   );
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Student Registration </h1>
      </div>

      <div className="row">
        <div className="label">
          <label>
            First Name: <sup className="err">* </sup>{" "}
          </label>
        </div>
        <div className="input">
          <input
            type="text"
            value={student.firstname}
            className={
              isFormSubmit && student.firstname === "" ? "invalidInput" : ""
            }
            name="firstname"
            placeholder="first name"
            onChange={handleChange}
            onFocus={() => setIsFormSubmit(false)}
          ></input>
          <br/>
          {isFormSubmit && student.rollno === "" && (
            <small className="err">firstname required</small>
          )}
        </div>
      </div>

      <div className="row">
        <div className="label">
          <label>
            Last Name: <sup className="err">* </sup>{" "}
          </label>
        </div>
        <div className="input">
          <input
            type="text"
            value={student.lastname}
            className={
              isFormSubmit && student.lastname === "" ? "invalidInput" : ""
            }
            name="lastname"
            placeholder="last name"
            onChange={handleChange}
            onFocus={() => setIsFormSubmit(false)}
          ></input>
          <br />
          {isFormSubmit && student.lastname === "" && (
            <small className="err">Last name required</small>
          )}
        </div>
      </div>

      <div className="row">
        <div className="label">
          <label>
            Roll No: <sup className="err">* </sup>{" "}
          </label>
        </div>
        <div className="input">
          <input
            type="text"
            value={student.rollno}
            className={
              isFormSubmit && student.rollno === "" ? "invalidInput" : ""
            }
            name="rollno"
            placeholder="roll no"
            onChange={handleChange}
            onFocus={() => setIsFormSubmit(false)}
          ></input>
          <br />
          {isFormSubmit && student.rollno === "" && (
            <small className="err">rollno. is required</small>
          )}
        </div>
      </div>

      <div className="row">
        <div className="label">
          <label>
            Class: <sup className="err">* </sup>{" "}
          </label>
        </div>
        <div className="input">
          <select
            name="stuClass"
            value={student.stuClass}
            onChange={handleChange}
            onFocus={() => setIsFormSubmit(false)}
            className={
              isFormSubmit && student.stuClass === "" ? "invalidInput" : ""
            }
          >
            <option value={""}>select class</option>
            <option value={"1"}>1</option>
            <option value={"2"}>2</option>
            <option value={"3"}>3</option>
            <option value={"4"}>4</option>
            <option value={"5"}>5</option>
          </select>
          <br />
          {isFormSubmit && student.address === "" && (
            <small className="err">class is required</small>
          )}
        </div>
      </div>

      <div className="row">
        <div className="label">
          <label >
            Gender: <sup className="err">* </sup>{" "}
          </label>
        </div>

        <div className="input">
          <input
            type="radio"
            name="gender"
            value={student.gender}
            // className={isFormSubmit && student.gender == '' ? "invalidInput" : ""}
            onChange={handleChange}
            onFocus={() => setIsFormSubmit}
          ></input>
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value={student.gender}
            // className=""
            onChange={handleChange}
            onFocus={() => setIsFormSubmit}
          ></input>
          <label className="label">Female</label>
          <br />
          {isFormSubmit && student.gender === "" && (
            <small className="err">gender is required</small>
          )}
        </div>
      </div>

      <div className="row">
        <div className="label">
          <label>
            State: <sup className="err">* </sup>{" "}
          </label>
        </div>
        <div className="input">
          <select
            name="state"
            value={student.state}
            onChange={handleChange}
            onFocus={() => setIsFormSubmit(false)}
            className={
              isFormSubmit && student.state === "" ? "invalidInput" : ""
            }
          >
            <option value={""}>select state</option>
            <option value={"Jharkhand"}>Jharkhand</option>
            <option value={"Orissa"}>Orissa</option>
            <option value={"Bihar"}>Bihar</option>
            <option value={"Maharastra"}>Maharastra</option>
            <option value={"Goa"}>Goa</option>
          </select>
          <br />
          {isFormSubmit && student.state === "" && (
            <small className="err">state is required</small>
          )}
        </div>
      </div>

      <div className="row">
        <div className="label">
          <label>
            Address: <sup className="err">* </sup>{" "}
          </label>
        </div>
        <div className="input">
          <textarea
            type="text"
            value={student.address}
            className={
              isFormSubmit && student.address === "" ? "invalidInput" : ""
            }
            name="address"
            placeholder="address"
            onChange={handleChange}
            onFocus={() => setIsFormSubmit(false)}
          ></textarea>
          <br />
          {isFormSubmit && student.address === "" && (
            <small className="err">address is required</small>
          )}
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
            type="text"
            value={student.pin}
            className={
              isFormSubmit && student.address === "" ? "invalidInput" : ""
            }
            name="pin"
            maxLength={6}
            pattern="[0-9]{6}"
            placeholder="address pin"
            onChange={handleChange}
            onFocus={() => setIsFormSubmit(false)}
          ></input>
          <br />
          {isFormSubmit && student.pin === "" && (
            <small className="err">PIN is required</small>
          )}
        </div>
      </div>

      <div>
        <div className="btn-group">
          <div className="btn">
            <button onClick={formSubmit}>SUBMIT</button>
          </div>
          <div className="btn">
            <button onClick={formReset}>RESET</button>
          </div>
        </div>
      </div>

      {student.firstname && (
        <div>
          <h1>student details</h1>
          <h5>First Name: {student.firstname}</h5>
        </div>
      )}
      {student.lastname && (
        <div>
          <h5>Last Name: {student.lastname}</h5>
        </div>
      )}
      {student.rollno && (
        <div>
          <h5>Roll NO: {student.rollno}</h5>
        </div>
      )}
      {student.stuClass && (
        <div>
          <h5>Class: {student.stuClass}</h5>
        </div>
      )}
      {student.gender && (
        <div>
          <h5>Gender: {student.gender}</h5>
        </div>
      )}
      {student.state && (
        <div>
          <h5>State: {student.state}</h5>
        </div>
      )}
      {student.address && (
        <div>
          <h5>Address: {student.address}</h5>
        </div>
      )}
      {student.pin && (
        <div>
          <h5>PIN: {student.pin}</h5>
        </div>
      )}
    </div>
  );
}

// function formValidation() {
//   if (student.firstname == "" || student.firstname == undefined) {
//     return false;
//   } else if (student.lastname == "" || student.lastname == undefined) {
//     return false;
//   } else if (student.rollno == "" || student.rollno == undefined) {
//     return false;
//   } else if (student.stuClass == "" || student.stuClass == undefined) {
//     return false;
//   } else if (student.address == "" || student.address == undefined) {
//     return false;
//   } else if (student.pin == "" || student.pin == undefined) {
//     return false;
//   } else if (student.state == "" || student.state == undefined) {
//     return false;
//   } else if (student.gender == "" || student.gender == undefined) {
//     return false;
//   } else return true;
// }

export default StudentRegistration;
