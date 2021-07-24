import React from "react";
import { Table } from "react-bootstrap";
import moment from "moment";

function TableComponent({ tableData }) {
  const defaultValue = "-";
  const rows = Object.keys(tableData).map((x, index) => {
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{x}</td>
        <td>{tableData[x].mac_address || defaultValue}</td>
        <td>{tableData[x].os || defaultValue}</td>
        <td>
          <span
            style={{
              display: "inline-block",
              borderRadius: "50%",
              height: "20px",
              width: "20px",
              backgroundColor: tableData[x].last_seen.status === 'online' ? '#0ffc03' : 'red',
              marginRight: "10px",
            }}
          ></span>
          {`${moment(tableData[x].last_seen.time).format('YYYY-MM-DD HH:mm:ss')}`}
        </td>
      </tr>
    );
  });
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>IP Address</th>
            <th>MAC Address</th>
            <th>Operating System</th>
            <th>Last Seen</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </>
  );
}

export default TableComponent;
