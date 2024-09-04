module.exports = {
    preset: 'ts-jest',
    modulePaths: ['<rootDir>/src'],
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: ['stories.(ts|tsx)'],
    collectCoverageFrom: [
        '<rootDir>/src/core/**/*.(ts|tsx)',
        '!<rootDir>/src/core/data-display/data-table/*.(ts|tsx)',
        '!<rootDir>/src/core/feedback/dialog-v2/index.ts',
        '!<rootDir>/src/core/navigation/breadcrumbs/index.tsx',
        '!<rootDir>/src/core/inputs/select/index.tsx',
        '!<rootDir>/src/core/inputs/date-time/index.tsx',
        '!<rootDir>/src/core/data-display/table/table-pagination.tsx',
        '!<rootDir>/src/core/inputs/chip-field/index.tsx'
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
