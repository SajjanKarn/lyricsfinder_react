import { useState } from "react";

import "./App.css";

import Navbar from "./components/navbar/navbar.component";
import FormInput from "./components/input-form/input-form.component.jsx";
import Footer from "./components/footer/footer.component";

import Axios from "axios";

export default function App() {
  const [userData, setUserData] = useState({
    artistName: "",
    songName: "",
  });
  const [lyrics, setLyrics] = useState(null);

  // handleOnInputChange
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  // hanldeOnSubmitForm
  const hanldeOnSubmitForm = (event) => {
    event.preventDefault();

    if (!userData.artistName || !userData.songName) {
      alert("please enter both fields!");
      return;
    }

    const data = {
      artistName: userData.artistName,
      songName: userData.songName,
    };
    Axios.post("https://findmylyrics.herokuapp.com/get/lyrics", data)
      .then((response) => {
        console.log(response.data);
        setLyrics(response.data);

        if (response.data.error) {
          alert("Lyrics not found!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="main_app">
      <Navbar brand="LYRICS-FINDER" />
      <div className="container my-4">
        <form onSubmit={hanldeOnSubmitForm}>
          <FormInput
            id="artist-input"
            type="text"
            placeholder="ENTER ARTIST NAME"
            label="ARTIST NAME"
            value={userData.artistName}
            name="artistName"
            onChange={handleInputChange}
          />
          <FormInput
            id="song-input"
            type="text"
            placeholder="ENTER SONG NAME"
            label="SONG NAME"
            value={userData.songName}
            name="songName"
            onChange={handleInputChange}
          />
          <button type="submit" class="btn btn-primary">
            SEARCH
          </button>
        </form>
      </div>

      <div className="container">
        <hr />
        <h3>lyrics will appear here.</h3>
        <hr />

        <div
          className="lyrics_container py-5"
          style={{ whiteSpace: "pre-wrap" }}
        >
          {lyrics && lyrics.lyrics !== null && (
            <h5 style={{ lineHeight: "1.5" }}>{lyrics.lyrics}</h5>
          )}
          {lyrics && lyrics.error && <h5>lyrics not found!😥</h5>}
        </div>
      </div>

      {lyrics !== null && lyrics.lyrics && <Footer />}
    </div>
  );
}
