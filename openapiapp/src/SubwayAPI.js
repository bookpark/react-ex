import axios from "axios";
import { useState } from "react";
import SubwayAreaChart from "./SubwayAreaChart";
import SubwayBarChart from "./SubwayBarChart";
import SubwayLineChart from "./SubwayLineChart";
import SubwaySheet from "./SubwaySheet";

function SubwayAPI() {
  const [viewChart, setViewChart] = useState(false);
  const [row, setRow] = useState([]);
  const apiRequest = () => {
    axios
      .get(
        "http://openapi.seoul.go.kr:8088/5458494e63626b623130314d4e734f77/json/CardSubwayStatsNew/1/100/20221101"
      )
      .then((response) => {
        console.log(response.data.CardSubwayStatsNew.row);
        setRow(response.data.CardSubwayStatsNew.row);
        setViewChart(true);
      })
      .catch((error) => {});
  };
  return (
    <>
      <button onClick={apiRequest}>데이터 가져오기</button>
      <br />
      {viewChart && (
        <>
          <SubwaySheet row={row} />
          <br />
          <SubwayLineChart row={row} />
          <br />
          <SubwayAreaChart row={row} />
          <br />
          <SubwayBarChart row={row} />
        </>
      )}
    </>
  );
}

export default SubwayAPI;
