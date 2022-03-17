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
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=f0dde32af7b09f551fd40f088122139a`;
  const url2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,minutely&appid=1393747bd6e941ae0741b3b7cf4ccc3c`;

  const searchLocation = async (event) => {
    if (event.key === "Enter") {
      const resp = await axios.get(url);
      setData(resp.data);
      setData1({});
      console.log(resp.data);

      setLocation("");

      setLon(resp.data.coord.lon);
      setLat(resp.data.coord.lat);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const resp = await axios.get(url2);
    setData1(resp.data);
    console.log(resp.data);
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
