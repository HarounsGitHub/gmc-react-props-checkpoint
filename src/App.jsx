import "./App.css";
import ProfilePicture from "./ProfilePicture.jfif";
import Address from "./Component/Profile/Address";
import FullName from "./Component/Profile/FullName";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import Profile from "./Component/Profile/Profile";

function App() {
  return (
    <>
      <Profile
        fullName="Haroun BENMAHDJOUB"
        bio="Student at Go My Code"
        profession="Web Developer"
        image={ProfilePicture}
      />
    </>
  );
}

export default App;
