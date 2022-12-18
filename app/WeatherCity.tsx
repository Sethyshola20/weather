"use client";

import Image from "next/image";
import React from "react";
import { WeatherData } from "./interface/WeatherData";
import { Suspense } from "react";
import Loading from "./loading";

const WeatherCity: React.FC<WeatherData> = (props) => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <section>
          <header>
            <h2>{props.location.name}</h2>
            <h3>{props.current.temp_c}°C</h3>
          </header>
        </section>
      </Suspense>
    </>
  );
};

export default React.memo(WeatherCity);
