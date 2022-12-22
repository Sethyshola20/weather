"use client";

import React from "react";
import { WeatherData } from "./types/WeatherData";
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
            <div className="data 1">
              <span>Vent</span>
              <p>{props.current.wind_mph} mph</p>{" "}
            </div>
            <div className="data 2">
              <span>Humidité</span>
              <p>{props.current.humidity}%</p>
            </div>
            <div className="data 3">
              <span>UV</span>
              <p>{props.current.uv}</p>
            </div>
            <div className="data 4">
              <span>Visibilité</span>
              <p>{props.current.vis_km} km</p>
            </div>
            <div className="data 5">{props.current.precip_mm} </div>
          </div>
        </section>
      </Suspense>
    </>
  );
};

export default React.memo(WeatherCity);
