import logo from "./logo.svg";
import "./App.css";
import Item from "./item";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [items, setItems] = useState([]);
  const [itemText, setItemText] = useState("");

  //getting all items
  let getAllItems = async () => {
    await axios
      .get("http://localhost:5000/api/item/")
      .then((res) => setItems(res.data))
      .catch((err) => console.error(err));
  };
  //add new post
  let addItem = async (e) => {
    e.preventDefault();
    if (itemText !== "") {
      await axios
        .post("http://localhost:5000/api/item/", { item: itemText })
        .then((res) => console.log("Item Added Successfully"))
        .catch((err) => console.error(err));
      setItemText("");
    }
  };
  //deleteItem
  let deleteItem = async (id) => {
    // console.log(items);
    await axios
      .delete("http://localhost:5000/api/item/" + id)
      .then((res) => console.log("item Deleted Successfully"))
      .catch((err) => console.error(err));
  };

  //update item
  let updateItem = async (id, newVal) => {
    axios
      .put("http://localhost:5000/api/item/" + id, { item: newVal })
      .then((res) => console.log("Updated SUCCESSFULLY"))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAllItems();
  });
  return (
    <div className="App ">
      <header className="App-header">
        <form className="row g-3 needs-validation" onSubmit={(e) => addItem(e)}>
          <div className="col-md-12">
            <label className="form-label">Add TODO</label>
            <input
              onChange={(e) => {
                setItemText(e.target.value);
              }}
              placeholder="Enter Your TODO here"
              type="text"
              className="form-control"
              value={itemText}
              required
            ></input>
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Add
            </button>
          </div>
        </form>
        {items.length !== 0 ? (
          items.map((e, i) => (
            <Item
              key={i.toString()}
              value={e}
              delete={deleteItem}
              update={updateItem}
            />
          ))
        ) : (
          <div className="alert alert-success">Empty List</div>
        )}
      </header>
    </div>
  );
}

export default App;
