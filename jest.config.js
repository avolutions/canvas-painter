export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.ts'],
  moduleNameMapper: {
    "(.+)\\.js": "$1",
  },
  collectCoverageFrom: [
    "src/**/*.{js,ts,tsx}"
  ]
};
