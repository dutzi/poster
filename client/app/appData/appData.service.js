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
				label: 'Mandatory 29',
				name: 'Mandatory-29',
				hebOnly: false,
				lineHeight: '112%'
			},
			{
				label: 'Noyland AAA Regular',
				name: 'Noyland-AAA-Regular',
				hebOnly: false,
				lineHeight: '112%'
			},
			{
				label: 'Mandatory 47',
				name: 'Mandatory-47',
				hebOnly: false,
				lineHeight: '112%'
			},
			{
				label: 'Mandatory 17',
				name: 'Mandatory-17',
				hebOnly: false,
				lineHeight: '112%'
			},
			{
				label: 'Mandatory 18',
				name: 'Mandatory-18',
				hebOnly: false,
				lineHeight: '112%'
			},
			{
				label: 'Mandatory 29 Shaded',
				name: 'Mandatory-29 Shaded',
				hebOnly: false,
				lineHeight: '112%'
			},
			{
				label: 'Mandatory 36',
				name: 'Mandatory-36',
				hebOnly: false,
				lineHeight: '112%'
			},
			{
				label: 'Almoni Dl AAA Light',
				name: 'ALMONI-DL-AAA-LIGHT',
				hebOnly: true,
				lineHeight: '112%'
			},
			{
				label: 'Stanga AAA Regular',
				name: 'stanga-aaa-regular',
				hebOnly: true,
				lineHeight: '112%'
			},
			{
				label: 'Noyland AAA Extrabold',
				name: 'noyland-aaa-extrabold',
				hebOnly: true,
				lineHeight: '112%'
			}
		],

		bgColors: [
			{
				label: 'yellow (#f6f086)',
				value: '#f6f086'
			},
			{
				label: 'green (#C6DB62)',
				value: '#C6DB62'
			},
			{
				label: 'orange (#F8DB89)',
				value: '#F8DB89'
			},
			{
				label: 'light blue (#7FCEE4)',
				value: '#7FCEE4'
			},
			{
				label: 'grey (#D1D2D4)',
				value: '#D1D2D4'
			},
			{
				label: 'white (#ffffff)',
				value: '#ffffff'
			},
			{
				label: 'black (#333333)',
				value: '#333333'
			}
		],

		textColors: [
			{
				label: 'white (#ffffff)',
				value: '#ffffff'
			},
			{
				label: 'blue (#00bff3)',
				value: '#00bff3'
			},
			{
				label: 'pink (#ED2A7B)',
				value: '#ED2A7B'
			},
		],

		icons: [
			{
				label: 'OK hands',
				className: 'icon-pink-hands',
				ratio: 0.5,
				width: 1800,
				height: 2600,
				image: 'ok.png',
				bgColor: '#C6DB62'
			},
			{
				label: 'Heart',
				className: 'icon-heart',
				ratio: 0.57,
				width: 1722,
				height: 1839,
				image: 'heart.png',
				bgColor: '#F8DB89'
			},
			{
				label: 'Kaki',
				className: 'icon-kaki',
				ratio: 0.65,
				width: 1417,
				height: 1168,
				image: 'poop.png',
				bgColor: '#C39A6B'
			},
			{
				label: 'Fish',
				className: 'icon-fish',
				ratio: 0.7,
				width: 1181,
				height: 1191,
				image: 'fish.png',
				bgColor: '#C39A6B'
			},
			{
				label: 'Brain',
				className: 'icon-brain',
				ratio: 0.5,
				width: 1063,
				height: 924,
				image: 'brain.png',
				bgColor: '#C39A6B'
			},
			{
				label: 'Astronaut',
				className: 'icon-astronaut',
				ratio: 0.5,
				width: 1181,
				height: 928,
				image: 'astronaut.png',
				bgColor: '#C39A6B'
			},
			{
				label: 'Scream',
				className: 'icon-scream',
				ratio: 0.6,
				width: 1181,
				height: 1234,
				image: 'scream.png',
				bgColor: '#C39A6B'
			},
			{
				label: 'Popsicle',
				className: 'icon-popsicle',
				ratio: 0.6,
				width: 1063,
				height: 1235,
				image: 'popsicle.png',
				bgColor: '#C39A6B'
			},
			{
				label: 'Fist',
				className: 'icon-fist',
				ratio: 0.8,
				width: 1417,
				height: 742,
				image: 'fist.png',
				bgColor: '#C39A6B'
			}
		],

		layouts: [
			{
				label: 'Threes 1',
				data: [
					{ x: -0.01, y: -0.05 },
					{ x: 0.70, y: 0.50 },
					{ x: 0.30, y: 1.05 }
				]
			},
			{
				label: 'Threes 2',
				data: [
					{ x: 0.49, y: -0.04 },
					{ x: 0.32, y: 0.50 },
					{ x: 0.70, y: 1.03 }
				]
			},
			{
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
