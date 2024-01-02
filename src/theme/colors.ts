import { Priority, Feedback, Criticality, Graphically } from './presets'

const neutral = {
    black: '#000',
    white: '#FFF',
    transparent: 'rgba(0, 0, 0, 0)'
}

const primary = {
    main: '#152849',
    dark: '#0E1C33',
    light: '#43536D',
    contrast: neutral.white
}

const secondary = {
    main: '#118D16',
    dark: '#0B620F',
    light: '#40A344',
    contrast: neutral.white
}

const grays = {
    g0: '#212121',
    g1: '#424242',
    g2: '#616161',
    g3: '#757575',
    g4: '#9e9e9e',
    g5: '#bdbdbd',
    g6: '#e0e0e0',
    g7: '#eeeeee',
    g8: '#f5f5f5',
    g9: '#fafafa'
}

// Actions
const action = {
    confirm: '#118D16',
    cancel: '#D84315',
    neutral: primary.main
}

const feedback: Record<Feedback, string> = {
    danger: '#D84315',
    warning: '#FFA000',
    success: '#0E9043',
    info: '#2F80ED'
}

const priority: Record<Priority, { main: string; light: string }> = {
    critical: {
        main: '#D84315',
        light: '#FFCDBE'
    },
    high: {
        main: '#FF9900',
        light: '#FFE1B4'
    },
    medium: {
        main: '#E7BF11',
        light: '#FFF7D5'
    },
    low: {
        main: '#8BC34A',
        light: '#E9F4DD'
    },
    minimal: {
        main: '#56CCF2',
        light: '#DAF2FD'
    },
    neutral: {
        main: grays.g5,
        light: grays.g8
    }
}

const graphic: Record<Graphically, { main: string; light: string }> = {
    pink: {
        main: '#D467A8',
        light: '#F4D9E9'
    },
    purple: {
        main: '#7B4299',
        light: '#D7C6E0'
    },
    brown: {
        main: '#83471E',
        light: '#DAC7BB'
    },
    red: {
        main: '#D84315',
        light: '#FFCDBE'
    },
    orange: {
        main: '#FF9900',
        light: '#FFE1B4'
    },
    yellow: {
        main: '#E7BF11',
        light: '#FFF7D5'
    },
    lightgreen: {
        main: '#8BC34A',
        light: '#E9F4DD'
    },
    green: {
        main: '#0A7B3E',
        light: '#CEE5D8'
    },
    blue: {
        main: '#56CCF2',
        light: '#DAF2FD'
    },
    gray: {
        main: grays.g5,
        light: grays.g8
    }
}

const criticality: Record<Criticality, string> = {
    high: '#FF9900',
    medium: '#E7BF11',
    low: '#8BC34A'
}

const app = {
    border: grays.g6,
    background: {
        main: '#F6F7FF',
        lighter: grays.g8
    },
    text: {
        main: grays.g0,
        light: grays.g3,
        disabled: grays.g6
    }
}

export default {
    primary,
    secondary,
    app,
    priority,
    feedback,
    graphic,
    criticality,
    neutral,
    grays,
    action
}
