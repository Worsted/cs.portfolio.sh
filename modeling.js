// JavaScript File
var soloLaners = document.getElementById("soloLaners");
var junglers = document.getElementById("junglers");
var support = document.getElementById("support");
var doranRing = document.createElement("IMG");
var doranShield = document.createElement("IMG");
var doranBlade = document.createElement("IMG");
var cull = document.createElement("IMG");
var clothAndFive = document.createElement("IMG");
var darkSeal = document.createElement("IMG");
var corruptingPotion = document.createElement("IMG");
var hunterMachete = document.createElement("IMG");
var hunterTalisman = document.createElement("IMG");
var potions = document.createElement("IMG");
//"http://vignette2.wikia.nocookie.net/leagueoflegends/images/1/13/Health_Potion_item.png/revision/latest?cb=20140115130243";
var refillablePotion = document.createElement("IMG");
//"http://vignette2.wikia.nocookie.net/leagueoflegends/images/7/7f/Refillable_Potion_item.png/revision/latest?cb=20151104002150";
var ancientCoin = document.createElement("IMG");
var spellthiefEdge = document.createElement("IMG");
var relicShield = document.createElement("IMG");
var biscuit = document.createElement("IMG");
var lineBreak = document.createElement("br");
var buttonSL = document.createElement("BUTTON")
var buttonwords = document.createTextNode("Back")



var doranRingNote = document.createTextNode("Doran Ring costs 400 gold and offers 60 health, 50% base mana regeneration and 15 AP (Ability Power). It has the passive ability to grant flat mana back whenever you kill a unit. Since you start with 500 gold at the beginning of the game, you are able to acquire two potions or biscuits if you have the biscuit mastery. Potions restore 150 health over time. Biscuits restore the same amount but when you first activate a biscuit, you are able to get a bonus of 10 HP and 15 Mana.");


soloLaners.addEventListener("click", function(){
    junglers.style.display = "none";
    support.style.display = "none";
    doranRing.setAttribute("src", "http://vignette2.wikia.nocookie.net/leagueoflegends/images/2/2d/Doran's_Ring_item.png/revision/latest?cb=20130319094421");
    document.body.appendChild(doranRing);
    doranShield.setAttribute("src", "http://vignette4.wikia.nocookie.net/leagueoflegends/images/e/ea/Doran's_Shield_item.png/revision/latest?cb=20130319090307");
    document.body.appendChild(doranShield);
    doranBlade.setAttribute("src", "http://vignette2.wikia.nocookie.net/leagueoflegends/images/3/3f/Doran's_Blade_item.png/revision/latest?cb=20130319090302" );
    document.body.appendChild(doranBlade);
    cull.setAttribute("src", "http://vignette2.wikia.nocookie.net/leagueoflegends/images/3/33/Cull_item.png/revision/latest?cb=20151105022529");
    document.body.appendChild(cull);
    clothAndFive.setAttribute("src", "http://vignette1.wikia.nocookie.net/leagueoflegends/images/6/6f/Cloth_Armor_item.png/revision/latest?cb=20130319090243");
    document.body.appendChild(clothAndFive);
    corruptingPotion.setAttribute("src", "http://vignette2.wikia.nocookie.net/leagueoflegends/images/8/87/Corrupting_Potion_item.png/revision/latest?cb=20151221221829");
    document.body.appendChild(corruptingPotion);
    darkSeal.setAttribute("src" , "http://vignette3.wikia.nocookie.net/leagueoflegends/images/4/4e/The_Dark_Seal_item.png/revision/latest?cb=20151104084356");
    document.body.appendChild(darkSeal);
});

junglers.addEventListener("click", function(){
    soloLaners.style.display ="none";
    support.style.display = "none";
    hunterMachete.setAttribute("src", "http://vignette2.wikia.nocookie.net/leagueoflegends/images/a/a2/Hunter's_Machete_item.png/revision/latest?cb=20130710102448");
    document.body.appendChild(hunterMachete);
    hunterTalisman.setAttribute("src", "http://vignette1.wikia.nocookie.net/leagueoflegends/images/2/21/Hunter's_Talisman_item.png/revision/latest?cb=20151101000227");
    document.body.appendChild(hunterTalisman);
});

support.addEventListener("click", function(){
    soloLaners.style.display ="none";
    junglers.style.display = "none";
    ancientCoin.setAttribute("src", "http://vignette4.wikia.nocookie.net/leagueoflegends/images/5/53/Ancient_Coin_item.png/revision/latest?cb=20131112145138");
    document.body.appendChild(ancientCoin);
    spellthiefEdge.setAttribute("src" , "http://vignette2.wikia.nocookie.net/leagueoflegends/images/0/09/Spellthief's_Edge_item.png/revision/latest?cb=20131116031928");
    document.body.appendChild(spellthiefEdge);
    relicShield.setAttribute("src" , "http://vignette1.wikia.nocookie.net/leagueoflegends/images/5/51/Relic_Shield_item.png/revision/latest?cb=20131117020619");
    document.body.appendChild(relicShield);
});



doranRing.addEventListener("click" , function (){
   doranShield.style.display ="none";
   doranBlade.style.display ="none";
   cull.style.display = "none";
   corruptingPotion.style.display ="none";
   clothAndFive.style.display = "none";
   darkSeal.style.display = "none";
   document.body.appendChild(doranRingNote);
   document.body.appendChild(lineBreak);
   potions.setAttribute("src" , "http://vignette2.wikia.nocookie.net/leagueoflegends/images/1/13/Health_Potion_item.png/revision/latest?cb=20140115130243");
   document.body.appendChild(potions);
   biscuit.setAttribute("src" , "http://hydra-media.cursecdn.com/lol.gamepedia.com/b/bd/Total_Biscuit_of_Rejuvenation.png?version=db750970a65bd721139b020d1a3e9edb");
   document.body.appendChild(biscuit);
   buttonSL.appendChild(buttonwords);
   document.body.appendChild(buttonSL);
});

buttonSL.addEventListener("click", function(){
    doranRingNote.style.display="none";
    potions.style.display="none";
    biscuit.style.display="none";
    
});