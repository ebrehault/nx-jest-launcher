#!/usr/bin/env node

const { spawn } = require("child_process");
const path = require("path");

const args = process.argv.slice(2);
const [testFile, ...extra] = args;
const fullPath = path.resolve(testFile);
const nxWorkspace = process.cwd();
const jest = path.join(nxWorkspace, "node_modules", ".bin", "jest");
const projectType = fullPath.replace(nxWorkspace, "").split(path.sep)[1];
const nxProject = fullPath.replace(nxWorkspace, "").split(path.sep)[2];
const jestConfig = path.join(
  nxWorkspace,
  projectType,
  nxProject,
  "jest.config.js"
);

const child = spawn(jest, [fullPath, "-c", jestConfig, ...extra]);

child.stdout.on("data", (chunk) => console.log(chunk.toString()));
child.stderr.on("data", (chunk) => console.log(chunk.toString()));
