import React from "react";
import APIUrl from "../utils/APIUrl";
import {useEffect, useState} from "react";
import dinamicTitle from "../utils/dinamicTitle";

const TableEnterprises = () => {
  dinamicTitle("Manager Enterprises");
  const [data, setData] = useState([]);

  useEffect(() => {
    APIUrl.get().then((result) => {
      setData(result.data);
    });
  }, []);

  return (
    <>
      <table className="table shadow ">
        <tbody>
          {data.map((col, i) => {
            return (
              <tr key={i}>
                <th scope="row">{col.id}</th>
                <th scope="row">{col.name}</th>
                <td>{col.description}</td>
                <td>Active</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TableEnterprises;
