'use client'
import React, { Fragment, useEffect } from "react";
import { Summary__API } from "../../API/API__REQUEST";
import { useSelector } from "react-redux";
const Dashboard = () => {
  useEffect(() => {
    Summary__API();
  }, []);
  const SummaryList = useSelector((state) => state.summary.value);
  return (
    <Fragment>
      <div className="container dashboard">
        <div className="row">
          {SummaryList.length > 0 ? (
            <>
              {SummaryList.map((item, index) => (
                <div key={index} className="col-12 col-lg-3 col-md-3">
                  <div className="card__body">
                    <h5 className="animate__animated animate__fadeInUp">
                      Total : {item._id}
                    </h5>
                    <h6 className="animate__animated animate__fadeInUp">
                      {item.sum}
                    </h6>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div>
              <h3>No Data Found</h3>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
