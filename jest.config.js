module.exports = {
  roots: ['<rootDir>/engine/src'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  coverageDirectory: './coverage',
  watchPathIgnorePatterns: ['<rootDir>/node_modules/'],
};
