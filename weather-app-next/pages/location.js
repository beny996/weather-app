import React from "react";

const Location = (data) => {
  return (
    <div className="location">
      <p>{data.data.name}</p>
    </div>
  );
};

export default Location;
