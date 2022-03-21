import React from "react";

const Wind = (data) => {
  return (
    <div className="wind">
      {data.data.wind ? (
        <p className="bold">{data.data.wind.speed} KMH</p>
      ) : null}
      <p>Wind speed</p>
    </div>
  );
};

export default Wind;
