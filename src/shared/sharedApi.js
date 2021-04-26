import { BASE_URL } from "./sharedConstants";

export async function fetchWeatherByUnit(unit) {
  const res = await fetch(
    `${BASE_URL}/data/2.5/forecast?q=Munich,de&APPID=${process.env.REACT_APP_API_KEY}&units=${unit}`
  );
  const data = await res.json();
  return data.list;
}
