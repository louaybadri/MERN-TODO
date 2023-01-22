import { useState } from "react";

function Item(props) {
  const [newVal, setnewVal] = useState("");
  return (
    <div className="">
      <div>{props.value.item}</div>

      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Update
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="text-primary modal-title fs-5"
                id="exampleModalLabel"
              >
                Insert The New Value
              </h1>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <input
                className="form-control"
                type="text"
                placeholder="New Value"
                aria-label="default input example"
                onChange={(e) => {
                  setnewVal(e.target.value);
                }}
              ></input>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  if (newVal !== "") props.update(props.value._id, newVal);
                }}
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        className="btn btn-danger"
        onClick={() => {
          props.delete(props.value._id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Item;
