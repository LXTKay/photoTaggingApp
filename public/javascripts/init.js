import pictureClick from "./pictureClick.js";
import { receiveNameList } from "./communication.js";
import mapHighscore from "./mapHighscore.js";

async function initialize() {
  window.lastClickedPosition = [0, 0];

  const nameList = await receiveNameList();
  await mapHighscore();

  document.querySelector("#waldo").addEventListener("click", (e) => {
    pictureClick(e, nameList);
  });
};

initialize();