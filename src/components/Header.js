import React, { useEffect, useState } from "react";
import Card from "./Card";

const Header = () => {
  const [data, setData] = useState([]);
  const [initData, setInitData] = useState([]);
  const [changeState, setChangeState] = useState([]);
  const covidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actualData = await res.json();
      setData(actualData.statewise[0]);
      setInitData(actualData.statewise);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    covidData();
  }, [changeState]);
  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <h1 className="text-white">Covid19 Tracker</h1>
      </div>
      <Card
        data={data}
        initData={initData}
        changeState={changeState}
        setChangeState={setChangeState}
      />
    </>
  );
};

export default Header;
