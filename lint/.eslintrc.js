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

		// check https://eslint.org/docs/rules/ for more information

		// Best practices

		// disallow Use of Alert
		'no-alert': 'error',
		// disallow the ose of debugger
		'no-debugger': 'error',
		// disallow duplicate keys in object literals
		'no-dupe-keys': 'error',
		// disallow a duplicate case label
		'no-duplicate-case': 'error',
		// disallow unnecessary semicolons
		'no-extra-semi': 'error',
		// disallow template literal placeholder syntax in regular strings
		'no-template-curly-in-string': 'error',
		// disallow unreachable code after return, throw, continue, and break statements
		'no-unreachable': 'error',

		// Stylistic Issues

		'array-bracket-spacing': ['error', 'never'],
		// enforce consistent comma style
		'comma-style': ['error', 'last'],
		// enforce consistent spacing before and after commas
		'comma-spacing': ['error', { before: false, after: true }],
		// enforce camelcase naming convention
		camelcase: ['error', { properties: 'never', ignoreDestructuring: true }],
		// Disallow or enforce spaces inside of blocks after opening block and before closing block
		'block-spacing': ['error', 'always'],
		// enforce line breaks between array elements
		'array-element-newline': ['error', 'consistent'],
		// enforce line breaks after opening and before closing array brackets
		'array-bracket-newline': ['error', 'consistent'],
		// disallow or enforce spaces inside of computed properties
		'computed-property-spacing': ['error', 'never'],
		// require or disallow spacing between function identifiers and their invocations
		'func-call-spacing': ['error', 'never'],
		// enforce line breaksl between arguments of a function call
		'function-call-argument-newline': ['error', 'consistent'],
		// enforce consistent line breaks inside function parentheses
		'function-paren-newline': ['error', 'consistent'],
		// enforce consistent indentation
		indent: [
			'error',
			2,
			{
				SwitchCase: 1,
				VariableDeclarator: 'first',
				FunctionDeclaration: { parameters: 'first' },
				FunctionExpression: { parameters: 'first' },
				CallExpression: { arguments: 'first' },
				ArrayExpression: 'first',
				ObjectExpression: 'first',
				ImportDeclaration: 'first',
			},
		],
		// enforce consistent spacing between keys and values in object literal properties
		'key-spacing': [
			'error',
			{ beforeColon: false, afterColon: true, mode: 'strict' },
		],
		// enforce consistent spacing before and after keywords
		'keyword-spacing': [
			'error',
			{
				overrides: {
					if: { before: true, after: true },
					for: { before: true, after: true },
					while: { before: true, after: true },
				},
			},
		],
		// enforce a maximum line length
		'max-len': [
			'error',
			80,
			{ ignoreRegExpLiterals: true, ignoreComments: true },
		],
		// enforce a maximum number of parameters in function definitions
		'max-params': ['error', 5],
		// enforce a particular style for multiline comments
		'multiline-comment-style': ['error', 'starred-block'],
		// disallow if statements as the only statement in else blocks
		'no-lonely-if': 'error',
		// disallow mixed spaces and tabs for indentation
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		// disallow multiple empty lines
		'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 1, maxEOF: 1 }],
		// disallow trailing whitespace at the end of lines
		'no-trailing-spaces': 'error',
		// enforce the location of single-line statements
		'nonblock-statement-body-position': ['error', 'below'],
		// enforce consistent line breaks inside braces
		'object-curly-newline': [
			'error',
			{
				ObjectExpression: 'always',
				ObjectPattern: { multiline: true },
				ExportDeclaration: { multiline: true, minProperties: 3 },
			},
		],
		// enforce consistent spacing inside braces
		'object-curly-spacing': ['error', 'always'],
		// require or disallow padding within blocks
		'padded-blocks': ['error', 'never'],
		// require quotes around object literal property names
		'quote-props': ['error', 'consistent'],
		// enforce the consistent use of either backticks, double, or single quotes
		quotes: ['error', 'single'],
		// enforce spacing before and after semicolons
		'semi-spacing': ['error', { before: false, after: true }],
		// enforce location of semicolons
		'semi-style': ['error', 'last'],
		// require or disallow a space before function parenthesis
		'space-before-function-paren': ['error', 'never'],
		// disallow or enforce spaces inside of parentheses
		'space-in-parens': ['error', 'never'],

		// ECMAScript 6

		// require braces around arrow function bodies
		'arrow-body-style': ['error', 'always'],
		// require parentheses around arrow function arguments
		'arrow-parens': ['error', 'always'],
		// enforce consistent spacing before and after the arrow in arrow functions
		'arrow-spacing': 'error',
		// disallow the use of console
		'no-console': 'error',
		// enforce “for” loop update clause moving the counter in the right direction
		'for-direction': 'error',
		// disallow arrow functions where they could be confused with comparisons
		'no-confusing-arrow': 'error',
		// disallow reassigning const variables
		'no-const-assign': 'error',
		// disallow duplicate module imports
		'no-duplicate-imports': 'error',
		// disallow this/super before calling super() in constructors
		'no-this-before-super': 'error',
		// disallow unnecessary computed property keys in object literals
		'no-useless-computed-key': 'error',
		// require let or const instead of var
		'no-var': 'error',
		// require template literals instead of string concatenation
		'prefer-template': 'error',
		// enforce spacing between rest and spread operators and their expressions
		'rest-spread-spacing': ['error', 'never'],
		// require or disallow spacing around embedded expressions of template strings
		'template-curly-spacing': 'error',
	},
};
