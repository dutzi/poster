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

		knownWords: [
			{
				id: 'dance',
				words: ['ריקוד', 'רוקד', 'רקוד', 'רקד', 'שמח', 'וואו', 'פרגן', 'רגליים', 'רגל', 'הופע', 'שואו', 'מוכשר', 'הידד', 'אושר', 'מוצלח', 'צלח', 'כיף', 'מנצח', 'נצח', 'מושל', 'מרטיט', 'צעד', 'קפיצה', 'קפץ', 'קפצ', 'דילוג', 'דלג', 'דילג', 'מהר', 'פזיז', 'פנאן', 'בסדר', 'קליל', 'הנאה', 'משחק', 'מלהיב']
			},
			{
				id: 'confetti',
				words: ['מזל טוב', 'מזלט', 'מזלטוב', 'יומולדת', 'יום הולדת', 'ברכה', 'ברכ', 'בשעה טובה', 'חגיגה', 'חגג', 'חינגה', 'מברוכ', 'מברוק', 'מסיב', 'הפתעה', 'פתע', 'קונפטי', 'שמפניה', 'כוסית', 'דרינק', 'שיכור', 'שכר', 'שיכר', 'השתכר', 'אלכוהול', 'בום', 'פצצה', 'אטום', 'אורניום', 'סוף', 'בהצלחה', 'יאללה', 'שיחוק', 'פאו']
			},
			{
				id: 'eat',
				words: ['טעים', 'טעימ', 'טעם', 'טעמ', 'יאמי', 'יאמ', 'נום', 'נומ', 'אוכל', 'אכל', 'בטן', 'רעב', 'שבע', 'שלשול', 'שילשול', 'טבעוני', 'עיכול', 'עיכל', 'עכל', 'בשרי', 'ארוחה', 'ארוחות', 'נשנוש', 'נשנש', 'דיאטה', 'מעדן', 'מעדנ', 'קינוח', 'אפיתי', 'אפייה', 'אפה', 'בישול', 'בישל', 'מתכון', 'מתכונ', 'צלחת', 'מזלג', 'שולחן', 'ביס', 'נגיסה', 'נגס', 'שמן', 'שמנ', 'טרי', 'חטיף']
			},
			{
				id: 'fish',
				words: ['מוות', 'מות', 'מגעיל', 'געל', 'דוחה', 'מסריח', 'סרח', 'רפש', 'רקוב', 'רקב', 'מקולקל', 'קלקל', 'חוף', 'לשחות', 'שחיתי', 'שחה', 'טיפש', 'הפוך', 'נפל', 'גוויה', 'סוף', 'רע', 'התייבשתי', 'יבש', 'משעמם', 'שעמום', 'עלוב', 'עלב', 'סנפיר', 'קרפיון', 'דג', 'טבע', 'שקע', 'גפילטע', 'אשכנזי', 'אשכנז', 'גוסס', 'גסס', 'לוזר', 'כשלון', 'כשלונ', 'מתעלף', 'עלף']
			},
			{
				id: 'heart',
				words: ['אהבה', 'כפרה', 'אהב', 'נשק', 'נשיקות', 'חיבוק', 'חבק', 'חיבה', 'חמים', 'סימפטי', 'נשמה', 'כפרה', 'הורסת', 'הורס', 'אחלה', 'לב', 'מושלם', 'שלם', 'אלוף', 'אלופ', 'קרוב', 'יפה', 'מקסים', 'ידיד', 'מתגעגע', 'געגע', 'ליטוף', 'לטף', 'ליטפ', 'מעריץ', 'מעריצ', 'חמוד', 'לוהט', 'להט', 'מפנק', 'פינק']
			},
			{
				id: 'fuck',
				words: ['סקס', 'פורנו', 'פורנא', 'פאק', 'מין', 'זימה', 'זין', 'זיין', 'כוס', 'זיון', 'לכלכ', 'לכלך', 'מלוכלך', 'סוטה', 'אונס', 'אנס', 'סאמק', 'כוסאמק', 'דילדו', 'קונדום', 'אוננות', 'אוננ', 'פורקן', 'בתחת', 'תחת', 'משגל', 'שגל', 'אורגזמ', 'שפיך', 'שפך', 'זרע', 'להתרבות', 'מיטה', 'הפרשה']
			},
			{
				id: 'israel',
				words: ['רצח', 'מלחמה', 'לחמ', 'לוחמ', 'לוחם', 'אלימות', 'אלים', 'מדינה', 'ישראל', 'המזרח התיכון', 'מזרח תיכו', 'ירושלים', 'פלשתין', 'כנסת', 'ממשלה', 'רוה”מ', 'ראש הממשלה', 'חבר כנסת', 'צה”ל', 'צהל', 'עזה', 'שטחים', 'שטח', 'התנחלות', 'מתנחל', 'נחל', 'מאחז', 'כיבוש', 'כבש', 'גבול', 'גדה המערבית', 'הסברה', 'דיפלומט', 'דיפלומטיה', 'בשר', 'סטייק', 'על האש', 'מדמם', 'דם']
			},
			{
				id: 'astronaut',
				words: ['חלל', 'חי בסרט', 'מעופף', 'אסטרונאוט', 'אבוד', 'אבד', 'איבד', 'מאדים', 'מדע', 'גלקסיה', 'כוכב', 'חמצן', 'נחנק', 'חנק', 'רחוק', 'צף', 'מתגעגע', 'געגע', 'חללית', 'שיגור', 'אינסוף', 'קסדה', 'נוסע', 'טס', 'מטוס', 'טייס', 'רובוט', 'עתיד', 'מכונה', 'נטוש', 'נטש']
			},
			{
				id: 'cactus',
				words: ['חולה', 'חלה', 'מסכן', 'מסכנ', 'דקר', 'דוקר', 'אישפוז', 'אשפז', 'אושפז', 'פצוע', 'גבס', 'רופא', 'חום', 'תחבושת', 'חבש', 'תרופ', 'קטוע', 'צבר', 'חבוש', 'פלסטר', 'טיפול', 'טיפל', 'טפל', 'אנטיביוטיקה', 'קוץ', 'גלולה', 'בית חולים', 'קופת חולים', 'מדבר', 'צחיח', 'לבד', 'יבש', 'משחה', 'פצע', 'רעל', 'מותקף']
			},
			{
				id: 'ok-hands',
				words: ['אוקיי', 'סבבה', 'מצויין', 'מצויינ', 'טוב', 'הידד', 'מוצלח', 'צלח', 'אחלה', 'מדהים', 'משגע', 'מקסים', 'קסם', 'קסמ', 'כל הכבוד', 'וואו', 'בוקר טוב', 'שבוע טוב', 'בהצלחה', 'מוצלח', 'מעלף', 'מיוחד', 'יד', 'אצבעות', 'אצבע', 'פרפקט', 'הורס', 'הרס', 'מדליק']
			},
			{
				id: 'stab',
				words: ['בוגד', 'בגד', 'עוכר ישראל', 'סמולני', 'סמולנ', 'דוקר', 'יפה נפש', 'הרסני', 'גיס חמישי', 'שתול', 'מרגל', 'מועל', 'מעל', 'נואף', 'נאף', 'נאפ', 'פוגע', 'פגע', 'אמון', 'סמך', 'סמכ', 'לסמוך', 'לבטוח', 'בטח', 'עריק', 'ערק', 'בטחון', 'כופר', 'מלשין', 'שטינקר']
			},
			{
				id: 'rogatka',
				words: ['דיור', 'דייר', 'מצוקת דיור', 'דירה', 'שכירות', 'שכר שכיר', 'חדר', 'סלון', 'בית', 'הומלס', 'השכרה', 'בעל בית', 'בעל הבית', 'ארנונה', 'משכנתא', 'הלוואה', 'עוני', 'עני', 'עיקל', 'עיקול', 'קבלן', 'אדריכלות', 'אדריכל', 'קורת גג', 'גג', 'משפחה', 'ביקור', 'לבקר', 'בקר', 'רחוב', 'בניין']
			},
			{
				id: 'punch',
				words: ['פאנצ', 'מכה', 'מכות', 'הכה', 'אגרוף', 'מתקיף', 'תקפ', 'תקף', 'נפל', 'נוגרה', 'שיניים', 'שן', 'קרב', 'שיננית', 'שבר', 'אויב', 'אמבוש', 'שבור', 'שבר', 'מעליב', 'עלב', 'בוקס', 'כנופיה', 'בריון', 'בריונ', 'מאפיה', 'אלים', 'אלימ', 'כלא', 'הורס', 'חוצפן', 'חוצפנ', 'בהמה', 'בהמ', 'מטריד', 'מסוכן', 'סכנ', 'קיצוני', 'קצונ', 'נאצי', 'זבל', 'כלא', 'חיסול', 'חיסל', 'להרוג', 'הרג', 'לרצוח', 'רצח']
			},
			{
				id: 'popsicle',
				words: ['ארטיק', 'דושבאג', 'דושבג', 'עצוב', 'קרטיב', 'עצב', 'גלידה', 'בכי', 'בוכה', 'בכה', 'טרגדיה', 'דיכאון', 'דיכאונ', 'ממרר', 'כשלון', 'נכשל', 'כשל', 'בכיין', 'נמס', 'חם', 'חמסין', 'קיץ', 'נוזל', 'לשון', 'לשונ', 'ליקוק', 'ליקק', 'לקק', 'טעים', 'טעימ', 'שלולית', 'מתוק', 'נגמר', 'טיפה', 'קרח', 'סוכר', 'קפוא', 'דמעות', 'דמעה', 'קינוח', 'מוזר', 'עלוב', 'מפחד', 'גרוע']
			},
			{
				id: 'scream',
				words: ['פאניקה', 'חשיש', 'סמים', 'סם', 'גראס', 'ג\'וינט', 'פסיכי', 'היסטרי', 'חרד', 'משוגע', 'שגע', 'שיגע', 'עצמות', 'עצם', 'תולעת', 'תולעים', 'רקוב', 'רקב', 'קבור', 'קבר', 'שלד', 'זומבי', 'נרקומן', 'מכור', 'מחוק', 'מטריף', 'גמור', 'וואו', 'האנגובר', 'לצעוק', 'צעק', 'מתפרק', 'מפחיד', 'פחד', 'אימה', 'משתק', 'דממה', 'בלהות', 'סיוט']
			},
			{
				id: 'teeth',
				words: ['שינה', 'לישון', 'ישנ', 'חלום', 'חלם', 'חלמ', 'רדום', 'רדם', 'רדמ', 'אקווריום', 'שיניים', 'זקן', 'צנצנת', 'פה', 'חיוך', 'חייכ', 'חיוכ', 'שותק', 'שתק', 'נמנום', 'נמנמ', 'נמנם', 'שנ”צ', 'שנצ', 'שנץ', 'שנ”ץ', 'שקוע', 'שקע', 'מתעפץ', 'עפץ', 'מנקר', 'נקר', 'השריה', 'מעורר', 'עורר', 'סנוז', 'מאחר', 'איחר', 'מצוחצח', 'צחצח']
			}
		],

		fonts: [
			{
				id: 'noyland-aaa-regular',
				label: 'Noyland AAA Regular',
				fontName: 'Noyland-AAA-Regular',
				hebOnly: true,
				lineHeight: '112%',
				url: '//cdn.poster.re/assets/fonts/Noyland-AAA-Regular.otf'
			},
			{
				id: 'mandatory-29',
				label: 'Mandatory 29',
				fontName: 'Mandatory-29',
				hebOnly: false,
				lineHeight: '112%',
				url: '//cdn.poster.re/assets/fonts/Mandatory-29.otf'
			},
			{
				id: 'mandatory-47',
				label: 'Mandatory 47',
				fontName: 'Mandatory-47',
				hebOnly: false,
				lineHeight: '112%',
				url: '//cdn.poster.re/assets/fonts/Mandatory-47.otf'
			},
			{
				id: 'mandatory-17',
				label: 'Mandatory 17',
				fontName: 'Mandatory-17',
				hebOnly: false,
				lineHeight: '112%',
				url: '//cdn.poster.re/assets/fonts/Mandatory-17.otf'
			},
			{
				id: 'mandatory-18',
				label: 'Mandatory 18',
				fontName: 'Mandatory-18',
				hebOnly: false,
				lineHeight: '112%',
				url: '//cdn.poster.re/assets/fonts/Mandatory-18.otf'
			},
			{
				id: 'mandatory-29-shaded',
				label: 'Mandatory 29 Shaded',
				fontName: 'Mandatory-29 Shaded',
				hebOnly: false,
				lineHeight: '112%',
				url: '//cdn.poster.re/assets/fonts/Mandatory-29 Shaded.otf'
			},
			{
				id: 'mandatory-36',
				label: 'Mandatory 36',
				fontName: 'Mandatory-36',
				hebOnly: false,
				lineHeight: '112%',
				url: '//cdn.poster.re/assets/fonts/Mandatory-36.otf'
			},
			{
				id: 'almoni-dl-aaa-light',
				label: 'Almoni Dl AAA Light',
				fontName: 'ALMONI-DL-AAA-LIGHT',
				hebOnly: false,
				lineHeight: '112%',
				url: '//cdn.poster.re/assets/fonts/ALMONI-DL-AAA-LIGHT.OTF'
			},
			{
				id: 'stanga-aaa-regular',
				label: 'Stanga AAA Regular',
				fontName: 'stanga-aaa-regular',
				hebOnly: true,
				lineHeight: '112%',
				url: '//cdn.poster.re/assets/fonts/stanga-aaa-regular.otf'
			},
			{
				id: 'noyland-aaa-extrabold',
				label: 'Noyland AAA Extrabold',
				fontName: 'noyland-aaa-extrabold',
				hebOnly: true,
				lineHeight: '112%',
				url: '//cdn.poster.re/assets/fonts/noyland-aaa-extrabold.otf'
			},
			{
				id: 'ALMONI-TZAR-AAA-BOLD',
				label: 'ALMONI-TZAR-AAA-BOLD',
				fontName: 'ALMONI-TZAR-AAA-BOLD',
				hebOnly: true,
				lineHeight: '112%',
				url: '//cdn.poster.re/assets/fonts/ALMONI-TZAR-AAA-BOLD.OTF'
			},
			{
				id: 'CosHalavDfusRegular',
				label: 'CosHalavDfusRegular',
				fontName: 'CosHalavDfusRegular',
				hebOnly: true,
				lineHeight: '112%',
				url: '//cdn.poster.re/assets/fonts/CosHalavDfusRegular.otf'
			},
			{
				id: 'KartivBold',
				label: 'KartivBold',
				fontName: 'KartivBold',
				hebOnly: true,
				lineHeight: '112%',
				url: '//cdn.poster.re/assets/fonts/KartivBold.otf'
			},
			{
				id: 'KartivKerah',
				label: 'KartivKerah',
				fontName: 'KartivKerah',
				hebOnly: true,
				lineHeight: '112%',
				url: '//cdn.poster.re/assets/fonts/KartivKerah.otf'
			},
			{
				id: 'LimonArakBold',
				label: 'LimonArakBold',
				fontName: 'LimonArakBold',
				hebOnly: true,
				lineHeight: '112%',
				url: '//cdn.poster.re/assets/fonts/LimonArakBold.otf'
			},
			{
				id: 'LimonArakRegular',
				label: 'LimonArakRegular',
				fontName: 'LimonArakRegular',
				hebOnly: true,
				lineHeight: '112%',
				url: '//cdn.poster.re/assets/fonts/LimonArakRegular.otf'
			},
			{
				id: 'Plastic-Black',
				label: 'Plastic-Black',
				fontName: 'Plastic-Black',
				hebOnly: true,
				lineHeight: '112%',
				url: '//cdn.poster.re/assets/fonts/Plastic-Black.otf'
			},
			{
				id: 'stanga-aaa-regular',
				label: 'stanga-aaa-regular',
				fontName: 'stanga-aaa-regular',
				hebOnly: true,
				lineHeight: '112%',
				url: '//cdn.poster.re/assets/fonts/stanga-aaa-regular.otf'
			}
		],

		bgColors: [
			{
				id: 'yellow-f6f086',
				label: 'Yellow (#f6f086)',
				value: '#f6f086'
			},
			{
				id: 'green-C6DB62',
				label: 'Green (#C6DB62)',
				value: '#C6DB62'
			},
			{
				id: 'orange-F8DB89',
				label: 'Orange (#F8DB89)',
				value: '#F8DB89'
			},
			{
				id: 'light-blue-7FCEE4',
				label: 'Light Blue (#7FCEE4)',
				value: '#7FCEE4'
			},
			{
				id: 'grey-D1D2D4',
				label: 'Grey (#D1D2D4)',
				value: '#D1D2D4'
			},
			{
				id: 'white-ffffff',
				label: 'White (#ffffff)',
				value: '#ffffff'
			},
			{
				id: 'black-333333',
				label: 'Black (#333333)',
				value: '#333333'
			}
		],

		textColors: [
			{
				id: 'white-ffffff',
				label: 'White (#ffffff)',
				value: '#ffffff'
			},
			{
				id: 'blue-00bff3',
				label: 'Blue (#00bff3)',
				value: '#00bff3'
			},
			{
				id: 'pink-ED2A7B',
				label: 'Pink (#ED2A7B)',
				value: '#ED2A7B'
			},
			{ // KEEP THIS ONE LAST
				id: 'black-494949',
				label: 'Black (#494949)',
				value: '#494949'
			}
		],

		icons: [
			{
				id: 'astronaut',
				label: 'Astronaut',
				className: 'icon-astronaut',
				ratio: 0.5,
				width: 1181,
				height: 928,
				url: '//cdn.poster.re/assets/images/astronaut.png'
			},
			// {
			// 	id: 'brain',
			// 	label: 'Brain',
			// 	className: 'icon-brain',
			// 	ratio: 0.45,
			// 	width: 1063,
			// 	height: 924,
			// 	url: '//cdn.poster.re/assets/images/brain.png'
			// },
			{
				id: 'cactus',
				label: 'Cactus',
				className: 'icon-cactus',
				ratio: 0.25,
				width: 424,
				height: 945,
				url: '//cdn.poster.re/assets/images/cactus.png'
			},
			{
				id: 'confetti',
				label: 'Confetti',
				className: 'icon-confetti',
				ratio: 0.4,
				width: 941,
				height: 1534,
				url: '//cdn.poster.re/assets/images/confetti.png'
			},
			{
				id: 'dance',
				label: 'Dance',
				className: 'icon-dance',
				ratio: 0.4,
				width: 827,
				height: 907,
				url: '//cdn.poster.re/assets/images/dance.png'
			},
			{
				id: 'eat',
				label: 'Eat',
				className: 'icon-eat',
				ratio: 0.5,
				width: 1063,
				height: 1097,
				url: '//cdn.poster.re/assets/images/eat.png'
			},
			{
				id: 'fish',
				label: 'Fish',
				className: 'icon-fish',
				ratio: 0.4,
				width: 945,
				height: 1102,
				url: '//cdn.poster.re/assets/images/fish.png'
			},
			{
				id: 'fuck',
				label: 'Fuck',
				className: 'icon-fuck',
				ratio: 0.45,
				width: 945,
				height: 670,
				url: '//cdn.poster.re/assets/images/fuck.png'
			},
			{
				id: 'heart',
				label: 'Heart',
				className: 'icon-heart',
				ratio: 0.45,
				width: 1063,
				height: 1063,
				url: '//cdn.poster.re/assets/images/heart-lc.png'
			},
			{
				id: 'israel',
				label: 'Israel',
				className: 'icon-israel',
				ratio: 0.4,
				width: 739,
				height: 1181,
				url: '//cdn.poster.re/assets/images/israel.png'
			},
			// {
			// 	id: 'kaki',
			// 	label: 'Kaki',
			// 	className: 'icon-kaki',
			// 	ratio: 0.65,
			// 	width: 1417,
			// 	height: 1168,
			// 	url: '//cdn.poster.re/assets/images/poop.png'
			// },
			{
				id: 'ok-hands',
				label: 'OK hands',
				className: 'icon-pink-hands',
				ratio: 0.31,
				width: 757,
				height: 1181,
				url: '//cdn.poster.re/assets/images/ok-lc.png'
			},
			{
				id: 'popsicle',
				label: 'Popsicle',
				className: 'icon-popsicle',
				ratio: 0.45,
				width: 945,
				height: 928,
				url: '//cdn.poster.re/assets/images/popsicle.png'
			},
			{
				id: 'punch',
				label: 'Punch',
				className: 'icon-punch',
				ratio: 0.4,
				width: 945,
				height: 1503,
				url: '//cdn.poster.re/assets/images/punch.png'
			},
			{
				id: 'rogatka',
				label: 'Rogatka',
				className: 'icon-rogatka',
				ratio: 0.5,
				width: 945,
				height: 662,
				url: '//cdn.poster.re/assets/images/rogatka.png'
			},
			{
				id: 'scream',
				label: 'Scream',
				className: 'icon-scream',
				ratio: 0.55,
				width: 713,
				height: 709,
				url: '//cdn.poster.re/assets/images/scream.png'
			},
			{
				id: 'stab',
				label: 'Stab',
				className: 'icon-stab',
				ratio: 0.3,
				width: 945,
				height: 1411,
				url: '//cdn.poster.re/assets/images/stab.png'
			},
			{
				id: 'teeth',
				label: 'Teeth',
				className: 'icon-teeth',
				ratio: 0.27,
				width: 604,
				height: 1181,
				url: '//cdn.poster.re/assets/images/teeth.png'
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
					'-webkit-filter':
						'drop-shadow(40px 0px rgba(0, 191, 243, 0.5)) ' +
						'drop-shadow(40px 0px rgba(0, 191, 243, 0.5)) ' +
						'drop-shadow(40px 0px rgba(0, 191, 243, 0.5))'
				}
			},
			{
				id: 'pink-shadow',
				label: 'Pink Shadow',
				data: {
					'-webkit-filter':
						'drop-shadow(40px 0px rgba(237, 42, 123, 0.5)) ' +
						'drop-shadow(40px 0px rgba(237, 42, 123, 0.5)) ' +
						'drop-shadow(40px 0px rgba(237, 42, 123, 0.5))'
				}
			},
			{
				id: 'yellow-shadow',
				label: 'Yellow Shadow',
				data: {
					'-webkit-filter':
						'drop-shadow(40px 0px rgba(246, 240, 134, 0.5)) ' +
						'drop-shadow(40px 0px rgba(246, 240, 134, 0.5)) ' +
						'drop-shadow(40px 0px rgba(246, 240, 134, 0.5))'
				}
			},
			{
				id: 'black-and-white',
				weight: 0.15,
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
				weight: 0.75,
				data: {
					'opacity': '0.5',
					'display': 'none'
				}
			},
			{
				id: 'rotated',
				label: 'Rotated',
				data: {
					'opacity': '0.5',
					'top': '2%',
					'transform': 'rotate(40deg)',
					'-webkit-transform': 'rotate(40deg)',
					'color': 'rgb(0, 191, 243)',
					'-webkit-filter': 'brightness(500%) saturate(500%)',
					'text-shadow': '150px 0px 0px rgb(236, 41, 122)'
				}
			},
			{
				id: 'burnt-nineties',
				label: 'Burnt Nineties',
				data: {
					'opacity': '0.5',
					'color': 'rgb(0, 191, 243)',
					'-webkit-filter': 'brightness(500%) saturate(500%)',
					'text-shadow': '150px 0px 0px rgb(236, 41, 122)'
				}
			},
			{
				id: 'dusky-nineties',
				label: 'Dusky Nineties',
				data: {
					'opacity': '0.5',
					'color': 'rgb(0, 191, 243)',
					'text-shadow': '150px 0px 0px rgb(236, 41, 122)'
				}
			},
			{
				id: 'blue-nineties',
				label: 'Blue Nineties',
				data: {
					'opacity': '0.5',
					'color': 'rgb(0, 191, 243)'
				}
			},
			{
				id: 'pink-nineties',
				label: 'Pink Nineties',
				data: {
					'opacity': '0.5',
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
			item.style['-webkit-transform'] = 'scale(' + item.scale + ')';
		}
	}

	return data;
});
