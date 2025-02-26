'use client'
import React, { useRef } from "react";
import { useRouter } from 'next/navigation'
import { RecoverVerifyEmailReq__API } from "../../API/API__REQUEST";
import { ErrorTost, IsEmail } from "../../helper/FormHelper";
const SendOTP = () => {
  const router = useRouter();
  let emailRef = useRef();
  const VerifyEmail = () => {
    let email = emailRef.value;
    if (IsEmail(email)) {
      ErrorTost("Valid Email Address Required !");
    } else {
      RecoverVerifyEmailReq__API(email).then((result) => {
        if (result === true) {
          router.replace("/verify-otp");
        }
      });
    }
  };
  return (
    <div>
      <div className="container SendOTP">
        <div className="row">
          <div className="col-12">
            <div className="card__item">
              <h5>Email Address</h5>
              <br />

              <label htmlFor="" className="animate__animated animate__fadeInUp">
                Your Email Address
              </label>
              <input
                ref={(input) => (emailRef = input)}
                type="email"
                name=""
                id=""
                className="animate__animated animate__fadeInUp"
              />
              <button
                onClick={VerifyEmail}
                className="my__btn animate__animated animate__fadeInUp"
              >
                NEXT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendOTP;
