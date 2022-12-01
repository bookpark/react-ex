import axios from "axios";
import { useState } from "react";

function SubwayAPI() {
  const [row, setRow] = useState([]);
  const apiRequest = () => {
    axios
      .get(
        "http://openapi.seoul.go.kr:8088/5458494e63626b623130314d4e734f77/json/CardSubwayStatsNew/1/100/20221101"
      )
      .then((response) => {
        console.log(response.data.CardSubwayStatsNew.row);
        setRow(response.data.CardSubwayStatsNew.row);
      })
      .catch((error) => {});
  };
  return (
    <>
      <button onClick={apiRequest}>데이터 가져오기</button>
      <br />
      <table>
        <thead>
          <tr>
            <th>날짜</th>
            <th>호선</th>
            <th>역이름</th>
            <th>승차인원수</th>
            <th>하차인원수</th>
          </tr>
        </thead>
        <tbody>
          {row.map((item) => (
            <tr key={item.RIDE_PASGR_NUM}>
              <td>{item.USE_DT}</td>
              <td>{item.LINE_NUM}</td>
              <td>{item.SUB_STA_NM}</td>
              <td>{item.RIDE_PASGR_NUM}</td>
              <td>{item.WORK_DT}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default SubwayAPI;
