var options = {
	hotkeys:{
		enabled: true
	},
	icon: {
		circular: true,
		useEmojis: true
	},
	statement : {
		url: ''
	},
	feedback : {
		url: ''
	},
	language : {
		textToSpeechLang: '',
		speechToTextLang: ''
	}

}

window.addEventListener('load', function () { new Accessibility(options); }, false);