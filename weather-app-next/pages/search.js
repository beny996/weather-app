import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Humidity from "./humidity";
import Wind from "./wind";
import Feels from "./feels";
import Location from "./location";
import Temperature from "./temperature";
import Forecast from "./forecast";

const Search = () => {
  const [data, setData] = useState({});
  const [data1, setData1] = useState({});
  const [lon, setLon] = useState();
  const [lat, setLat] = useState();
  const [location, setLocation] = useState("");

  const searchLocation = async (event) => {
    if (event.key === "Enter") {
      const resp = await axios.post("/api/weather", {
        city: location,
      });
      setData(resp.data);
      setData1({});

      setLocation("");

      setLon(resp.data.coord.lon);
      setLat(resp.data.coord.lat);
    }
  };

  const handleClick = async () => {
    const resp = await axios.post("/api/forecast", {
      lon: lon,
      lat: lat,
    });
    setData1(resp.data);
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter location"
        />
      </div>
      <div className="container">
        <div className="top">
          <Location data={data} />
          <Temperature data={data} />

          {data.name ? (
            <Router>
              {data1.daily ? null : (
                <div>
                  Za vremensku prognozu za narednih 5 dana kliknite
                  <Link to="/forecast" onClick={handleClick}>
                    ovde
                  </Link>
                </div>
              )}
              <Routes>
                <Route path="/forecast" element={<Forecast data={data1} />} />
              </Routes>
            </Router>
          ) : null}
        </div>
        {data.main ? (
          <div className="bottom">
            <Feels data={data} />
            <Humidity data={data} />
            <Wind data={data} />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Search;
