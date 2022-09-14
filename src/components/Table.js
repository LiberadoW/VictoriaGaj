import React from "react";
import "../styles/Table.css";

const Table = ({scores}) => {
  const slicedArr = scores.result.slice(1);
  const newArr = [];
  slicedArr.forEach((element) => {
    const parts = element[element.length - 1].split("-", 2);
    const goalsBalance = parts[0] - parts[1];
    const arrayToPush = [];
    arrayToPush.push(element.slice(0, 4));
    arrayToPush[0].push(goalsBalance);
    newArr.push(arrayToPush);
  });

  return (
    <div className="score-table">
      <table>
        <thead>
          <tr className="table-header">
            <th colSpan={5}>Tabela ligowa</th>
          </tr>
          <tr className="table-legend">
            <th>#</th>
            <th>Klub</th>
            <th>M</th>
            <th>Pkt</th>
            <th>+/-</th>
          </tr>
        </thead>
        <tbody>
          {newArr.map((item,index) => (
            
            <tr key={index}>
              {item[0].map((value,index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
