# Automate code consistency

After [lint](../lint/README.md) phase, if there are some problems with the code, we already know how to check them. 😌

## Husky 🐶

In order to force to fix it, we can use [Husky](https://github.com/typicode/husky) to run a command before **git commit** runs. Husky is going to run ESLint:

- if a problem is found, Husky will stop the process and commit will fail. On the other hand;

- if no problem is found, git commit will run as usual.

Install dev dependencies:

```shell
$ npm install husky --save-dev
```

Update `package.json` to configure Husky:

```javascript
{
  …
    "scripts": {
      …
      "pretest": "./node_modules/.bin/eslint --ignore-path .gitignore . --fix && echo 'Lint complete.'"
      },
    …
  "husky": {
     "hooks": {
       "pre-commit": "npm run pretest"
     }
  }
}
```

- The `pretest` command **checks all files, not just staged files**.

- `--fix` option was added to the command to fix small problems like indentation or semicolon, but we need to add the files again. This might be a problem later and to handle this we can use **Lint-staged**.

## Lint-staged

**Lint-staged** can be used to run multiple command and it can also check staged files only and add it to stage so we only commit code that pass the test.

Install dev dependencies:

```shell
$ npm install lint-staged --save-dev
```

Update `package.json` to configure **Husky**:

```javascript
{
  ...
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,ts}": ["./node_modules/.bin/eslint — fix", "git add"]
  }
```

**Lint staged** only checks staged files.

- If error is found but fixable with `--fix`, Lint-staged will fix it,

- but if not, husky will stop the process.
