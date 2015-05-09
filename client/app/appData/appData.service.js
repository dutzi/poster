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
				label: 'yellow (#F1E54D)',
				value: '#F1E54D'
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
					{ x: 0.1, y: 0.9 }
				]
			}
		]
	};
});
