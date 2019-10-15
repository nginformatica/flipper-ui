module.exports = {
  "plugins": [
    [
      "transform-imports", {
        "@material-ui/icons": {
          "transform": "@material-ui/icons/${member}",
          "preventFullImport": true
        },
        "@material-ui/core": {
          "transform": "@material-ui/core/${member}",
          "preventFullImport": true
        },
        "@material-ui/styles": {
          "transform": "@material-ui/styles/${member}",
          "preventFullImport": true
        },
        "../icons": {
          "transform": "@material-ui/icons/${member}",
          "preventFullImport": true
        },
        "../charts": {
          "transform": "flipper-ui/charts/${member}",
          "preventFullImport": true
        },
        "ramda": {
          "transform": "ramda/es/${member}",
          "preventFullImport": true
        },
      }
    ],
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread",
    "@babel/plugin-transform-runtime",
  ],
  "presets": [
    "@babel/env",
    "@babel/react",
    "@babel/typescript"
  ]
}
