import React from "react";
import "./Card.css";
const Card = ({ data, initData, changeState, setChangeState }) => {
  const handleChange = (e) => {
    let filtered = initData.filter((items) => {
      return items.state === e.target.value;
    });
    setChangeState(filtered[0]);
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <select onChange={handleChange}>
          {initData.map((item, index) => {
            return (
              <option value={item.state} key={index}>
                {item.state}
              </option>
            );
          })}
        </select>
      </div>
      <div className="d-flex align-items-center justify-content-center mt-5">
        <div className="d-flex justify-content-between">
          <div
            className="data card m-4 p-4 bg-light"
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">State</h5>
              <p className="card-text">
                {Object.keys(changeState).length > 0
                  ? changeState.state
                  : data.state}
              </p>
            </div>
          </div>
          <div
            className="data card m-4 p-4 bg-success"
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">Total Recovered</h5>
              <p className="card-text">
                {Object.keys(changeState).length > 0
                  ? changeState.recovered
                  : data.recovered}
              </p>
            </div>
          </div>
          <div
            className="data card m-4 p-4 bg-warning"
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">Confirmed Cases</h5>
              <p className="card-text">
                {Object.keys(changeState).length > 0
                  ? changeState.confirmed
                  : data.confirmed}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center mt-2">
        <div className="d-flex justify-content-between">
          <div
            className="data card m-4 p-4 bg-warning"
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">Active Cases</h5>
              <p className="card-text">
                {Object.keys(changeState).length > 0
                  ? changeState.active
                  : data.active}
              </p>
            </div>
          </div>
          <div
            className="data card m-4 p-4 bg-danger"
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">Total Deaths</h5>
              <p className="card-text">
                {Object.keys(changeState).length > 0
                  ? changeState.deaths
                  : data.deaths}
              </p>
            </div>
          </div>
          <div className="data card m-4 p-4 bg-info" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Last Updated</h5>
              <p className="card-text">
                {Object.keys(changeState).length > 0
                  ? changeState.lastupdatedtime
                  : data.lastupdatedtime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
