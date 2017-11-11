export const expansions = {
	'Awakening The Bear - Barbarosa 2nd Edition': 1,
	'Storms of Steel - Kursk 1943 2nd Edition': 2,
	'Price of Honour - Poland 1939 2nd Edition': 3,
	'Eastern Front - Solo Expansion': 4,
	'Awakening The Bear - Firefight Generator': 5,
	Guadalcanal: 6,
	'Monsters Tanks': 7,
	'Swamp Map': 8,
	'Wrecks & Destruction': 9,
	'Guadalcanal Army Expansion': 10
};

export const scenarioList = [
	{
		name: 'Partisans',
		description:
			'Scattered Soviet infantry troops are working with partisan units. Unfortunately, German and SS squads have been tracking the partisans.',
		booklet: 1,
		number: 1,
		requiredExpansions: [ 1 ]
	},
	{
		name: 'The Gap',
		description:
			'German infantry must scout out for Soviet units, some revealed and some hidden, and search the road.',
		booklet: 1,
		number: 2,
		requiredExpansions: [ 1 ]
	},
	{
		name: 'General Petrov',
		description:
			'Soviet General Petrov is wounded and hiding, and the Germans are on the hunt to locate him and either capture him alive or kill him.',
		booklet: 1,
		number: 3,
		requiredExpansions: [ 1 ]
	},
	{
		name: 'The Monsters',
		description:
			'German armor are surprised by the Soviet T-34 tanks. With the Soviets holding the hill, the Germans regroup and fight back hard.',
		booklet: 1,
		number: 4,
		requiredExpansions: [ 1 ]
	},
	{
		name: 'The Bunker',
		description:
			'The Soviets are encamped in a bunker with anti-tank guns. Can the Germans take the bunker and get leave via the road in the back?',
		number: 5,
		booklet: 1,
		requiredExpansions: [ 1 ]
	},
	{
		name: 'Breakthrough to the Mzensk Pocket',
		description:
			'A trapped German unit is short on supplies and surrounded by Soviets. Can their reinforcements break through the lines in time?',
		number: 6,
		booklet: 1,
		requiredExpansions: [ 1 ]
	},
	{
		name: 'KV2',
		description:
			'The Germans’ progress is being slowed by a single Soviet tank blocking the road. The Germans must find a way to break through.',
		booklet: 1,
		number: 7,
		requiredExpansions: [ 1 ]
	},
	{
		name: 'Bug River',
		description:
			'German infantry capture Soviet bunkers but are trapped by the river with no artillery support, which lacks ammo anyway. The Soviets counterattack to retake the bunkers.',
		booklet: 1,
		number: 8,
		requiredExpansions: [ 1 ]
	},
	{
		name: 'Assault on Peprez',
		description:
			'German units must penetrate and hold key positions inside of the city against strong resistance by the Soviets.',
		booklet: 1,
		number: 9,
		requiredExpansions: [ 1 ]
	},
	{
		name: 'The Demolition',
		description:
			'Both sides fight heavily in the city, with the Germans attempting to blow up a communications headquarters building and the Soviets ordered to hold at all costs.',
		booklet: 1,
		number: 10,
		requiredExpansions: [ 1 ]
	},
	{
		name: 'The Battle of Mogilev',
		description:
			'The Soviets are holding strong in a city, aided by mines and hasty defenses, but the Germans have orders to take the area.',
		number: 1,
		booklet: 1,
		requiredExpansions: [ 1 ]
	},
	{
		name: 'Smolensk Breakout',
		description:
			'Outnumbered Germans are holding two road intersections but are surrounded by Soviets. Will German reinforcements arrive in time?',
		number: 1,
		booklet: 1,
		requiredExpansions: [ 1 ]
	},
	{
		name: 'The Sovkhoz Depot',
		description:
			'The winter has frozen the German armor divisions, which have dug in and hold a supply depot. The Soviets must take the depot. ',
		number: 1,
		booklet: 1,
		requiredExpansions: [ 1 ]
	},
	{
		name: 'Night Defense',
		description:
			'The Germans infantry again must hold the village against Soviet infantry units. Nighttime reduces visibility and line-of-sight. and snow makes movement more difficult.',
		number: 1,
		booklet: 1,
		requiredExpansions: [ 1 ]
	},
	{
		name: 'Belbek Valley',
		description: 'The Soviets are holding the heavily fortified hills but the Germans have orders to take them.',
		number: 1,
		booklet: 1,
		requiredExpansions: [ 1 ]
	},
	{
		name: 'Swamps of Bryansk',
		description:
			'A crucial bridge through the swamps is being held by the Soviets, and the Germans need to cross over it.',
		number: 1,
		booklet: 1,
		requiredExpansions: [ 1, 8 ]
	},
	{
		name: 'Clear and Secure',
		booklet: 2,
		number: 1,
		requiredExpansions: [ 2 ],
		description:
			'As the Germans begin to consolidate their forces their infantry begin to sweep the area for remaining Soviet forces.'
	},
	{
		name: "The Courier's Satchel",
		booklet: 2,
		number: 1,
		requiredExpansions: [ 2 ],
		description:
			'The Germans managed to obtain a covert Soviet satchel and the Soviets want it back. The Germans must safely deliver it to headquarters.'
	},
	{
		name: 'Wind or Sniper',
		booklet: 2,
		number: 1,
		requiredExpansions: [ 2 ],
		description:
			'A tense battle between advancing Soviet snipers and defending German machine gunners set in a village.'
	},
	{
		name: 'State Farm 158',
		booklet: 2,
		number: 1,
		requiredExpansions: [ 2 ],
		description:
			'German supply lines are constantly being broken, so special Panzer Grenadiers have been dispatched to secure the liens.'
	},
	{
		name: 'Pursuit of State Farm 158',
		booklet: 2,
		number: 1,
		requiredExpansions: [ 2 ],
		description:
			'The Soviets have taken refuge in a large balka and overlooking hills, and German Panzer Grenadiers must flush them out.'
	},
	{
		name: 'Sneak Attack',
		booklet: 2,
		number: 1,
		requiredExpansions: [ 2 ],
		description: 'As the Germans begin building a vital bridge, Soviet infantry and mortars fight to stop them. '
	},
	{
		name: 'Wounded Tiger',
		booklet: 2,
		number: 1,
		requiredExpansions: [ 2 ],
		description:
			'The Germans have left an immobilized Tiger tank behind. They want to tow it away for repair but the Soviets intend to destroy it first!'
	},
	{
		name: 'Black Knights of the Steppe',
		booklet: 2,
		number: 1,
		requiredExpansions: [ 2 ],
		description:
			'Both sides prepare for their armor units to engage in a fierce battle as the Germans attempt to capture and hold the city of Kursk.'
	},
	{
		name: 'Blinding the Bear',
		booklet: 2,
		number: 1,
		requiredExpansions: [ 2 ],
		description: 'The Germans must capture Soviet strongholds being used to call in artillery fire. '
	},
	{
		name: 'Tanks!',
		booklet: 2,
		number: 1,
		requiredExpansions: [ 2 ],
		description: 'A slugfest involving 35 tanks as both sides fight for high ground offered by the hills.'
	},
	{
		name: "Rotmistrov's Red Dawn",
		booklet: 2,
		number: 1,
		requiredExpansions: [ 2 ],
		description: 'The Germans must quickly reach the village and secure it and hold off the Soviet forces.'
	},
	{
		name: 'The Bloody Brothers',
		booklet: 2,
		number: 1,
		requiredExpansions: [ 2 ],
		description:
			'The Germans are holding an observation post on a hill, and must secure it against the Soviet forces attempting to retake it.'
	},
	{
		name: 'Luchki (part 1)',
		booklet: 2,
		number: 1,
		requiredExpansions: [ 2 ],
		description:
			'Soviet must hold the village against advancing Germans until the last minute, then retreat to safety over the river.'
	},
	{
		name: 'Luchki (part 2)',
		booklet: 2,
		number: 1,
		requiredExpansions: [ 2 ],
		description:
			'As the Germans attempt to capture the village and flank Soviet forces, Soviet anti-tank guns pound the oncoming armor.'
	},
	{
		name: 'Dance of the Totenkopfs',
		booklet: 2,
		number: 1,
		requiredExpansions: [ 2 ],
		description:
			'As Germans press north against a Soviet tank stronghold, ranks broke down into an every-man-for-himself struggle for survival.'
	},
	{
		name: 'Cherkasskoye (Eastern Flank)',
		booklet: 5,
		requiredExpansions: [ 2 ],
		description:
			'Designed for beginners, this tanks-only battle heavily punishes the Germans if they lose the control point.'
	},
	{
		name: 'Cherkasskoye (East-Center Flank)',
		booklet: 5,
		requiredExpansions: [ 2 ],
		description:
			'Germans must gain control of the Soviet-held heights, surrounded by Balkas, to set up their mobile artillery units.'
	},
	{
		name: 'Cherkasskoye (Central Flank)',
		booklet: 5,
		requiredExpansions: [ 2 ],
		description:
			'Both sides are fighting in a village, with the Soviets earning extra reinforcement for holding a control point.'
	},
	{
		name: 'Cherkasskoye (Western Flank)',
		booklet: 5,
		requiredExpansions: [ 2 ],
		description:
			'Designed for beginners, this infantry-only battle focuses on the Soviets holding a hill surrounded by a balka against German forces.'
	},
	{
		name: 'Blitzkrieg!',
		requiredExpansions: [ 3 ],
		booklet: 3,
		description: 'German troops must quickly cross heavy terrain before their trapped by Polish infantry.'
	},
	{
		name: 'Calvary Charge!',
		requiredExpansions: [ 3 ],
		booklet: 3,
		description:
			'Polish outflank the Germans in heavy woods providing cover until the German armored vehicles arrive.'
	},
	{
		name: 'Armored Train No. 53',
		requiredExpansions: [ 3 ],
		booklet: 3,
		description:
			'German Panzers assault a Polish regiment and then head into a village. Outside, the Polish defend the area.'
	},
	{
		name: 'The Black Brigade',
		requiredExpansions: [ 3 ],
		booklet: 3,
		description:
			'German Panzers attack the Polish army caught unprepared, who respond with their fastest cavalry units ordered to stall the Germans in the mountain pass. '
	},
	{
		name: 'Tank Clash',
		requiredExpansions: [ 3 ],
		booklet: 3,
		description: 'German tanks cross the river into the plains, supported by artillery; can the Polish survive?'
	},
	{
		name: 'Grojecka Street',
		requiredExpansions: [ 3 ],
		booklet: 3,
		description: 'Polish barricades and anti-tank guns guard the streets, slowing the oncoming German assault.'
	},
	{
		name: 'Shadows in the Mist',
		requiredExpansions: [ 3 ],
		booklet: 3,
		description:
			'Hand-to-hand combat along the riverbanks in a heavy fog, which slowly lifts over the course of battle.'
	},
	{
		name: 'The Romanian Bridgehead',
		requiredExpansions: [ 3 ],
		booklet: 3,
		description:
			'Polish armor attack the German anti-tank defenses with such speed that Polish infantry are left behind.'
	},
	{
		name: 'The Red Tide',
		requiredExpansions: [ 3 ],
		booklet: 3,
		description:
			'Soviet units attempt to pin the Polish troops stationed in bunkers, but cannot use their heavy weapons due to the marshy terrain.'
	},
	{
		name: 'Captured Convoy',
		requiredExpansions: [ 3 ],
		booklet: 3,
		description:
			'Both sides exhausted, the Polish cavalry needs to break through the German lines to rejoin their armor.'
	},
	{
		name: 'Race for Lwow',
		requiredExpansions: [ 3 ],
		booklet: 3,
		description:
			'The Polish, Soviets, and Germans all fight for possession of the hills which surround the city in a giant “free for all” battle.'
	},
	{
		name: 'No Surrender',
		requiredExpansions: [ 3 ],
		booklet: 3,
		description:
			'The Polish army must drive back the Soviet tanks using improvised weapons, while communist sympathizers fight with the Soviets; battle takes place entirely in city.'
	},
	{
		name: 'Clashing Sabers',
		requiredExpansions: [ 3 ],
		booklet: 3,
		description:
			'Ordered to capture the fleeing Germans, Polish mounted and un-mounted troops overran the Germans… into another German unit!'
	},
	{
		name: 'End of the Line',
		requiredExpansions: [ 3 ],
		booklet: 3,
		description:
			'The Polish army, lacking sufficient anti-tank weapons, must hold on as long as possible against the Soviets without losing their troops.'
	},
	{
		name: 'The Last Stand',
		requiredExpansions: [ 3 ],
		booklet: 3,
		description:
			'The Polish are being attacked by Soviet artillery and tanks on the south and Soviet cavalry on the East.'
	},
	{
		name: 'Tragedy of Victory',
		requiredExpansions: [ 3 ],
		booklet: 3,
		description:
			'The ultimate and final battle between German and Polish forces around the city of Wola Gulowska, the Polish are attempt to surround the isolated German motorized division.'
	}
];

/**
 * 

 */
