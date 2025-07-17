// script.js
// JavaScript used with WPCode snippet to power the prompt generator
document.addEventListener("DOMContentLoaded", function () {
  const pidginWords = [
    "bumbai", "pau", "choke", "da kine", "ono", "no ack", "ass why",
    "fo’ real", "broke da mout", "shaka", "bondo face", "plenny", "an' den",
    "try wait", "chance ʻem", "no make stink", "small kine", "go grind", 
    "mo’ bettah", "if can, can", "no can", "talk stink", "ho da shame",
    "get bus’ up", "pilau", "beef", "hele on", "da buggah", "stea–raight",
    "come beef", "hammajang", "aisus", "aurite", "ʻauʻau", "garanz"
  ];

  const locations = [
    "Ala Moana parking lot", "Zippy’s counter", "Donkey trail", "Queen’s Beach",
    "Waikīkī wall", "Uncle’s garage", "Costco parking lot", "Lēʻahi trail",
    "Back of the bus", "Lanai airport", "Punchbowl steps", "Kam Shopping Center",
    "Pali Lookout", "Kaimukī park", "Helemano road", "Ke‘ehi Lagoon",
    "Waiʻanae boat harbor", "Kaheka bus stop", "Salt Lake 7-Eleven", 
    "Under the monkeypod tree"
  ];

  const activities = [
    "grind musubi", "play ʻukulele", "take shoes off", "get lickins", "bocha",
    "pound poi", "pick limu", "ride da bus", "throw net", "steam rice",
    "play hanafuda", "get shave ice", "pack bento", "put on rubber slippahs",
    "wash car", "clean da opihi", "cook rice", "go sleep", 
    "mix shoyu + ketchup", "listen to auntie talk story"
  ];

  function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  window.generatePrompt = function () {
    const pidgin = randomItem(pidginWords);
    const location = randomItem(locations);
    const activity = randomItem(activities);
    const output = `${pidgin} — ${location} — ${activity}`;
    document.getElementById("prompt").innerHTML = output;
  };

  window.copyPrompt = function () {
    const promptText = document.getElementById("prompt").innerText;
    if (!promptText) return;
    navigator.clipboard.writeText(promptText).then(() => {
      const copiedNotice = document.createElement("div");
      copiedNotice.innerText = "Prompt copied!";
      copiedNotice.style.position = "fixed";
      copiedNotice.style.bottom = "20px";
      copiedNotice.style.left = "50%";
      copiedNotice.style.transform = "translateX(-50%)";
      copiedNotice.style.background = "#444";
      copiedNotice.style.color = "white";
      copiedNotice.style.padding = "8px 16px";
      copiedNotice.style.borderRadius = "4px";
      copiedNotice.style.zIndex = 1000;
      copiedNotice.style.fontSize = "14px";
      document.body.appendChild(copiedNotice);
      setTimeout(() => {
        document.body.removeChild(copiedNotice);
      }, 1500);
    });
  };
});