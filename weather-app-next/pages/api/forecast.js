import axios from "axios";

export default async function handler(req, res) {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${req.body.lat}&lon=${req.body.lon}&units=metric&exclude=hourly,minutely&appid=${process.env.API_KEY2}`;

  const resp = await axios.get(url);
  res.status(200).json(resp.data);
}
