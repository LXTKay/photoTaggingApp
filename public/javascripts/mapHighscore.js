import { receiveHighScore } from "./communication.js";

export default async function mapHighscore() {
  const scoreboard = document.querySelector(".scoreboard");

  const highScoreList = await receiveHighScore();
  const highScoreContainer = document.createElement("ol");

  highScoreList.forEach(user => {
    const highScorePosition = document.createElement("li");
    const position = document.createElement("div");
    position.classList.add("highScorePosition");

    const name = document.createElement("div");
    name.innerText = user.name + ": ";

    const time = document.createElement("div");
    time.innerText = user.time + "s";

    position.append(name);
    position.append(time);

    highScorePosition.append(position);
    highScoreContainer.append(highScorePosition);
  })
  scoreboard.append(highScoreContainer);
};