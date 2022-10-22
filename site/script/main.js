var options = {
	hotkeys:{
		enabled: true
	},
	icon: {
		circular: true,
		img: 'accessibility',
		useEmojis: true
	}
}

window.addEventListener('load', function () { new Accessibility(options); }, false);