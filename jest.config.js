module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/build/js/testing/styleMock.js"
  },
  testEnvironment: "jsdom",

};
