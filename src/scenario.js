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
	{ name: 'storm of steel', requiredExpansions: [ 2 ] },
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
	}
];
