import "./App.css";

import fetch from "isomorphic-unfetch";

// const metascraper = require("metascraper")([require("metascraper-image")()]);

// const got = require("got");

const targetUrl =
  "https://gomakethings.com/getting-html-with-fetch-in-vanilla-js";

function App() {
  const fetchUrlImage = async () => {
    fetch(targetUrl, { mode: "cors" })
      .then(function (response) {
        // The API call was successful!
        return response.text();
      })
      .then(function (data) {
        // This is the JSON from our response
        console.log("DATA", data);
      })
      .catch(function (err) {
        // There was an error
        console.warn("Something went wrong.", err);
      });

    const urlString = targetUrl.trim();

    const response = await fetch(urlString, {
      mode: "no-cors",
      header: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    const content = await response.json();

    console.log("RESPONSE", response);
    console.log("CONTENT", content);
  };

  const test = async () => {
    await fetch(targetUrl);
  };

  try {
    const response = test();
    if (!response.ok) {
      throw Error(`${response.status} ${response.statusText}`);
    }
    // Read the response as json.
    console.log("TEST", response);
  } catch (error) {
    console.log("Looks like there was a problem: ", error);
  }

  return (
    <div className="App">
      <label for="url">URL:</label>
      <input type="text" id="url" name="url" />
      <button type="button" onClick={fetchUrlImage}>
        Fetch
      </button>
    </div>
  );
}

export default App;
