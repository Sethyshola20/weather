"use client";

import React from "react";
import { WeatherData } from "./interface/WeatherData";
import { Suspense } from "react";
import Loading from "./loading";

const WeatherCity: React.FC<WeatherData> = (props) => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <section>
          <header className="main-data">
            <h2 className="city-name">{props.location.name}</h2>
            <h3 className="city-temp">{props.current.temp_c}°C</h3>
            <img
              src={`https:${props.current.condition.icon}`}
              width={64}
              height={64}
              alt="condition"
            />
          </header>
          <p>{props.current.condition.text}</p>
          <div className="data-wrapper">
            <div className="data 1">1 some data </div>
            <div className="data 2">1 some data </div>
            <div className="data 3">1 some data </div>
            <div className="data 4">1 some data </div>
            <div className="data 5">1 some data </div>
            <div className="data 6">1 some data </div>
            <div className="data 7">1 some data </div>
          </div>
        </section>
      </Suspense>
    </>
  );
};

export default React.memo(WeatherCity);
