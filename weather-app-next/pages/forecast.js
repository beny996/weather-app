import React from "react";

const Forecast = (data) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <>
      {data.data.daily
        ? data.data.daily.slice(1, 6).map((l) => (
            <div className="containter2" key={l.dt}>
              <br></br>
              <div className="forecast">
                <p className="day">{days[new Date(l.dt * 1000).getDay()]}</p>
                <p className="min">Min : {l.temp.min.toFixed()}</p> /{" "}
                <p className="max">Max : {l.temp.max.toFixed()}</p>
                <img
                  src={
                    "http://openweathermap.org/img/wn/" +
                    l.weather[0].icon +
                    "@2x.png"
                  }
                />
              </div>
              <div></div>
            </div>
          ))
        : null}
    </>
  );
};

export default Forecast;
