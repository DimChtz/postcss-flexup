/** @returns {Promise<import('jest').Config>} */
module.exports = async () => {
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
