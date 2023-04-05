module.exports = {
    modulePaths: ['<rootDir>/src'],
    testEnvironment: 'jsdom',
    transform: {
        '.+\\.(ts|tsx)$': 'ts-jest'
    }
}
