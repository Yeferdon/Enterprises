import React from "react";
import APIUrl from "../utils/APIUrl";
import {useEffect, useState} from "react";
import dinamicTitle from "../utils/dinamicTitle";

const Enterprises = () => {
  dinamicTitle("YeferDon | Enterprises");
  const [data, setData] = useState([]);

  useEffect(() => {
    APIUrl.get().then((result) => {
      setData(result.data);
    });
  }, []);
  console.log(data);

  return (
    <main className="container">
      <div className="contend">
        <h1>List of Enterprises Global</h1>
        <ul className="list-unstyled d-flex mt-5">
          {data.map((enterprise, i) => {
            return (
              <li key={i} className="mx-2">
                <div className="card">
                  <div className="card-header">{enterprise.name}</div>
                  <div className="card-body">{enterprise.description}</div>
                  <div className="card-footer">
                    <button className="btn btn-outline-dark">
                      Like
                      <i className="bi bi-star-fill mx-2"></i>
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Enterprises;
