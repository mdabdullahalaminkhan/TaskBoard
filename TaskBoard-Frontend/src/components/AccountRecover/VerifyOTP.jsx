'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation'
import ReactCodeInput from "react-code-input";
import { RecoverVerifyOTP__API } from "../../API/API__REQUEST";
import { ErrorTost } from "../../helper/FormHelper";
import { getEmail } from "../../helper/SessionHelper";
const VerifyOTP = () => {
  const router = useRouter();
  const [OTP, setOTP] = useState("");
  const SubmitOTP = () => {
    if (OTP.length === 6) {
      RecoverVerifyOTP__API(getEmail(), OTP).then((result) => {
        if (result === true) {
          router.replace("/create-password");
        }
      });
    } else {
      ErrorTost("OTP not Valid!");
    }
  };
  return (
    <div>
      <div className="container VerifyOTP">
        <div className="row">
          <div className="col-12">
            <div className="card__item">
              <h5>OTP Verification</h5>
              <br />

              <label htmlFor="" className="animate__animated animate__fadeInUp">
                A 6 Digit verification code has been sent to your email address
              </label>
              <ReactCodeInput fields={6} onChange={(value) => setOTP(value)} />
              <button
                onClick={SubmitOTP}
                className="my__btn animate__animated  animate__fadeInUp"
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

export default VerifyOTP;
