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
var t3 = document.createTextNode("Try to talk to him");
var t4 = document.createTextNode("Leave the room");
var t5 = document.createTextNode("Intervene the 'euthanasia' ");
var t6 = document.createTextNode("Try to leave");
var t7 = document.createTextNode("Talk him out of it");
var t8 = document.createTextNode("Let him do it");
var t9 = document.createTextNode("Put him out of his misery");
var t10 = document.createTextNode("Leave him to his own devices");
var t11 = document.createTextNode("");
var t12 = document.createTextNode("");
var t13 = document.createTextNode("Run from the room");
var t14 = document.createTextNode("Call for help");
var t15 = document.createTextNode("");
var s2 = document.createTextNode("Along the hallway you find a room and it says, 'Solitary Confinement.' Inside, there is a man in a straitjacket staring into the corner with indifferent eyes, a noose and chair in the middle of the room. There is a knife in the middle of the room and you pick it up. Do you?");
var s3 = document.createTextNode("Along the hallway you find a room and it says, 'ER.' You head inside and the sight you see shocks you. The room is dark except the center and you see a group of people huddling around an operating table. The people are trying to save a man with a disease. 'It seems the patient is diagnosed with leprosy' one said 'Is that so?' he sighed. 'It's a shame we can't cure him, we should just put him out of his misery,' the other said. You know for a fact that leprosy can be cured. These doctors seem to be intentionally trying to kill that man. Do you? ");
var s4 = document.createTextNode("You try to speak with the man but it is futile as he is still staring at the corner. ' The scariest part is that Knowing that it will all end with no warning, there is no point in trying anymore. Right? ' You can't tell whether or not he is talking to you or to himself. He moves toward the noose in the middle of the room. Do you? ");
var s5 = document.createTextNode("You try to leave the room but the door closes and locks. You desperately try to open the door but it won't show any signs of budging. You hold the knife close to you and turn around. The man is standing up and staring at you with malevolent eyes. ' At least, I will have someone to die in vain with. I want out and so do you, so let's make it quick. Your life and mine's will both be wasted because of this damned experiment. ' He was released from his straitjacket as if someone did it on purpose. He quickly grabs the knife out of your hand and knocks you out. He takes your body and hangs you by the noose. He proceeds to stab himself in the stomach and you both die. BAD END, retry for a different ending by refreshing the page!");
var s6 = document.createTextNode("You object to the group of doctor's actions and say that leprosy is a cureable disease. They respond, ' Good job test subject. You were able to avoid falling into the Bystander effect. We, the organizers of the experiment, would like to thank you of your efforts in this psychology experiment. As promised, we will shorten your time by 10 years. ' GOOD END, if you would like to get a different ending, just refresh the page.  ");
var s7 = document.createTextNode("");
var s8 = document.createTextNode("");
var s9 = document.createTextNode("");
var scenario1 = document.getElementById("scenario1");
var scenario2 = document.createElement(scenario2);
var scenario3 = document.createElement(scenario3);
var scenario4 = document.createElement(scenario4);
var scenario5 = document.createElement(scenario5);
var scenario6 = document.createElement(scenario6);
var scenario7 = document.createElement(scenario7);

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
    scenario5.appendChild(s5);
    document.body.appendChild(scenario5);
});



choice5.addEventListener("click",function(){
    choice1.style.display = "none";
    choice2.style.display = "none";
    choice5.style.display = "none";
    choice6.style.display = "none";
    scenario2.style.display = "none";
    scenario3.style.display = "none";
    scenario6.appendChild(s6);
    document.body.appendChild(scenario6);
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

