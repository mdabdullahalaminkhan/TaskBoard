'use client'
import React, { useRef } from "react";
import { useRouter } from 'next/navigation'
import { Registration__Request__API } from "../../API/API__REQUEST";
import {
  ErrorTost,
  IsEmail,
  IsEmpty,
  IsMobile,
} from "../../helper/FormHelper";
import Link from "next/link";

const Registration = () => {
  let emailRef,
    firstNameRef,
    lastNameRef,
    mobileRef,
    passwordRef = useRef();
  const router = useRouter();

  const onRegistration = () => {
    let email = emailRef.value;
    let firstName = firstNameRef.value;
    let lastName = lastNameRef.value;
    let mobile = mobileRef.value;
    let password = passwordRef.value;
    let photo ="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";

    if (IsEmail(email)) {
      ErrorTost("Valid Email Address Required !");
    } else if (IsEmpty(firstName)) {
      ErrorTost("First Name is Required !");
    } else if (IsEmpty(lastName)) {
      ErrorTost("Last Name is Required !");
    } else if (IsMobile(mobile)) {
      ErrorTost("Mobile Number is Required !");
    } else if (IsEmpty(password)) {
      ErrorTost("Password Required !");
    } else {
      Registration__Request__API(
        email,
        firstName,
        lastName,
        mobile,
        password,
        photo
      ).then((result) => {
        if (result === true) {
          router.replace("/login");
        }
      });
    }
  };

  return (
    <div className="container login__registration">
      <div className="row">
        <div className="col">
          <div className="card__body">
            <h5 className="animate__animated animate__fadeInUp">Sign Up</h5>
            <input
              ref={(input) => (emailRef = input)}
              type="email"
              placeholder="User Email"
              className="animate__animated animate__fadeInUp"
            />
            <input
              ref={(input) => (firstNameRef = input)}
              type="text"
              placeholder="First Name"
              className="animate__animated animate__fadeInUp"
            />
            <input
              ref={(input) => (lastNameRef = input)}
              type="text"
              placeholder="Last Name"
              className="animate__animated animate__fadeInUp"
            />
            <input
              ref={(input) => (mobileRef = input)}
              type="text"
              placeholder="Mobile Number"
              className="animate__animated animate__fadeInUp"
            />
            <input
              ref={(input) => (passwordRef = input)}
              type="password"
              placeholder="User Password"
              className="animate__animated animate__fadeInUp"
            />
            <button
              onClick={onRegistration}
              className="my__btn animate__animated animate__fadeInUp"
            >
              NEXT
            </button>

            <div className="footer__data">
              <div className="animate__animated animate__fadeInUp">
                <Link href="/login">Sign In</Link>
              </div>

              <div className="animate__animated animate__fadeInUp">
                <Link href="/send-otp">Forget Password</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
