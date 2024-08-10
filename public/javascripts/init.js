import pictureClick from "./pictureClick.js";
import { receiveNameList } from "./communication.js";

async function initialize(){
  window.lastClickedPosition = [0,0];

  const nameList = await receiveNameList();

  document.querySelector("#waldo").addEventListener("click", (e)=>{    
    pictureClick(e, nameList);
  });
};

initialize();