import React from "react";

export default function Profile(props) {
  return (
    <>
      {/* Create a Bootstrap card*/}
      <div className="card container">
        <div className="profile">
          {/* Add an image at the top section of the card */}
          <img src={props.image} width="1000" />

          <div className="card-body">
            {/* Display my full name as the card title */}
            <h2>{props.fullName}</h2>
            <h3>{props.profession}</h3>
            {/* Provide some description */}
            <p className="card-text">{props.bio}</p>
            <a href="#" className="btn">
              See more
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
