const react = require('eslint-plugin-react')
const hooks = require('eslint-plugin-react-hooks')
const parser = require('@typescript-eslint/parser')
const tseslint = require('typescript-eslint')
const stylistic = require('@stylistic/eslint-plugin')
const importplugin = require('eslint-plugin-import')
const eslintprettier = require('eslint-plugin-prettier')
const tseslintplugin = require('@typescript-eslint/eslint-plugin')

const rulesReact = {
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/no-unescaped-entities': 'off',

    'react/jsx-key': 'warn',
    'react/jsx-pascal-case': 'warn',
    'react/self-closing-comp': 'warn',
    'react/no-unstable-nested-components': 'warn',
    'react/jsx-sort-props': [
        'warn',
        {
            callbacksLast: true,
            shorthandFirst: true,
            shorthandLast: false,
            ignoreCase: true,
            noSortAlphabetically: true,
            reservedFirst: false
        }
    ],

    'react/no-danger': 'error',
    'react/jsx-boolean-value': 'error',
    'react/boolean-prop-naming': 'error'
}

const rulesEslint = {
    'no-redeclare': 'off',
    'default-param-last': 'off',
    'no-duplicate-imports': 'off',
    'no-use-before-define': 'off',
    'no-unused-expressions': 'off',

    radix: 'warn',
    'no-nested-ternary': 'warn',
    'no-else-return': ['warn', { allowElseIf: false }],

    'no-var': 'error',
    'no-sequences': 'error',
    'no-console': ['error', { allow: ['error'] }],
    'prefer-const': ['error', { destructuring: 'all' }],

    '@stylistic/key-spacing': [
        'error',
        { beforeColon: false, afterColon: true }
    ],
    '@stylistic/max-len': [
        'error',
        {
            code: 85,
            ignoreStrings: true,
            ignoreRegExpLiterals: true,
            ignoreTemplateLiterals: true
        }
    ],
    '@stylistic/padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: ['const', 'let'], next: '*' },
        {
            blankLine: 'any',
            prev: ['const', 'let'],
            next: ['const', 'let']
        },
        {
            blankLine: 'always',
            prev: ['if', 'function', 'for'],
            next: ['if', 'function', 'for']
        }
    ]
}

const rulesImport = {
    'import/no-duplicates': 'error',
    'import/order': [
        'error',
        {
            groups: [
                'external',
                'builtin',
                'type',
                'internal',
                'parent',
                'sibling',
                'index'
            ],
            pathGroups: [
                {
                    pattern: 'react',
                    group: 'external',
                    position: 'before'
                },
                {
                    pattern: 'react-**',
                    group: 'external',
                    position: 'before'
                },
                {
                    pattern: '../styles',
                    group: 'index',
                    position: 'after'
                },
                {
                    pattern: './styles',
                    group: 'index',
                    position: 'after'
                },
                {
                    pattern: '@/theme',
                    group: 'index',
                    position: 'after'
                }
            ],
            pathGroupsExcludedImportTypes: ['react'],
            'newlines-between': 'never',
            alphabetize: {
                order: 'asc',
                caseInsensitive: true
            }
        }
    ]
}

const rulesTypescript = {
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/no-unused-expressions': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    '@typescript-eslint/restrict-plus-operands': 'warn',
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
    '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',

    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/consistent-type-imports': 'error'
}

module.exports = tseslint.config(
    ...tseslint.configs.recommended,
    {
        ignores: [
            'dist/*',
            'docs/*',
            'node_modules/*',
            'pre-publish.js',
            'eslint.config.js'
        ]
    },
    {
        files: ['src/**/*.{ts,tsx}'],
        languageOptions: {
            parser: parser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                },
                projectService: true
            },
            ecmaVersion: 'latest',
            sourceType: 'module'
        },
        settings: {
            react: {
                version: 'detect'
            },
            'import/parsers': {
                tsParser: ['.ts', '.tsx']
            },
            'import/resolver': {
                typescript: true
            }
        },
        plugins: {
            react: react,
            import: importplugin,
            prettier: eslintprettier,
            'react-hooks': hooks,
            '@stylistic': stylistic,
            '@typescript-eslint': tseslintplugin
        },
        rules: {
            'prettier/prettier': 'error',
            ...rulesReact,
            ...rulesEslint,
            ...rulesImport,
            ...rulesTypescript
        }
    }
)
