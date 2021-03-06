import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { ADD_USER } from "../../utils/mutations";

import { AiOutlineSend } from "react-icons/ai";
import { RiArrowGoBackLine } from "react-icons/ri";

function CreateUser() {
  const [formState, setFormState] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    phoneNumber: "",
  });

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const mutationResponse = await addUser({
      variables: {
        firstName: formState.firstName,
        lastName: formState.lastName,
        email: formState.email,
        password: formState.password,
        phoneNumber: formState.phoneNumber,
        adminFlag: document.getElementById("checkbox").checked,
      },
    });
    window.location.replace("/AdminDash");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-header">Add a User</h3>
      </div>
      <form className="card-body" onSubmit={handleFormSubmit}>
        <div className="">
          <label className="form-label" htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            className="form-input"
            type="text"
            placeholder="John"
            name="firstName"
            onChange={handleChange}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="lastName" className="form-label">
            <b>Last Name</b>
          </label>
          <input
            className="form-input"
            type="text"
            placeholder="Smith"
            name="lastName"
            onChange={handleChange}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="email">
            <b>Email Address</b>
          </label>
          <input
            className="form-input"
            type="text"
            placeholder="example@domain.com"
            name="email"
            onChange={handleChange}
            pattern="^.+@.+\..+"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            className="form-input"
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
            minlength="5"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="phoneNumber">
            <b>Phone Number</b>
          </label>
          <input
            className="form-input"
            type="tel"
            placeholder="555-555-5555"
            name="phoneNumber"
            pattern="^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$"
            onChange={handleChange}
            required
          ></input>
        </div>
        <br />
        <div>
          <label htmlFor="adminFlag">
            <b>Administrator</b>
          </label>
          <input
            className="form-input"
            type="checkbox"
            placeholder="false"
            name="adminFlag"
            id="checkbox"
            onChange={handleChange}
            required
          ></input>
        </div>
        <br />
        <div>
          <button className="create-btn" id="button-hover">
            <AiOutlineSend size={30} color="default"></AiOutlineSend>
            &nbsp;
            <p>Add User</p>
          </button>
          <Link to="/AdminDash" className="back-btn" id="button-hover">
            <RiArrowGoBackLine
              size={30}
              color="var(--light)"
            ></RiArrowGoBackLine>
            <p>Back</p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
