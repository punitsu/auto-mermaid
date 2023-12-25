const hq = require('alias-hq');

module.exports = {
  roots: ['<rootDir>/engine/'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: hq.get('jest'),
  coverageDirectory: './coverage',
  watchPathIgnorePatterns: ['<rootDir>/node_modules/'],
};
