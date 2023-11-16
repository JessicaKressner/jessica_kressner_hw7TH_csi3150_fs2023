import React from "react";

// create a form which takes input for user full name, username,
// email, address, and phone number
const Form = () => {
  const [formData, setFormData] = React.useState({
    fullName: "",
    username: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  // function for handle change
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  // form submission function
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter Your Full Name: </label>
        <input
          className="textInput"
          id="fullNameInput"
          type="text"
          placeholder="John Doe"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />

        <br />

        <label htmlFor="">Enter Your Username: </label>
        <input
          className="textInput"
          id="usernameInput"
          type="text"
          placeholder="johndoe"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />

        <br />

        <label htmlFor="">Enter Your Email: </label>
        <input
          className="textInput"
          id="emailInput"
          type="text"
          placeholder="johndoe@gmail.com"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <br />

        <label htmlFor="">Enter Your Address: </label>
        <input
          className="textInput"
          id="adressInput"
          type="text"
          placeholder="12345 Street"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />

        <br />

        <label htmlFor="">Enter Your Phone Number: </label>
        <input
          className="textInput"
          id="phoneNumberInput"
          type="text"
          placeholder="###-###-####"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
