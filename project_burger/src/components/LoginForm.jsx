// src/components/LoginForm.jsx
import React from "react";

const LoginForm = () => {
  return (
    <div className="login-form-container">
      <img
        src="/src/assets/burger.jpg"
        alt="Full Screen Image"
        className="full-screen-img"
      />

      <div className="button-container">
        <button className="google-login">تسجيل دخول بواسطة جوجل</button>
        <button className="email-login">تسجيل دخول بواسطة الايميل</button>
        <p>
          ليس لديك حساب؟ <a href="#">سجل الان</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
