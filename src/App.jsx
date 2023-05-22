import "./App.css";
import ProfilePicture from "./ProfilePicture.jfif";
import Profile from "./Component/Profile/Profile";

function App() {
  const handleName = () => {
    alert(Profile.defaultProps.fullName);
  };
  return (
    <>
      <Profile
        fullName="Haroun BENMAHDJOUB"
        bio="Student at Go My Code"
        profession="Web Developer"
        image={ProfilePicture}
        handleName={handleName}
      />
      {/* The code below is to test if whatever reason values are not set here then
      the default values specified in the defaultProps of the Profile component will be used instead */}
      {/* <Profile
        fullName={undefined}
        bio={undefined}
        profession={undefined}
        image={ProfilePicture}
        handleName={() => handleName("")}
      /> */}
    </>
  );
}

export default App;
