import "./App.css";

import fetch from "node-fetch";
import { useState } from "react";

import fetchMeta from "fetch-meta-tags";

// const metascraper = require("metascraper")([require("metascraper-image")()]);

// const got = require("got");

const targetUrl =
  "https://gomakethings.com/getting-html-with-fetch-in-vanilla-js/";

let headers = new Headers();

headers.append("Content-Type", "text/html");
headers.append("Accept", "text/html");

headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
headers.append("Access-Control-Allow-Credentials", "true");

headers.append("GET", "OPTIONS");

function App() {
  const [inputFetchResponse, setInputFetchResponse] = useState("");

  const fetchUrlImage = async () => {
    const response = await fetch(targetUrl, {
      mode: "no-cors",
      referrerPolicy: "no-referrer",
      headers,
      method: "GET",
    });

    setInputFetchResponse(await response.text());
    console.log("--- response---", response, inputFetchResponse);

    fetch("https://sv443.net/jokeapi/v2/joke/Programming", {
      mode: "no-cors",
      method: "GET",
      headers: { "Content-Type": "text/html" },
    })
      // Convert response to JSON format
      .then((response) => response.text())
      // Log the response JSON
      .then((jsonData) => console.log("thing", jsonData))
      .catch((error) => {
        // If promise gets rejected
        // log the error to console
        console.log(error);
      });

    const fetchMetaResponse = await fetchMeta("https://luisc.xyz");
    console.log("fetchMetaResponse", fetchMetaResponse, {
      mode: "no-cors",
      method: "GET",
      headers: { "Content-Type": "text/html" },
    });
  };

  return (
    <div className="App">
      <label for="url">URL:</label>
      <input type="text" id="url" name="url" />
      <button type="button" onClick={fetchUrlImage}>
        Fetch
      </button>
      <div>
        <p>Response</p>
        <p>{inputFetchResponse}</p>
      </div>
    </div>
  );
}

export default App;
