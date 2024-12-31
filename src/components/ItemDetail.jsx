import React from "react";
import { useParams } from "react-router-dom";

const items = [
  { id: 1, name: "Item 1", description: "This is Item 1" },
  { id: 2, name: "Item 2", description: "This is Item 2" },
  { id: 3, name: "Item 3", description: "This is Item 3" },
];

const ItemDetail = () => {
  const { id } = useParams();
  const item = items.find((item) => item.id === parseInt(id));

  if (!item) {
    return <h2>Item not found</h2>;
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <p>Description for {item.name}</p>
    </div>
  );
};

export default ItemDetail;