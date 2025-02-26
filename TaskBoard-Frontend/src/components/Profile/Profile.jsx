'use client'
import React, { useEffect, useRef } from "react";
import { useRouter } from 'next/navigation'
import { useSelector } from "react-redux";
import {
  ProfileUpdate__API,
  ProfileUpdate__Request__API,
} from "../../API/API__REQUEST";
import {
  ErrorTost,
  getBase64,
  IsEmail,
  IsEmpty,
  IsMobile,
} from "../../helper/FormHelper";
import { getUserDetails } from "../../helper/SessionHelper";
import { SetProfile } from "../../redux/stateSlice/ProfileSlice";

const Profile = () => {
  useEffect(() => {
    ProfileUpdate__API();
  }, []);
  const router = useRouter();
  const ProfileData = useSelector((state) => state.profile.value);

  let useViewImgRef,
    imgRef,
    FirstNameRef,
    LastNameRef,
    MobileRef,
    EmailRef,
    PasswordRef = useRef();

  const PreviewImg = () => {
    let ImgFile = imgRef.files[0];
    getBase64(ImgFile).then((base64Img) => {
      useViewImgRef.src = base64Img;
    });
  };

  const UpdateMyProfile = () => {
    let email = EmailRef.value;
    let firstName = FirstNameRef.value;
    let lastName = LastNameRef.value;
    let mobile = MobileRef.value;
    let password = PasswordRef.value;
    let photo = useViewImgRef.src;

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
      ProfileUpdate__Request__API(
        email,
        firstName,
        lastName,
        mobile,
        password,
        photo
      ).then((result) => {
        if (result === true) {
          SetProfile(email, firstName, lastName, mobile, password, photo);

          router.replace("/");
        }
      });
    }
  };

  return (
    <div className="container profile">
      <div className="row">
        <div className="col-md-12">
          <div className="card__item">
            <div className="row">
              <div className="col">
                <div className="img__file">
                  <img
                    ref={(input) => (useViewImgRef = input)}
                    src={ProfileData.photo}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <p className="heading__text">Profile Image</p>
                <input
                  onChange={PreviewImg}
                  ref={(input) => (imgRef = input)}
                  className="input__file"
                  type="file"
                  name=""
                  id=""
                />
              </div>

              <div className="col-md-4">
                <p className="heading__text">First Name</p>
                <input
                  ref={(input) => (FirstNameRef = input)}
                  className="input__"
                  type="text"
                  name=""
                  id=""
                  defaultValue={getUserDetails()?.fastName}
                // defaultValue={ProfileData.fastName}
                />
              </div>
              <div className="col-md-4">
                <p className="heading__text">Last Name</p>
                <input
                  ref={(input) => (LastNameRef = input)}
                  className="input__"
                  type="text"
                  name=""
                  id=""
                  defaultValue={getUserDetails()?.lastName}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <p className="heading__text">Mobile</p>
                <input
                  ref={(input) => (MobileRef = input)}
                  className="input__"
                  type="text"
                  name=""
                  id=""
                  defaultValue={getUserDetails()?.mobile}
                />
              </div>
              <div className="col-md-4">
                <p className="heading__text">Email Address</p>
                <input
                  ref={(input) => (EmailRef = input)}
                  readOnly={true}
                  className="input__"
                  type="text"
                  name=""
                  id=""
                  defaultValue={getUserDetails()?.email}
                />
              </div>
              <div className="col-md-4">
                <p className="heading__text">Password</p>
                <input
                  ref={(input) => (PasswordRef = input)}
                  className="input__"
                  type="password"
                  name=""
                  id=""
                  defaultValue={getUserDetails()?.password}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <button onClick={UpdateMyProfile} className="my__btn">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
