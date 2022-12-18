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
        <section>{props.location ? props.location.name : "hello"}</section>
      </Suspense>
    </>
  );
};

export default React.memo(WeatherCity);
