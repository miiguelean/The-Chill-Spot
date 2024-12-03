module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,jpg,png,ico,html,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};