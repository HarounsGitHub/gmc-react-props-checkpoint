import React from "react";
import PropTypes from "prop-types";

// Using destructuring assignment to extract the props passed to the function component
export default function Profile({
  fullName,
  bio,
  profession,
  image,
  handleName,
}) {
  // Inline styles using JavaScript objects with camelCase property names
  /* Style the card */
  const cardStyles = {
    height: "100%",
    padding: "1.5em 0.5em 0.5em",
    borderRadius: "2em",
    textAlign: "center",
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
    maxWidth: "500px",
  };

  /* Style the image within the card */
  const imageStyles = {
    width: "300px",
    borderRadius: "50%",
    margin: "0 auto",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  };

  /* Style the card title */

  const titleStyles = {
    fontWeight: "700",
    fontSize: "1.5em",
  };
  // Button styling & its hover
  const buttonStyles = {
    borderRadius: "2em",
    backgroundColor: "teal",
    color: "#ffffff",
    padding: "0.2em 1.3em",
    fontSize: "25px",
  };

  const buttonHoverStyles = {
    backgroundColor: "rgba(0, 128, 128, 0.7)",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  };

  return (
    <>
      {/* Create a Bootstrap card*/}
      <div className="card container" style={cardStyles}>
        <div className="profile">
          {/* Add an image at the top section of the card */}
          <img src={image} alt="Profile picture" style={imageStyles} />

          <div className="card-body">
            {/* Display my full name as the card title */}
            {/* Set style of <h2> element to include titleStyles properties and color property to "blue". 
            The spread operator is used to merge both*/}
            <h2 style={{ ...titleStyles, color: "blue" }}>{fullName}</h2>
            <h3>{profession}</h3>
            {/* Provide some description */}
            <p className="card-text">{bio}</p>
            {/* Apply inline styles to the <a> element using the spread operator.
                 Merge the properties from the buttonStyles and buttonHoverStyles objects.
                   Set the onClick event handler to the handleName function.
            */}
            <a
              href="#"
              className="btn"
              style={{ ...buttonStyles, ...buttonHoverStyles }}
              onClick={handleName}
            >
              Check my name
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

// if any of these props are not provided or have an incorrect type, a warning will be shown in the console.
Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  handleName: PropTypes.func.isRequired,
};

// If any of these props are not provided when using the Profile component, the default values specified in Profile.defaultProps will be used instead
Profile.defaultProps = {
  fullName: "Haroun BENMAHDJOUB",
  bio: "FullStack JS Student at Go My Code - No further info available",
  profession: "Unknown",
};
