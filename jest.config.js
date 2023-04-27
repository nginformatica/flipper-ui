module.exports = {
    preset: 'ts-jest',
    modulePaths: ['<rootDir>/src'],
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: ['stories.(ts|tsx)'],
    collectCoverageFrom: [
        '<rootDir>/src/core/**/*.(ts|tsx)',
        '<rootDir>/src/experimental/**/*.(ts|tsx)',
        '!<rootDir>/src/core/data-display/data-table/*.(ts|tsx)',
        '!<rootDir>/src/experimental/auto-complete-lab/*.(ts|tsx)',
        '!<rootDir>/src/experimental/index.ts',
        '!<rootDir>/src/experimental/dialog/index.ts',
        '!<rootDir>/src/experimental/fab/index.ts'
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
