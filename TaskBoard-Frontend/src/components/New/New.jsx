'use client'
import React, { useEffect } from "react";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { MdDeleteSweep } from "react-icons/md";
import { TaskListByStatus } from "../../API/API__REQUEST";
import { useSelector } from "react-redux";
import { DeleteToDo } from "../../helper/DeleteAlert";
import { UpdateToDO } from "../../helper/UpdateAlert";
const New = () => {
  useEffect(() => {
    TaskListByStatus("New");
  }, []);

  const NewData = useSelector((state) => state.task.New);

  const deleteItem = (id) => {
    DeleteToDo(id).then((result) => {
      if (result === true) {
        TaskListByStatus("New");
      }
    });
  };

  const statusChangeItem = (id, status) => {
    UpdateToDO(id, status).then((result) => {
      if (result === true) {
        TaskListByStatus("New");
      }
    });
  };

  return (
    <div className="container new">
      <div className="row">
        <div className="col">
          <div className="header__data">
            <div>
              <h3>New Task : {NewData.length}</h3>
            </div>
            <div className="d-flex">
              <input type="text" placeholder="User Email" />
              <button className="my__btn ">Search</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-30">
        {NewData.map((item, index) => (
          <div className="col-12 col-md-4" key={index}>
            <div className="card__item">
              <h6 className="my__btn animate__animated animate__fadeInUp">
                {item.title}
              </h6>
              <p className="my__btn animate__animated animate__fadeInUp">
                {item.description}
              </p>
              <div className="edit__option my__btn animate__animated animate__fadeInUp">
                <div className="">
                  <span>
                    <BsFillCalendar2CheckFill className="mr-5" />{" "}
                    {item.createdDate}
                  </span>
                  <span className="pl-10 edit__icons">
                    <FiEdit
                      onClick={statusChangeItem.bind(
                        this,
                        item._id,
                        item.status
                      )}
                      className="ml-10 text-success"
                    />
                    <MdDeleteSweep
                      onClick={deleteItem.bind(this, item._id)}
                      className="ml-10 text-danger"
                    />
                  </span>
                </div>
                <div className="status_new">
                  <span>{item.status}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default New;
