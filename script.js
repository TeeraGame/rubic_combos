// Список героев
const heroes = [
	'abaddon',
	'alchemist',
	'ancient_apparition',
	'antimage',
	'arc_warden',
	'axe',
	'bane',
	'batrider',
	'beastmaster',
	'bloodseeker',
	'bounty_hunter',
	'brewmaster',
	'bristleback',
	'broodmother',
	'centaur_warrunner',
	'chaos_knight',
	'chen',
	'clinkz',
	'crystal_maiden',
	'dark_seer',
	'dark_willow',
	'dawnbreaker',
	'dazzle',
	'death_prophet',
	'disruptor',
	'doom_bringer',
	'dragon_knight',
	'drow_ranger',
	'earth_spirit',
	'earthshaker',
	'elder_titan',
	'ember_spirit',
	'enchantress',
	'enigma',
	'faceless_void',
	'grimstroke',
	'gyrocopter',
	'hoodwink',
	'huskar',
	'jakiro',
	'juggernaut',
	'keeper_of_the_light',
	'kez',
	'kunkka',
	'legion_commander',
	'leshrac',
	'lich',
	'life_stealer',
	'lina',
	'lion',
	'lone_druid',
	'luna',
	'lycan',
	'magnus',
	'marci',
	'mars',
	'medusa',
	'meepo',
	'mirana',
	'monkey_king',
	'morphling',
	'muerta',
	'naga_siren',
	"nature's_prophet",
	'necrophos',
	'night_stalker',
	'nyx',
	'outworld_destroyer',
	'ogre_magi',
	'omniknight',
	'oracle',
	'pangolier',
	'phantom_assassin',
	'phantom_lancer',
	'phoenix',
	'primal_beast',
	'puck',
	'pudge',
	'pugna',
	'queenofpain',
	'clockwerk',
	'razor',
	'riki',
	'ringmaster',
	'rubick',
	'sand_king',
	'shadow_demon',
	'shadow_fiend',
	'shadow_shaman',
	'silencer',
	'skywrath_mage',
	'slardar',
	'slark',
	'snapfire',
	'sniper',
	'spectre',
	'spirit_breaker',
	'storm_spirit',
	'sven',
	'techies',
	'templar_assassin',
	'terrorblade',
	'tidehunter',
	'timbersaw',
	'tinker',
	'tiny',
	'treant',
	'troll_warlord',
	'tusk',
	'underlord',
	'undying',
	'ursa',
	'vengeful spirit',
	'venomancer',
	'viper',
	'visage',
	'void_spirit',
	'warlock',
	'weaver',
	'windranger',
	'winter_wyvern',
	'io',
	'invoker',
	'witch_doctor',
	'wraith_king',
	'zeus',
]

// Список комбинаций
const combos = {
	rubick: [
		{
			heroes: ['dazzle', 'abaddon'],
			skills: 'Bad Juju + Borrowed Time (Aghanim + Octarin)',
		},
		{
			heroes: ['pangolier', 'ember_spirit'],
			skills: 'Rolling Thunder + Sleight of Fist',
		},

		{ heroes: ['io', 'life_stealer'], skills: 'Tether + Infest' },
		{ heroes: ['life_stealer'], skills: 'Infest (Aghanim)' },
		{ heroes: ['leshrac'], skills: 'Split Earth (Shard)' },
		{
			heroes: ['leshrac', 'keeper_of_the_light'],
			skills: 'Split Earth + Chakra Magic (Shard)',
		},
		{
			heroes: ['axe', 'faceless_void'],
			skills: "Berserker's Call + Time Walk",
		},
		{
			heroes: ['batrider', 'storm_spirit'],
			skills: 'Lasso + Ball Lightning',
		},

		{
			heroes: ['ember_spirit', 'enigma'],
			skills: 'Sleight of Fist + Black Hole',
		},
		{ heroes: ['ember_spirit', 'magnus'], skills: 'Sleight of Fist + RP' },
		{
			heroes: ['ember_spirit', 'shadow_fiend'],
			skills: 'Sleight of Fist + Requiem',
		},
		{ heroes: ['ember_spirit'], skills: 'Sleight of Fist' },
		{
			heroes: ['storm_spirit', 'ember_spirit'],
			skills: 'Overload (Aghanim) + Sleight of Fist',
		},
		{
			heroes: ['storm_spirit', 'pudge'],
			skills:
				'Ball Lightning + Rot (на фонтане спамить ульт шторма в пол, для накопления стаков рубика, хотя бы 30 стаков и включить рот пуджа и не выключать. купить 3 маски на вампиризм магический)',
		},
		{
			heroes: ['dazzle', 'primal_beast'],
			skills:
				'Bad Juju + Pulverize (Блудстоун, Тараску, хил + рядом хил саппорт. Бить ультой праймала терзателя и жать Бэд Жужу. С каждым разом будет больше радиус ульты на всю карту)',
		},
		{
			heroes: ['jakiro'],
			skills: 'Ice Path',
		},
		{
			heroes: ['earthshaker', 'sniper'],
			skills:
				'Enchant Totem + Assassinate (Aghanim + Khanda + Parasma + Brooch )',
		},

		{
			heroes: ['storm_spirit', 'batrider'],
			skills:
				'Ball Lightning + Flaming Lasso (Aghanim) (если настакать на базе ульт шторма с аганимом лоссо заберет с большого радиуса вторую цель сквозь туман войны самую ближайшую)',
		},
		{
			heroes: ['pudge', 'lifestealer'],
			skills: 'Dismember + Infest',
		},
		{
			heroes: ['puck', 'death_prophet'],
			skills: 'Dream Coil + Exorcism',
		},
		{
			heroes: ['juggernaut', 'pudge'],
			skills: 'Blade Fury + Rot',
		},
		{
			heroes: ['bloodseeker', 'earth_spirit'],
			skills: 'Rupture + Boulder Smash',
		},

		{
			heroes: ['storm_spirit', 'pangolier'],
			skills: 'Ball Lightning + Rolling Thunder',
		},
		{
			heroes: ['lycan', 'crystal_maiden'],
			skills: 'Shapeshift + Freezing Field',
		},

		{
			heroes: ['broodmother', 'crystal_maiden'],
			skills:
				'Spin Web + Freezing Field (ставишь 10 паутинок, увеличивает радиус применения ульты Crystal Maiden)',
		},

		{
			heroes: ['broodmother'],
			skills:
				'Spin Web + Любой скилл (ставишь 10 паутинок, увеличивает радиус применения других скиллов)',
		},

		{
			heroes: ['invoker', 'phantom_assassin'],
			skills: 'Sun Strike (Aghanim)+ Blur (Aghanim)',
		},

		{
			heroes: ['earthshaker', 'hoodwink'],
			skills: 'Enchant Totem + Acorn Shot',
		},
		{
			heroes: ['earthshaker', 'phantom_assassin'],
			skills: 'Enchant Totem + Stifling Dagger',
		},

		{
			heroes: ['earthshaker', 'tusk'],
			skills: 'Enchant Totem + Walrus Punch',
		},
		{
			heroes: ['earthshaker', 'ember_spirit'],
			skills: 'Enchant Totem + Sleight of Fist',
		},
		{
			heroes: ['luna', 'earthshaker'],
			skills: 'Lucent Beam + Enchant Totem',
		},
		{
			heroes: ['night_stalker', 'batrider'],
			skills: 'Crippling Fear (Aghanim) + Sticky Napalm',
		},
		{
			heroes: ['shadow_shaman', 'batrider'],
			skills: 'Shackles + Sticky Napalm',
		},
		{
			heroes: ['pudge', 'batrider'],
			skills: 'Rot + Sticky Napalm',
		},
		{
			heroes: ['ember_spirit', 'batrider'],
			skills: 'Fire Shield + Sticky Napalm',
		},
		{
			heroes: ['earthshaker', 'pangolier'],
			skills: 'Enchant Totem + Rolling Thunder',
		},
		{
			heroes: ['primal_beast', 'earthshaker'],
			skills: 'Trample + Enchant Totem',
		},
		{
			heroes: ['marci', 'puck'],
			skills: 'Unleash + Dream Coil',
		},
		{
			heroes: ['marci', 'juggernaut'],
			skills: 'Unleash + Blade Fury',
		},
		{
			heroes: ['marci', 'dark_willow'],
			skills: 'Unleash + Shadow Realm',
		},
		{
			heroes: ['oracle', 'winter_wyvern'],
			skills: 'Fate Edict + Cold Embrace',
		},

		{
			heroes: ['morphling'],
			skills: 'Attribute Shift (Strength)',
		},
		{
			heroes: ['shadow_demon', 'huskar'],
			skills: 'Disseminate + Life Break',
		},
		{
			heroes: ['lifestealer', 'warlock'],
			skills: 'Infest + Chaos Golems',
		},
		{
			heroes: ['faceless_void', 'batrider'],
			skills: 'Time Walk + Lasso',
		},
		{
			heroes: ['elder_titan', 'elder_titan'],
			skills: 'Echo Stomp + Astral Spirit (много урона при стане)',
		},
		{
			heroes: ['muerta', 'bloodseeker'],
			skills: 'Pierce the Veil + Bloodrage',
		},
		{
			heroes: ['primal_beast', 'bloodseeker'],
			skills: 'Raptor Dance + Bloodrage (Шива + Каясаша)',
		},
		{
			heroes: ['kez', 'windranger'],
			skills: 'Falcon Rush + Focus Fire (по области)',
		},
		{
			heroes: ['kez', 'puck'],
			skills: 'Falcon Rush + Dream Coil',
		},
		{
			heroes: ['kez', 'pangolier'],
			skills: 'Falcon Rush + Swashbuckle',
		},
		{
			heroes: ['pangolier', 'dark_willow'],
			skills: 'Swashbuckle + Shadow Realm',
		},
		{
			heroes: ['kez', 'gyrocopter'],
			skills: 'Falcon Rush + Fleck Cannon',
		},
		{
			heroes: ['kez', 'medusa'],
			skills: 'Falcon Rush + Split Shot',
		},
		{
			heroes: ['dazzle', 'chaos_knight'],
			skills: 'Bad Juju + Phantasm',
		},
		{
			heroes: ['dazzle', 'any_hero_with_stun'],
			skills: 'Bad Juju + любой стан или скил с малым кд',
		},
		{
			heroes: ['dark_willow', 'puck'],
			skills: 'Shadow Realm + Dream Coil',
		},
		{
			heroes: ['windranger', 'batrider'],
			skills: 'Focus Fire + Sticky Napalm',
		},
		{
			heroes: ['dazzle', 'sniper'],
			skills: 'Bad Juju + Assassinate',
		},
		{
			heroes: ['windranger', 'dark_willow'],
			skills: 'Focus Fire + Shadow Realm',
		},
		{
			heroes: ['phantom_assassin', 'dark_willow'],
			skills: 'Blur + Shadow Realm',
		},
		{
			heroes: ['bloodseeker', 'magnus'],
			skills: 'Rupture + Skewer',
		},
		{
			heroes: ['techies', 'shadow_fiend'],
			skills: 'Blast Off + Requiem',
		},

		{
			heroes: ['troll_warlord', 'tusk'],
			skills: 'Assassinate + Walrus Punch',
		},
		{
			heroes: ['ember_spirit', 'axe'],
			skills: "Sleight of Fist + Berserker's Call",
		},
		{
			heroes: ['centaur_warrunner', 'crystal_maiden'],
			skills: 'Stampede + Freezing Field',
		},

		{
			heroes: ['crystal_maiden', 'dark_seer'],
			skills: 'Freezing Field + Surge',
		},

		{
			heroes: ['batrider', 'queenofpain'],
			skills: 'Sticky Napalm + Sonic Wave',
		},

		{
			heroes: ['phoenix', 'batrider'],
			skills: 'Icarus Dive + Lasso',
		},
		{
			heroes: ['dazzle', 'earthshaker'],
			skills: 'Bad Juju + Fissure',
		},

		{
			heroes: ['shadow_fiend', 'juggernaut'],
			skills: 'Requiem + Omnislash',
		},
		{
			heroes: ['pangolier', 'juggernaut'],
			skills: 'Rolling Thunder + Omnislash',
		},
		{
			heroes: ['bristleback'],
			skills: 'Quill Spray + любой скилл с большим радиусом',
		},
		{
			heroes: ['antimage'],
			skills: 'Blink',
		},
		{
			heroes: ['queenofpain'],
			skills: 'Blink',
		},
		{
			heroes: ['bounty_hunter'],
			skills: 'Track',
		},
		{
			heroes: ['crystal_maiden', 'juggernaut'],
			skills: 'Freezing Field + Omnislash',
		},
		{
			heroes: ['enigma', 'juggernaut'],
			skills: 'Black Hole + Omnislash',
		},
		{
			heroes: ['phoenix', 'shadow_fiend'],
			skills: 'Supernova + Requiem',
		},

		{
			heroes: ['juggernaut', 'witch_doctor'],
			skills: 'Omnislash + Death Ward',
		},

		{
			heroes: ['dark_seer', 'shadow_fiend'],
			skills: 'Vacuum + Requiem',
		},
		{
			heroes: ['batrider', 'slark'],
			skills: 'Sticky Napalm + Dark Pact',
		},
		{
			heroes: ['mars', 'dark_willow'],
			skills: 'Arena of Blood + Terrorize',
		},
		{
			heroes: ['phantom_assassin', 'undying'],
			skills: 'Blur + Tombstone',
		},
		{
			heroes: ['leshrac', 'weaver'],
			skills: 'Puls Nova + Shukuchi',
		},

		{
			heroes: ['pangolier', 'lifestealer'],
			skills: 'Rolling Thunder + Infest',
		},
		{
			heroes: ['witch_doctor', 'chen'],
			skills: 'Death Ward + Penitence',
		},
		{
			heroes: ['necrophos', 'phantom_assassin'],
			skills: "Reaper's Scythe + Blur",
		},
		{
			heroes: ['phantom_assassin', 'any_hero_with_ultimate'],
			skills: 'Blur + любой ультимейт',
		},
		{
			heroes: ['crystal_maiden', 'faceless_void'],
			skills: 'Freezing Field + Chronosphere',
		},
		{
			heroes: ['weaver', 'crystal_maiden'],
			skills: 'Shikuchi + Freezing Field',
		},

		{
			heroes: ['pangolier', 'crystal_maiden'],
			skills: 'Rolling Thunder + Freezing Field',
		},

		// Добавляйте другие комбинации здесь
	],
}

// Инициализация автозаполнения
const heroSelectors = Array.from({ length: 5 }, (_, i) =>
	document.getElementById(`hero${i + 1}`)
)

function createAutocomplete(inputElement) {
	const datalist = document.createElement('datalist')
	datalist.id = `heroes-list`
	heroes.forEach(hero => {
		const option = document.createElement('option')
		option.value = hero.replace(/_/g, ' ') // Показывать героев в формате с пробелами
		datalist.appendChild(option)
	})

	inputElement.setAttribute('list', datalist.id)
	document.body.appendChild(datalist)
}

heroes.forEach(hero => {
	heroSelectors.forEach(selector => {
		createAutocomplete(selector)
	})
})

// Проверка комбинаций
function checkCombinations() {
	const selectedHeroes = heroSelectors.map(selector =>
		selector.value.toLowerCase().replace(/\s+/g, '_')
	)
	const resultsDiv = document.getElementById('results')
	resultsDiv.innerHTML = '' // Очистить предыдущие результаты

	let foundCombos = []
	// Ищем все комбинации, где все герои из выбранных пользователем
	for (const [key, value] of Object.entries(combos)) {
		value.forEach(combo => {
			if (combo.heroes.every(hero => selectedHeroes.includes(hero))) {
				// Здесь выводим комбинацию героев в виде "Invoker + Magnus: Sun Strike + RP"
				const comboText = `${combo.heroes
					.map(hero => hero.replace(/_/g, ' ').toUpperCase()) // Делаем имена героев с пробелами
					.join(' + ')}: ${combo.skills}`

				foundCombos.push(comboText)
			}
		})
	}

	if (foundCombos.length > 0) {
		resultsDiv.innerHTML = `<h3>Найденные комбинации:</h3><ul>${foundCombos
			.map(combo => `<li>${combo}</li>`)
			.join('')}</ul>`
	} else {
		resultsDiv.textContent = 'Комбинации не найдены.'
	}
}
