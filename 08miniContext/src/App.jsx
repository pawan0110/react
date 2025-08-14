import "./App.css";
import UserContextProvider from "./context/UserContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <h1> react context</h1>
      </UserContextProvider>
    </>
  );
}

export default App;
