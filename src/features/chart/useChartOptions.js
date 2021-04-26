import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import theme from "../../theme";
import { getTemperatureUnit } from "../temperature/selectors";
import { getVisibleBars } from "./selectors";

const options = {
  chart: {
    type: "column",
    width: theme.containerWidth,
    style: {
      maxWidth: "calc(100vw - 8px)",
    },
  },
  title: {
    text: "",
  },
  subtitle: {
    text: "",
  },
  xAxis: {
    categories: [],
    crosshair: false,
    labels: {
      style: {
        fontSize: "1.5rem",
      },
    },
  },
  yAxis: {
    min: 0,
    title: {
      enabled: false,
    },
    labels: {
      enabled: false,
    },
  },
  plotOptions: {
    column: {
      borderWidth: 0,
      pointWidth: 60,
    },
  },
  series: [
    {
      name: "Temperature",
      data: [],
    },
  ],
  legend: {
    enabled: false,
  },
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 649,
        },
        chartOptions: {
          legend: {
            enabled: false,
          },
          plotOptions: {
            column: {
              borderWidth: 0,
              pointWidth: 20,
            },
          },
          xAxis: {
            labels: {
              style: {
                fontSize: "1rem",
              },
            },
          },
        },
      },
    ],
  },
};

export default function useChartOptions() {
  const [chartOptions, setChartOptions] = useState(options);
  const temperatureUnit = useSelector(getTemperatureUnit);
  const visibleBars = useSelector(getVisibleBars);

  useEffect(() => {
    const barsWIthUnits = visibleBars.map(
      (item) => `${item} ${temperatureUnit}`
    );
    const newOptions = {
      ...options,
      series: { data: visibleBars },
      xAxis: { categories: barsWIthUnits },
    };

    setChartOptions(newOptions);
  }, [visibleBars, temperatureUnit]);

  return chartOptions;
}
