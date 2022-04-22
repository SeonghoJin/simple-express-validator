const {compilerOptions} = require('./tsconfig.json');
const {pathsToModuleNameMapper} = require('ts-jest');
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: ['./src/body/.*\.test\.ts$', './src/validator/context/.*\.test\.ts$', './src/validator/express/.*\.test\.ts$'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  modulePaths: [
    '<rootDir>'
  ],
};
