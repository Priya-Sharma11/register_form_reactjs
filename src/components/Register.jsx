import React from "react";
import { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = () => {
    // if (user.fname.length == 0) {
    //   alert("Invalid input");
    // }
    const nameRegex = /^[a-zA-Z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!nameRegex.test(user.fname)) {
      alert("Invalid first name");
    } else if (!emailRegex.test(user.email)) {
      alert("Invalid Email");
    } else if (!phoneRegex.test(user.phone)) {
      alert("Invalid phone");
    } else {
      alert("Form submitted");
    }
  };

  return (
    <div>
      <h1> Register page</h1>
      <form className="form">
        <label htmlFor="fname">
          First Name:
          <input
            name="fname"
            type="text"
            value={user.fname}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="lname">
          Last Name:
          <input
            name="lname"
            type="text"
            value={user.lname}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="lname">
          Email:
          <input
            name="email"
            type="text"
            value={user.email}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="lname">
          Phone number:
          <input
            name="phone"
            type="text"
            value={user.phone}
            onChange={handleChange}
          />
        </label>

        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
};

export default Register;
