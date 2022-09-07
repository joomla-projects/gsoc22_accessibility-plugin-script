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
		textToSpeechLang: '',
		speechToTextLang: '',
	}

}

window.addEventListener('load', function () { new Accessibility(options); }, false);