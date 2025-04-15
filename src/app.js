import "bootstrap";
import "./style.css";

window.onload = function() {

  let who = ['My lights', 'My dog', 'My brother', 'My Gilfriend', 'My parents'];
  let action = [' Went out', ' Ate', ' Stole', ' Destroyed', ' Threw Away']; 
  let task = [' Lights', ' Homework', ' Tax Document', ' Work', ' Medicine']; 
  let time = [' Today', ' Yesterday', ' This week', ' Tomorrow'];
  
  
  let randomwho = Math.floor(Math.random() * who.length);
  let randomaction = Math.floor(Math.random() * action.length);
  let randomtask = Math.floor(Math.random() * task.length);
  let randomtime = Math.floor(Math.random() * time.length);
  
  document.getElementById("excuse").innerText = who[randomwho] + action[randomaction] + task [randomtask] + time[randomtime];


};
