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
// These variables are the buttons for the game.
var t3 = document.createTextNode("Try to talk to him");
var t4 = document.createTextNode("Leave the room");
var t5 = document.createTextNode("Intervene the 'euthanasia'");
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
//These are the text values that were used for the buttons
var s2 = document.createTextNode("Along the hallway you find a room and it says, 'Solitary Confinement.' Inside, there is a man in a straitjacket staring into the corner with indifferent eyes, a noose and chair in the middle of the room. There is a knife in the middle of the room and you pick it up. Do you?");
var s3 = document.createTextNode("Along the hallway you find a room and it says, 'ER.' You head inside and the sight you see shocks you. The room is dark except the center and you see a group of people huddling around an operating table. The people are trying to save a man with a disease. 'It seems the patient is diagnosed with leprosy' one said 'Is that so?' he sighed. 'It's a shame we can't cure him, we should just put him out of his misery,' the other said. You know for a fact that leprosy can be cured. These doctors seem to be intentionally trying to kill that man. Do you? ");
var s4 = document.createTextNode("You try to speak with the man but it is futile as he is still staring at the corner. ' The scariest part is that knowing that it will all end with no warning, there is no point in trying anymore. Right? ' You can't tell whether or not he is talking to you or to himself. He moves toward the noose in the middle of the room. Do you? ");
var s5 = document.createTextNode("You try to leave the room but the door closes and locks. You desperately try to open the door but it won't show any signs of budging. You hold the knife close to you and turn around. The man is standing up and staring at you with malevolent eyes. ' At least, I will have someone to die in vain with. I want out and so do you, so let's make it quick. Your life and mine's will both be wasted because of this damned experiment. ' He was released from his straitjacket as if someone did it on purpose. He quickly grabs the knife out of your hand and knocks you out. He takes your body and hangs you by the noose. He proceeds to stab himself in the stomach and you both die. BAD END, retry for a different ending by refreshing the page!");
var s6 = document.createTextNode("You object to the group of doctor's actions and say that leprosy is a cureable disease. They respond, ' Good job test subject. You were able to avoid falling into the Bystander effect. We, the organizers of the experiment, would like to thank you of your efforts in this psychology experiment. As promised, we will shorten your time by 10 years. ' GOOD END, if you would like to get a different ending, just refresh the page.  ");
var s7 = document.createTextNode("You reason with the man. 'Suicide is never the answer, there is nothing to be gained from throwing your life away. It's not about how hard you can hit, it's about how hard you can get hit and keep moving forward. How much you can take and keep moving forward,' you say. 'He replies, the pathway to hell is paved with screwed intentions. I am no exception to the beliefs of the masses. I have no place in this world, and neither will I have any significance either,' he says. 'Fine you can kill yourself, but only when I have given up on you,' you say. A man with a labcoat and glasses comes into the room. 'Thank you test subjects X-21 and TC-130. We would love to thank you for your contribution to our experiment. Have a good day now.' We exited the building without the foggiest thing at what happened. GOOD END, if you would like to try a new ending, then refresh the page.");
var s8 = document.createTextNode("You watch in satisfaction as his lifeless eyes put the noose around his neck. He was practically made for it. He then stands on the chair and kicks it over. His eyes widened with desperation as he saw his foolish mistake. He gags and chokes as you stand there with a deep stare. He dies from asphyxiation and his body just sways back and forth. You chuckle at the sight. You leave your sanity with him. BAD END, if you would like to retry for a different ending then refresh the page. ");
var s9 = document.createTextNode("You ran from the room. You don't stop and just keep running down the hall. The lights start to get dimmer and dimmer. The power in deeper parts of the hospital must be running out. Lights start to flicker on and off and you come to a dead end. You turn around. 'Why, why didn't you save me?' a voice down the hall says. His body comes under light. His body is completely mangled. His right arm is torn off and his body looks more like a pile of gurgling intestines all over. It was the man from the ER. 'Why didn't you help me? I could've been saved. But no, you only care about yourself. Well, call help. Nobody will come to help you now.' Only screams could be heard from that hallway. BAD END, if you would like a different ending then refresh the page!");
var s10 = document.createTextNode("You ran back where you came and you find some people and explain the situation. They join you and you all head back into the ER to apprehend the criminals. You step forward to show you are the leader of the group and the doors shut behind your group. 'You came back, let's see if someone will help you,' the doctors had said. You are grabbed from behind by your 'teammates' and pinned. 'Let's perform and experiment shall we?' You are attached to the table, unable to move. They huddle around you. Your life in the fate of another's hands. TO BE CONTINUED END, if you would like to retry for a different ending then refresh the page.");
var s11 = document.createTextNode("You burst out of the room and start to panic. You can't go back in there. Who knows what they might be doing? What do you do in this situation? You hear the whirring and sawing of a machine accompanied by screams. Do you?");
//These are the text values used for the scenario that happened because of your choices
var scenario1 = document.getElementById("scenario1");
var scenario2 = document.createElement(scenario2);
var scenario3 = document.createElement(scenario3);
var scenario4 = document.createElement(scenario4);
var scenario5 = document.createElement(scenario5);
var scenario6 = document.createElement(scenario6);
var scenario7 = document.createElement(scenario7);
var scenario8 = document.createElement(scenario8);
var scenario9 = document.createElement(scenario9);
var scenario10 = document.createElement(scenario10);
var scenario11 = document.createElement(scenario11);
//These are the variables that will have text values put into them.

//Below are the functions that trigger the next event when you click on the buttons.
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
    scenario11.appendChild(s11);
    document.body.appendChild(scenario11);
    document.body.appendChild(choice13);
    document.body.appendChild(choice14);
});

choice7.addEventListener("click",function(){
    choice7.style.display= "none";
    choice8.style.display= "none";
    choice5.style.display= "none";
    choice6.style.display= "none";
    scenario4.style.display = "none";
    scenario7.appendChild(s7);
    document.body.appendChild(scenario7);
});

choice8.addEventListener("click",function(){
    choice7.style.display= "none";
    choice8.style.display= "none";
    choice5.style.display= "none";
    choice6.style.display= "none";
    scenario4.style.display = "none";
    scenario8.appendChild(s8);
    document.body.appendChild(scenario8);
});
choice13.addEventListener("click",function(){
    choice5.style.display= "none";
    choice6.style.display= "none";
    choice13.style.display= "none";
    choice14.style.display= "none";
    scenario6.style.display= "none";
    scenario11.style.display= "none";
    scenario9.appendChild(s9);
    document.body.appendChild(scenario9)
});
choice14.addEventListener("click",function(){
    choice5.style.display= "none";
    choice6.style.display= "none";
    choice13.style.display= "none";
    choice14.style.display= "none";
    scenario6.style.display= "none";
     scenario11.style.display= "none";
    scenario10.appendChild(s10);
    document.body.appendChild(scenario10)
});