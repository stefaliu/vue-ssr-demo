const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  // transformIgnorePatterns: [
  //   "node_modules/"
  // ],
  verbose: true,
  testURL: "http://localhost",
  watchman: false,
  // testMatch: [
    // "<rootDir>/test/unit/**/*.spec.(js|jsx|ts|tsx)",
    // "<rootDir>/**/__tests__/*.(js|jsx|ts|tsx)"
    // '**/test/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  // ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/test/e2e'
  ],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/unit/setup'],
  // mapCoverage: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!src/router/index.js',
    '!**/node_modules/**'
  ],
  coverageDirectory: '<rootDir>/test/unit/coverage',
  coverageReporters: ["html", "text-summary"],
}
