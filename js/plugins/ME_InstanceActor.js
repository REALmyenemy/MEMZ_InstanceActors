/*:
 * Version 1.3.0
 * @target MZ
 * Last update 31/01/25
 * @author myenemy
 * @plugindesc This plugin allows you to create actors with specific variety of extra parameters
 * @help
 * This plugin copies an actor, then adds Change Parameter commands randomly. This is similar to systems like to IVs in pokémon, but the value is added raw.
 * You can change the plugin parameters, and the increase/decrease will be applied based of a random number between Min and Max of the same stat.
 * In this version, you can use both, direct input and game variable inputs.
 * To use editor variables, just add any letter next to the number, like "V5" will check variable 5 instead!
 * To add percentages, just place a % symbol!
 * You can mix them two, like "P10%" will check the value of variable 10, and it will turn it into a percentage of the stat!
 * 
 * @ChangeLog
 * 1.3:
 *  - Added the option to auto-add the instanced actor into party in the plugin commands "Add immediately".
 *  - Fixed editor not reading description of plugin commands
 *  - Unified commands for simplicity.
 * 	- Fixed two bugs that could lead to crash.
 * 
 * 1.2:
 *  - Compatibilized with CopyActor 1.1.0 and newer, without removing 1.0.0 compatibility
 *  - Optimized functions.
 * 
 * 1.1:
 * 	- A lot of early bugfixes
 *  - Added command for generation using default parameters on customized, rather than 0
 *  - Now compatible with variables and percentages
 * 
 * @param stats
 * @text Default instance settings
 * 
 * @param minhp
 * @parent stats
 * @text Min MHP bonus
 * @type number
 * @default -200
 * @desc This is the minimal amount the actor can earn generated this way. Negative for decrease.
 * 
 * @param maxhp
 * @parent stats
 * @text Max MHP bonus
 * @type number
 * @default 200
 * @desc This is the minimal amount the actor can earn generated this way. Always higher than Min HP!.
 * 
 * @param minmp
 * @parent stats
 * @text Min MMP bonus
 * @type number
 * @default -100
 * @desc This is the minimal amount the actor can earn generated this way. Negative for decrease.
 * 
 * @param maxmp
 * @parent stats
 * @text Max MMP bonus
 * @type number
 * @default 100
 * @desc This is the minimal amount the actor can earn generated this way. Always higher than Min HP!
 * 
 * @param minatk
 * @parent stats
 * @text Min ATK bonus
 * @type number
 * @default -10
 * @desc This is the minimal amount the actor can earn generated this way. Negative for decrease.
 * 
 * @param maxatk
 * @parent stats
 * @text Max ATK bonus
 * @type number
 * @default 10
 * @desc This is the minimal amount the actor can earn generated this way. Always higher than Min ATK!
 * 
 * @param mindef
 * @parent stats
 * @text Min Def bonus
 * @type number
 * @default -10
 * @desc This is the minimal amount the actor can earn generated this way. Negative for decrease.
 * 
 * @param maxdef
 * @parent stats
 * @text Max Def bonus
 * @type number
 * @default 10
 * @desc This is the minimal amount the actor can earn generated this way. Always higher than Min Def!
 * 
 * @param minmat
 * @parent stats
 * @text Min MAt bonus
 * @type number
 * @default -10
 * @desc This is the minimal amount the actor can earn generated this way. Negative for decrease.
 * 
 * @param maxmat
 * @parent stats
 * @text Max MAt bonus
 * @type number
 * @default 10
 * @desc This is the minimal amount the actor can earn generated this way. Always higher than Min MAt!.
 * 
 * @param minmde
 * @parent stats
 * @text Min MDe bonus
 * @type number
 * @default -10
 * @desc This is the minimal amount the actor can earn generated this way. Negative for decrease.
 * 
 * @param maxmde
 * @parent stats
 * @text Max MDe bonus
 * @type number
 * @desc This is the minimal amount the actor can earn generated this way. Always higher than Min MDe!.
 * @default 10
 * 
 * @param minagi
 * @parent stats
 * @text Min Agility bonus
 * @type number
 * @desc This is the minimal amount the actor can earn generated this way. Negative for decrease.
 * @default -10
 * 
 * @param maxagi
 * @parent stats
 * @text Max Agility bonus
 * @type number
 * @desc This is the minimal amount the actor can earn generated this way. Always higher than Min Agility!.
 * @default 10
 * 
 * @param minluck
 * @parent stats
 * @text Min Luck bonus
 * @type number
 * @desc This is the minimal amount the actor can earn generated this way. Negative for decrease.
 * @default -10
 * 
 * @param maxluck
 * @parent stats
 * @text Max Luck bonus
 * @type number
 * @desc This is the minimal amount the actor can earn generated this way. Always higher than Min Luck!.
 * @default 10
 * 
 * @command generate
 * @text Generate actor
 * @desc Generate actor X on actor Y.
 * @arg Copy Id
 * @type number
 * @arg Paste Id
 * @type number
 * @arg Add immediately
 * @type boolean
 * @arg Generation type
 * @type select
 * @desc Default uses plugin params for empty fields. Empty is zero considers empty slots as if you wrote 0.
 * @option Default
 * @option Empty is Zero
 * @default Default
 * @arg Min HP
 * @parent Generation type
 * @arg Max HP
 * @parent Generation type
 * @arg Min MP
 * @parent Generation type
 * @arg Max MP
 * @parent Generation type
 * @arg Min ATK
 * @parent Generation type
 * @arg Max ATK
 * @parent Generation type
 * @arg Min DEF
 * @parent Generation type
 * @arg Max DEF
 * @parent Generation type
 * @arg Min MAT
 * @parent Generation type
 * @arg Max MAT
 * @parent Generation type
 * @arg Min MDE
 * @parent Generation type
 * @arg Max MDE
 * @parent Generation type
 * @arg Min Agi
 * @parent Generation type
 * @arg Max Agi
 * @parent Generation type
 * @arg Min Luck
 * @parent Generation type
 * @arg Max Luck
 * @parent Generation type
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
 * - You must follow LGPL 3.0 for this plugin.
 *
 * ==============================================
 *
 * 
 */

var Imported = Imported || {};
Imported.ME_InstanceActors = "1.3.0";

let t1, t2, t3, t4,t5,t6,t7;

if (Imported.ME_CopyActor) {

	const MEMZ_IA_defaultChangeParamVariability = MEMZ_IA_GetDefaultParams(); //So it's run once
	let MEMZ_IA_GameActorSetup = Game_Actor.prototype.setup;

	Game_Actor.prototype.setup = function (actorId) {
		MEMZ_IA_GameActorSetup.call(this, actorId);
		this._bv = [];
	};

	//Plugin commands
	PluginManager.registerCommand("ME_InstanceActor", "generate", args => {

		if (args) {
			let params = MEMZ_IA_getNewValues(args); //Gets [x,y]
			if (params) {
				switch (args["Generation type"]) {
					case "Default to plugin params":
						$gameActors.actor(params[1]).generateActor(params[0]);
						break;
					case "Empty is Zero":
						$gameActors.actor(params[1]).generateActor(params[0], MEMZ_IA_GetParams(args)); //Directly get from command args or zero
						break;
					case "Default":
						$gameActors.actor(params[1]).generateActor(params[0], MEMZ_IA_GetInitialParams(args)); //Get from args, params, or zero.
						break;
				}
				
				if (args["Add immediately"]) {
					$gameParty.addActor(parseInt(params[1]));
				}
			}
		}
	});

	//Functionality
	Game_Actor.prototype.generateBV = function (array) {
		var i = 0;
		return [this.createBV("mhp", array[i++]), this.createBV("mhp", array[i++]),
		this.createBV("mmp", array[i++]), this.createBV("mmp", array[i++]),
		this.createBV("atk", array[i++]), this.createBV("atk", array[i++]),
		this.createBV("def", array[i++]), this.createBV("def", array[i++]),
		this.createBV("mat", array[i++]), this.createBV("mat", array[i++]),
		this.createBV("mde", array[i++]), this.createBV("mde", array[i++]),
		this.createBV("agi", array[i++]), this.createBV("agi", array[i++]),
		this.createBV("luk", array[i++]), this.createBV("luk", array[i++])];
	}

	Game_Actor.prototype.createBV = function (stat, value) {
		if (isNaN(value)) {
			let finalChange = 0;

			if (isNaN(value.replace("%", ""))) {
				finalChange = MEMZ_IA_getGameVariables(value); //Check variable value
			}
			else {
				finalChange = parseFloat(value); //Get raw number
			}

			if (value.contains("%")) {
				return parseInt(this[stat] * finalChange / 100.0); //Return a percent of the stat
			}
			else {
				return finalChange; //Return the raw value
			}
		}
		else {
			return value;
		}
	}

	Game_Actor.prototype.generateActor = function (target, array = MEMZ_IA_defaultChangeParamVariability) {
		this.copyActor(target);
		this.bvCleanup();
		this._rbv = array; //So generation gets saved
		this._bv = MEMZ_IA_RandomizeStats(this.generateBV(array)); //So people can see the result

		for (let i = 0; i < this._bv.length; i++) {
			this.addParam(i, this._bv[i]);
		}

		this.recoverAll();
	};

	Game_Actor.prototype.bvCleanup = function () {
		if (this._bv)
			for (let i = 0; i < this._bv.length; i++) {
				this.addParam([i], (this._bv[i] * -1));
			}
	}


	function MEMZ_IA_RandomizeStats(array) {
		let aux = [];
		for (var i = 0; i < array.length - 1; i += 2) {
			aux.push(MEMZ_IA_generateParam(array[i], array[i + 1]));
		}

		return aux;
	}

	function MEMZ_IA_getParam(name) {
		let parameters = PluginManager.parameters('ME_InstanceActor');
		return parameters[name];
	};

	function MEMZ_IA_GetParams(args) {
		if (args) {

			let aux = [
				args["Min HP"], args["Max HP"],
				args["Min MP"], args["Max MP"],
				args["Min ATK"], args["Max ATK"],
				args["Min DEF"], args["Max DEF"],
				args["Min MAT"], args["Max MAT"],
				args["Min MDE"], args["Max MDE"],
				args["Min Agi"], args["Max Agi"],
				args["Min Luck"], args["Max Luck"]
			];
			for (let i = 0; i < aux.length; i++) {
				if (!aux[i])
					aux[i] = 0;
			}
			return aux;
		}
		else
			return MEMZ_IA_defaultChangeParamVariability;
	};

	function MEMZ_IA_GetInitialParams(args) {
		if (args) {
			let aux = [];
			aux.push(args["Min HP"] ? args["Min HP"] : MEMZ_IA_getParam("minhp"));
			aux.push(args["Max HP"] ? args["Max HP"] : MEMZ_IA_getParam("maxhp"));
			aux.push(args["Min MP"] ? args["Min MP"] : MEMZ_IA_getParam("minmp"));
			aux.push(args["Max MP"] ? args["Max MP"] : MEMZ_IA_getParam("maxmp"));
			aux.push(args["Min ATK"] ? args["Min ATK"] : MEMZ_IA_getParam("minatk"));
			aux.push(args["Max ATK"] ? args["Max ATK"] : MEMZ_IA_getParam("maxatk"));
			aux.push(args["Min DEF"] ? args["Min DEF"] : MEMZ_IA_getParam("mindef"));
			aux.push(args["Max DEF"] ? args["Max DEF"] : MEMZ_IA_getParam("maxdef"));
			aux.push(args["Min MAT"] ? args["Min MAT"] : MEMZ_IA_getParam("minmat"));
			aux.push(args["Max MAT"] ? args["Max MAT"] : MEMZ_IA_getParam("maxmat"));
			aux.push(args["Min MAT"] ? args["Min MAT"] : MEMZ_IA_getParam("minmat"));
			aux.push(args["Max MAT"] ? args["Max MAT"] : MEMZ_IA_getParam("maxmat"));
			aux.push(args["Min MDE"] ? args["Min MDE"] : MEMZ_IA_getParam("minmde"));
			aux.push(args["Max MDE"] ? args["Max MDE"] : MEMZ_IA_getParam("maxmde"));
			aux.push(args["Min AGI"] ? args["Min AGI"] : MEMZ_IA_getParam("minagi"));
			aux.push(args["Max AGI"] ? args["Max AGI"] : MEMZ_IA_getParam("maxagi"));
			aux.push(args["Min Luck"] ? args["Min Luck"] : MEMZ_IA_getParam("minluck"));
			aux.push(args["Max Luck"] ? args["Max Luck"] : MEMZ_IA_getParam("maxluck"));
			for (let i = 0; i < aux.length; i++) {
				if (!aux[i])
					aux[i] = 0;
			}
			return aux;
		}
		else
			return MEMZ_IA_defaultChangeParamVariability;
	};

	function MEMZ_IA_GetDefaultParams() {
		return [MEMZ_IA_getParam("minhp") | 0,
		MEMZ_IA_getParam("maxhp") || 0,
		MEMZ_IA_getParam("minmp") || 0,
		MEMZ_IA_getParam("maxmp") || 0,
		MEMZ_IA_getParam("minatk") || 0,
		MEMZ_IA_getParam("maxatk") || 0,
		MEMZ_IA_getParam("mindef") || 0,
		MEMZ_IA_getParam("maxdef") || 0,
		MEMZ_IA_getParam("minmat") || 0,
		MEMZ_IA_getParam("maxmat") || 0,
		MEMZ_IA_getParam("minmde") || 0,
		MEMZ_IA_getParam("maxmde") || 0,
		MEMZ_IA_getParam("minagi") || 0,
		MEMZ_IA_getParam("maxagi") || 0,
		MEMZ_IA_getParam("minluck") || 0,
		MEMZ_IA_getParam("maxluck") || 0];
	};

	function MEMZ_IA_generateParam(left, right) {
		if ((!left && left !== 0) || (!right && right !== 0) || left > right)
			return 0;
		else { //Maybe virtual console limitation, but it didn't work well with floats
			left = parseFloat(left);
			right = parseFloat(right);
			let random = Math.random();
			let value = right - left;
			let result = random * value;
			let floatstuff = result + left;
			let final = Math.round(floatstuff)
			return final;
		}
	};

	function MEMZ_IA_getGameVariables(variable) { //If alpha, return editor var.
		if (isNaN(variable)) {
			return $gameVariables.value(variable.match(/(\d+)/)[0]);
		}
		else
			return variable;
	}

	function MEMZ_IA_getNewValues(args) {
		let x = 0, y = 0;
		if (Imported.ME_CopyActor === "1.0.0") {
			x = checkNumber(args["Copy Id"]);
			y = checkNumber(args["Paste Id"]);

			if (x && y) {
				x = MEMZ_IA_getGameVariables(x);
				y = MEMZ_IA_getGameVariables(y);
			}
		}
		else {
			x = MEMZ_CA_checkNumber(args["Copy Id"]);
			y = MEMZ_CA_checkNumber(args["Paste Id"]);
		}
		if (x && y)
			return [parseInt(x), parseInt(y)];
		else
			return false;
	}

}
