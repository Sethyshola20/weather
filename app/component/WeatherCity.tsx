import { WeatherData } from "../types/WeatherData";
import DeleteButton from "./deleteButton";

const WeatherCity: React.FC<WeatherData> = (props) => {
  const windSpeedInKMh = Math.round(props.current.wind_mph * 1.60934);

  return (
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
          <span>Wind</span>
          <p>{windSpeedInKMh} km/h</p>
        </div>
        <div className="data 2">
          <span>Humidity</span>
          <p>{props.current.humidity}%</p>
        </div>
        <div className="data 3">
          <span>UV</span>
          <p>{props.current.uv}</p>
        </div>
        <div className="data 4">
          <span>Visibility</span>
          <p>{props.current.vis_km} km</p>
        </div>
        <div className="data 5">
          <span>Précipitation</span>
          <p>{props.current.precip_mm} mm</p>
        </div>
      </div>
      <DeleteButton city={props.location.name} />
    </section>
  );
};

export default WeatherCity;
