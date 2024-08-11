/*:
* @target MZ
 * Version 1.1.0
 * Last update 11/08/24
 * @author myenemy
 * @plugindesc This plugin allows you to copy the features of any actor into another
 * @help
 * With this plugin, you can use plugin commands as well as script calls to copy
 * parts of the entirety of an actor inot another!
 * 
 * 
 * @command copy
 * @text Copy actor
 * @arg Copy Id
 * @arg Paste Id
 * @desc Copy actor X on actor Y (everything)
 * 
 * @command class
 * @text Copy class
 * @arg Copy Id
 * @arg Paste Id
 * @desc Copy the class actor X has on actor Y
 * 
 * @command params
 * @text Copy params
 * @arg Copy Id
 * @arg Paste Id
 * @desc Copy the params actor X has on actor Y
 * 
 * @command skills
 * @text Copy skills
 * @arg Copy Id
 * @arg Paste Id
 * @desc Copy the skills actor X has on actor Y
 * 
 * @command stats
 * @text Copy bars
 * @arg Copy Id
 * @arg Paste Id
 * @desc Copy HP, MP and TP from actor X on actor Y
 *
 * @command states
 * @text Copy states
 * @arg Copy Id
 * @arg Paste Id
 * @desc Copy the states actor X has on actor Y
 * 
 * @command buffs
 * @text Copy buffs
 * @arg Copy Id
 * @arg Paste Id
 * @desc Copy the buffs actor X has on actor Y (timers too)
 * 
 * @command looks
 * @text Copy looks
 * @arg Copy Id
 * @arg Paste Id
 * @desc Copy the looks actor X has on actor Y
 *
 * @command name
 * @text Copy name
 * @arg Copy Id
 * @arg Paste Id
 * @desc Copy the name actor X has on actor Y
 *
 * @command nickname
 * @text Copy nickname
 * @arg Copy Id
 * @arg Paste Id
 * @desc Copy the nickname actor X has on actor Y
 *
 * @command names
 * @text Copy names
 * @arg Copy Id
 * @arg Paste Id
 * @desc Copy name and nickname actor X has on actor Y
 *
 * 
 * 
 * @Script Calls
 * All of the script calls in this plugin are set to Game_Actor, so to call them you have to use $gameActors(y).commandName,
 * where y is the actor you want to be copied over, and commandName, the name of the code you want to run.
 * 
 * copyActor(x):
 * It copies the entire actor over this actor.
 * For example "Copy actor 2 into actor 1" would be: $gameActors(1).copyActor(2)
 
 * copyNames(x):
 * It copies the name and nickname actor x has over actor y.
 * For example "Copy actor 2's name and nickname into actor 1" would be: $gameActors(1).copyNames(2)
 * 
 * copyNickname(x):
 * It copies the nickname actor x has over actor y.
 * For example "Copy actor 2's nickname into actor 1" would be: $gameActors(1).copyNickname(2)
 * 
 * copyName(x):
 * It copies the name actor x has over actor y.
 * For example "Copy actor 2's name into actor 1" would be: $gameActors(1).copyName(2)
 * 
 * copyLooks(x):
 * It copies the looks actor x has over actor y. Including chara, image and sidebattler.
 * For example "Copy actor 2's looks into actor 1" would be: $gameActors(1).copyLooks(2)
 * 
 * copySkills(x):
 * It copies the natural skills actor x has over actor y.
 * For example "Copy actor 2's skills into actor 1" would be: $gameActors(1).copySkills(2)
 * 
 * copyDynStats(x):
 * It copies the hp, mp and tp actor x has over actor y's
 * For example "Copy actor 2's hp, mp and tp into actor 1" would be: $gameActors(1).copyDynStats(2)
 * 
 * copyEquipment(x):
 * It generates a copy actor x has gear and equips it to actor y as long as it is possible, and despawns the gear char Y has.
 * For example "Copy actor 2's equipment into actor 1" would be: $gameActors(1).copyEquipment(2)
 * 
 * copyBuffs(x):
 * It copies the battle buffs actor x has over actor y's. Remember this is a battle thing!
 * For example "Copy actor 2's buffs into actor 1" would be: $gameActors(1).copyBuffs(2)
 * 
 * copyStates(x):
 * It copies the states actor x has over actor y's
 * For example "Copy actor 2's states into actor 1" would be: $gameActors(1).copyStates(2)
 * 
 * copyParams(x):
 * It copies the special and ex params actor x has over actor y's
 * For example "Copy actor 2's special and ex params into actor 1" would be: $gameActors(1).copyParams(2)
 * 
 * copyClass(x):
 * It copies the class actor x has over actor y's
 * For example "Copy actor 2's class into actor 1" would be: $gameActors(1).copyClass(2)
 * 
 * 
 * ==============================================
 * @Terms of use
 * - Common:
 * -  Free to use as in money.
 * -  Feel free to modify to redistribute it.
 * -  This plugin comes as is, with no guarantees.
 * -  I'll try to give support about it, but I can't say I will do it for sure.
 * - Non Commercial:
 * -  No credit required unless you modify it then credit yourself, in other words,
 *   no claiming as your own!
 * - Commercial:
 * -  Give credit me as the author of this plugin, I don't mind if you do so in some
 *   scene or some easter egg.
 * -  Report any bugs, incompatibilities and issues with this plugin to me, even if
 *   you have someone else fixing them.
 * 
 * @Terms of redistribution and disambiguation
 * - You must include a link to the original RPG Maker Forums Post plugin.
 * - You can add terms to it, but you can't remove or modify the ones already existent.
 * - You must follow LGPL 3.0.
 *
 * ==============================================
 *
 *
 */

var Imported = Imported || {};
Imported.ME_CopyActor = "1.1.0";

PluginManager.registerCommand("ME_CopyActor", "copy", args => {

	if (args) {
		let x = MEMZ_CA_checkNumber(args["Copy Id"])
		let y = MEMZ_CA_checkNumber(args["Paste Id"])
		if (x && y) {
			x = Number.parseInt(x);
			y = Number.parseInt(y);

			$gameActors.actor(y).copyActor(x);
		}
	}
});

PluginManager.registerCommand("ME_CopyActor", "class", args => {

	if (args) {
		let x = MEMZ_CA_checkNumber(args["Copy Id"])
		let y = MEMZ_CA_checkNumber(args["Paste Id"])
		if (x && y) {
			x = Number.parseInt(x);
			y = Number.parseInt(y);

			$gameActors.actor(y).copyClass(x);
		}
	}
});

PluginManager.registerCommand("ME_CopyActor", "params", args => {

	if (args) {
		let x = MEMZ_CA_checkNumber(args["Copy Id"])
		let y = MEMZ_CA_checkNumber(args["Paste Id"])
		if (x && y) {
			x = Number.parseInt(x);
			y = Number.parseInt(y);

			$gameActors.actor(y).copyParams(x);
		}
	}
});

PluginManager.registerCommand("ME_CopyActor", "skills", args => {

	if (args) {
		let x = MEMZ_CA_checkNumber(args["Copy Id"])
		let y = MEMZ_CA_checkNumber(args["Paste Id"])
		if (x && y) {
			x = Number.parseInt(x);
			y = Number.parseInt(y);

			$gameActors.actor(y).copySkills(x);
		}
	}
});
PluginManager.registerCommand("ME_CopyActor", "stats", args => {

	if (args) {
		let x = MEMZ_CA_checkNumber(args["Copy Id"])
		let y = MEMZ_CA_checkNumber(args["Paste Id"])
		if (x && y) {
			x = Number.parseInt(x);
			y = Number.parseInt(y);

			$gameActors.actor(y).copyDynStats(x);
		}
	}
});

PluginManager.registerCommand("ME_CopyActor", "states", args => {

	if (args) {
		let x = MEMZ_CA_checkNumber(args["Copy Id"])
		let y = MEMZ_CA_checkNumber(args["Paste Id"])
		if (x && y) {
			x = Number.parseInt(x);
			y = Number.parseInt(y);

			$gameActors.actor(y).copyStates(x);
		}
	}
});

PluginManager.registerCommand("ME_CopyActor", "buffs", args => {

	if (args) {
		let x = MEMZ_CA_checkNumber(args["Copy Id"])
		let y = MEMZ_CA_checkNumber(args["Paste Id"])
		if (x && y) {
			x = Number.parseInt(x);
			y = Number.parseInt(y);

			$gameActors.actor(y).copyBuffs(x);
		}
	}
});

PluginManager.registerCommand("ME_CopyActor", "looks", args => {

	if (args) {
		let x = MEMZ_CA_checkNumber(args["Copy Id"])
		let y = MEMZ_CA_checkNumber(args["Paste Id"])
		if (x && y) {
			x = Number.parseInt(x);
			y = Number.parseInt(y);

			$gameActors.actor(y).copyLooks(x);
		}
	}
});

PluginManager.registerCommand("ME_CopyActor", "name", args => {

	if (args) {
		let x = MEMZ_CA_checkNumber(args["Copy Id"])
		let y = MEMZ_CA_checkNumber(args["Paste Id"])
		if (x && y) {
			x = Number.parseInt(x);
			y = Number.parseInt(y);

			$gameActors.actor(y).copyName(x);
		}
	}
});

PluginManager.registerCommand("ME_CopyActor", "nickname", args => {

	if (args) {
		let x = MEMZ_CA_checkNumber(args["Copy Id"])
		let y = MEMZ_CA_checkNumber(args["Paste Id"])
		if (x && y) {
			x = Number.parseInt(x);
			y = Number.parseInt(y);

			$gameActors.actor(y).copyNickname(x);
		}
	}
});

PluginManager.registerCommand("ME_CopyActor", "names", args => {

	if (args) {
		let x = MEMZ_CA_checkNumber(args["Copy Id"])
		let y = MEMZ_CA_checkNumber(args["Paste Id"])
		if (x && y) {
			x = Number.parseInt(x);
			y = Number.parseInt(y);

			$gameActors.actor(y).copyNames(x);
		}
	}
});

let MEMZ_CA_checkNumber = function (variable) {
	try {
		if (isNaN(variable))
		{
			let varId = variable.match(/.*(\d+).*/)[1];
			return $gameVariables.value(varId);
		}
		else
			return Number.parseInt(variable);
	} catch (error) {
		return false;
	}
}

Game_Actor.prototype.copyClass = function (target) {
	this.changeClass($gameActors.actor(target)._classId)
}

Game_Actor.prototype.copyParams = function (target) {
	for (let i = 0; i < this._paramPlus.length && i < $gameActors.actor(target)._paramPlus.length; i++) {
		this._paramPlus.length[i] = $gameActors.actor(target)._paramPlus[i];
	}
}

Game_Actor.prototype.copyStates = function (target) {
	let actorT = $gameActors.actor(target);

	while (this._states.length > 0) {
		this.removeState(this._states[0])
	}


	for (let i = 0; i < actorT._states.length; i++) {
		let state = actorT._states[i];

		this.addState(state);

		this._stateTurns[state] = actorT._stateTurns[state];
		this._stateSteps[state] = actorT._stateSteps[state];

	}
}

Game_Actor.prototype.copyBuffs = function (target) {
	let actorT = $gameActors.actor(target);

	for (let i = 0; i < this._buffs.length; i++) {

		this._buffs[i] = actorT._buffs[i];
		this._buffTurns[i] = actorT._buffTurns[i];

	}
}

Game_Actor.prototype.copyEquipment = function (target) {
	let thisGear = this.equips();
	let thatGear = $gameActors.actor(target).equips();
	let old = null;
	if (thisGear.length == thatGear.length) {
		for (let i = 0; i < thisGear.length; i++) {
			if (thisGear[i] === thatGear[i]) {

			}
			else {
				let item = null;
				if (thatGear[i]) {
					item = thatGear[i].etypeId == 1 ? $dataWeapons[thatGear[i].id] : $dataArmors[thatGear[i].id];
					$gameParty.gainItem(item, 1);
				}
				if (thisGear[i]) {
					old = thisGear[i].etypeId == 1 ? $dataWeapons[thisGear[i].id] : $dataArmors[thisGear[i].id];
				}

				this.changeEquip(i, item);
				if (old) {
					$gameParty.gainItem(old, -1);
				}

			}
		}
	}
}


Game_Actor.prototype.copyDynStats = function (target) {
	this._hp = $gameActors.actor(target)._hp;
	this._mp = $gameActors.actor(target)._mp;
	this._tp = $gameActors.actor(target)._tp;
}

Game_Actor.prototype.copySkills = function (target) {
	let limit = this.skills().length;

	for (let i = limit - 1; i > 0; i--) {
		this.forgetSkill(this.skills()[i].id);
	}

	let actorT = $gameActors.actor(target);

	for (let i = 0; i < actorT.skills().length; i++) {
		this.learnSkill(actorT.skills()[i].id);
	}

}

Game_Actor.prototype.copyLooks = function (target) {
	this._characterName = $gameActors.actor(target)._characterName;
	this._characterIndex = $gameActors.actor(target)._characterIndex;
	this._faceName = $gameActors.actor(target)._faceName;
	this._faceIndex = $gameActors.actor(target)._faceIndex;
	this._battlerName = $gameActors.actor(target)._battlerName;
	$gamePlayer.refresh();
}

Game_Actor.prototype.copyName = function (target) {
	this.setName($gameActors.actor(target).name());
}

Game_Actor.prototype.copyNickname = function (target) {
	this.setNickname($gameActors.actor(target).nickname());
}

Game_Actor.prototype.copyNames = function (target) {
	this.copyNickname(target);
	this.copyName(target);
}

Game_Actor.prototype.copyActor = function (target) {
	this.copyParams(target);
	this.copyStates(target);
	this.copyBuffs(target);
	this.copyClass(target);
	this.copyEquipment(target);
	this.copyDynStats(target);
	this.copySkills(target);
	this.copyLooks(target);
	this.copyNames(target);
}
