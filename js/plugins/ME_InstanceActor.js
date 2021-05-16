/*:
 * Version 1.1.0
 * @target MZ
 * Last update 16/05/21
 * @author myenemy
 * @plugindesc This plugin allows you to create actors with specific variety of extra parameters
 * @help
 * This plugin copies an actor, then adds Change Parameter commands randomly. This is similar to systems like to IVs in pokémon, but the value is added raw.
 * You can change the plugin parameters, and the increase/decrease will be applied based of a random number between Min and Max of the same stat.
 * 
 * @param minhp
 * @text Min MHP bonus
 * @default -200
 * @desc This is the minimal ammount the actor can earn generated this way. Negative for decrease.
 * 
 * @param maxhp
 * @text Max MHP bonus
 * @default 200
 * @desc This is the minimal ammount the actor can earn generated this way. Always higher than Min HP!.
 * 
 * @param minmp
 * @text Min MMP bonus
 * @default -100
 * @desc This is the minimal ammount the actor can earn generated this way. Negative for decrease.
 * 
 * @param maxmp
 * @text Max MMP bonus
 * @default 100
 * @desc This is the minimal ammount the actor can earn generated this way. Always higher than Min HP!
 * 
 * @param minatk
 * @text Min ATK bonus
 * @default -10
 * @desc This is the minimal ammount the actor can earn generated this way. Negative for decrease.
 * 
 * @param maxatk
 * @text Max ATK bonus
 * @default 10
 * @desc This is the minimal ammount the actor can earn generated this way. Always higher than Min ATK!
 * 
 * @param mindef
 * @text Min Def bonus
 * @default -10
 * @desc This is the minimal ammount the actor can earn generated this way. Negative for decrease.
 * 
 * @param maxdef
 * @text Max Def bonus
 * @default 10
 * @desc This is the minimal ammount the actor can earn generated this way. Always higher than Min Def!
 * 
 * @param minmat
 * @text Min MAt bonus
 * @default -10
 * @desc This is the minimal ammount the actor can earn generated this way. Negative for decrease.
 * 
 * @param maxmat
 * @text Max MAt bonus
 * @default 10
 * @desc This is the minimal ammount the actor can earn generated this way. Always higher than Min MAt!.
 * 
 * @param minmde
 * @text Min MDe bonus
 * @default -10
 * @desc This is the minimal ammount the actor can earn generated this way. Negative for decrease.
 * 
 * @param maxmde
 * @text Max MDe bonus
 * @default 10
 * @desc This is the minimal ammount the actor can earn generated this way. Always higher than Min MDe!.
 * 
 * @param minagi
 * @text Min Agility bonus
 * @default -10
 * @desc This is the minimal ammount the actor can earn generated this way. Negative for decrease.
 * 
 * @param maxagi
 * @text Max Agility bonus
 * @default 10
 * @desc This is the minimal ammount the actor can earn generated this way. Always higher than Min Agility!.
 * 
 * @param minluck
 * @text Min Luck bonus
 * @default -10
 * @desc This is the minimal ammount the actor can earn generated this way. Negative for decrease.
 * 
 * @param maxluck
 * @text Max Luck bonus
 * @default 10
 * @desc This is the minimal ammount the actor can earn generated this way. Always higher than Min Luck!.
 * 
 * @command generate
 * @text Generate actor
 * @arg Copy Id
 * @arg Paste Id
 * @desc Generate actor X on actor Y.
 * 
 * @command custom
 * @text Generate custom actor
 * @arg Copy Id
 * @arg Paste Id
 * @arg Min HP
 * @arg Max HP
 * @arg Min MP
 * @arg Max MP
 * @arg Min ATK
 * @arg Max ATK
 * @arg Min DEF
 * @arg Max DEF
 * @arg Min MAT
 * @arg Max MAT
 * @arg Min MDE
 * @arg Max MDE
 * @arg Min Agi
 * @arg Max Agi
 * @arg Min Luck
 * @arg Max Luck
 * @desc Generate actor X on actor Y, overriding the default settings
 * 
 * @command customnonzero
 * @text Generate custom nonZero actor
 * @arg Copy Id
 * @arg Paste Id
 * @arg Min HP
 * @arg Max HP
 * @arg Min MP
 * @arg Max MP
 * @arg Min ATK
 * @arg Max ATK
 * @arg Min DEF
 * @arg Max DEF
 * @arg Min MAT
 * @arg Max MAT
 * @arg Min MDE
 * @arg Max MDE
 * @arg Min Agi
 * @arg Max Agi
 * @arg Min Luck
 * @arg Max Luck
 * @desc Just like custom actor, but defaults to plugin parameters
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
 * //Frentes:
 * 1. Letra+numero=usar variable
 * -2. Numero+%=usar porcentage
 * 3. Generación no 0
 * 4. Usar variable como selección
 */

var Imported = Imported || {};
Imported.ME_InstanceActors = "1.1.0";

if (Imported.ME_CopyActor)
{

	const MEMZ_IA_defaultChangeParamVariability=MEMZ_IA_GetDefaultParams(); //So it's run once
	var MEMZ_IA_GameActorSetup = Game_Actor.prototype.setup;



	Game_Actor.prototype.setup = function(actorId) {
		MEMZ_IA_GameActorSetup.call(this,actorId);
		this._bv=[];
	};

	//Plugin commands
	PluginManager.registerCommand("ME_InstanceActor","generate",args => {
		
		if (args)
		{
			var x=checkNumber(args["Copy Id"])
			var y=checkNumber(args["Paste Id"])
			if (x&&y)
			{
				x=Number.parseInt(x);
				y=Number.parseInt(y);
				
				$gameActors.actor(y).generateActor(x);
			}
		}
	});

	PluginManager.registerCommand("ME_InstanceActor","custom",args => {
		
		if (args)
		{
			var x=checkNumber(args["Copy Id"])
			var y=checkNumber(args["Paste Id"])
			if (x&&y)
			{
				x=Number.parseInt(x);
				y=Number.parseInt(y);
				console.log(args)
				$gameActors.actor(y).generateActor(x, MEMZ_IA_GetParams(args));
				
			}
		}
	});

	//Functionality
	Game_Actor.prototype.generateBV = function(array)
	{
		var i=0;
		aux =[this.createBV("mhp",array[i++]),this.createBV("mhp",array[i++]),
			this.createBV("mmp",array[i++]),this.createBV("mmp",array[i++]),
			this.createBV("atk",array[i++]),this.createBV("atk",array[i++]),
			this.createBV("def",array[i++]),this.createBV("def",array[i++]),
			this.createBV("mat",array[i++]),this.createBV("mat",array[i++]),
			this.createBV("mde",array[i++]),this.createBV("mde",array[i++]),
			this.createBV("agi",array[i++]),this.createBV("agi",array[i++]),
			this.createBV("luk",array[i++]),this.createBV("luk",array[i++])];
		return aux;
	}

	Game_Actor.prototype.createBV = function (stat,value)
	{
		console.log(value)
		if (isNaN(value))
		{
			var finalChange=0;

			if (/[a-zA-Z]/gi.test(value))
				finalChange=$gameVariables.value[parseInt(value)]; //Check variable value
			else
				finalChange=parseFloat(value); //Get raw number

			if (value.contains("%"))
			{
				return parseInt(this[stat]*finalChange/100); //Return a percent of the stat
			}
			else
				return finalChange; //Return the raw value

			
		}
		else
		{
			console.log("Number"+value)
			return value;
		}
	}

	function MEMZ_IA_RandomizeStats (array)
	{
		var aux=[];
		for (var i=0;i<array.length-1;i+=2)
		{
			aux.push(MEMZ_IA_generateParam(array[i],array[i+1]));
		}
		return aux;
	}

	Game_Actor.prototype.generateActor = function(target,array=MEMZ_IA_defaultChangeParamVariability)
	{
		this.copyActor(target);
		this.bvCleanup();
		this._rbv= array; //So generation gets saved
		this._bv = MEMZ_IA_RandomizeStats(this.generateBV(array)); //So people can see the result
		
		for (var i = 0;i<this._bv.length;i++)
		{
			this.addParam(i, this._bv[i]);
		}

		this.recoverAll();
	};

	Game_Actor.prototype.bvCleanup = function()
	{
		if (this._bv)
			for (var i=0;i<this._bv.length;i++)
			{
				this.addParam([i],(this._bv[i]*-1));
			}
	}

	
	function MEMZ_IA_getParam (name)
	{
		var parameters = PluginManager.parameters('ME_InstanceActor');
		return parameters[name];
	};
	
	function MEMZ_IA_GetParams(args)
	{
		if (args)
		{
			var aux=[args["Min HP"],args["Max HP"],
			args["Min MP"],args["Max MP"],
			args["Min ATK"],args["Max ATK"],
			args["Min DEF"],args["Max DEF"],
			args["Min MAT"],args["Max MAT"],
			args["Min MDE"],args["Max MDE"],
			args["Min Agi"],args["Max Agi"],
			args["Min Luck"],args["Max Luck"]];
			for (var i=0;i<aux.length;i++)
			{
				if (!aux[i])
					aux[i]=0;
			}
			return aux;
		}
		else
		return MEMZ_IA_defaultChangeParamVariability;
	};
	
	
	function MEMZ_IA_GetDefaultParams()
	{
		return [MEMZ_IA_getParam("minhp")|0,
				MEMZ_IA_getParam("maxhp")|0,
				MEMZ_IA_getParam("minmp")|0,
				MEMZ_IA_getParam("maxmp")|0,
				MEMZ_IA_getParam("minatk")|0,
				MEMZ_IA_getParam("maxatk")|0,
				MEMZ_IA_getParam("mindef")|0,
				MEMZ_IA_getParam("maxdef")|0,
				MEMZ_IA_getParam("minmat")|0,
				MEMZ_IA_getParam("maxmat")|0,
				MEMZ_IA_getParam("minmde")|0,
				MEMZ_IA_getParam("maxmde")|0,
				MEMZ_IA_getParam("minagi")|0,
				MEMZ_IA_getParam("maxagi")|0,
				MEMZ_IA_getParam("minluck")|0,
				MEMZ_IA_getParam("maxluck")|0];
	};

	function MEMZ_IA_generateParam (left, right)
	{
		if ((!left&&left!==0)||(!right&&right!==0)||left>right)
			return 0;
		else
			return parseInt(Math.floor(Math.random() * (right-left))+left);
	};
	
}