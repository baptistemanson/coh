export const expansions = {
	'Price of Honour': { id: 3, img: 'poh.jpg' },
	'Awakening The Bear': { id: 1, img: 'atb.jpg' },
	Guadalcanal: { id: 6, img: 'guadalcanal.jpg' },
	'Storms of Steel': { id: 2, img: 'sos.jpg' },
	'Eastern Front Solo': { id: 4, img: 'solo.jpg' },
	'Firefight Generator': { id: 5, img: 'ffg.jpg' },
	'Marsh Map': { id: 8 },
	'Monsters Tanks': { id: 7 },
	'Wrecks & Destruction': { id: 9 },
	'Guadalcanal Army': { id: 10 }
};

/**
 *  Find night defense scenario
 *  Review storms of steetl with v2
 * Add guadalcanal firefight
 */
export const getExpansionsFromIndex = (i) => {
	for (let expansion in expansions) {
		if (expansions[expansion].id == i) return expansion;
	}
	return 'unknown expansion';
};

export const scenarioList = [
	{
		name: 'Partisans',
		description:
			'Scattered Soviet infantry troops are working with partisan units. Unfortunately, German and SS squads have been tracking the partisans.',
		booklet: 1,
		players: [ 2 ],
		number: 1,
		requiredExpansions: [ 1 ]
	},
	{
		name: 'NKVD Defense at Mir',
		description:
			'June 30, 1941 Operations Journal: “Field Marshal von Bock’s Army Group Center has encircled large portions of the Soviet 3rd, 4th and 10th armies during the Bialystok-Minsk battle. The Soviets have initiated several break out attempts in order to link up with other West Front formations.”',
		booklet: 1,
		number: 2,
		players: [ 2, 3, 4 ],
		requiredExpansions: [ 1 ]
	},
	{
		name: 'The Gap',
		description:
			'German infantry must scout out for Soviet units, some revealed and some hidden, and search the road.',
		booklet: 1,
		number: 2,
		players: [ 2 ],
		requiredExpansions: [ 1 ]
	},
	{
		name: 'General Petrov',
		description:
			'Soviet General Petrov is wounded and hiding, and the Germans are on the hunt to locate him and either capture him alive or kill him.',
		booklet: 1,
		number: 3,
		players: [ 2 ],
		requiredExpansions: [ 1 ]
	},
	{
		name: 'Red Ice',
		description:
			'In early December, the Soviets sent dozens of fresh divisions to the front, while the Germans received neither rations, fuel or munitions.',
		booklet: 1,
		number: 3,
		players: [ 2, 3 ],
		requiredExpansions: [ 1 ]
	},
	{
		name: 'The Monsters',
		description:
			'After two days of heavy fighting for the city of Przemysl, the Germans blasted through the Russian southern defenses, aiming their Panzer groups deep into enemy territory',
		booklet: 1,
		number: 4,
		players: [ 2 ],
		requiredExpansions: [ 1 ]
	},
	{
		name: 'The Bunker',
		description:
			'The Germans have crossed the Bug river and are in full attack formations facing east. The Soviets have fortified hill 53 with bunkers, anti-tank guns, and tank support.',
		number: 5,
		booklet: 1,
		players: [ 2 ],
		requiredExpansions: [ 1 ]
	},
	{
		name: 'Breakthrough to the Mzensk Pocket',
		description:
			'A trapped German unit is short on supplies and surrounded by Soviets. Can their reinforcements break through the lines in time?',
		number: 6,
		booklet: 1,
		players: [ 2, 3, 4 ],
		requiredExpansions: [ 1 ]
	},
	{
		name: 'KV2',
		description:
			'The Germans’ progress is being slowed by a single Soviet tank blocking the road. The Germans must find a way to break through.',
		booklet: 1,
		players: [ 2 ],
		number: 7,
		requiredExpansions: [ 1 ]
	},
	{
		name: 'Bug River',
		description:
			'German infantry capture Soviet bunkers but are trapped by the river with no artillery support, which lacks ammo anyway. The Soviets counterattack to retake the bunkers.',
		booklet: 1,
		players: [ 2, 3, 4 ],
		number: 8,
		requiredExpansions: [ 1 ]
	},
	{
		name: 'Assault on Peprez',
		description:
			'German units must penetrate and hold key positions inside of the city against strong resistance by the Soviets.',
		booklet: 1,
		players: [ 2 ],
		number: 9,
		requiredExpansions: [ 1 ]
	},
	{
		name: 'Demolition',
		description:
			'Both sides fight heavily in the city, with the Germans attempting to blow up a communications headquarters building and the Soviets ordered to hold at all costs.',
		booklet: 1,
		players: [ 2 ],
		number: 10,
		requiredExpansions: [ 1 ]
	},
	{
		name: 'Smolensk Breakout',
		description:
			'Outnumbered Germans are holding two road intersections but are surrounded by Soviets. Will German reinforcements arrive in time?',
		number: 1,
		booklet: 1,
		players: [ 2 ],
		requiredExpansions: [ 1 ]
	},
	{
		name: 'Sovkhoz Depot',
		description:
			'The winter has frozen the German armor divisions, which have dug in and hold a supply depot. The Soviets must take the depot. ',
		number: 1,
		booklet: 1,
		players: [ 2 ],
		requiredExpansions: [ 1 ]
	},
	{
		name: 'Battle of Mogilev',
		description:
			'The Soviets are holding strong in a city, aided by mines and hasty defenses, but the Germans have orders to take the area.',
		number: 1,
		booklet: 1,
		players: [ 2 ],
		requiredExpansions: [ 1 ]
	},
	{
		name: 'Belbek Valley',
		description: 'The Soviets are holding the heavily fortified hills but the Germans have orders to take them.',
		number: 1,
		booklet: 1,
		players: [ 2 ],
		requiredExpansions: [ 1 ]
	},
	{
		name: 'Swamps of Bryansk',
		description:
			'A crucial bridge through the swamps is being held by the Soviets, and the Germans need to cross over it.',
		number: 1,
		booklet: 1,
		players: [ 2 ],
		requiredExpansions: [ 1, 8 ]
	},
	{
		name: 'Dry Ground',
		description:
			' This is another advanced firefight that requires combined armes combat, the use of smoke, and mortar fire.',
		number: 1,
		booklet: 1,
		players: [ 2 ],
		requiredExpansions: [ 1, 8 ]
	},
	{
		name: 'Clear and Secure',
		booklet: 2,
		number: 1,
		requiredExpansions: [ 2 ],
		players: [ 2 ],
		description:
			'As the Germans begin to consolidate their forces their infantry begin to sweep the area for remaining Soviet forces.'
	},
	{
		name: "The Courier's Satchel",
		booklet: 2,
		number: 1,
		requiredExpansions: [ 2 ],
		players: [ 2 ],
		description:
			'The Germans managed to obtain a covert Soviet satchel and the Soviets want it back. The Germans must safely deliver it to headquarters.'
	},
	{
		name: 'Wind or Sniper',
		booklet: 2,
		number: 1,
		requiredExpansions: [ 2 ],
		players: [ 2 ],
		description:
			'A tense battle between advancing Soviet snipers and defending German machine gunners set in a village.'
	},
	{
		name: 'State Farm 158',
		booklet: 2,
		number: 1,
		requiredExpansions: [ 2 ],
		players: [ 2 ],
		description:
			'German supply lines are constantly being broken, so special Panzer Grenadiers have been dispatched to secure the liens.'
	},
	{
		name: 'Pursuit of State Farm 158',
		booklet: 2,
		number: 1,
		requiredExpansions: [ 2 ],
		players: [ 2 ],
		description:
			'The Soviets have taken refuge in a large balka and overlooking hills, and German Panzer Grenadiers must flush them out.'
	},
	{
		name: 'Sneak Attack',
		booklet: 2,
		number: 1,
		requiredExpansions: [ 2 ],
		players: [ 2 ],
		description: 'As the Germans begin building a vital bridge, Soviet infantry and mortars fight to stop them. '
	},
	{
		name: 'Wounded Tiger',
		booklet: 2,
		number: 1,
		requiredExpansions: [ 2 ],
		players: [ 2 ],
		description:
			'The Germans have left an immobilized Tiger tank behind. They want to tow it away for repair but the Soviets intend to destroy it first!'
	},
	{
		name: 'Black Knights of the Steppe',
		booklet: 2,
		number: 1,
		requiredExpansions: [ 2 ],
		players: [ 2 ],
		description:
			'Both sides prepare for their armor units to engage in a fierce battle as the Germans attempt to capture and hold the city of Kursk.'
	},
	{
		name: 'Blinding the Bear',
		booklet: 2,
		number: 1,
		requiredExpansions: [ 2 ],
		players: [ 2 ],
		description: 'The Germans must capture Soviet strongholds being used to call in artillery fire. '
	},
	{
		name: 'Tanks!',
		booklet: 2,
		number: 1,
		requiredExpansions: [ 2 ],
		players: [ 2 ],
		description: 'A slugfest involving 35 tanks as both sides fight for high ground offered by the hills.'
	},
	{
		name: "Rotmistrov's Red Dawn",
		booklet: 2,
		number: 1,
		requiredExpansions: [ 2 ],
		players: [ 2 ],
		description: 'The Germans must quickly reach the village and secure it and hold off the Soviet forces.'
	},
	{
		name: 'The Bloody Brothers',
		booklet: 2,
		number: 1,
		requiredExpansions: [ 2 ],
		players: [ 2 ],
		description:
			'The Germans are holding an observation post on a hill, and must secure it against the Soviet forces attempting to retake it.'
	},
	{
		name: 'Luchki (part 1)',
		booklet: 2,
		number: 1,
		requiredExpansions: [ 2 ],
		players: [ 2 ],
		description:
			'Soviet must hold the village against advancing Germans until the last minute, then retreat to safety over the river.'
	},
	{
		name: 'Luchki (part 2)',
		booklet: 2,
		number: 1,
		requiredExpansions: [ 2 ],
		players: [ 2 ],
		description:
			'As the Germans attempt to capture the village and flank Soviet forces, Soviet anti-tank guns pound the oncoming armor.'
	},
	{
		name: 'Dance of the Totenkopfs',
		booklet: 2,
		number: 1,
		requiredExpansions: [ 2 ],
		players: [ 2 ],
		description:
			'As Germans press north against a Soviet tank stronghold, ranks broke down into an every-man-for-himself struggle for survival.'
	},
	{
		name: 'Cherkasskoye (Eastern Flank)',
		booklet: 5,
		requiredExpansions: [ 2 ],
		players: [ 2 ],
		description:
			'Designed for beginners, this tanks-only battle heavily punishes the Germans if they lose the control point.'
	},
	{
		name: 'Cherkasskoye (East-Center Flank)',
		booklet: 5,
		requiredExpansions: [ 2 ],
		players: [ 2 ],
		description:
			'Germans must gain control of the Soviet-held heights, surrounded by Balkas, to set up their mobile artillery units.'
	},
	{
		name: 'Cherkasskoye (Central Flank)',
		booklet: 5,
		requiredExpansions: [ 2 ],
		players: [ 2 ],
		description:
			'Both sides are fighting in a village, with the Soviets earning extra reinforcement for holding a control point.'
	},
	{
		name: 'Cherkasskoye (Western Flank)',
		booklet: 5,
		requiredExpansions: [ 2 ],
		players: [ 2 ],
		description:
			'Designed for beginners, this infantry-only battle focuses on the Soviets holding a hill surrounded by a balka against German forces.'
	},
	{
		name: 'Blitzkrieg!',
		requiredExpansions: [ 3 ],
		booklet: 3,
		players: [ 2 ],
		description: 'German troops must quickly cross heavy terrain before their trapped by Polish infantry.'
	},
	{
		name: 'Calvary Charge!',
		requiredExpansions: [ 3 ],
		booklet: 3,
		players: [ 2 ],
		description:
			'Polish outflank the Germans in heavy woods providing cover until the German armored vehicles arrive.'
	},
	{
		name: 'Armored Train No. 53',
		requiredExpansions: [ 2, 3 ],
		booklet: 3,
		players: [ 2, 3, 4 ],
		description:
			'German Panzers assault a Polish regiment and then head into a village. Outside, the Polish defend the area.'
	},
	{
		name: 'The Black Brigade',
		requiredExpansions: [ 1, 3 ],
		booklet: 3,
		players: [ 2 ],
		description:
			'German Panzers attack the Polish army caught unprepared, who respond with their fastest cavalry units ordered to stall the Germans in the mountain pass. '
	},
	{
		name: 'Tank Clash',
		requiredExpansions: [ 2, 3 ],
		booklet: 3,
		players: [ 2 ],
		description: 'German tanks cross the river into the plains, supported by artillery; can the Polish survive?'
	},
	{
		name: 'Grójecka Street',
		requiredExpansions: [ 1, 3 ],
		booklet: 3,
		players: [ 2, 3 ],
		description: 'Polish barricades and anti-tank guns guard the streets, slowing the oncoming German assault.'
	},
	{
		name: 'Shadows in the Mist',
		requiredExpansions: [ 3 ],
		booklet: 3,
		players: [ 2 ],
		description:
			'Hand-to-hand combat along the riverbanks in a heavy fog, which slowly lifts over the course of battle.'
	},
	{
		name: 'The Romanian Bridgehead',
		requiredExpansions: [ 2, 3 ],
		booklet: 3,
		players: [ 2, 3, 4 ],
		description:
			'Polish armor attack the German anti-tank defenses with such speed that Polish infantry are left behind.'
	},
	{
		name: 'The Red Tide',
		requiredExpansions: [ 3 ],
		booklet: 3,
		players: [ 2 ],
		description:
			'Soviet units attempt to pin the Polish troops stationed in bunkers, but cannot use their heavy weapons due to the marshy terrain.'
	},
	{
		name: 'Captured Convoy',
		requiredExpansions: [ 3 ],
		booklet: 3,
		players: [ 2 ],
		description:
			'Both sides exhausted, the Polish cavalry needs to break through the German lines to rejoin their armor.'
	},
	{
		name: 'Race for Lwow',
		requiredExpansions: [ 1, 8, 3 ],
		booklet: 3,
		players: [ 3 ],
		description:
			'The Polish, Soviets, and Germans all fight for possession of the hills which surround the city in a giant “free for all” battle.'
	},
	{
		name: 'No Surrender',
		requiredExpansions: [ 1, 3 ],
		booklet: 3,
		players: [ 2 ],
		description:
			'The Polish army must drive back the Soviet tanks using improvised weapons, while communist sympathizers fight with the Soviets; battle takes place entirely in city.'
	},
	{
		name: 'Clashing Sabers',
		requiredExpansions: [ 3 ],
		booklet: 3,
		players: [ 2 ],
		description:
			'Ordered to capture the fleeing Germans, Polish mounted and un-mounted troops overran the Germans… into another German unit!'
	},
	{
		name: 'End of the Line',
		requiredExpansions: [ 2, 3 ],
		booklet: 3,
		players: [ 2 ],
		description:
			'The Polish army, lacking sufficient anti-tank weapons, must hold on as long as possible against the Soviets without losing their troops.'
	},
	{
		name: 'The Last Stand',
		requiredExpansions: [ 3 ],
		booklet: 3,
		players: [ 2, 3, 4 ],
		description:
			'The Polish are being attacked by Soviet artillery and tanks on the south and Soviet cavalry on the East.'
	},
	{
		name: 'Tragedy of Victory',
		requiredExpansions: [ 3 ],
		booklet: 3,
		players: [ 2 ],
		description:
			'The ultimate and final battle between German and Polish forces around the city of Wola Gulowska, the Polish are attempt to surround the isolated German motorized division.'
	},
	{
		name: 'Goeringstrasse! (The Battle of Berlin - April 26th, 1945)',
		requiredExpansions: [ 1, 7, 9 ],
		booklet: 3,
		players: [ 2 ],
		description:
			'Through the suburbs of Berlin, Soviet tanks and hordes of infantry are steadily advancing towards its downtown sector, brushing away any form of resistance.'
	},
	{
		name: 'Sandomierez Counter Attack (Poland - August 1944)',
		requiredExpansions: [ 1, 2, 7 ],
		booklet: 3,
		players: [ 2 ],
		description:
			'In early August 1944 the First Ukrainian Front crossed the Vistula River near the Polish city of Sandomierez.'
	},
	{
		name: "All Soul's Day",
		requiredExpansions: [ 1, 2 ],
		booklet: 3,
		players: [ 2, 3, 4 ],
		description:
			'The heavy morning mists cover the village of Jadrino on the Zusha River. The air is cool and in a few weeks the river will be covered in ice. '
	},
	{
		name: 'Monster Tank Firefight 03 - X Oktybra (Don Steppe - 27 July, 1942)',
		requiredExpansions: [ 1, 2, 7 ],
		booklet: 3,
		players: [ 2 ],
		description:
			'During late July, the Germans launched their Fall Blau offensive in the southern Soviet Union. Near the Don River, the Soviet 158th Separate Heavy Tank Brigade of the 28th Tank Corps of the 1st Tank Army attacked the Germans across the flat Don Steppe in an effort to slow the German offensive. '
	},
	{ name: 'Guadalcanal Firefight #1', description: 'TBD', booklet: 5, players: [ 2 ], requiredExpansions: [ 6 ] },
	{ name: 'Guadalcanal Firefight #2', description: 'TBD', booklet: 5, players: [ 2 ], requiredExpansions: [ 6 ] },
	{ name: 'Guadalcanal Firefight #3', description: 'TBD', booklet: 5, players: [ 2 ], requiredExpansions: [ 6 ] },
	{ name: 'Guadalcanal Firefight #4', description: 'TBD', booklet: 5, players: [ 2 ], requiredExpansions: [ 6 ] },
	{ name: 'Guadalcanal Firefight #5', description: 'TBD', booklet: 5, players: [ 2 ], requiredExpansions: [ 6 ] },
	{ name: 'Guadalcanal Firefight #6', description: 'TBD', booklet: 5, players: [ 2 ], requiredExpansions: [ 6 ] },
	{ name: 'Guadalcanal Firefight #7', description: 'TBD', booklet: 5, players: [ 2 ], requiredExpansions: [ 6 ] },
	{ name: 'Guadalcanal Firefight #8', description: 'TBD', booklet: 5, players: [ 2 ], requiredExpansions: [ 6 ] },
	{ name: 'Guadalcanal Firefight #9', description: 'TBD', booklet: 5, players: [ 2 ], requiredExpansions: [ 6 ] },
	{ name: 'Guadalcanal Firefight #10', description: 'TBD', booklet: 5, players: [ 2 ], requiredExpansions: [ 6 ] },
	{ name: 'Guadalcanal Firefight #11', description: 'TBD', booklet: 5, players: [ 2 ], requiredExpansions: [ 6 ] },
	{ name: 'Guadalcanal Firefight #12', description: 'TBD', booklet: 5, players: [ 2 ], requiredExpansions: [ 6 ] },
	{
		name: 'Guadalcanal Army expansion #1',
		description: 'TBD',
		booklet: 5,
		players: [ 2 ],
		requiredExpansions: [ 6,10 ]
	},
	{
		name: 'Guadalcanal Army expansion #2',
		description: 'TBD',
		booklet: 5,
		players: [ 2 ],
		requiredExpansions: [ 6,10 ]
	}
];

/**
 * 


 */
