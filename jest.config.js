module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    // A map from regular expressions to module names that allow to stub out resources with a single module
    testPathIgnorePatterns: ['<rootDir>/lib', '<rootDir>/node_modules'],
};
