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
	}
}

window.addEventListener('load', function () { new Accessibility(options); }, false);