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
var lineBreak1 = document.createElement("br");
var buttonSL = document.createElement("BUTTON");
var buttonwords = document.createTextNode("Back");

var doranRingNote = document.createTextNode("Most mages are gated by large amounts of mana so they need to pick a good starting item so their laning phase won't be painful. Lots of mages love to start Doran Ring as their starting item. Doran Ring costs 400 gold and offers 60 health, 50% base mana regeneration and 15 AP (Ability Power). It has the passive ability to grant flat mana back whenever you kill a unit. Since you start with 500 gold at the beginning of the game, you are able to acquire two potions or biscuits if you have the biscuit mastery. ");
var doranShieldNote = document.createTextNode("A great item for tanky top laners to start is Doran Shield. Doran Shield costs 450 gold and offers 80 HP (hit points), 6 HP every 5 seconds, and the unique ability to block 8 damage from single target spells and attacks. The reason for tanky top laners to start this item, is for the benefit of the unique passive. The unique passive to block 8 damage from single target damage sources. This passive is useful for common melee top laners that are going against ranged champions top lane because it will block a good amount of damage. However, you are only allowed 1 potion or biscuit with the itme as well as not being able to use the item to make a better item later. The damage reduction is great early on since everyone in the game has low stats in the beginning, blocking 8 damage is actually a big deal. With doran shield it's expected that you win the lane phase or at least not lose and break even so that you won't be behind your opponent.");
var doranBladeNote= document.createTextNode("The favorite starting item of AD top laners, AD assasins, and ADCs is Doran Blade. Doran Blade costs 450 gold and offers 8 AD, 80 HP, and 3% life steal. The item gives a huge spike in power due to the great stats it provides. It can't build into any items, but the stats are perfect for laners who are behind due to life steal so they can recover HP. AD and HP to give themselves a little bit more bulk. Doran Blade is an all around great item for AD laners as it provides stats that are perfect for the role. ");
var cullNote= document.createTextNode("Cull costs 450 gold and grants 5 AD (Attack Damage) and restores 3 Health on attack. The big unique passive that is has though, is that you gain a bonus 350 gold for killing 100 minions while you have cull in your item slots. Cull has been given a bad rap due to giving very poor stats and only gives 1 potion or 1 biscuit. It also fails to compete with Doran Blade due to the huge amount of stat differences. Cull and Doran Blade do not build into an item but Doran Blade gives flat HP, more AD, and gives percent lifesteal instead of healing flat on hit.");
var clothAndFiveNote= document.createTextNode("The defensive start against most strong AD champs is the famed 'Cloth and Five.' Cloth armor is 300 gold but only offers 15 armor and the five in this case would be 5 potions or 5 biscuits. The reason for starting this item instead of Doran Shield is that it is able to build into an item, unlike Doran Shield. Most tanks or even mages that start this can build chain vest which is an upgraded cloth armor. Mages can build seeker's armguard which is great for build optimization against enemies centered on AD. AD assasins in mid lane or AD bruisers top along with an ADC. The ability to start on the build path to an item that is effective to most of the enemy team is one of the huge benefits of starting cloth armor. You also get 5 potions or biscuits. Potions restore 150 health over time. Biscuits restore the same amount but when you first activate a biscuit, you are able to get a bonus of 10 HP and 15 Mana IF you have the biscuit mastery. ");
var darkSealNote= document.createTextNode("They recently added the new Mage item, Dark Seal. Dark Seal costs 350 gold and gives 15 AP, +25% healing from potions, and 100 mana. The item can also build into Mejai's soulstealer which makes it able to scale up ever harder is a high risk high reward item. Doran Ring is a lot stronger than Dark Seal in terms of stats. Doran Ring gives HP, restores mana on kills, gives mana regeneration, and the same amount of AP like Dark Seal.");
var corruptingPotionNote= document.createTextNode("A new item that jumps between unique champions for starting items is Corrupting Potion. Corrupting potion costs 500 gold and has 3 charges that each restore 150 health and 50 mana over 12 seconds. While the potion is healing it grants a DoT (Damage over time) buff to the user that allows their attacks and spells to cause burn damage for 15 damage at level 1 to up to 30 at level 18 over 4 seconds. Due to the unexpected leave of crystalline flask, Riot (Maker of League of Legends) has introduced the item, Corrupting Potion. It is really unclear whether this item is better than flat stats like the other items but it is actually a really good item to have later on in the game. Although the burn isn't that much, just having 3 charges of health and mana regenration is really useful. The potion also refills on charges once you go back to the shop so you don't have to keep rebuying the item. Since crystalline flask was widely popular and mages that need both large amounts of HP and Mana, it was the go to item for them. Corrupting Potion fills the gap crystalline flask left when it was removed from the game.");
var hunterMacheteNote= document.createTextNode("Back way before Season 5 there were the spirit items and wriggler's lantern for junglers. Hunter's Machete was the new jungler item for people to start and seems to have a great synergy with champions that like to auto attack, eg but not limited to: Jax, Xin Zhao, Aatrox. Hunter's Machete costs 350 gold, +8% lifesteal vs jungle monsters and the passive of 20 bonus damage on hit against monsters and +15 exp for killing large monsters in the jungle. This allows junglers with high attack speed to keep life stealing HP and dealing 20 bonus damage on each hit to monsters allowing for faster clears. Since the item costs 350, you can get 3 potions or 3 biscuits or a refillable potion.");
var hunterTalismanNote= document.createTextNode("Along with Hunter's Machete, Hunter's Talisman was released for those AP junglers. Hunter's Talisman costs 350 gold and offers 150% mana regeneration in the jungle and steals 25 health over 5 seconds from enemies when damaging them with abilities or attacks and as well as granting 15 additional exp for killing large monsters. It has been generally accepted that junglers with more AOE (Area of Effect) spells take Hunter's Talisman since you will start to drain the jungle camp's HP and heal yourself. It will offer mana regeneration for you to be able to use more spells on clearing. Health regeneration is also a nice bonus. Since it costs 350, you can get 3 potions or 3 biscuits or a refillable potion.");
var ancientCoinNote= document.createTextNode("Supports have the most unique starting item options that will eventually turn into an active due to their role of protection or roles of empowering teammates. Ancient Coin offers +25% base mana regen and allows the user to gain 4 gold and 5 health when a nearby minion dies at the cost of 350 gold. The item is good on supports that can't use the other two support items. Supports like Soraka and Janna fit the cut. When the item becomes fully upgraded, it has an active ability that speeds all nearby allies which will be helpful for these kinds of supports that rely on protecting the team members. Since the item costs 350 gold it allows for 3 potions or 3 biscuits or a refillable potion.");
var spellthiefEdgeNote= document.createTextNode("An item that was heavily changed this season was Spellthief's edge. Spellthief's Edge offers +5 AP, +2 gold per 10 seconds, +25% base mana regeneration and has 3 charges. Whenever you deal damage when you have charges they allow your spells to deal 10 bonus damage and give 8 gold each proc. This item is particularly useful for more aggressive supports that can proc the passive easily to get more gold and put out more damage. The final upgrade got completely changed as it sends out two ghosts to the nearest targets that will slow them and reveal them based on how far the ghost traveled. The ghosts disappear if it takes too long to reach their target. Since the item costs 350 gold it allows for 3 potions or 3 biscuits or a refillable potion.");
var relicShieldNote= document.createTextNode("A great item for tanky supports is Relic Shield. Relic shield costs 350 gold and offers 75 HP, +2 gold per 10 seconds, and allow minion kills by the user give 40 HP to the nearest champion and gain the minion kill gold for both of you. The item is great for tanky supports The item is great for tanky supports as it is perfect for them to make gold and sustain in lane. The final upgrade is great as it allows you to put a shield over an ally to protect them. Since the item costs 350 gold it allows for 3 potions or 3 biscuits or a refillable potion.");
var potionNote = document.createTextNode("Potions restore 150 health over time.");
var biscuitNote = document.createTextNode("Biscuits restore the same amount but when you first activate a biscuit, you are able to get a bonus of 10 HP and 15 Mana.");
var refillableNote = document.createTextNode("Refillable potion has 2 charges that restore 150 health over time and those charges refill when visiting the shop.")


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
    refillablePotion.setAttribute("src" , "http://vignette2.wikia.nocookie.net/leagueoflegends/images/7/7f/Refillable_Potion_item.png/revision/latest?cb=20151104002150");
document.body.appendChild(refillablePotion);
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
    refillablePotion.setAttribute("src" , "http://vignette2.wikia.nocookie.net/leagueoflegends/images/7/7f/Refillable_Potion_item.png/revision/latest?cb=20151104002150");
document.body.appendChild(refillablePotion);
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
    refillablePotion.setAttribute("src" , "http://vignette2.wikia.nocookie.net/leagueoflegends/images/7/7f/Refillable_Potion_item.png/revision/latest?cb=20151104002150");
document.body.appendChild(refillablePotion);
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
    refillablePotion.setAttribute("src" , "http://vignette2.wikia.nocookie.net/leagueoflegends/images/7/7f/Refillable_Potion_item.png/revision/latest?cb=20151104002150");
document.body.appendChild(refillablePotion);
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
    refillablePotion.setAttribute("src" , "http://vignette2.wikia.nocookie.net/leagueoflegends/images/7/7f/Refillable_Potion_item.png/revision/latest?cb=20151104002150");
document.body.appendChild(refillablePotion);
    document.body.appendChild(lineBreak1);
       buttonSL.appendChild(buttonwords);
   document.body.appendChild(buttonSL);
});

potions.addEventListener("click" , function(){
    document.body.appendChild(potionNote);
     document.body.appendChild(biscuitNote);
        refillableNote.style.display = "none";
});

biscuit.addEventListener("click" , function(){
     document.body.appendChild(potionNote);
    document.body.appendChild(biscuitNote);
         refillableNote.style.display = "none";
});
refillablePotion.addEventListener("click" , function(){
    document.body.appendChild(refillableNote);
      document.body.appendChild(potionNote);
     document.body.appendChild(biscuitNote);
});

