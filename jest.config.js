module.exports = {
  roots: ['<rootDir>/engine/'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  preset: 'ts-jest',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/engine/src/config/$1',
    '^@engine/(.*)$': '<rootDir>/engine/src/$1',
    '^@models/(.*)$': '<rootDir>/engine/src/models/$1',
    '^@utils/(.*)$': '<rootDir>/engine/src/utils/$1',
    '^@libs/(.*)$': '<rootDir>/engine/src/libs/$1',
  },
  coverageDirectory: './coverage',
  watchPathIgnorePatterns: ['<rootDir>/node_modules/'],
};
