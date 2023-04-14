module.exports = {
    preset: 'ts-jest',
    modulePaths: ['<rootDir>/src'],
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: ['stories.(ts|tsx)'],
    collectCoverageFrom: [
        '<rootDir>/src/**/*.(ts|tsx)',
        '!<rootDir>/src/Experimental/index.ts',
        '!<rootDir>/src/Experimental/Dialog/index.ts',
        '!<rootDir>/src/Experimental/Fab/index.ts'
    ],
    transform: {
        '.+\\.(ts|tsx)$': 'ts-jest'
    },
    moduleNameMapper: {
        '\\.(scss|sass|css)$': 'identity-obj-proxy',
        '@/(.*)': '<rootDir>/src/$1'
    },
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100
        }
    }
}
