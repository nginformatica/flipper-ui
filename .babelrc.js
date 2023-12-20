const toKebabCase = str =>
    str.replace(
        /([a-z])?([A-Z])/g,
        (m, g1, g2) => (g1 ? g1 + '-' : '') + g2.toLowerCase()
    )

const reactVisModules = {
    AbstractSeries: 'plot/series/abstract-series',
    ArcSeries: 'plot/series/arc-series',
    AreaSeries: 'plot/series/area-series',
    Borders: 'plot/borders',
    ChartLabel: 'plot/chart-label',
    CircularGridLines: 'plot/circular-grid-lines',
    ContourSeries: 'plot/series/contour-series',
    Crosshair: 'plot/crosshair',
    CustomSVGSeries: 'plot/series/custom-svg-series',
    DecorativeAxis: 'plot/axis/decorative-axis',
    GradientDefs: 'plot/gradient-defs',
    GridLines: 'plot/grid-lines',
    HeatmapSeries: 'plot/series/heatmap-series',
    HexbinSeries: 'plot/series/hexbin-series',
    Highlight: 'plot/highlight',
    Hint: 'plot/hint',
    HorizontalBarSeries: 'plot/series/horizontal-bar-series',
    HorizontalBarSeriesCanvas: 'plot/series/horizontal-bar-series-canvas',
    HorizontalGridLines: 'plot/horizontal-grid-lines',
    HorizontalRectSeries: 'plot/series/horizontal-rect-series',
    HorizontalRectSeriesCanvas: 'plot/series/horizontal-rect-series-canvas',
    LabelSeries: 'plot/series/label-series',
    LineMarkSeries: 'plot/series/line-mark-series',
    LineMarkSeriesCanvas: 'plot/series/line-mark-series-canvas',
    LineSeries: 'plot/series/line-series',
    LineSeriesCanvas: 'plot/series/line-series-canvas',
    MarkSeries: 'plot/series/mark-series',
    MarkSeriesCanvas: 'plot/series/mark-series-canvas',
    PolygonSeries: 'plot/series/polygon-series',
    VerticalBarSeries: 'plot/series/vertical-bar-series',
    VerticalBarSeriesCanvas: 'plot/series/vertical-bar-series-canvas',
    VerticalGridLines: 'plot/vertical-grid-lines',
    VerticalRectSeries: 'plot/series/vertical-rect-series',
    VerticalRectSeriesCanvas: 'plot/series/vertical-rect-series-canvas',
    Voronoi: 'plot/voronoi',
    RectSeries: 'plot/series/rect-series',
    RectSeriesCanvas: 'plot/series/rect-series-canvas',
    WhiskerSeries: 'plot/series/whisker-series',
    XYPlot: 'plot/xy-plot',
    XAxis: 'plot/axis/x-axis',
    YAxis: 'plot/axis/y-axis',
    ContinuousColorLegend: 'legends/continuous-color-legend',
    ContinuousSizeLegend: 'legends/continuous-size-legend',
    DiscreteColorLegend: 'legends/discrete-color-legend',
    SearchableDiscreteColorLegend: 'legends/searchable-discrete-color-legend',
    ParallelCoordinates: 'parallel-coordinates',
    RadarChart: 'radar-chart',
    RadialChart: 'radial-chart',
    Sankey: 'sankey',
    Sunburst: 'sunburst',
    Treemap: 'treemap',
    makeHeightFlexible: 'make-vis-flexible',
    makeVisFlexible: 'make-vis-flexible',
    makeWidthFlexible: 'make-vis-flexible',
    FlexibleXYPlot: 'make-vis-flexible',
    FlexibleWidthXYPlot: 'make-vis-flexible',
    FlexibleHeightXYPlot: 'make-vis-flexible',
    AxisUtils: 'utils/axis-utils',
    ScaleUtils: 'utils/scales-utils'
}

module.exports = {
    plugins: [
        [
            'transform-imports',
            {
                '@': {
                    transform: './src',
                    preventFullImport: true
                },
                '@material-ui/icons': {
                    transform: '@material-ui/icons/${member}',
                    preventFullImport: true
                },
                '@material-ui/core': {
                    transform: '@material-ui/core/${member}',
                    preventFullImport: true
                },
                '@material-ui/styles': {
                    transform: '@material-ui/styles/${member}',
                    preventFullImport: true
                },
                '../icons': {
                    transform: '@material-ui/icons/${member}',
                    preventFullImport: true
                },
                '../charts': {
                    transform: 'flipper-ui/charts/${member}',
                    preventFullImport: true
                },
                'react-vis': {
                    transform: importName =>
                        `react-vis/es/${reactVisModules[importName]}`,
                    preventFullImport: true
                },
                'date-fns/locale': {
                    transform: importName =>
                        `date-fns/locale/${toKebabCase(importName)}`,
                    preventFullImport: true
                },
                'date-fns': {
                    transform: 'date-fns/${member}',
                    preventFullImport: true
                },
                ramda: {
                    transform: 'ramda/es/${member}',
                    preventFullImport: true
                }
            }
        ],
        [
            'module-resolver',
            {
                alias: {
                    '@': './src'
                }
            }
        ],
        '@babel/plugin-transform-runtime',
        'transform-class-properties'
    ],
    presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript'
    ]
}
