import React from "react";
import APIUrl from "../utils/APIUrl";
import {useEffect, useState} from "react";
import dinamicTitle from "../utils/dinamicTitle";
import axios from "axios";
import EditEnterprises from "./EditEnterprises";

const TableEnterprises = () => {
  dinamicTitle("Manager Enterprises");
  const [data, setData] = useState([]);
  const eraseEnterprise = (id) => {
    axios.delete(`http://localhost:3001/enterprises/${id}`);
    window.location.reload(true);
  };

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
              <>
                <tr key={i}>
                  <th scope="row">{col.id}</th>
                  <th scope="row">{col.name}</th>
                  <td>{col.description}</td>
                  <td>
                    <i className="bi bi-check2-all text-success"></i>
                  </td>
                  <td>
                    <i
                      className="bi bi-pencil-square"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      data-bs-whatever="@mdo"
                    ></i>
                  </td>
                  <td>
                    <i
                      className="bi bi-bookmark-x text-danger"
                      onClick={() => {
                        eraseEnterprise(col.id);
                      }}
                    ></i>
                  </td>
                </tr>
                <EditEnterprises
                  id={col.id}
                  namePrised={col.name}
                  descriptionPrised={col.description}
                />
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TableEnterprises;
