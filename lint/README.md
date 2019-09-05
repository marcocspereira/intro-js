The structure of this section includes:

- [Using ESLint and Prettier with TypeScript](#Using-ESLint-and-Prettier-with-TypeScript)

  - [Why ESLint instead of TSLint ?](#Why-ESLint-instead-of-TSLint-?])
  - [Why Prettier ? ](#Why-Prettier-?)
  - [Install dependencies](#install-dependencies)

    - [ESLint](#ESLint)
    - [Prettier](#Prettier)

  - [Configuring ESLing](#Configuring-ESLint)
  - [Configuring Prettier](#Configuring-Prettier)
  - [package.json](#package.json)

- [VSCode](#VS-Code)

  - [Suggested Extensions](#Suggested-Extensions)
  - [Suggested Configurations](#Suggested-Configurations)

- [References](#References)

It exists a file [`.eslintrc.js`](.eslintrc.js) ready to be downloaded with some rules that fit our develpment. Some already exist in `eslint:recommended`.

TODO:

- Configure [stylelint](https://stylelint.io/)
- Configure pre-commit hooks (for instance, [lint-staged](https://github.com/okonet/lint-staged), [pre-commit](https://github.com/observing/pre-commit) or [husky](https://github.com/typicode/husky#readme))

---

# Using ESLint and Prettier with TypeScript

This steps aim to help you install the necessary dependencies to run ESLint in your TypeScript projects. A linter is a program that analyses your source code for possible programmatic and styling errors.

## Why ESLint instead of TSLint ?

In spite of TSLint is currently the standard of linting TypeScript, this will change and ESLint will soon replace TSLint. This means that TSLint will be **deprecated**. Check Palantir's blog post about [TSLint in 2019](https://medium.com/palantir/tslint-in-2019-1a144c2317a9).

ESLint is the most popular JavaScript linter, a tool that analyzes code for errors.

## Why Prettier ?

Prettier is a code formatter that helps you to not worry about code formatting again. Installing Prettier in the editor, it will take care of formatting for you.

Prettier and ESLint complement each other. **Prettier** scans your files for style issues and automatically reformats your code to ensure consistent rules are being followed for indentation, spacing, semicolons, single quotes vs double quotes, etc. **ESLint** performs automated scans of your JavaScript files for common syntax and style errors.

We run Prettier as an ESLint rule and repports differences as individual ESLint issues.

## Install dependencies

### ESLint

Install dev dependencies:

```shell
# using npm
$ npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev

# or using yarn
$ yarn add --dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

- **eslint:** the core ESLint linting library;
- **@typescript-eslint/parser:** the parser that will allow ESLint to lint TypeScript code;
- **@typescript-eslint/eslint-plugin:** a plugin that contains a bunch of ESLint rules that are TypeScript specific.

You can create `.eslintrc` file manually, later, or initialize **ESLint** for project with:

```shell
$ ./node_modules/.bin/eslint --init
```

### Prettier

Install dev dependencies:

```shell
# using npm
$ npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev

# or using yarn
$ yarn add --dev prettier eslint-config-prettier eslint-plugin-prettier
```

- **prettier:** the core prettier library;
- **eslint-config-prettier:** disables ESLint rules that might conflict with prettier;
- **eslint-plugin-prettier:** runs prettier as an ESLint rule.

The advantage of having prettier setup as an ESLint rule using eslint-plugin-prettier is that code can automatically be fixed using ESLint's `--fix` option`

## Configuring ESLint

Now we need to create a `.eslintrc` file in our project root folder and tell **ESLint** how to deal with TypeScript. It can be JSON file (`.eslintrc.json`) or JavaScript file (`.eslintrc.js`). This configs will prefer using `.eslintrc.js` over a JSON file, because it lets you leave comments in your configuration.

```javascript
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
		'prettier/prettier': ['error', { singleQuote: true, parser: 'flow' }],
	},
};
```

[In GitHub](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules) are some rules for TS files. And also [more rules for ESLint](https://eslint.org/docs/rules/).

Next, you’ll need some configuration files to **ignore** a bunch of stuff we don’t want to lint with `.eslintignore`:

```
node_modules/*
```

## Configuring Prettier

In order to configure Prettier, a `.prettierrc.js` file is required at the root project directory.

```javascript
module.exports = {
	semi: true,
	trailingComma: 'all',
	singleQuote: true,
	printWidth: 100,
	tabWidth: 2,
};
```

And also a ignore for prettier, `.prettierignore`:

```
package-lock.json
node_modules/*
```

## package.json

```javascript
{
    ...
    "lint": "eslint --fix . && echo 'Lint complete.'",
    ...
}
```

Then you can run `npm run lint`.

# VS Code

## Suggested Extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) ([GitHub](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint))
- [prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) ([GitHub](https://github.com/prettier/prettier-vscode))

## Suggested Configurations

Update your **settings.json** (Settings > Extensions > ESLint > settings.json):

```javascript
{
    "eslint.validate": [
        "javascript",
        {
            "language": "typescript",
            "autoFix": true
        },
    ],
    "eslint.autoFixOnSave": true,
    "eslint.alwaysShowStatus": true,
    "editor.formatOnSave": true,
}
```

This allows you to **run ESLint's automatic fix command (i.e. eslint --fix) whenever a file is saved**.

# References

- [Using ESLint and Prettier in a TypeScript Project](https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project)
- [Streamline Code Reviews with ESLint + Prettier](https://medium.com/javascript-scene/streamline-code-reviews-with-eslint-prettier-6fb817a6b51d)
- [Prettier vs ESLint: What's the Difference?](https://www.futurehosting.com/blog/prettier-vs-eslint-whats-the-difference/)
- [TSLint in 2019](https://medium.com/palantir/tslint-in-2019-1a144c2317a9)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
