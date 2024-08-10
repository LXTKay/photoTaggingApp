import {apiURL} from "./config.js";
import {getAuthCookie, putAuthCookie} from "./authCookie.js";
import mockNameList from "./mockNameList.js";

async function submitName(name){
  try{
    const authCookie = getAuthCookie();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name: name}),
    };
    if(authCookie) options.headers["Authorization"] = authCookie;

    const response = await fetch(apiURL + "names", options);
    const data = await response.json();
    /* Expected response: {success: boolean, message: string} */
    return data;
  }catch(error){
    console.log("Server request failed!");
    console.log(error);
    return {message: error.message};
  }
};

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
    } */
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

async function receiveNameList(){
  try{
    const response = await fetch(apiURL + "names");
    const data = await response.json();
    putAuthCookie(data.token);
    const nameList = data.nameList;
    return nameList;
  }catch(error){
    console.log("Server request failed!");
    console.log(error);
    return mockNameList;
  }
}

export {submitAnswer, receiveNameList, submitName};