var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.createElement("BUTTON");
var choice4 = document.createElement("BUTTON");
var choice5 = document.createElement("BUTTON");
var choice6 = document.createElement("BUTTON");
var choice7 = document.createElement("BUTTON");
var choice8 = document.createElement("BUTTON");
var choice9 = document.createElement("BUTTON");
var choice10 = document.createElement("BUTTON");
var choice11 = document.createElement("BUTTON");
var choice12 = document.createElement("BUTTON");
var choice13 = document.createElement("BUTTON");
var choice14 = document.createElement("BUTTON");
var t3 = document.createTextNode("Trim the tree");
var t4 = document.createTextNode("Leave it alone");
var t5 = document.createTextNode("Stitch it back together");
var t6 = document.createTextNode("Leave it alone");
var t7 = document.createTextNode("Turn it off");
var t8 = document.createTextNode("Leave it alone");
var t9 = document.createTextNode("Tighten the screw");
var t10 = document.createTextNode("Leave it alone");
var t11 = document.createTextNode("Chase after it");
var t12 = document.createTextNode("Continue down the hallway");
var t13 = document.createTextNode("");
var t14 = document.createTextNode("");
var t15 = document.createTextNode("");
var s2 = document.createTextNode("Along the hallway, you see a healthy tree. Do you?");
var s3 = document.createTextNode("Along the hallway, you see a life-sized puppet falling apart that feels warm to the touch. Do you?");
var s4 = document.createTextNode("With a couple snips the tree begins to wither completely and you leave. A couple steps forward you find a radio that is on. Do you?");
var s5 = document.createTextNode("You leave the tree alone and move forward. You see a sink with a pipe that has a loose screw. Do you?");
var s6 = document.createTextNode("You stitch the puppet back together. A moment later, the puppet's mouth moves and lets out a scream. Red ooze coming from its mouth. The puppet freed itself from your grasp and ran off back where you came. Do you?");
var s7 = document.createTextNode("You blame the encounter on some suppressive meds you got when you first came.");
var s8 = document.createTextNode("");
var s9 = document.createTextNode("");
var scenario1 = document.getElementById("scenario1");
var scenario2 = document.createElement(scenario2);
var scenario3 = document.createElement(scenario3);
var scenario4 = document.createElement(scenario4);
var scenario5 = document.createElement(scenario5);
var scenario6 = document.createElement(scenario6);

choice1.addEventListener("click",function(){
    
    choice1.style.display = "none";
    choice2.style.display = "none";
    scenario1.style.display = "none";
    choice3.appendChild(t3);
    choice4.appendChild(t4);
    scenario2.appendChild(s2);
    document.body.appendChild(scenario2);
    document.body.appendChild(choice3);
    document.body.appendChild(choice4);


});

choice2.addEventListener("click",function(){
    choice1.style.display = "none";
    choice2.style.display = "none";
    choice3.style.display = "none";
    choice4.style.display = "none";
    scenario1.style.display = "none";
    scenario2.style.display = "none";
    choice5.appendChild(t5);
    choice6.appendChild(t6);
    scenario3.appendChild(s3);
    document.body.appendChild(scenario3);
    document.body.appendChild(choice5);
    document.body.appendChild(choice6);
});

choice3.addEventListener("click",function(){
    choice3.style.display = "none";
    choice4.style.display = "none";
    scenario2.style.display = "none";
    scenario3.style.display = "none";
    choice7.appendChild(t7);
    choice8.appendChild(t8);
    scenario4.appendChild(s4);
    document.body.appendChild(scenario4);
    document.body.appendChild(choice7);
    document.body.appendChild(choice8);
});

choice4.addEventListener("click",function(){
    choice3.style.display = "none";
    choice4.style.display = "none";
    scenario2.style.display = "none";
    scenario3.style.display = "none";
    choice9.appendChild(t9);
    choice10.appendChild(t10);
    scenario5.appendChild(s5);
    document.body.appendChild(scenario5);
    document.body.appendChild(choice9);
    document.body.appendChild(choice10);
});



choice5.addEventListener("click",function(){
    choice1.style.display = "none";
    choice2.style.display = "none";
    choice5.style.display = "none";
    choice6.style.display = "none";
    scenario2.style.display = "none";
    scenario3.style.display = "none";
    choice11.appendChild(t11);
    choice12.appendChild(t12);
    scenario6.appendChild(s6);
    document.body.appendChild(scenario6);
    document.body.appendChild(choice11);
    document.body.appendChild(choice12);
});

choice6.addEventListener("click",function(){
      choice1.style.display = "none";
    choice2.style.display = "none";
     choice5.style.display = "none";
    choice6.style.display = "none";
    scenario2.style.display = "none";
    scenario3.style.display = "none";
    choice13.appendChild(t13);
    choice14.appendChild(t14);
    scenario7.appendChild(s7);
    document.body.appendChild(scenario7);
    document.body.appendChild(choice13);
    document.body.appendChild(choice14);
});

