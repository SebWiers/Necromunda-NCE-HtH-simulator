function rollDie(){
	return Math.ceil(Math.random()*6);
};

function rollDice(a){
	var i=0,roll = [],die;
	for (i;i<a;i++){
		roll.push(rollDie());
	}
	return roll.sort();
}

function parry(roll){
	roll[roll.length-1] = rollDie();
	return roll.sort();
};

function getRollResult(roll,flail){
	var die=0, dice=roll.length, result = roll[dice-1];
	if (result===1){
		result=0;
		if (flail && flail>0){
				result--;
				flail--;
		}
	}
	for (die;die<dice-1;die++){
		if (roll[die]===1){
			result--;
			if (flail && flail>0){
				result--;
				flail--;
			}
		}
		if (roll[die]===6){result++;};
	}
	return result;
}

function getOutcome(fightSetup){
	var setup = {
		f1WS : fightSetup.f1WS,
		f1A : fightSetup.f1A,
		f1Parry : fightSetup.f1Parry,
		f1Flail : fightSetup.f1Flail,
		f1LooseTie : fightSetup.f1LooseTie,
		f2WS : fightSetup.f2WS,
		f2A : fightSetup.f2A,
		f2Parry : fightSetup.f2Parry,
		f2Flail : fightSetup.f2Flail,
		f2LooseTie : fightSetup.f2LooseTie
	};
	results = {};
	var f1 = rollDice(setup.f1A) ;
	var f2 = rollDice(setup.f2A);
	
	var f1Result = getRollResult(f1,setup.f1Flail) + setup.f1WS;
	var f2Result = getRollResult(f2,setup.f2Flail) + setup.f2WS;
		
	while (setup.f1Parry>0 || setup.f2Parry>0){
		if (f1Result < f2Result  && setup.f1Parry > 0){
			setup.f1Parry--;
			f2=parry(f2);
			f2Result = getRollResult(f2,setup.f2Flail) + setup.f2WS;
		}
		else if (f1Result  > f2Result && setup.f2Parry > 0){
			setup.f2Parry--;
			f1=parry(f1);
			f1Result = getRollResult(f1,setup.f1Flail) + setup.f1WS;
		}
		else {
			setup.f1Parry--;setup.f2Parry--;
		}		
	}
	
	if (f1Result > f2Result){ 
		results.f1Win = 1;
		results.f1Hit = f1Result - f2Result;
	}
	else if (f2Result > f1Result){ 
		results.f2Win = 1;
		results.f2Hit = f2Result - f1Result;
	}
	else if(setup.f2LooseTie){
		results.f1Win = 1;
		results.f1Hit = 1;
	}
	else if(setup.f1LooseTie){
		results.f2Win = 1;
		results.f2Hit = 1;
	}
	else { results.tie = 1 }
	return results;
};

function fight(){	
	var s, setup = {
		f1WS : parseInt($('#f1ws').val() ,10),
		f1A : parseInt($('#f1a').val() ,10),
		f1Parry : parseInt($('#f1p').val() ,10),
		f1Flail : parseInt($('#f1f').val() ,10),
		f1LooseTie: $('#f1lt').prop('checked')?1:0,
		f2WS : parseInt($('#f2ws').val() ,10),
		f2A : parseInt($('#f2a').val() ,10),
		f2Parry : parseInt($('#f2p').val() ,10),
		f2Flail : parseInt($('#f2f').val() ,10),
		f2LooseTie: $('#f2lt').prop('checked')?1:0
	};
	for (s in setup){
		setup[s] = !!setup[s] ? setup[s] : 0;
	}
	var results = {f1Win:0,f1Hit:0,tie:0,f2Win:0,f2Hit:0};
	var i,outcome,o;
	var rounds = !!parseInt($('#rounds').val() ,10) ? parseInt($('#rounds').val() ,10) : 100;
	for (i=0; i<rounds; i++){
		outcome = getOutcome(setup);
		for (o in outcome){
			results[o] += outcome[o]
		}		
	}
	//console.log(setup,results);
	for (o in results){
		$('#'+o).text(results[o]/rounds);
	}
}





