import React from "react";

const Humidity = (data) => {
  return (
    <div className="humidity">
      {data.data.main ? (
        <p className="bold">{data.data.main.humidity} % </p>
      ) : null}
      <p>Humidity</p>
    </div>
  );
};

export default Humidity;
