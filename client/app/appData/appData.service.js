'use strict';

/**
 * @ngdoc service
 * @name posterApp.appData
 * @description
 * # appData
 * Service in the posterApp.
 */
angular.module('posterApp').service('appData', function () {

	var data = {

		knownWords: ['מזלטוב', 'חרא', 'אכזר', 'אוהב', 'לייק'],

		fonts: [
			{
				id: 'mandatory-29',
				label: 'Mandatory 29',
				fontName: 'Mandatory-29',
				hebOnly: false,
				lineHeight: '112%',
				url: '/assets/fonts/Noyland-AAA-Regular.otf'
			},
			{
				id: 'noyland-aaa-regular',
				label: 'Noyland AAA Regular',
				fontName: 'Noyland-AAA-Regular',
				hebOnly: false,
				lineHeight: '112%',
				url: '/assets/fonts/Mandatory-29.otf'
			},
			{
				id: 'mandatory-47',
				label: 'Mandatory 47',
				fontName: 'Mandatory-47',
				hebOnly: false,
				lineHeight: '112%',
				url: '/assets/fonts/Mandatory-47.otf'
			},
			{
				id: 'mandatory-17',
				label: 'Mandatory 17',
				fontName: 'Mandatory-17',
				hebOnly: false,
				lineHeight: '112%',
				url: '/assets/fonts/Mandatory-17.otf'
			},
			{
				id: 'mandatory-18',
				label: 'Mandatory 18',
				fontName: 'Mandatory-18',
				hebOnly: false,
				lineHeight: '112%',
				url: '/assets/fonts/Mandatory-18.otf'
			},
			{
				id: 'mandatory-29-shaded',
				label: 'Mandatory 29 Shaded',
				fontName: 'Mandatory-29 Shaded',
				hebOnly: false,
				lineHeight: '112%',
				url: '/assets/fonts/Mandatory-29 Shaded.otf'
			},
			{
				id: 'mandatory-36',
				label: 'Mandatory 36',
				fontName: 'Mandatory-36',
				hebOnly: false,
				lineHeight: '112%',
				url: '/assets/fonts/Mandatory-36.otf'
			},
			{
				id: 'almoni-dl-aaa-light',
				label: 'Almoni Dl AAA Light',
				fontName: 'ALMONI-DL-AAA-LIGHT',
				hebOnly: false,
				lineHeight: '112%',
				url: '/assets/fonts/ALMONI-DL-AAA-LIGHT.OTF'
			},
			{
				id: 'stanga-aaa-regular',
				label: 'Stanga AAA Regular',
				fontName: 'stanga-aaa-regular',
				hebOnly: true,
				lineHeight: '112%',
				url: '/assets/fonts/stanga-aaa-regular.otf'
			},
			{
				id: 'noyland-aaa-extrabold',
				label: 'Noyland AAA Extrabold',
				fontName: 'noyland-aaa-extrabold',
				hebOnly: true,
				lineHeight: '112%',
				url: '/assets/fonts/noyland-aaa-extrabold.otf'
			},
			{
				id: 'ALMONI-TZAR-AAA-BOLD',
				label: 'ALMONI-TZAR-AAA-BOLD',
				fontName: 'ALMONI-TZAR-AAA-BOLD',
				hebOnly: true,
				lineHeight: '112%',
				url: '/assets/fonts/ALMONI-TZAR-AAA-BOLD.OTF'
			},
			{
				id: 'CosHalavDfusRegular',
				label: 'CosHalavDfusRegular',
				fontName: 'CosHalavDfusRegular',
				hebOnly: true,
				lineHeight: '112%',
				url: '/assets/fonts/CosHalavDfusRegular.otf'
			},
			{
				id: 'KartivBold',
				label: 'KartivBold',
				fontName: 'KartivBold',
				hebOnly: true,
				lineHeight: '112%',
				url: '/assets/fonts/KartivBold.otf'
			},
			{
				id: 'KartivKerah',
				label: 'KartivKerah',
				fontName: 'KartivKerah',
				hebOnly: true,
				lineHeight: '112%',
				url: '/assets/fonts/KartivKerah.otf'
			},
			{
				id: 'LimonArakBold',
				label: 'LimonArakBold',
				fontName: 'LimonArakBold',
				hebOnly: true,
				lineHeight: '112%',
				url: '/assets/fonts/LimonArakBold.otf'
			},
			{
				id: 'LimonArakRegular',
				label: 'LimonArakRegular',
				fontName: 'LimonArakRegular',
				hebOnly: true,
				lineHeight: '112%',
				url: '/assets/fonts/LimonArakRegular.otf'
			},
			{
				id: 'Plastic-Black',
				label: 'Plastic-Black',
				fontName: 'Plastic-Black',
				hebOnly: true,
				lineHeight: '112%',
				url: '/assets/fonts/Plastic-Black.otf'
			},
			{
				id: 'stanga-aaa-regular',
				label: 'stanga-aaa-regular',
				fontName: 'stanga-aaa-regular',
				hebOnly: true,
				lineHeight: '112%',
				url: '/assets/fonts/stanga-aaa-regular.otf'
			}
		],

		bgColors: [
			{
				id: 'yellow-f6f086',
				label: 'yellow (#f6f086)',
				value: '#f6f086'
			},
			{
				id: 'green-C6DB62',
				label: 'green (#C6DB62)',
				value: '#C6DB62'
			},
			{
				id: 'orange-F8DB89',
				label: 'orange (#F8DB89)',
				value: '#F8DB89'
			},
			{
				id: 'light-blue-7FCEE4',
				label: 'light blue (#7FCEE4)',
				value: '#7FCEE4'
			},
			{
				id: 'grey-D1D2D4',
				label: 'grey (#D1D2D4)',
				value: '#D1D2D4'
			},
			{
				id: 'white-ffffff',
				label: 'white (#ffffff)',
				value: '#ffffff'
			},
			{
				id: 'black-333333',
				label: 'black (#333333)',
				value: '#333333'
			}
		],

		textColors: [
			{
				id: 'white-ffffff',
				label: 'white (#ffffff)',
				value: '#ffffff'
			},
			{
				id: 'blue-00bff3',
				label: 'blue (#00bff3)',
				value: '#00bff3'
			},
			{
				id: 'pink-ED2A7B',
				label: 'pink (#ED2A7B)',
				value: '#ED2A7B'
			},
		],

		icons: [
			{
				id: 'astronaut',
				label: 'Astronaut',
				className: 'icon-astronaut',
				ratio: 0.5,
				width: 1181,
				height: 928,
				url: '/assets/images/astronaut.png'
			},
			// {
			// 	id: 'brain',
			// 	label: 'Brain',
			// 	className: 'icon-brain',
			// 	ratio: 0.45,
			// 	width: 1063,
			// 	height: 924,
			// 	url: '/assets/images/brain.png'
			// },
			{
				id: 'cactus',
				label: 'Cactus',
				className: 'icon-cactus',
				ratio: 0.25,
				width: 424,
				height: 945,
				url: '/assets/images/cactus.png'
			},
			{
				id: 'confetti',
				label: 'Confetti',
				className: 'icon-confetti',
				ratio: 0.4,
				width: 945,
				height: 1540,
				url: '/assets/images/confetti.png'
			},
			{
				id: 'dance',
				label: 'Dance',
				className: 'icon-dance',
				ratio: 0.4,
				width: 827,
				height: 907,
				url: '/assets/images/dance.png'
			},
			{
				id: 'eat',
				label: 'Eat',
				className: 'icon-eat',
				ratio: 0.5,
				width: 1063,
				height: 1097,
				url: '/assets/images/eat.png'
			},
			{
				id: 'fish',
				label: 'Fish',
				className: 'icon-fish',
				ratio: 0.4,
				width: 945,
				height: 1102,
				url: '/assets/images/fish.png'
			},
			{
				id: 'fuck',
				label: 'Fuck',
				className: 'icon-fuck',
				ratio: 0.45,
				width: 945,
				height: 670,
				url: '/assets/images/fuck.png'
			},
			{
				id: 'heart',
				label: 'Heart',
				className: 'icon-heart',
				ratio: 0.45,
				width: 1063,
				height: 1063,
				url: '/assets/images/heart-lc.png'
			},
			{
				id: 'israel',
				label: 'Israel',
				className: 'icon-israel',
				ratio: 0.4,
				width: 739,
				height: 1181,
				url: '/assets/images/israel.png'
			},
			// {
			// 	id: 'kaki',
			// 	label: 'Kaki',
			// 	className: 'icon-kaki',
			// 	ratio: 0.65,
			// 	width: 1417,
			// 	height: 1168,
			// 	url: '/assets/images/poop.png'
			// },
			{
				id: 'ok-hands',
				label: 'OK hands',
				className: 'icon-pink-hands',
				ratio: 0.31,
				width: 757,
				height: 1181,
				url: '/assets/images/ok-lc.png'
			},
			{
				id: 'popsicle',
				label: 'Popsicle',
				className: 'icon-popsicle',
				ratio: 0.45,
				width: 945,
				height: 928,
				url: '/assets/images/popsicle.png'
			},
			{
				id: 'punch',
				label: 'Punch',
				className: 'icon-punch',
				ratio: 0.4,
				width: 945,
				height: 1503,
				url: '/assets/images/punch.png'
			},
			{
				id: 'rogatka',
				label: 'Rogatka',
				className: 'icon-rogatka',
				ratio: 0.5,
				width: 945,
				height: 662,
				url: '/assets/images/rogatka.png'
			},
			{
				id: 'scream',
				label: 'Scream',
				className: 'icon-scream',
				ratio: 0.55,
				width: 713,
				height: 709,
				url: '/assets/images/scream.png'
			},
			{
				id: 'stab',
				label: 'Stab',
				className: 'icon-stab',
				ratio: 0.3,
				width: 945,
				height: 1411,
				url: '/assets/images/stab.png'
			},
			{
				id: 'teeth',
				label: 'Teeth',
				className: 'icon-teeth',
				ratio: 0.27,
				width: 604,
				height: 1181,
				url: '/assets/images/teeth.png'
			}
		],

		layouts: [
			{
				id: 'giant-and-small',
				label: 'Giant and Small',
				data: [
					{ x: 0.96, y: 1.4, scale: 7 }
				]
			},
			{
				id: 'threes-0',
				label: 'Threes 1',
				data: [
					{ x: -0.01, y: -0.05, style: { opacity: 0.1 * Math.random() } },
					{ x: 0.20, y: 0.05, style: { opacity: 0.1 * Math.random() } },
					{ x: 0.07, y: 0.26, style: { opacity: 0.1 * Math.random() } },
					{ x: 0.29, y: 0.47, style: { opacity: 0.1 * Math.random() } },
					{ x: 0.31, y: 0.66, style: { opacity: 0.1 * Math.random() } },
					{ x: 0.43, y: 0.66, style: { opacity: 0.1 * Math.random() } },
					{ x: 0.59, y: 0.91, style: { opacity: 0.1 * Math.random() } },
					{ x: 0.68, y: 0.91, style: { opacity: 0.1 * Math.random() } },
					{ x: 0.92, y: 0.99, style: { opacity: 0.1 * Math.random() } },
					{ x: 0.96, y: 0.99, style: { opacity: 0.1 * Math.random() } },
					{ x: 0.79, y: 1.08, style: { opacity: 0.1 * Math.random() } },
					{ x: 0.70, y: 0.50, style: { opacity: 0.1 * Math.random() } },
					{ x: 0.30, y: 1.05, style: { opacity: 0.1 * Math.random() } },
					{ x: 0.51, y: 0.79, scale: 2 }
				]
			},
			{
				id: 'threes-1',
				label: 'Threes 2',
				data: [
					{ x: 0.49, y: -0.15, scale: 1.4 },
					{ x: 0.32, y: 0.66, scale: 1.4 },
					{ x: 0.70, y: 1.21, scale: 1.4 }
				]
			},
			{
				id: 'big-one',
				label: 'Big One 1',
				data: [
					{ x: 0.62, y: 0.7, scale: 2 }
				]
			},
			{
				id: 'big-one',
				label: 'Big One 2',
				data: [
					{ x: 0.39, y: 0.65, scale: 2 }
				]
			}
		],

		posts: [
			{
				id: 'none',
				label: 'None',
				data: {}
			},
			{
				id: 'blue-shadow',
				label: 'Blue Shadow',
				data: {
					'-webkit-filter': 'drop-shadow(40px 0px #00bff3) drop-' +
						'shadow(40px 0px #00bff3) drop-shadow(40px 0px #00bff3)'
				}
			},
			{
				id: 'pink-shadow',
				label: 'Pink Shadow',
				data: {
					'-webkit-filter': 'drop-shadow(40px 0px #ED2A7B) drop-' +
						'shadow(40px 0px #ED2A7B) drop-shadow(40px 0px #ED2A7B)'
				}
			},
			{
				id: 'yellow-shadow',
				label: 'Yellow Shadow',
				data: {
					'-webkit-filter': 'drop-shadow(40px 0px #f6f086) drop-' +
						'shadow(40px 0px #f6f086) drop-shadow(40px 0px #f6f086)'
				}
			},
			{
				id: 'black-and-white',
				label: 'Black and White',
				data: {
					'-webkit-filter': 'contrast(0%)'
				}
			}
		],

		textPosts: [
			{
				id: 'none',
				label: 'None',
				data: {}
			}
		],

		giantTexts: [
			{
				id: 'none',
				label: 'None',
				weight: 0.7,
				data: {
					'display': 'none'
				}
			},
			{
				id: 'rotated',
				label: 'Rotated',
				data: {
					'top': '2%',
					'transform': 'rotate(40deg)',
					'color': 'rgb(0, 191, 243)',
					'-webkit-filter': 'brightness(500%) saturate(500%)',
					'text-shadow': '150px 0px 0px rgb(236, 41, 122)'
				}
			},
			{
				id: 'rotated-blurry',
				label: 'Rotated Blurry',
				data: {
					'top': '2%',
					'transform': 'rotate(40deg)',
					'color': 'rgb(0, 191, 243)',
					'-webkit-filter': 'brightness(500%) saturate(500%)',
					'text-shadow': '150px 0px 0px rgb(236, 41, 122)'
				}
			},
			{
				id: 'burnt-nineties',
				label: 'Burnt Nineties',
				data: {
					'color': 'rgb(0, 191, 243)',
					'-webkit-filter': 'brightness(500%) saturate(500%)',
					'text-shadow': '150px 0px 0px rgb(236, 41, 122)'
				}
			},
			{
				id: 'dusky-nineties',
				label: 'Dusky Nineties',
				data: {
					'color': 'rgb(0, 191, 243)',
					'text-shadow': '150px 0px 0px rgb(236, 41, 122)'
				}
			},
			{
				id: 'blue-nineties',
				label: 'Blue Nineties',
				data: {
					'color': 'rgb(0, 191, 243)'
				}
			},
			{
				id: 'pink-nineties',
				label: 'pink Nineties',
				data: {
					'color': 'rgb(236, 41, 122)'
				}
			}
		]
	};
	var i;

	function setSortFunc (a, b) {
		return a.weight < b.weight;
	}

	for (var key in data) {
		if (key === 'knownWords') { continue; }

		var set = data[key],
		    unWeighted = [],
		    sum = 0;

		for (i = 0; i < set.length; i++) {
			if (set[i].weight === undefined) {
				unWeighted.push(set[i]);
			} else {
				sum += set[i].weight;
			}
		}

		for (i = 0; i < unWeighted.length; i++) {
			unWeighted[i].weight = (1 - sum) / unWeighted.length;
		}

		data[key] = set.sort(setSortFunc);
	}

	// Prepare data
	//
	for (i = 0; i < data.layouts.length; i++) {
		var layout = data.layouts[i],
		    j;

		for (j = 0; j < layout.data.length; j++) {
			var item = layout.data[j];

			item.scale = item.scale || 1;

			item.style = item.style || {};
			item.style.right = (item.x * 100) + '%';
			item.style.top = (item.y * 100) + '%';
			item.style.transform = 'scale(' + item.scale + ')';
		}
	}

	return data;
});
