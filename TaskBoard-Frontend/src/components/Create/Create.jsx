'use client'
import React, { useRef } from "react";
import { useRouter } from 'next/navigation'
import { CreateNew__API } from "../../API/API__REQUEST";
import { ErrorTost, IsEmpty } from "../../helper/FormHelper";

const Create = () => {
  const router = useRouter();
  let titleRef,
    descriptionRef = useRef();
  const CreateNew = () => {
    let title = titleRef.value;
    let description = descriptionRef.value;

    if (IsEmpty(title)) {
      ErrorTost("Title Required");
    } else if (IsEmpty(description)) {
      ErrorTost("Description Required");
    } else {
      CreateNew__API(title, description, "").then((res) => {
        if (res === true) {
          router.replace("/new");
        }
      });
    }
  };
  return (
    <div className="container create">
      <div className="row">
        <div className="col">
          <div className="card__body">
            <h5 className="animate__animated animate__fadeInUp">Create New</h5>
            <div className="card__form">
              <input
                ref={(input) => (titleRef = input)}
                type="text"
                placeholder="Title"
                className="animate__animated animate__fadeInUp"
              />
              <textarea
                ref={(input) => (descriptionRef = input)}
                className="animate__animated animate__fadeInUp"
                name=""
                id=""
                cols="30"
                rows="6"
              ></textarea>
              <button
                onClick={CreateNew}
                className="my__btn animate__animated animate__fadeInUp"
              >
                CREATE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
