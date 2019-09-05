module.exports = {
	// Specifies the ESLint parser
	parser: '@typescript-eslint/parser',
	extends: [
		// Uses the recommended rules from the @typescript-eslint/eslint-plugin
		'plugin:@typescript-eslint/recommended',
		// Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
		'prettier/@typescript-eslint',
		// Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
		'plugin:prettier/recommended',
	],
	plugins: [
		// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
		'@typescript-eslint',
	],
	parserOptions: {
		// Allows for the parsing of modern ECMAScript features
		ecmaVersion: 2018,
		// Allows for the use of imports
		sourceType: 'module',
	},
	rules: {
		// Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
		// e.g. "@typescript-eslint/explicit-function-return-type": "off",
		'arrow-body-style': ['error', 'always'],
		'no-console': 'error',
		// A for loop with a stop condition that can never be reached, such as one with a counter that moves in the wrong direction, will run infinitely.
		'for-direction': 'error',
	},
};
