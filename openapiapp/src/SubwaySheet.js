function SubwaySheet({ row }) {
  return (
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
            <td>{item.ALIGHT_PASGR_NUM}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SubwaySheet;
