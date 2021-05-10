/* eslint-disable react/jsx-pascal-case */
import "./App.css";
import "./css/style.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.slim.min.js";
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import All from "./components/All";
import News_series from "./components/News_series";
import MostWatched from "./components/MostWatched";
import ShowInput from "./components/ShowInput";
import News from "./components/News";
import InputVisibilityContext from "./Context";

function App() {
  return (
    <InputVisibilityContext.Provider>
      <html>
        <header>
          <h1>NetCinema</h1>
          <Navbar />
        </header>
        <Banner visibility={true} />
        <All />
        <MostWatched />
        <News />
      </html>
    </InputVisibilityContext.Provider>
  );
}

export default App;
