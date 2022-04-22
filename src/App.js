import "./App.css";

import fetch from "isomorphic-unfetch";

// const metascraper = require("metascraper")([require("metascraper-image")()]);

// const got = require("got");

const targetUrl =
  "https://gomakethings.com/getting-html-with-fetch-in-vanilla-js/";

let headers = new Headers();

headers.append("Content-Type", "text/html");
headers.append("Accept", "text/html");

headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
headers.append("Access-Control-Allow-Credentials", "true");

headers.append("GET", "POST", "OPTIONS");

function App() {
  const fetchUrlImage = async () => {
    const r = await fetch(targetUrl, {
      mode: "no-cors",
      referrerPolicy: "no-referrer",
      headers: {
        "Content-Type": "text/html",
        "Access-Control-Allow-Headers": "*",
      },
    })
      .then(function (response) {
        // The API call was successful!
        console.log("response", response);
        return response.json();
      })
      .then(function (data) {
        // This is the JSON from our response
        console.log("DATA", data);
        return data;
      })
      .catch(function (err) {
        // There was an error
        console.warn("Something went wrong.", err);
      });

    console.log("r---", r);

    fetch("https://sv443.net/jokeapi/v2/joke/Programming")
      // Convert response to JSON format
      .then((response) => response.json())
      // Log the response JSON
      .then((jsonData) => console.log(jsonData))
      .catch((error) => {
        // If promise gets rejected
        // log the error to console
        console.log(error);
      });

    // const urlString = targetUrl.trim();
    // console.log("headers", headers);
    // const response = await fetch(urlString, {
    //   mode: "no-cors",
    //   referrerPolicy: "no-referrer",
    //   headers: {
    //     "Content-Type": "text/html",
    //     "Access-Control-Allow-Headers": "*",
    //   },
    // });
    // const content = response.text();

    // console.log("RESPONSE", response);
    // console.log("CONTENT", content);
  };

  // const test = async () => {
  //   await fetch(targetUrl, { mode: "no-cors" });
  // };

  // try {
  //   const response = test();
  //   if (!response.ok) {
  //     throw Error(`${response.status} ${response.statusText}`);
  //   }
  //   // Read the response as json.
  //   console.log("TEST", response);
  // } catch (error) {
  //   console.log("Looks like there was a problem: ", error);
  // }

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
