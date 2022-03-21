import React from "react";

const Feels = (data) => {
  return (
    <div className="feels">
      {data.data.main ? (
        <p className="bold">{Math.round(data.data.main.feels_like)}</p>
      ) : null}
      <p>Feels like</p>
    </div>
  );
};

export default Feels;
