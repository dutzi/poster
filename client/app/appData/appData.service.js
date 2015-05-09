'use strict';

/**
 * @ngdoc service
 * @name posterApp.appData
 * @description
 * # appData
 * Service in the posterApp.
 */
angular.module('posterApp').service('appData', function () {
	return {

		knownWords: ['מזלטוב', 'חרא', 'אכזר', 'אוהב', 'לייק'],

		fonts: [
			{
				label: 'Mandatory-29',
				name: 'Mandatory-29',
				hebOnly: false,
				lineHeight: '112%'
			},
			{
				label: 'Noyland-AAA-Regular',
				name: 'Noyland-AAA-Regular',
				hebOnly: false,
				lineHeight: '112%'
			},
			{
				label: 'Mandatory-47',
				name: 'Mandatory-47',
				hebOnly: false,
				lineHeight: '112%'
			},
			{
				label: 'Mandatory-17',
				name: 'Mandatory-17',
				hebOnly: false,
				lineHeight: '112%'
			},
			{
				label: 'Mandatory-18',
				name: 'Mandatory-18',
				hebOnly: false,
				lineHeight: '112%'
			},
			{
				label: 'Mandatory-29 Shaded',
				name: 'Mandatory-29 Shaded',
				hebOnly: false,
				lineHeight: '112%'
			},
			{
				label: 'Mandatory-36',
				name: 'Mandatory-36',
				hebOnly: false,
				lineHeight: '112%'
			},
			{
				label: 'ALMONI-DL-AAA-LIGHT',
				name: 'ALMONI-DL-AAA-LIGHT',
				hebOnly: true,
				lineHeight: '112%'
			},
			{
				label: 'stanga-aaa-regular',
				name: 'stanga-aaa-regular',
				hebOnly: true,
				lineHeight: '112%'
			},
			{
				label: 'noyland-aaa-extrabold',
				name: 'noyland-aaa-extrabold',
				hebOnly: true,
				lineHeight: '112%'
			}
		],

		bgColors: [
			{
				label: '#F1E54D',
				value: '#F1E54D'
			},
			{
				label: '#C6DB62',
				value: '#C6DB62'
			},
			{
				label: '#F8DB89',
				value: '#F8DB89'
			},
			{
				label: '#158ba9',
				value: '#158ba9'
			},
			{
				label: '#7FCEE4',
				value: '#7FCEE4'
			}
		],

		icons: [
			{
				label: 'Praying hands',
				className: 'icon-blue-hands',
				ratio: 0.5,
				width: 920,
				height: 1156,
				image: 'pray.png',
				bgColor: '#F1E54D'
			},
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
				ratio: 0.5,
				width: 1137,
				height: 1115,
				image: 'kaki.png',
				bgColor: '#C39A6B'
			}
		],

		layouts: [
			{
				label: 'threes-1',
				data: [
					{ x: -0.01, y: -0.05 },
					{ x: 0.70, y: 0.50 },
					{ x: 0.30, y: 1.05 }
				]
			},
			{
				label: 'threes-2',
				data: [
					{ x: 0.49, y: -0.04 },
					{ x: 0.32, y: 0.50 },
					{ x: 0.70, y: 1.03 }
				]
			},
			// {
			// 	label: 'big-one',
			// 	data: [
			// 		{ x: 0.1, y: 0.9 }
			// 	]
			// }
		]
	};
});
