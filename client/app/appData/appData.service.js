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
				hebOnly: true,
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
			{
				id: 'brain',
				label: 'Brain',
				className: 'icon-brain',
				ratio: 0.45,
				width: 1063,
				height: 924,
				url: '/assets/images/brain.png'
			},
			{
				id: 'cactus',
				label: 'Cactus',
				className: 'icon-cactus',
				ratio: 0.4,
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
				height: 1362,
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
				id: 'fish',
				label: 'Fish',
				className: 'icon-fish',
				ratio: 0.5,
				width: 945,
				height: 1102,
				url: '/assets/images/fish.png'
			},
			{
				id: 'fuck',
				label: 'Fuck',
				className: 'icon-fuck',
				ratio: 0.4,
				width: 827,
				height: 662,
				url: '/assets/images/fuck.png'
			},
			{
				id: 'heart',
				label: 'Heart',
				className: 'icon-heart',
				ratio: 0.4,
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
			{
				id: 'kaki',
				label: 'Kaki',
				className: 'icon-kaki',
				ratio: 0.65,
				width: 1417,
				height: 1168,
				url: '/assets/images/poop.png'
			},
			{
				id: 'ok-hands',
				label: 'OK hands',
				className: 'icon-pink-hands',
				ratio: 0.5,
				width: 757,
				height: 1181,
				url: '/assets/images/ok-lc.png'
			},
			{
				id: 'popsicle',
				label: 'Popsicle',
				className: 'icon-popsicle',
				ratio: 0.6,
				width: 945,
				height: 928,
				url: '/assets/images/popsicle.png'
			},
			{
				id: 'punch',
				label: 'Punch',
				className: 'icon-punch',
				ratio: 0.6,
				width: 945,
				height: 1503,
				url: '/assets/images/punch.png'
			},
			{
				id: 'rogatka',
				label: 'Rogatka',
				className: 'icon-rogatka',
				ratio: 0.6,
				width: 945,
				height: 662,
				url: '/assets/images/rogatka.png'
			},
			{
				id: 'scream',
				label: 'Scream',
				className: 'icon-scream',
				ratio: 0.6,
				width: 713,
				height: 709,
				url: '/assets/images/scream.png'
			},
			{
				id: 'teeth',
				label: 'Teeth',
				className: 'icon-teeth',
				ratio: 0.6,
				width: 604,
				height: 1181,
				url: '/assets/images/teeth.png'
			}
		],

		layouts: [
			{
				id: 'threes-0',
				label: 'Threes 1',
				data: [
					{ x: -0.01, y: -0.05 },
					{ x: 0.70, y: 0.50 },
					{ x: 0.30, y: 1.05 }
				]
			},
			{
				id: 'threes-1',
				label: 'Threes 2',
				data: [
					{ x: 0.49, y: -0.04 },
					{ x: 0.32, y: 0.50 },
					{ x: 0.70, y: 1.03 }
				]
			},
			{
				id: 'big-one',
				label: 'Big One',
				data: [
					{ x: 0.8, y: 0.7, scale: 2 }
				]
			}
		]
	};

	// Prepare data
	//
	for (var i = 0; i < data.layouts.length; i++) {
		var layout = data.layouts[i];
		for (var j = 0; j < layout.data.length; j++) {
			layout.data[j].scale = layout.data[j].scale || 1;
		}
	}

	return data;
});
