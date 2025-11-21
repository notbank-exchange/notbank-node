const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  // preset: 'ts-jest',
  // roots: ['<rootDir>'],
  // testEnvironment: "node",
  // Ensure you use the ESM preset
  preset: 'ts-jest/presets/default-esm',

  // This is often required when using the ESM preset
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },

  // Explicitly tell Jest to treat .ts files as ESM
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  transformIgnorePatterns: [
    '/node_modules/(?!(node-fetch|fetch-blob|formdata-polyfill)/)',
  ],
  transform: {
    ...tsJestTransformCfg,
  },
};