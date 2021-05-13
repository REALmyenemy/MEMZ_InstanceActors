/*:
 * Version 1.0.0
 * @target MZ
 * Last update 27/04/21
 * @author myenemy
 * @plugindesc This plugin allows you to create actors with specific variety of extra parameters
 * @help
 * This plugin copies an actor, then adds Change Parameter commands randomly. This is similar to systems like to IVs in pokémon, but the value is added raw.
 * You can change the plugin parameters, and the increase/decrease will be applied based of a random number between Min and Max of the same stat.
 * 
 * @param minhp
 * @text Min MHP bonus
 * @type Number
 * @default -200
 * @desc This is the minimal ammount the actor can earn generated this way. Negative for decrease.
 * 
 * @param maxhp
 * @text Max MHP bonus
 * @type Number
 * @default 200
 * @desc This is the minimal ammount the actor can earn generated this way. Always higher than Min HP!.
 * 
 * @param minmp
 * @text Min MMP bonus
 * @type Number
 * @default -100
 * @desc This is the minimal ammount the actor can earn generated this way. Negative for decrease.
 * 
 * @param maxmp
 * @text Max MMP bonus
 * @type Number
 * @default 100
 * @desc This is the minimal ammount the actor can earn generated this way. Always higher than Min HP!
 * 
 * @param minatk
 * @text Min ATK bonus
 * @type Number
 * @default -10
 * @desc This is the minimal ammount the actor can earn generated this way. Negative for decrease.
 * 
 * @param maxatk
 * @text Max ATK bonus
 * @type Number
 * @default 10
 * @desc This is the minimal ammount the actor can earn generated this way. Always higher than Min ATK!
 * 
 * @param mindef
 * @text Min Def bonus
 * @type Number
 * @default -10
 * @desc This is the minimal ammount the actor can earn generated this way. Negative for decrease.
 * 
 * @param maxdef
 * @text Max Def bonus
 * @type Number
 * @default 10
 * @desc This is the minimal ammount the actor can earn generated this way. Always higher than Min Def!
 * 
 * @param minmat
 * @text Min MAt bonus
 * @type Number
 * @default -10
 * @desc This is the minimal ammount the actor can earn generated this way. Negative for decrease.
 * 
 * @param maxmat
 * @text Max MAt bonus
 * @type Number
 * @default 10
 * @desc This is the minimal ammount the actor can earn generated this way. Always higher than Min MAt!.
 * 
 * @param mimde
 * @text Min MDe bonus
 * @type Number
 * @default -10
 * @desc This is the minimal ammount the actor can earn generated this way. Negative for decrease.
 * 
 * @param maxmde
 * @text Max MDe bonus
 * @type Number
 * @default 10
 * @desc This is the minimal ammount the actor can earn generated this way. Always higher than Min MDe!.
 * 
 * @param minagi
 * @text Min Agility bonus
 * @type Number
 * @default -10
 * @desc This is the minimal ammount the actor can earn generated this way. Negative for decrease.
 * 
 * @param maxagi
 * @text Max Agility bonus
 * @type Number
 * @default 10
 * @desc This is the minimal ammount the actor can earn generated this way. Always higher than Min Agility!.
 * 
 * @param minluck
 * @text Min Luck bonus
 * @type Number
 * @default -10
 * @desc This is the minimal ammount the actor can earn generated this way. Negative for decrease.
 * 
 * @param maxluck
 * @text Max Luck bonus
 * @type Number
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
 * @command add
 * @text Add character
 * @arg InstanceActorID
 * @desc Add an actor based on the ID in the list.
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
Imported.ME_InstanceActors = "1.0.0";

if (Imported.ME_CopyActor)
{

	var MEMZ_IA_defaultChangeParamVariability=MEMZ_IA_GetDefaultParams();
	var MEMZ_IA_GameActorSetup = Game_Actor.prototype.setup;



	Game_Actor.prototype.setup = function(actorId) {
		MEMZ_IA_GameActorSetup.call(this,actorId);
		this._instanceActorId = 0;
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
				
				$gameActors.actor(y).generateActor(x, MEMZ_IA_GetParams(args));
				
			}
		}
	});



	Game_Actor.prototype.generateActor = function(target,array=MEMZ_IA_generateParams())
	{
		this.copyActor(target);
		this._bv = array;
		for (var i = 0;i<this._bv.length;i++)
		{
			this.addParam(i, this._bv[i]);
		}
		if(this._bv[0]>0)
		{
			this.gainHp(this._bv[0]);
		}
		if(this._bv[1]>0)
		{
			this.gainMp(this._bv[1]);
		}
	};


	function MEMZ_IA_GetDefaultParams()
	{
		return [MEMZ_IA_getParam("minhp"),
				MEMZ_IA_getParam("maxhp"),
				MEMZ_IA_getParam("minmp"),
				MEMZ_IA_getParam("maxmp"),
				MEMZ_IA_getParam("minatk"),
				MEMZ_IA_getParam("maxatk"),
				MEMZ_IA_getParam("mindef"),
				MEMZ_IA_getParam("maxdef"),
				MEMZ_IA_getParam("minmat"),
				MEMZ_IA_getParam("maxmat"),
				MEMZ_IA_getParam("minmde"),
				MEMZ_IA_getParam("maxmde"),
				MEMZ_IA_getParam("minagi"),
				MEMZ_IA_getParam("maxagi"),
				MEMZ_IA_getParam("minluck"),
				MEMZ_IA_getParam("maxluck")];
	};

	function MEMZ_IA_GetParams(args=[0])
	{ // hacer 0 defaults
		if (args&&args.length>1)
		return [args["Min HP"]|0,
				args["Max HP"]|0,
				args["Min MP"]|0,
				args["Max MP"]|0,
				args["Min ATK"]|0,
				args["Max ATK"]|0,
				args["Min DEF"]|0,
				args["Max DEF"]|0,
				args["Min MAT"]|0,
				args["Max MAT"]|0,
				args["Min MDE"]|0,
				args["Max MDE"]|0,
				args["Min Agi"]|0,
				args["Max Agi"]|0,
				args["Min Luck"]|0,
				args["Max Luck"]|0];
		else
			return MEMZ_IA_GetDefaultParams();
	};

	function MEMZ_IA_generateParams(array=MEMZ_IA_defaultChangeParamVariability)
	{
		var aux=[];
		for (var i=0;i<array.length-1;i++)
		{
			aux.push(MEMZ_IA_generateParam(array[i++],array[i]));
		}
		return aux;
	};

	function MEMZ_IA_generateParam (left, right)
	{
		if ((!left&&left!==0)||(!right&&right!==0)||left>right)
			return 0;
		else
			return Math.floor(Math.random() * (right-left))+left;
	}

	function MEMZ_IA_getParam (name)
	{
		var parameters = PluginManager.parameters('ME_InstanceActor');
		return parseInt(parameters[name]);
	};
}