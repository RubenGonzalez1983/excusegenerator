/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function excuse() {
      let who = ["An alien", "A zombie", "A wizard", "Charlie Sheen", "Mike Tyson"];
      let action = ["smoked", "ate", "pulverized", "teletransported", "punched"];
      let what = ["my car", "the tires of my bike", "my uber driver's head", "my face", "my horse"]
      let when = [
          "when I woke up from my 5th nap of the day.",
          "on my way to a bull ride competition",
          "when I was climbing the Himalayas",
          "when I was making a hip hop album with Flo-Rida",
          ""
        ];
        let randomWhoIndex = Math.floor(Math.random() * who.length);
        let randomActionIndex = Math.floor(Math.random() * action.length);
        let randomWhatIndex = Math.floor(Math.random() * what.length);
        let randomWhenIndex = Math.floor(Math.random() * when.length);
        let excuse = who[randomWhoIndex] + " " + action[randomActionIndex] + " " + what[randomWhatIndex] + " " + when[randomWhenIndex]
        return excuse;
        console.log(excuse);
    }
    let p = document.getElementById("excuse");
    p.innerHTML = excuse()
  }
  console.log("Hello Rigo from the console!");
};
