module.exports = {
  preset: 'jest-preset-angular',
  testEnvironment: 'jsdom',
  rootDir: '../src',
  setupFilesAfterEnv: [
    '<rootDir>/setup-jest.ts'
  ],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/../config/tsconfig.spec.json'
    }
  }
};
