import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    text: "",
  });

  const [showMsg, setShowMsg] = useState(false);

  const emailHandler = (e) => {
    setValues({ ...values, email: e.target.value });
  };
  const nameHandler = (e) => {
    setValues({ ...values, name: e.target.value });
  };
  const phoneHandler = (e) => {
    setValues({ ...values, phone: e.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setShowMsg(true);
  };
  return (
    <div className="mini-intr-content">
      <h4 className="gold">CONTACT</h4>
      <h1 className="titleFooter">Get In Touch</h1>
      <div className="border-bottom"></div>
      <p className="text m-b20">
        If you have any suggestion, project or even you want to say “hello”,
        please fill out the form below and I will reply you shortly.
      </p>
      <form onSubmit={submitHandler}>
        <div className="topInput">
          {showMsg && !values.name ? (
            <span style={{ color: "red" }}>*</span>
          ) : null}
          <input
            type="text"
            placeholder="Name..."
            className="m-r10"
            value={values.name}
            onChange={nameHandler}
          />
          {showMsg && !values.email ? (
            <span style={{ color: "red" }}>*</span>
          ) : null}
          <input
            type="email"
            placeholder="Email..."
            value={values.email}
            onChange={emailHandler}
          />
        </div>

        <div className="bottomInput">
          {showMsg && !values.phone ? (
            <span style={{ color: "red" }}>*</span>
          ) : null}
          <input
            type="Phone"
            placeholder="Phone..."
            value={values.phone}
            onChange={phoneHandler}
          />

          <textarea cols="30" rows="10">
            {values.text}
          </textarea>
        </div>
        <input type="submit" style={{ padding: "10px", border: "none" }} />
      </form>
    </div>
  );
};

export default Footer;
