import React from "react";
import "./ManagementCard.css";

function ManagementCard({ person }) {
  return (
    <a
      key={person.name}
      href={person.link}
      target="_blank"
      rel="noopener noreferrer"
      className="card"
    >
      <img src={person.img} alt={person.name} />
      <div className="card-details">
        <div className="card-info">
          <div className="name">{person.name}</div>
          <div className="department">{person.department}</div>
        </div>
        <div className="role">{person.role}</div>
      </div>
    </a>
  );
}

export default ManagementCard;
