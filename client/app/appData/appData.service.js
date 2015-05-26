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
				id: 'ok-hands',
				label: 'OK hands',
				className: 'icon-pink-hands',
				ratio: 0.5,
				width: 1800,
				height: 2600,
				url: '/assets/images/ok-lc.png',
				bgColor: '#C6DB62'
			},
			{
				id: 'heart',
				label: 'Heart',
				className: 'icon-heart',
				ratio: 0.57,
				width: 1722,
				height: 1839,
				url: '/assets/images/heart-lc.png',
				bgColor: '#F8DB89'
			},
			{
				id: 'kaki',
				label: 'Kaki',
				className: 'icon-kaki',
				ratio: 0.65,
				width: 1417,
				height: 1168,
				url: '/assets/images/poop.png',
				bgColor: '#C39A6B'
			},
			{
				id: 'fish',
				label: 'Fish',
				className: 'icon-fish',
				ratio: 0.7,
				width: 1181,
				height: 1191,
				url: '/assets/images/fish.png',
				bgColor: '#C39A6B'
			},
			{
				id: 'brain',
				label: 'Brain',
				className: 'icon-brain',
				ratio: 0.5,
				width: 1063,
				height: 924,
				url: '/assets/images/brain.png',
				bgColor: '#C39A6B'
			},
			{
				id: 'astronaut',
				label: 'Astronaut',
				className: 'icon-astronaut',
				ratio: 0.5,
				width: 1181,
				height: 928,
				url: '/assets/images/astronaut.png',
				bgColor: '#C39A6B'
			},
			{
				id: 'scream',
				label: 'Scream',
				className: 'icon-scream',
				ratio: 0.6,
				width: 1181,
				height: 1234,
				url: '/assets/images/scream.png',
				bgColor: '#C39A6B'
			},
			{
				id: 'popsicle',
				label: 'Popsicle',
				className: 'icon-popsicle',
				ratio: 0.6,
				width: 1063,
				height: 1235,
				url: '/assets/images/popsicle.png',
				bgColor: '#C39A6B'
			},
			{
				id: 'fist',
				label: 'Fist',
				className: 'icon-fist',
				ratio: 0.8,
				width: 1417,
				height: 742,
				url: '/assets/images/fist.png',
				bgColor: '#C39A6B'
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
