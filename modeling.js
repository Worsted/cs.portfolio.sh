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
var buttonSL = document.createElement("BUTTON");
var buttonwords = document.createTextNode("Back");

var doranRingNote = document.createTextNode("Most mages are gated by large amounts of mana so they need to pick a good starting item so their laning phase won't be painful. Lots of mages love to start Doran Ring as their starting item. Doran Ring costs 400 gold and offers 60 health, 50% base mana regeneration and 15 AP (Ability Power). It has the passive ability to grant flat mana back whenever you kill a unit. Since you start with 500 gold at the beginning of the game, you are able to acquire two potions or biscuits if you have the biscuit mastery. Potions restore 150 health over time. Biscuits restore the same amount but when you first activate a biscuit, you are able to get a bonus of 10 HP and 15 Mana.");
var doranShieldNote = document.createTextNode("Doran Shield costs 440 gold ");
var doranBladeNote= document.createTextNode("Doran Blade costs 440 gold");
var cullNote= document.createTextNode("Cull costs 450 gold and grants 5 AD (Attack Damage) and restores 3 Health on attack. The big unique passive that is has though, is that you gain a bonus 350 gold for killing 100 minions while you have cull in your item slots. Cull has been given a bad rap due to giving very poor stats and only gives 1 potion or 1 biscuit. It also fails to compete with Long Sword or Doran Blade due to the huge amount of stat differences. Unlike Cull, Long Sword can build into an item while having more AD and in total more health due to potions. Doran Blade does not build into an item but it gives flat HP, more AD, and gives percent lifesteal instead of healing flat on hit.");
var clothAndFiveNote= document.createTextNode("The defensive start against most strong AD champs is the famed 'Cloth and Five.'  ");
var darkSealNote= document.createTextNode("They recently added the new Mage item, Dark Seal. Doran Ring is a lot stronger than Dark Seal in terms of stats. Doran Ring gives HP, restores mana on kills, gives mana regeneration, and the same amount of AP like Dark Seal.");
var corruptingPotionNote= document.createTextNode("Due to the unexpected leave of crystalline flask, Riot (Maker of League of Legends) has introduced the item, Corrupting Potion.");
var hunterMacheteNote= document.createTextNode("Back way before Season 5 there were the spirit items and wriggler's lantern for junglers. Hunter's Machete was the new jungler item for people to start and seems to have a great synergy with champions that like to auto attack, eg but not limited to: Jax, Xin Zhao, Aatrox.");
var hunterTalismanNote= document.createTextNode("Along with Hunter's Machete, Hunter's Talisman was released for those AP junglers. It has been generally accepted that junglers with more AOE (Area of Effect) spells take Hunter's Talisman since you will start to drain the jungle camp's HP and heal yourself. It will offer mana regeneration for you to be able to use more spells on clearing. Health regeneration is also a nice bonus.");
var ancientCoinNote= document.createTextNode("Supports have the most unique starting item options that will eventually turn into an active due to their role of protection or roles of empowering teammates. Ancient Coin offers ");
var spellthiefEdgeNote= document.createTextNode("");
var relicShieldNote= document.createTextNode("");



buttonSL.addEventListener("click", function(){
    location.reload();
});

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
       buttonSL.appendChild(buttonwords);
   document.body.appendChild(buttonSL);
});

junglers.addEventListener("click", function(){
    soloLaners.style.display ="none";
    support.style.display = "none";
    hunterMachete.setAttribute("src", "http://vignette2.wikia.nocookie.net/leagueoflegends/images/a/a2/Hunter's_Machete_item.png/revision/latest?cb=20130710102448");
    document.body.appendChild(hunterMachete);
    hunterTalisman.setAttribute("src", "http://vignette1.wikia.nocookie.net/leagueoflegends/images/2/21/Hunter's_Talisman_item.png/revision/latest?cb=20151101000227");
    document.body.appendChild(hunterTalisman);
       buttonSL.appendChild(buttonwords);
   document.body.appendChild(buttonSL);
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
       buttonSL.appendChild(buttonwords);
   document.body.appendChild(buttonSL);
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

doranShield.addEventListener("click" , function(){
    doranRing.style.display ="none";
    doranBlade.style.display ="none";
    cull.style.display = "none";
    corruptingPotion.style.display = "none";
    clothAndFive.style.display = "none";
    darkSeal.style.display = "none";
    document.body.appendChild(doranShieldNote);
    document.body.appendChild(lineBreak);
    potions.setAttribute("src" , "http://vignette2.wikia.nocookie.net/leagueoflegends/images/1/13/Health_Potion_item.png/revision/latest?cb=20140115130243");
    document.body.appendChild(potions);
    biscuit.setAttribute("src" , "http://hydra-media.cursecdn.com/lol.gamepedia.com/b/bd/Total_Biscuit_of_Rejuvenation.png?version=db750970a65bd721139b020d1a3e9edb");
    document.body.appendChild(biscuit);
    buttonSL.appendChild(buttonwords);
    document.body.appendChild(buttonSL);
});
doranBlade.addEventListener("click" , function(){
     doranShield.style.display ="none";
         doranRing.style.display ="none";
           cull.style.display = "none";
    corruptingPotion.style.display = "none";
    clothAndFive.style.display = "none";
    darkSeal.style.display = "none";
     document.body.appendChild(doranBladeNote);
      document.body.appendChild(lineBreak);
       potions.setAttribute("src" , "http://vignette2.wikia.nocookie.net/leagueoflegends/images/1/13/Health_Potion_item.png/revision/latest?cb=20140115130243");
    document.body.appendChild(potions);
    biscuit.setAttribute("src" , "http://hydra-media.cursecdn.com/lol.gamepedia.com/b/bd/Total_Biscuit_of_Rejuvenation.png?version=db750970a65bd721139b020d1a3e9edb");
    document.body.appendChild(biscuit);
       buttonSL.appendChild(buttonwords);
   document.body.appendChild(buttonSL);
});
cull.addEventListener("click" , function(){
      doranShield.style.display ="none";
         doranRing.style.display ="none";
             doranBlade.style.display ="none";
              corruptingPotion.style.display = "none";
    clothAndFive.style.display = "none";
    darkSeal.style.display = "none";
    document.body.appendChild(cullNote);
       document.body.appendChild(lineBreak);
     potions.setAttribute("src" , "http://vignette2.wikia.nocookie.net/leagueoflegends/images/1/13/Health_Potion_item.png/revision/latest?cb=20140115130243");
    document.body.appendChild(potions);
    biscuit.setAttribute("src" , "http://hydra-media.cursecdn.com/lol.gamepedia.com/b/bd/Total_Biscuit_of_Rejuvenation.png?version=db750970a65bd721139b020d1a3e9edb");
    document.body.appendChild(biscuit);
       buttonSL.appendChild(buttonwords);
   document.body.appendChild(buttonSL);
});
clothAndFive.addEventListener("click" , function(){
     doranShield.style.display ="none";
         doranRing.style.display ="none";
             doranBlade.style.display ="none";
              cull.style.display = "none";
              corruptingPotion.style.display = "none";
               darkSeal.style.display = "none";
       document.body.appendChild(clothAndFiveNote);
          document.body.appendChild(lineBreak);
     potions.setAttribute("src" , "http://vignette2.wikia.nocookie.net/leagueoflegends/images/1/13/Health_Potion_item.png/revision/latest?cb=20140115130243");
    document.body.appendChild(potions);
    biscuit.setAttribute("src" , "http://hydra-media.cursecdn.com/lol.gamepedia.com/b/bd/Total_Biscuit_of_Rejuvenation.png?version=db750970a65bd721139b020d1a3e9edb");
    document.body.appendChild(biscuit);
       buttonSL.appendChild(buttonwords);
   document.body.appendChild(buttonSL);
});
darkSeal.addEventListener("click" , function(){
        doranShield.style.display ="none";
         doranRing.style.display ="none";
             doranBlade.style.display ="none";
              cull.style.display = "none";
        clothAndFive.style.display = "none";
                      corruptingPotion.style.display = "none";
       document.body.appendChild(darkSealNote);
          document.body.appendChild(lineBreak);
     potions.setAttribute("src" , "http://vignette2.wikia.nocookie.net/leagueoflegends/images/1/13/Health_Potion_item.png/revision/latest?cb=20140115130243");
    document.body.appendChild(potions);
    biscuit.setAttribute("src" , "http://hydra-media.cursecdn.com/lol.gamepedia.com/b/bd/Total_Biscuit_of_Rejuvenation.png?version=db750970a65bd721139b020d1a3e9edb");
    document.body.appendChild(biscuit);
       buttonSL.appendChild(buttonwords);
   document.body.appendChild(buttonSL);
});
corruptingPotion.addEventListener("click" , function(){
          doranShield.style.display ="none";
         doranRing.style.display ="none";
             doranBlade.style.display ="none";
              cull.style.display = "none";
        clothAndFive.style.display = "none";
    darkSeal.style.display = "none";
       document.body.appendChild(corruptingPotionNote);
          document.body.appendChild(lineBreak);
     potions.setAttribute("src" , "http://vignette2.wikia.nocookie.net/leagueoflegends/images/1/13/Health_Potion_item.png/revision/latest?cb=20140115130243");
    document.body.appendChild(potions);
    biscuit.setAttribute("src" , "http://hydra-media.cursecdn.com/lol.gamepedia.com/b/bd/Total_Biscuit_of_Rejuvenation.png?version=db750970a65bd721139b020d1a3e9edb");
    document.body.appendChild(biscuit);
       buttonSL.appendChild(buttonwords);
   document.body.appendChild(buttonSL);
});
hunterMachete.addEventListener("click" , function(){
    hunterTalisman.style.display ="none";
       document.body.appendChild(hunterMacheteNote);
          document.body.appendChild(lineBreak);
     potions.setAttribute("src" , "http://vignette2.wikia.nocookie.net/leagueoflegends/images/1/13/Health_Potion_item.png/revision/latest?cb=20140115130243");
    document.body.appendChild(potions);
    biscuit.setAttribute("src" , "http://hydra-media.cursecdn.com/lol.gamepedia.com/b/bd/Total_Biscuit_of_Rejuvenation.png?version=db750970a65bd721139b020d1a3e9edb");
    document.body.appendChild(biscuit);
       buttonSL.appendChild(buttonwords);
   document.body.appendChild(buttonSL);
});
hunterTalisman.addEventListener("click" , function(){
    hunterMachete.style.display = "none";
       document.body.appendChild(hunterTalismanNote);
          document.body.appendChild(lineBreak);
     potions.setAttribute("src" , "http://vignette2.wikia.nocookie.net/leagueoflegends/images/1/13/Health_Potion_item.png/revision/latest?cb=20140115130243");
    document.body.appendChild(potions);
    biscuit.setAttribute("src" , "http://hydra-media.cursecdn.com/lol.gamepedia.com/b/bd/Total_Biscuit_of_Rejuvenation.png?version=db750970a65bd721139b020d1a3e9edb");
    document.body.appendChild(biscuit);
       buttonSL.appendChild(buttonwords);
   document.body.appendChild(buttonSL);
});
ancientCoin.addEventListener("click" , function(){
      spellthiefEdge.style.display = "none";
      relicShield.style.display = "none";
       document.body.appendChild(ancientCoinNote);
          document.body.appendChild(lineBreak);
     potions.setAttribute("src" , "http://vignette2.wikia.nocookie.net/leagueoflegends/images/1/13/Health_Potion_item.png/revision/latest?cb=20140115130243");
    document.body.appendChild(potions);
    biscuit.setAttribute("src" , "http://hydra-media.cursecdn.com/lol.gamepedia.com/b/bd/Total_Biscuit_of_Rejuvenation.png?version=db750970a65bd721139b020d1a3e9edb");
    document.body.appendChild(biscuit);
       buttonSL.appendChild(buttonwords);
   document.body.appendChild(buttonSL);
});

spellthiefEdge.addEventListener("click" , function(){
        relicShield.style.display = "none";
          ancientCoin.style.display ="none";
       document.body.appendChild(spellthiefEdgeNote);
          document.body.appendChild(lineBreak);
     potions.setAttribute("src" , "http://vignette2.wikia.nocookie.net/leagueoflegends/images/1/13/Health_Potion_item.png/revision/latest?cb=20140115130243");
    document.body.appendChild(potions);
    biscuit.setAttribute("src" , "http://hydra-media.cursecdn.com/lol.gamepedia.com/b/bd/Total_Biscuit_of_Rejuvenation.png?version=db750970a65bd721139b020d1a3e9edb");
    document.body.appendChild(biscuit);
       buttonSL.appendChild(buttonwords);
   document.body.appendChild(buttonSL);
});

relicShield.addEventListener("click" , function(){
    spellthiefEdge.style.display = "none";
    ancientCoin.style.display ="none";
       document.body.appendChild(relicShieldNote);
          document.body.appendChild(lineBreak);
     potions.setAttribute("src" , "http://vignette2.wikia.nocookie.net/leagueoflegends/images/1/13/Health_Potion_item.png/revision/latest?cb=20140115130243");
    document.body.appendChild(potions);
    biscuit.setAttribute("src" , "http://hydra-media.cursecdn.com/lol.gamepedia.com/b/bd/Total_Biscuit_of_Rejuvenation.png?version=db750970a65bd721139b020d1a3e9edb");
    document.body.appendChild(biscuit);
       buttonSL.appendChild(buttonwords);
   document.body.appendChild(buttonSL);
});
