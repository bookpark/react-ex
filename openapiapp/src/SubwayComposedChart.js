import { useState, useEffect } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  Line,
  ComposedChart,
} from "recharts";

function SubwayComposedChart({ row }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(
      row.map((item) => ({
        역이름: item.SUB_STA_NM,
        승차인원수: item.RIDE_PASGR_NUM,
        하차인원수: item.ALIGHT_PASGR_NUM,
        유동인구수: item.RIDE_PASGR_NUM + item.ALIGHT_PASGR_NUM,
      }))
    );
  }, []);

  return (
    <ComposedChart
      width={1000}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray={"3 3"} />
      <XAxis dataKey={"역이름"} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey={"유동인구수"} fill="#82ca9d" />
      <Line type="monotone" dataKey={"승차인원수"} stroke="#FF7300" />
      <Line type="monotone" dataKey={"하차인원수"} stroke="#8884D8" />
    </ComposedChart>
  );
}

export default SubwayComposedChart;
