module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,jpg,png,html,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};