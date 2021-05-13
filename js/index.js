function popup(_sel) {
	switch (_sel) {
		case "traits":
			var traitTutorial = window.open("", "", "height=400,width=600");
			traitTutorial.document.write("<div style='width:100%;height:100%;' onclick='window.close()'><h2><i>Where are all the other traits?</i></h2><p>You have probably noticed that the traits included in the list of checkboxes here is far from exhaustive&mdash;there is a reason for this:</p><p>According to the trait inventory in the DMG (see pp.280&ndash;281 for the full list), many traits have no effect on a creature's CR, so they are not listed here.</p><p>Furthermore, many of the traits that <i>do</i> affect CR still aren't included, because the extent of their effect is to increase the monster's damage output for one or more turns by either a specified amount, or by granting the monster an extra attack (<b><i>Brute</i></b>, <b><i>Surprise Attack</i></b>, and <b><i>Trampling Charge</i></b> would be examples of this).</p><p>In these cases, you simply add the damage specified to the monster's damage-per-round as makes sense for the trait, and thus eliminate the need for a corresponding trait button.</p><p><small><i>(Click anywhere to close)</i></small></div>");
			break;
		case "tutorial":
			var tutorial = window.open("", "", "height=648,width=1152");
			tutorial.document.write(
				"<div style='width:100%;height:100%;' onclick='window.close()'><h2><i>O que é e como eu uso isso?</i></h2><p style='position:relative;top:-12px;'><small><i>(Clique em qualquer lugar para fechar)</i></small></p><p>Isso é uma Calculadora de Nível de Dificuldade para Tormenta20. Você pode encontrar os cálculos no <i>Guia não-oficial de criação de criaturas para Tormenta 20</i>, pois os cálculos são baseados nos cálculos apresentados naquele documento.</p><h2><i>Passo 1: ND Alvo</i></h2><p>No menu 'ND Alvo', escolha o ND que você quer ou espera que a ameaça tenha.</p><p>Vários cálculos feitos durante o processo irão mudar de acordo com o ND final desejado, então escolha isso primeiro, mesmo que seja apenas um chute&mdash;você sempre pode voltar e mudar o número, se necessário.</p><p>Se o ND ficar acima do escolhido, a caixa ficará amarela para avisar a diferença.</p><h2><i>Passo 2: ND Defensivo</i></h2><p>Coloque a Defesa da criatura no campo 'Defesa', then do the same for the creature's HP.</p><p>You may notice that the 'Effective' AC and HP to the right of your inputs may differ: this is okay. There are certain attributes and traits that are calculated by changing the creature's statistics superficially for the purposes of the calculation, but which don't actually affect what's written on the stat block. You can safely ignore these 'Effective' stats if you wish: they are there for your own information only, and have no bearing on the creature in-game.</p><h2><i>Passo 3: Offensive CR</i></h2><p>As you did with the defensive stats, input the creature's attack bonus (the number that precedes 'to hit' on the creature's attacks; omit the plus sign) for the attack or attacks it will be using most often&mdash;keep in mind this might be its spellcasting attack bonus, if it will be relying more heavily on spellcasting.</p><p>Next, use the boxes to the right of the 'Damage per Round' readout to input the most damage per round it can input throughout the fight. The 'Primary' and 'Secondary' damage boxes are functionally identical&mdash;they are summed up to determing the total for that round&mdash;and are there for your convenience only; feel free to ignore them if you wish. Likewise, the average damage per turn calculation only recognizes rounds that have a nonzero value, so you can use as many rounds as you wish, from 1 to 6. The DMG suggests using 3, but I have found that in certain circumstances, more are necessary to get an accurate simulation.</p><p>You can use whatever method you think makes the most sense for how to accurately represent the creature's damage output throughout the fight, though the guidelines in the DMG specify that you should use the following 'rules' when determining this total:</p><ul><li>Always use the average damage for any given damage expression (i.e. use 3 for 1d6, 9 for 2d8, 11 for 2d8 + 2, etc.).</li><li>Assume every attack hits its target, and that the target fails its save for any additional damage and/or effect.</li><li>If the attack or effect has an area of effect, assume that it targets two creatures, and that both fail their saves.</li><li>If an action or effect recharges according to a d6 roll (e.g. 'Recharge 4&ndash;6'), assume the average number of rounds it will take to recharge: two rounds for 4&ndash;6, three rounds for 5&ndash;6, or six rounds for 6.</ul><p>Then, set the save DC that the creature's enemies will need to roll against most often to avoid its effects. If the creature has no abilities or effects that require a save, you can simply set this number to zero.</p><h2><i>Passo 4: Traits, Etc.</i></h2><p>Simply check the boxes for any relevant traits or attributes that apply to the creature. You'll notice that this list is far from exhaustive, this is because the vast majority of traits either have no effect on the creature's CR (per the DMG), or serve only to provide an extra attack, or to deal extra damage, in which case you would increase the creature's damage output in the calculator as makes sense for that trait or ability. Click the 'Where are the rest of the traits?' line to learn more. Additionally, you can hover over any of the listed traits to see a brief description or explanation of that trait and/or its effects on the creature's CR.</p><p><b>Special Note:</b> be aware that the damage resistances and immunities check boxes should only be checked <i>if the damage types are ones that aren't likely to be easily bypassed.</i> For example, you should check these boxes for resistance or immunity to nonmagical bludgeoning, piercing, or slashing damage, or perhaps even for fire, force, lightning, or some other common magic damage type. However, resistance or immunity to something like poison damage is common enough among monsters and rare enough among spells and class abilities that it won't likely make a significant impact on the creature's difficulty in actual use.</p><h2><i>The Final Result</i></h2><p>Once this is all done, you can check the final result at the very bottom, where it says 'Overall CR' (The smaller number in parentheses is the final CR result before rounding).</p><p><small><i>(Click anywhere to close)</i></small></div>");
			break;
	}
}
function roundCR(_num, _alpha=false) {
	if (_num >= 1) {
		if (_alpha) {
			return Math.round(_num).toString();
		} else {
			return Math.round(_num);
		}
	}
	else if (_num >= 0.5) {
		if (_alpha) {
			if ((Math.round(_num * 2) / 2) == 0.5) {
				return "&frac12;";
			}
			return "1";
		}
		return Math.round(_num * 2) / 2;
	}
	else if (_num >= 0.33) {
		if (_alpha) {
			if ((Math.round(_num * 2) / 2) == 0.33) {
				return "&frac13;";
			}
			return "&frac12;";
		}
		return Math.round(_num * 2) / 2;
	}
	else if (_num >= 0.25) {
		if (_alpha) {
			if ((Math.round(_num * 4) / 4) == 0.25) {
				return "&frac13;";
			}
			return "&frac12;";
		}
		return Math.round(_num * 4) / 4;
	}
	else if (_alpha) {
		return "0";
	}
	return Math.round(_num * 8) / 8;
}
function DCRbyHP(_hp) {
	if (_hp < 9) {
		return 0.25;
	}
	else if (_hp < 29) {
		return 0.33;
	}
	else if (_hp < 59) {
		return 0.5;
	}
	else if (_hp < 94) {
		return 1;
	}
	else if (_hp < 130) {
		return 2;
	}
	else if (_hp < 94) {
		return 1;
	}
	else if (_hp < 130) {
		return 2;
	}
	else if (_hp < 165) {
		return 3;
	}
	else if (_hp < 200) {
		return 4;
	}
	else if (_hp < 725) {
		return 4 + Math.ceil((_hp-199) / 35) - 1;
	}
	return 20;
}
function ACforHPCR(_hpcr) {
	if (_hpcr == 0.25) {
		return 8;
	}
	else if (_hpcr == 0.33) {
		return 9;
	}
	else if (_hpcr < 1) {
		return 11;
	}
	return 11 + _hpcr * 2;
}
function STforHPCR(_hpcr) {
	const resistenciasBase = [7,8,9,10,12,13,14,15,17,18,19,20,22,23,24,25,27,28,29,30];
	if (_hpcr == 0.25) {
		return 4;
	}
	else if (_hpcr == 0.33) {
		return 4;
	}
	else if (_hpcr < 1) {
		return 5;
	}
	return resistenciasBase[_hpcr];
}
function OCRbyDmg(_dmg) {
	if (_dmg < 5) {
		return 0.25;
	}
	else if (_dmg < 8) {
		return 0.33;
	}
	else if (_dmg < 12) {
		return 0.5;
	}
	else if (_dmg < 18) {
		return 1;
	}
	return 1 + Math.ceil((_dmg - 17)/5);
}
function AttforDmgCR(_dmgcr) {
	const ataqueBase = [0,10,11,13,14,17,18,20,21,24,25,27,28,31,32,34,35,38,39,41,42]
	if (_dmgcr <= 0.25) {
		return Math.min(parseInt(document.getElementById("actualAB").value), 6);
	}
	else if (_dmgcr <= 0.33) {
		return 7;
	}
	else if (_dmgcr <= 0.5) {
		return 8;
	}
	return ataqueBase[_dmgcr];
}
function SDCforDmgCR(_dmgcr) {
	const cdBase = [0,12,13,15,16,18,19,21,22,24,25,27,28,30,31,33,34,36,37,39,40];
	if (_dmgcr <= 0.33) {
		return Math.min(parseInt(document.getElementById("actualSDC").value), 7);
	}
	if (_dmgcr <= 0.25) {
		return Math.min(parseInt(document.getElementById("actualSDC").value), 7);
	}
	else if (_dmgcr <= 0.33) {
		return 9;
	}
	else if (_dmgcr <= 0.5) {
		return 10;
	}
	return cdBase[_dmgcr];
}
function Validate() { // Makes sure the current values in all input boxes are within acceptable ranges. If not, set to default
	if (parseInt(document.getElementById("actualAC").value) < 1) { document.getElementById("actualAC").value = 1; }
	// if (parseInt(document.getElementById("savingThrowProficiencyCount").value) < 0) {
	//   document.getElementById("savingThrowProficiencyCount").value = 0;
	// }
	// if (parseInt(document.getElementById("savingThrowProficiencyCount").value) > 6) {
	//   document.getElementById("savingThrowProficiencyCount").value = 6;
	// }
	if (parseInt(document.getElementById("actualHP").value) < 1) { document.getElementById("actualHP").value = 1; }
	if (parseInt(document.getElementById("actualAB").value) < 0) { document.getElementById("actualAB").value = 0; }
	if (parseInt(document.getElementById("pDmg1").value) < 0) { document.getElementById("pDmg1").value = 0; }
	if (parseInt(document.getElementById("sDmg1").value) < 0) { document.getElementById("sDmg1").value = 0; }
	if (parseInt(document.getElementById("pDmg2").value) < 0) { document.getElementById("pDmg2").value = 0; }
	if (parseInt(document.getElementById("sDmg2").value) < 0) { document.getElementById("sDmg2").value = 0; }
	if (parseInt(document.getElementById("pDmg3").value) < 0) { document.getElementById("pDmg3").value = 0; }
	if (parseInt(document.getElementById("sDmg3").value) < 0) { document.getElementById("sDmg3").value = 0; }
	if (parseInt(document.getElementById("pDmg4").value) < 0) { document.getElementById("pDmg4").value = 0; }
	if (parseInt(document.getElementById("sDmg4").value) < 0) { document.getElementById("sDmg4").value = 0; }
	if (parseInt(document.getElementById("pDmg5").value) < 0) { document.getElementById("pDmg5").value = 0; }
	if (parseInt(document.getElementById("sDmg5").value) < 0) { document.getElementById("sDmg5").value = 0; }
	if (parseInt(document.getElementById("pDmg6").value) < 0) { document.getElementById("pDmg6").value = 0; }
	if (parseInt(document.getElementById("sDmg6").value) < 0) { document.getElementById("sDmg6").value = 0; }
	if (parseInt(document.getElementById("actualSDC").value) < 1) { document.getElementById("actualSDC").value = 1; }
	// if (parseInt(document.getElementById("legendaryResistanceUses").value) < 1) { document.getElementById("legendaryResistanceUses").value = 1; }
	// if (parseInt(document.getElementById("regenerationValue").value) < 1) { document.getElementById("regenerationValue").value = 1; }
}
function Calculate() { // Begins main CR calculation
	Validate(); // validate that inputs are OK
	
	//CALCULATE TIER — check target CR range, shorten to a corresponding "tier"
	var tier = 1;
	if (document.getElementById("targetCR").value == "0-4") {
		tier = 1;
	} else if (document.getElementById("targetCR").value == "5-10") {
		tier = 2;
	} else if (document.getElementById("targetCR").value == "11-16") {
		tier = 3;
	} else if (document.getElementById("targetCR").value == "17p") {
		tier = 4;
	}
	
	//CALCULATE AC — check the 'Actual AC' input and modify it according to all applicable traits, etc., then store & output as 'effective AC'
	var AC = parseInt(document.getElementById("actualAC").value);
	var effAC = document.getElementById("effectiveAC");
	/*
	if (document.getElementById("flySpeedAndRangedAttack").checked && tier <= 2) { AC += 2; }
	document.getElementById("savingThrowProficiencyCount").disabled = true;
	if (document.getElementById("savingThrowProficiencies").checked) {
	  document.getElementById("savingThrowProficiencyCount").disabled = false;
	  var saves = parseInt(document.getElementById("savingThrowProficiencyCount").value);
	  if (saves >= 3) { AC += 2; }
	  if (saves >= 5) { AC += 2; }
	}
	if (document.getElementById("avoidance").checked) { AC += 1; }
	if (document.getElementById("constrict").checked) { AC += 1; }
	if (document.getElementById("magicResistance").checked) { AC += 2; }
	if (document.getElementById("nimbleEscape").checked) { AC += 4; }
	if (document.getElementById("parry").checked) { AC += 1; }
	if (document.getElementById("shadowStealth").checked) { AC += 4; }
	if (document.getElementById("stench").checked) { AC += 1; }
	if (document.getElementById("superiorInvisibility").checked) { AC += 2; }
	if (document.getElementById("web").checked) { AC += 1; }
	*/
	effAC.innerHTML = AC;
	
	//CALCULATE HP — check the 'actual HP' input and modify it according to applicable traits/tier/etc., then store & output as 'effective HP'
	var HP = parseInt(document.getElementById("actualHP").value);
	var effHP = document.getElementById("effectiveHP");
	var hpMult = 1;   // This variable represents that different HP multipliers should be additive, not multiplicative (i.e. "+100%" and "+100%" equals "+200%", as opposed to "x2" and "x2" equals "x4")
	/*
	switch (tier) {   // check CR "tier", then adjust any modifiers for dmg resistance/immunity accordingly.
	  case 1:
	    if (document.getElementById("damageResistance").checked || document.getElementById("damageImmunity").checked) {
	      hpMult = 2;
	    }
	    break;
	  case 2:
	    if (document.getElementById("damageResistance").checked) {
	      hpMult = 1.5;
	    }
	    if (document.getElementById("damageImmunity").checked) {
	      hpMult = 2;
	    }
	    break;
	  case 3:
	    if (document.getElementById("damageResistance").checked) {
	      hpMult = 1.25;
	    }
	    if (document.getElementById("damageImmunity").checked) {
	      hpMult = 1.5;
	    }
	    break;
	  case 4:
	    if (document.getElementById("damageImmunity").checked) {
	      hpMult = 1.25;
	    }
	    break;
	}
	if (document.getElementById("damageTransfer").checked) { hpMult += 1; }
	if ((document.getElementById("frightfulPresence").checked || document.getElementById("horrifyingVisage").checked) && tier <= 2) { hpMult += 0.25; }    // Frightful Presence and Horrifying Visage are listed in the DMG as having the same effect, and in fact referencing each other. As such, it doesn't make sense for their effects to stack, so just check for either one
	if (document.getElementById("possession").checked) { hpMult += 1; }
	*/
	HP = Math.round(HP * hpMult);   // Once all HP multipliers have been assessed, multiply by 'Actual HP'
	/*
	document.getElementById("legendaryResistanceUses").disabled = true;   // As validation/redundancy, I disable an input, then only re-enable if that input's checkbox is checked
	if (document.getElementById("legendaryResistance").checked) {
	  document.getElementById("legendaryResistanceUses").disabled = false;
	  var usesPerDay = parseInt(document.getElementById("legendaryResistanceUses").value);
	  switch (tier) {
	    case 1:
	      HP += 10 * usesPerDay;
	      break;
	    case 2:
	      HP += 20 * usesPerDay;
	      break;
	    case 3:
	    case 4:
	      HP += 30 * usesPerDay;
	      break;
	  }
	}
	document.getElementById("regenerationValue").disabled = true;
	if (document.getElementById("regeneration").checked) {
	  document.getElementById("regenerationValue").disabled = false;
	  HP += (3 * parseInt(document.getElementById("regenerationValue").value));
	}
	if (document.getElementById("relentless").checked) { HP += (7 * tier); }
	if (document.getElementById("undeadFortitude").checked) { HP += (7 * tier); }
	*/
	effHP.innerHTML = HP;
	
	//CALCULATE SAVING THROWS
	var ST = parseInt(document.getElementById("actualSavingThrows").value);
	var effST = document.getElementById("effectiveSavingThrows");
	effST.innerHTML = ST;
	
	//CALCULATE ATTACK BONUS
	var attBonus = parseInt(document.getElementById("actualAB").value);
	var effAttBonus = document.getElementById("effectiveAB");
	// if (document.getElementById("ambusher").checked) { attBonus += 1; }
	// if (document.getElementById("bloodFrenzy").checked) { attBonus += 4; }
	// if (document.getElementById("nimbleEscape").checked) { attBonus += 4; }
	// if (document.getElementById("packTactics").checked) { attBonus += 1; }
	effAttBonus.innerHTML = "+" + attBonus;
	
	//CALCULATE DMG/ROUND
	var totalDmg = 0;
	var rounds = 0;
	var aggDmg = 0;
	var dmgTransferDmg = 0;
	var rmpgDmg = 0;
	// if (document.getElementById("aggressive").checked) { aggDmg = 2; }
	// if (document.getElementById("damageTransfer").checked) { dmgTransferDmg = Math.floor(parseInt(document.getElementById("actualHP").value) / 3); }
	// if (document.getElementById("rampage").checked) { rmpgDmg = 2; }
	var dmg1 = Math.round(parseInt(document.getElementById("pDmg1").value) + parseInt(document.getElementById("sDmg1").value));
	if (dmg1 > 0) {
		dmg1 += aggDmg + dmgTransferDmg + rmpgDmg;
		rounds++;
	} else {
		dmg1 = 0;
	}
	document.getElementById("rndDmg1").innerHTML = dmg1;
	var dmg2 = Math.round(parseInt(document.getElementById("pDmg2").value) + parseInt(document.getElementById("sDmg2").value));
	if (dmg2 > 0) {
		dmg2 += aggDmg + dmgTransferDmg + rmpgDmg;
		rounds++;
	} else {
		dmg2 = 0;
	}
	document.getElementById("rndDmg2").innerHTML = dmg2;
	var dmg3 = Math.round(parseInt(document.getElementById("pDmg3").value) + parseInt(document.getElementById("sDmg3").value));
	if (dmg3 > 0) {
		dmg3 += aggDmg + dmgTransferDmg + rmpgDmg;
		rounds++;
	} else {
		dmg3 = 0;
	}
	document.getElementById("rndDmg3").innerHTML = dmg3;
	var dmg4 = Math.round(parseInt(document.getElementById("pDmg4").value) + parseInt(document.getElementById("sDmg4").value));
	if (dmg4 > 0) {
		dmg4 += aggDmg + dmgTransferDmg + rmpgDmg;
		rounds++;
	} else {
		dmg4 = 0;
	}
	document.getElementById("rndDmg4").innerHTML = dmg4;
	var dmg5 = Math.round(parseInt(document.getElementById("pDmg5").value) + parseInt(document.getElementById("sDmg5").value));
	if (dmg5 > 0) {
		dmg5 += aggDmg + dmgTransferDmg + rmpgDmg;
		rounds++;
	} else {
		dmg5 = 0;
	}
	document.getElementById("rndDmg5").innerHTML = dmg5;
	var dmg6 = Math.round(parseInt(document.getElementById("pDmg6").value) + parseInt(document.getElementById("sDmg6").value));
	if (dmg6 > 0) {
		dmg6 += aggDmg + dmgTransferDmg + rmpgDmg;
		rounds++;
	} else {
		dmg6 = 0;
	}
	if (rounds <= 1) {
		document.getElementById("nRounds").innerHTML = "1 rodada";
	} else {
		document.getElementById("nRounds").innerHTML = rounds + " rodadas";
	}
	document.getElementById("rndDmg6").innerHTML = dmg6;
	totalDmg = dmg1 + dmg2 + dmg3 + dmg4 + dmg5 + dmg6;
	var modDmg = rounds ? Math.round(totalDmg / rounds) : 0;
	document.getElementById("avgDmg").innerHTML = modDmg;
	document.getElementById("dmgPerRound").innerHTML = modDmg;
	
	//CALCULATE SAVE DC
	var SDC = parseInt(document.getElementById("actualSDC").value);
	var effSaveDC = document.getElementById("effectiveSDC");
	effSaveDC.innerHTML = SDC;
	
	//CALCULATE DEFENSIVE CR
	var HPCR = DCRbyHP(HP);
	var expectedAC = ACforHPCR(HPCR);
	var expectedST = STforHPCR(HPCR);
	var DCR = HPCR;
	var adjAC = "";
	
	if ((AC - expectedAC) > -2) {
		DCR += Math.floor((AC - expectedAC) / 2);
		adjAC = " (+" + Math.floor(Math.abs(AC - expectedAC) / 2) + " ND)"
	}
	else {
		DCR -= Math.floor(Math.abs(AC - expectedAC) / 2);
		adjAC = " (-" + Math.floor(Math.abs(AC - expectedAC) / 2) + " ND)"
	}
	if ((ST - expectedST) > -2) {
		DCR += Math.floor((ST - expectedST) / 2);
		adjST = " (+" + Math.floor(Math.abs(ST - expectedST) / 2) + " ND)"
	}
	else {
		DCR -= Math.floor(Math.abs(ST - expectedST) / 2);
		adjST = " (-" + Math.floor(Math.abs(ST - expectedST) / 2) + " ND)"
	}
	DCR = DCR/2;
	if (DCR < 0) { DCR = 0; }
	
	document.getElementById("CRbyHP").innerHTML = roundCR(HPCR, true);
	document.getElementById("HPCRAC").innerHTML = expectedAC + "<br/><span class='smallAddendum'>" + adjAC + "</span>";
	document.getElementById("HPCRST").innerHTML = expectedST + "<br/><span class='smallAddendum'>" + adjST + "</span>";
	document.getElementById("defensiveCR").innerHTML = roundCR(DCR, true) + "<br/><span class='smallAddendum'>(" + DCR + ")</span>";
	
	//CALCULATE OFFENSIVE CR
	var dmgCR = OCRbyDmg(modDmg);
	var expectedAtt = AttforDmgCR(dmgCR);
	var expectedSDC = SDCforDmgCR(dmgCR);
	var OCR = dmgCR;
	var aOCR = dmgCR;
	var sOCR = dmgCR;
	var adjAtt = "";
	var adjSDC = "";
	
	if ((attBonus - expectedAtt) > -2) {
		aOCR += Math.floor((attBonus - expectedAtt) / 2);
		adjAtt = " (+" + Math.floor(Math.abs(attBonus - expectedAtt) / 2) + " ND)"
	}
	else {
		aOCR -= Math.floor(Math.abs(attBonus - expectedAtt) / 2);
		adjAtt = " (-" + Math.floor(Math.abs(attBonus - expectedAtt) / 2) + " ND)"
	}
	if ((SDC - expectedSDC) > -2) {
		sOCR += Math.floor((SDC - expectedSDC) / 2);
		adjSDC = " (+" + Math.floor(Math.abs(SDC - expectedSDC) / 2) + " ND)"
	}
	else {
		sOCR -= Math.floor(Math.abs(SDC - expectedSDC) / 2);
		adjSDC = " (-" + Math.floor(Math.abs(SDC - expectedSDC) / 2) + " ND)"
	}
	if (aOCR == -0.6699999999999999) aOCR = -0.66;
	if (sOCR == -0.6699999999999999) sOCR = -0.66;
	
	if (aOCR >= sOCR) {
		OCR = aOCR;
		document.getElementById("offensiveCRbyAtt").style.color = "#000";
		document.getElementById("offensiveCRbyAttLabel").style.color = "#000";
		document.getElementById("offensiveCRbySDC").style.color = "#666";
		document.getElementById("offensiveCRbySDCLabel").style.color = "#666";
	} else {
		OCR = sOCR;
		document.getElementById("offensiveCRbyAtt").style.color = "#666";
		document.getElementById("offensiveCRbyAttLabel").style.color = "#666";
		document.getElementById("offensiveCRbySDC").style.color = "#000";
		document.getElementById("offensiveCRbySDCLabel").style.color = "#000";
	}
	if (OCR < 0) { OCR = 0; }
	
	document.getElementById("CRbyDmg").innerHTML = roundCR(dmgCR, true) + "<br/><span class='smallAddendum'>(" + dmgCR + ")</span>";
	document.getElementById("DmgCRAtt").innerHTML = "+" + expectedAtt + "<br/><span class='smallAddendum'>" + adjAtt + "</span>";
	document.getElementById("DmgCRSDC").innerHTML = expectedSDC + "<br/><span class='smallAddendum'>" + adjSDC + "</span>";
	document.getElementById("offensiveCRbyAtt").innerHTML = roundCR(aOCR, true) + "<br/><span class='smallAddendum'>(" + aOCR + ")</span>";
	document.getElementById("offensiveCRbySDC").innerHTML = roundCR(sOCR, true) + "<br/><span class='smallAddendum'>(" + sOCR + ")</span>";
	
	//CALCULATE FINAL CR
	document.getElementById("finalCR").innerHTML = roundCR((DCR + OCR) / 2, true) + "<br/><span class='lessSmallAddendum'>(" + ((DCR + OCR) / 2) + ")</span>";
	
	//CHECK AGAINST TARGET CR RANGE
	var CRCell = document.getElementById("targetCRCell");
	var finalCR = roundCR((DCR + OCR) / 2);
	if (tier == 1 && finalCR > 4) {
		CRCell.style.backgroundColor = "yellow";
	} else if (tier == 2 && (finalCR < 5 || finalCR > 10)) {
		CRCell.style.backgroundColor = "yellow";
	} else if (tier == 3 && (finalCR < 11 || finalCR > 16)) {
		CRCell.style.backgroundColor = "yellow";
	} else if (tier == 4 && finalCR < 17) {
		CRCell.style.backgroundColor = "yellow";
	} else {
		CRCell.style.backgroundColor = "white";
	}
}