module.exports = {
    plugins: [
        '@babel/plugin-transform-runtime',
        [
            'module-resolver',
            {
                alias: {
                    '@': './src'
                }
            }
        ],
        [
            'import',
            {
                libraryName: 'ramda',
                libraryDirectory: 'es',
                camel2DashComponentName: false
            },
            'ramda'
        ],
        [
            'import',
            {
                libraryName: '@material-ui/core',
                libraryDirectory: '',
                camel2DashComponentName: false
            },
            'material'
        ],
        [
            'import',
            {
                libraryName: '@mui/material',
                libraryDirectory: '',
                camel2DashComponentName: false
            },
            'mui'
        ],
        [
            'import',
            {
                libraryName: '@mui/icons-material',
                libraryDirectory: '',
                camel2DashComponentName: false
            },
            'icons'
        ]
    ],
    presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript'
    ]
}
