/** @returns {Promise<import('jest').Config>} */
export default async () => {
  return {
    verbose: true,
    testEnvironment: 'node',
    collectCoverage: true,
    coverageReporters: ['lcov', 'text', 'html'],
    coveragePathIgnorePatterns: [
      '/node_modules/',
      '/dist/' // Exclude compiled files from coverage analysis
    ],
    transform: {
      '^.+\\.jsx?$': 'babel-jest'
    },
    coverageThreshold: {
      global: {
        statements: 100
      }
    }
  };
};
