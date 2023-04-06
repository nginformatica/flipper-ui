module.exports = {
    modulePaths: ['<rootDir>/src'],
    testEnvironment: 'jsdom',
    transform: {
        '.+\\.(ts|tsx)$': 'ts-jest'
    },
    moduleNameMapper: {
        '\\.(scss|sass|css)$': 'identity-obj-proxy',
        '@/(.*)': '<rootDir>/src/$1',
        '@core/(.*)': '<rootDir>/src/core/$1',
        '@experimental/(.*)': '<rootDir>/src/Experimental/$1'
    }
}
