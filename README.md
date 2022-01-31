# nx-jest-launcher

Command utility to run a single Jest test file in an Nx workspace without specifying the app or lib name.

## Why?

When you want to run tests from an IDE, you can obtain the filename but you cannot get the Nx app or lib name, so it is not possible to execute the expected command (like `nx test my-lib --testFile=libs/my-lib/src/lib.spec.ts`).

`nx-jest-launcher` extract the Nx app or lib name from the file path, and runs the proper Jest command (passing the `jest.config.js` file path).

## Installation

```
yarn add nx-jest-launcher
yarn global add nx-jest-launcher # for global installation
```

or

```
npm install nx-jest-launcher
npm install -g nx-jest-launcher # for global installation
```

## Usage

```
nx-jest-launcher libs/my-lib/src/lib.spec.ts
```

You can pass any extra Jest option to the command:

```
nx-jest-launcher libs/my-lib/src/lib.spec.ts --runInBand
```

## Usage in VSCode

Add the following configuration in `launch.json`:

```json
"configurations": [
  …
    {
      "type": "node",
      "request": "launch",
      "name": "Jest: Run Current File",
      "program": "${workspaceFolder}/node_modules/.bin/nx-jest-launcher", // or "/usr/local/bin/nx-jest-launcher",
      "args": ["${file}", "--runInBand"],
      "console": "integratedTerminal", // or "internalConsole",
      "cwd": "${workspaceFolder}",
      "disableOptimisticBPs": true
    }
]
```

Breakpoints are supported.
