import {apiURL} from "./config.js";
import {getAuthCookie, putAuthCookie} from "./authCookie.js";

async function submitAnswer(selectedName, position){
  try{
    const authCookie = getAuthCookie();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: selectedName,
        position: position
      })
    };
    if(authCookie) options.headers["Authorization"] = authCookie;
    const response = await fetch(apiURL + "submit", options);
    const data = await response.json();
    /* Expected response: {
      finished: boolean
      correctSubmission: boolean
      token: optional
    } */
    if(data.token) putAuthCookie(data.token);
    return data;
  }catch(error){
    const data = {
      finished: false,
      correctSubmission: false
    };
    console.log("Server request failed!");
    console.log(error);
    return data;
  }
};

export {submitAnswer};