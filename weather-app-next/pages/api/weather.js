import axios from "axios";

export default async function handler(req, res) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&units=metric&appid=${process.env.API_KEY1}`;
  const resp = await axios.get(url);

  res.status(200).json(resp.data);
}
