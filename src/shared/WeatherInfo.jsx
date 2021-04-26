import { CardList } from "../features/card/CardList";
import { BarChart } from "../features/chart/BarChart";
import { Pagination } from "../features/pagination/Pagination";
import { Temperature } from "../features/temperature/Temperature";

export default function WeatherInfo() {
  return (
    <>
      <Temperature />
      <Pagination />
      <CardList />
      <BarChart />
    </>
  );
}
