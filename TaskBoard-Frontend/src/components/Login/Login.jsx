'use client'
import React, { Fragment, useRef } from "react";
import { login__Request__API } from "../../API/API__REQUEST";
import { ErrorTost, IsEmail, IsEmpty } from "../../helper/FormHelper";
import Link from "next/link";

const Login = () => {
  let emailRef,
    passwordRef = useRef();

  const submitLogin = () => {
    let email = emailRef.value;
    let password = passwordRef.value;
    if (IsEmail(email)) {
      ErrorTost("Invalid Email Address");
    } else if (IsEmpty(password)) {
      ErrorTost("Password Required");
    } else {
      login__Request__API(email, password).then((result) => {
        if (result === true) {
          window.location.href = "/";
        }
      });
    }
  };
  return (
    <Fragment>
      <div className="container login__registration">
        <div className="row">
          <div className="col">
            <div className="card__body">
              <h5 className="animate__animated animate__fadeInUp">Sign In</h5>
              <input
                ref={(input) => (emailRef = input)}
                type="email"
                placeholder="User Email"
                className="animate__animated animate__fadeInUp"
              />
              <input
                ref={(input) => (passwordRef = input)}
                type="password"
                placeholder="User Password"
                className="animate__animated animate__fadeInUp"
              />
              <button
                onClick={submitLogin}
                className="my__btn animate__animated animate__fadeInUp"
              >
                NEXT
              </button>

              <div className="footer__data">
                <div className="animate__animated animate__fadeInUp">
                  <Link href="/registration">Sign Up</Link>
                </div>

                <div className="animate__animated animate__fadeInUp">
                  <Link href="/send-otp">Forget Password</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
