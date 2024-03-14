/** @returns {Promise<import('jest').Config>} */
export default async () => {
  return {
    verbose: true,
    testEnvironment: 'node',
    coverageThreshold: {
      global: {
        statements: 100
      }
    }
  };
};
