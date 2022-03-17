import React from "react";

const Temperature = (data) => {
  return (
    <div className="temp">
      {" "}
      {data.data.main ? (
        <h1>
          {Math.round(data.data.main.temp)}
          ºC
        </h1>
      ) : null}
    </div>
  );
};

export default Temperature;
