import React from "react";
import RegisterEnterprises from "../components/RegisterEnterprises";
import TableEnterprises from "../components/TableEnterprises";

const Manager = () => {
  return (
    <main className="container ">
      <div className="contend">
        <h1>
          Manager Pages <i className="bi bi-key"></i>
        </h1>
        <RegisterEnterprises />
        <TableEnterprises />
      </div>
    </main>
  );
};

export default Manager;
