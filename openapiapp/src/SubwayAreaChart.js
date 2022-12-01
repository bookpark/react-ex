import { useState, useEffect } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
} from "recharts";

function SubwayAreaChart({ row }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(
      row.map((item) => ({
        역이름: item.SUB_STA_NM,
        유동인구수: item.RIDE_PASGR_NUM + item.ALIGHT_PASGR_NUM,
      }))
    );
  }, []);

  return (
    <AreaChart
      width={1000}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      style={{ margin: "0 auto" }}
    >
      <CartesianGrid strokeDasharray={"3 3"} />
      <XAxis dataKey={"역이름"} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area
        type="monotone"
        dataKey={"유동인구수"}
        stroke="#8884D8"
        activeDot={{ r: 8 }}
      />
    </AreaChart>
  );
}

export default SubwayAreaChart;
