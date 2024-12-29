import React from "react";
import "./ManagementCard.css";

function ManagementCard({ person }) {
  return (
    <div className="management-card">
      <img src={person.img} alt={person.name} />
      <h3>{person.name}</h3>
      <p>{person.department}</p>
      <span className="role">{person.role}</span>
    </div>
  );
}

export default ManagementCard;
