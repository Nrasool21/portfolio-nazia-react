import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js"
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";

const App = () => {
  return (
    <>
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
          },
        }}
      />
      <Navbar />
      <Header />
    </>
  );
};

export default App;
