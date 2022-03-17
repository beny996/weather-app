import axios from "axios";

export default async function handler(req, res) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=f0dde32af7b09f551fd40f088122139a`;
  const resp = await axios.get(url);

  res.status(200).json(resp.data);
}
