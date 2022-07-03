import axios from "axios";
import React, {useState} from "react";

const RegistreEnterprises = ({id, namePrised, descriptionPrised}) => {
  const [name, setName] = useState(namePrised);
  const [description, setDescription] = useState(descriptionPrised);
  const dataSend = {name: name, description: description};
  const editEnterprise = (id) => {
    axios.put(`http://localhost:3001/enterprises/${id}`, dataSend);
    alert("Sufesully Edit");
    window.location.reload(true);
  };

  return (
    <>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Enterprise
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    value={name}
                    onChange={(event) => {
                      setName(event.currentTarget.value);
                    }}
                  />
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">
                    Description:
                  </label>
                  <textarea
                    class="form-control"
                    id="message-text"
                    value={description}
                    onChange={(event) => {
                      setDescription(event.currentTarget.value);
                    }}
                  ></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => {
                  editEnterprise(id);
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistreEnterprises;
