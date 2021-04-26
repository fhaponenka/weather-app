import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getTemperatureUnit } from "../temperature/selectors";

export default function useTemperature(value) {
  const [temperatureValue, setTemperatureValue] = useState("0 F");

  const unit = useSelector(getTemperatureUnit);

  useEffect(() => {
    setTemperatureValue(`${value} ${unit}`);
  }, [value, unit]);

  return temperatureValue;
}
