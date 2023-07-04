import React, { useReducer, useState } from "react";

const initialState = {
  items: [],
  currentItem: {
    id: "",
    name: "",
    email: "",
  },
};


const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "EDIT_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "SET_CURRENT_ITEM":
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

const TableForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isEditing, setIsEditing] = useState(false);

  const { items, currentItem } = state;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "SET_CURRENT_ITEM",
      payload: {
        ...currentItem,
        [name]: value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      dispatch({ type: "EDIT_ITEM", payload: currentItem });
    } else {
      dispatch({ type: "ADD_ITEM", payload: currentItem });
    }
    clearForm();
  };

  const handleEdit = (item) => {
    setIsEditing(true);
    dispatch({ type: "SET_CURRENT_ITEM", payload: item });
  };

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearForm = () => {
    setIsEditing(false);
    dispatch({
      type: "SET_CURRENT_ITEM",
      payload: { id: "", name: "", email: "" },
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{textAlign: 'center'}}>
        <label>
          ID:
          <input type="text" name="id" value={currentItem.id} onChange={handleInputChange}/>
        </label>

        <label>
          Name:
          <input type="text" name="name" value={currentItem.name} onChange={handleInputChange}/>
        </label>

        <label>
          Email:
          <input type="email" name="email" value={currentItem.email} onChange={handleInputChange}/>
        </label>

        <button type="submit">{isEditing ? "Edit" : "Add"}</button>
        <button type="button" onClick={clearForm}>Clear</button>

      </form>
      <table >
        <thead >
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableForm;
