'use client'
import React, { useRef } from "react";
import { useRouter } from 'next/navigation'
import { RecoverResetPassword__API } from "../../API/API__REQUEST";
import { ErrorTost, IsEmpty } from "../../helper/FormHelper";
import { getEmail, getOTP } from "../../helper/SessionHelper";
const CreatePassword = () => {
  const router = useRouter();
  let passWordRef,
    confirmPasswordRef = useRef();
  const ResetPassword = () => {
    let passWord = passWordRef.value;
    let confirmPassword = confirmPasswordRef.value;
    if (IsEmpty(passWord)) {
      ErrorTost("Password Required");
    } else if (IsEmpty(confirmPassword)) {
      ErrorTost("Confirm Password Required");
    } else if (passWord !== confirmPassword) {
      ErrorTost("Password Not Match");
    } else {
      RecoverResetPassword__API(getEmail(), getOTP(), passWord).then(
        (result) => {
          if (result === true) {
            router.replace("/login");
          }
        }
      );
    }
  };
  return (
    <div>
      <div className="container SendOTP">
        <div className="row">
          <div className="col-12">
            <div className="card__item">
              <h5>Set New Password</h5>
              <br />

              <label htmlFor="" className="animate__animated animate__fadeInUp">
                Your Email Address
              </label>
              <input
                value={getEmail()}
                type="email"
                name=""
                id=""
                readOnly={true}
                className="animate__animated animate__fadeInUp"
              />
              <label htmlFor="" className="animate__animated animate__fadeInUp">
                New Password
              </label>
              <input
                ref={(input) => (passWordRef = input)}
                type="password"
                name=""
                id=""
                className="animate__animated animate__fadeInUp"
              />
              <label htmlFor="" className="animate__animated animate__fadeInUp">
                Confirm Password
              </label>
              <input
                ref={(input) => (confirmPasswordRef = input)}
                type="password"
                name=""
                id=""
                className="animate__animated animate__fadeInUp"
              />
              <button
                onClick={ResetPassword}
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

export default CreatePassword;
