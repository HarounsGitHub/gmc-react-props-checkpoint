import "./App.css";
import Address from "./Component/Profile/Address";
import FullName from "./Component/Profile/FullName";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";

function App() {
  return (
    <>
      {/* Create a Bootstrap card*/}
      <div className="card container">
        {/* Add an image at the top section of the card */}
        <ProfilePhoto />
        <div className="card-body">
          {/* Display my full name as the card title */}
          <h2 className="card-title">
            <FullName />
          </h2>
          <Address />
          {/* Provide some description */}
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            dicta.
          </p>
          <a href="#" className="btn">
            See more
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
