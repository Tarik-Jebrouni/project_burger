// src/components/LoginForm.jsx
import React from "react";
import "../styles/LoginForm.css";

const LoginForm = () => {
  return (
    <div className="login-form-container">
      <img
        src="/src/assets/burger.jpg"
        alt="Full Screen Image"
        className="full-screen-img"
      />

      <div className="button-container">
        <button className="google-login">
          تسجيل دخول بواسطة جوجل
          <a href="https://www.google.com" target="_blank">
            &nbsp;<i className="fab fa-google"></i>
          </a>
        </button>
        <button className="email-login">
          تسجيل دخول بواسطة الايميل
          <a href="mailto:someone@example.com">
            &nbsp;<i className="fas fa-envelope"></i>
          </a>
        </button>
        <p>
          ليس لديك حساب؟ <a href="#">سجل الان</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
