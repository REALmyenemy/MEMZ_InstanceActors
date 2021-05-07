/*:
 * Version 1.0.0
 * @target MZ
 * Last update 30/08/20
 * @author myenemy
 * @plugindesc This plugin allows you to equip items as party members
 * @help
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
Imported.ME_CopyActor = "1.0.0";

PluginManager.registerCommand("ME_CopyActor","copy",args => {
	
	if (args)
	{
		var x=checkNumber(args["Copy Id"])
		var y=checkNumber(args["Paste Id"])
		if (x&&y)
		{
			x=Number.parseInt(x);
			y=Number.parseInt(y);
			
			$gameActors.actor(y).copyActor(x);
		}
	}
});

PluginManager.registerCommand("ME_CopyActor","class",args => {
	
	if (args)
	{
		var x=checkNumber(args["Copy Id"])
		var y=checkNumber(args["Paste Id"])
		if (x&&y)
		{
			x=Number.parseInt(x);
			y=Number.parseInt(y);
			
			$gameActors.actor(y).copyClass(x);
		}
	}
});

PluginManager.registerCommand("ME_CopyActor","params",args => {
	
	if (args)
	{
		var x=checkNumber(args["Copy Id"])
		var y=checkNumber(args["Paste Id"])
		if (x&&y)
		{
			x=Number.parseInt(x);
			y=Number.parseInt(y);
			
			$gameActors.actor(y).copyParams(x);
		}
	}
});

PluginManager.registerCommand("ME_CopyActor","skills",args => {
	
	if (args)
	{
		var x=checkNumber(args["Copy Id"])
		var y=checkNumber(args["Paste Id"])
		if (x&&y)
		{
			x=Number.parseInt(x);
			y=Number.parseInt(y);
			
			$gameActors.actor(y).copySkills(x);
		}
	}
});

PluginManager.registerCommand("ME_CopyActor","stats",args => {
	
	if (args)
	{
		var x=checkNumber(args["Copy Id"])
		var y=checkNumber(args["Paste Id"])
		if (x&&y)
		{
			x=Number.parseInt(x);
			y=Number.parseInt(y);
			
			$gameActors.actor(y).copyDynStats(x);
		}
	}
});

PluginManager.registerCommand("ME_CopyActor","states",args => {
	
	if (args)
	{
		var x=checkNumber(args["Copy Id"])
		var y=checkNumber(args["Paste Id"])
		if (x&&y)
		{
			x=Number.parseInt(x);
			y=Number.parseInt(y);
			
			$gameActors.actor(y).copyStates(x);
		}
	}
});

PluginManager.registerCommand("ME_CopyActor","buffs",args => {
	
	if (args)
	{
		var x=checkNumber(args["Copy Id"])
		var y=checkNumber(args["Paste Id"])
		if (x&&y)
		{
			x=Number.parseInt(x);
			y=Number.parseInt(y);
			
			$gameActors.actor(y).copyBuffs(x);
		}
	}
});

PluginManager.registerCommand("ME_CopyActor","looks",args => {
	
	if (args)
	{
		var x=checkNumber(args["Copy Id"])
		var y=checkNumber(args["Paste Id"])
		if (x&&y)
		{
			x=Number.parseInt(x);
			y=Number.parseInt(y);
			
			$gameActors.actor(y).copyLooks(x);
		}
	}
});

PluginManager.registerCommand("ME_CopyActor","name",args => {
	
	if (args)
	{
		var x=checkNumber(args["Copy Id"])
		var y=checkNumber(args["Paste Id"])
		if (x&&y)
		{
			x=Number.parseInt(x);
			y=Number.parseInt(y);
			
			$gameActors.actor(y).copyName(x);
		}
	}
});

PluginManager.registerCommand("ME_CopyActor","nickname",args => {
	
	if (args)
	{
		var x=checkNumber(args["Copy Id"])
		var y=checkNumber(args["Paste Id"])
		if (x&&y)
		{
			x=Number.parseInt(x);
			y=Number.parseInt(y);
			
			$gameActors.actor(y).copyNickname(x);
		}
	}
});

PluginManager.registerCommand("ME_CopyActor","names",args => {
	
	if (args)
	{
		var x=checkNumber(args["Copy Id"])
		var y=checkNumber(args["Paste Id"])
		if (x&&y)
		{
			x=Number.parseInt(x);
			y=Number.parseInt(y);
			
			$gameActors.actor(y).copyNames(x);
		}
	}
});

var checkNumber = function(variable)
{
	try {
		return Number.parseInt(variable);
	} catch (error) {
		return false;	
	}
}

Game_Actor.prototype.copyClass = function (target)
{
	this.changeClass($gameActors.actor(target)._classId)
}

Game_Actor.prototype.copyParams = function (target)
{
	for (var i = 0;i < this._paramPlus.length&& i < $gameActors.actor(target)._paramPlus.length;i++)
	{
		this._paramPlus.length[i] = $gameActors.actor(target)._paramPlus[i];
	}
}

Game_Actor.prototype.copyStates = function (target)
{
	var actorT = $gameActors.actor(target);

	while (this._states.length>0)
	{
		this.removeState(this._states[0])
	}


	for (var i = 0;i < actorT._states.length;i++)
	{
		var state = actorT._states[i];

		this.addState(state);
		
		this._stateTurns[state]=actorT._stateTurns[state];
		this._stateSteps[state]=actorT._stateSteps[state];
	
	}
}

Game_Actor.prototype.copyBuffs = function (target)
{
	var actorT = $gameActors.actor(target);

	for (var i = 0;i < this._buffs.length;i++)
	{

		this._buffs[i]=actorT._buffs[i];
		this._buffTurns[i]=actorT._buffTurns[i];
	
	}
}

Game_Actor.prototype.copyEquipment = function (target)
{
	var thisGear = this.equips();
	var thatGear = $gameActors.actor(target).equips();
	if (thisGear.length==thatGear.length)
	{
		for (var i = 0; i < thisGear.length; i++)
		{
			if (thisGear[i]===thatGear[i])
			{
				
			}
			else
			{
				var item = null;
				if (thatGear[i])
				{
					item = thatGear[i].etypeId==1 ? $dataWeapons[thatGear[i].id] : $dataArmors[thatGear[i].id];
					$gameParty.gainItem(item,1);
				}
				if (thisGear[i])
				{
					var old = thisGear[i].etypeId==1 ? $dataWeapons[thisGear[i].id] : $dataArmors[thisGear[i].id];
				}

				this.changeEquip(i,item);
				if (old)
				{
					$gameParty.gainItem(old, -1);
				}
					
			}
		}
	}
}

Game_Actor.prototype.copyDynStats = function (target)
{
	this._hp=$gameActors.actor(target)._hp;
	this._mp=$gameActors.actor(target)._mp;
	this._tp=$gameActors.actor(target)._tp;
}

Game_Actor.prototype.copySkills = function(target)
{
	var limit=this.skills().length;
	
	for (var i=limit-1;i>0;i--)
	{
		this.forgetSkill(this.skills()[i].id);
	}

	var actorT = $gameActors.actor(target);

	for (var i = 0;i < actorT.skills().length;i++)
	{
		this.learnSkill(actorT.skills()[i].id);
	}

}

Game_Actor.prototype.copyLooks = function (target)
{
	this._characterName=$gameActors.actor(target)._characterName;
	this._characterIndex=$gameActors.actor(target)._characterIndex;
	this._faceName=$gameActors.actor(target)._faceName;
	this._faceIndex=$gameActors.actor(target)._faceIndex;
	this._battlerName=$gameActors.actor(target)._battlerName;
	$gamePlayer.refresh();
}

Game_Actor.prototype.copyName = function (target)
{
	this.setName($gameActors.actor(target).name());
}

Game_Actor.prototype.copyNickname = function (target)
{
	this.setNickname($gameActors.actor(target).nickname());
}

Game_Actor.prototype.copyNames = function (target)
{
	this.copyNickname(target);
	this.copyName(target);
}

Game_Actor.prototype.copyActor = function (target)
{
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
