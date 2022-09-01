var options = {
	hotkeys:{
		enabled: true
	},
	icon: {
		circular: true,
		img: 'accessibility'
	},
	statement : {
		url: ''
	},
	feedback : {
		url: ''
	},
	language : {
		textToSpeechLang: 'en-US',
		speechToTextLang: 'en-US',
	}

}

window.addEventListener('load', function () { new Accessibility(options); }, false);