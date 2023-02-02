import React from "react";
import { HistoryContext } from "../context/Contexts";

function AllData() {
  const { history } = React.useContext(HistoryContext);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Action</th>
          <th scope="col">Name</th>
          <th scope="col">Amount</th>
        </tr>
      </thead>
      <tbody>
        {history.map((item, index) => (
          <tr>
            <th scope="row">{index + 1}</th>
            <td>{item.action}</td>
            <td>{item.name}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AllData;
