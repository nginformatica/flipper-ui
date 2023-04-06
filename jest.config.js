module.exports = {
    modulePaths: ['<rootDir>/src'],
    testEnvironment: 'jsdom',
    transform: {
        '.+\\.(ts|tsx)$': 'ts-jest'
    },
    moduleNameMapper: {
        '\\.(scss|sass|css)$': 'identity-obj-proxy'
    }
}
