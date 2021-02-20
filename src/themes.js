const color = {
    // Official color palette
    primary: '#FF4785',
    // coral
    secondary: '#1EA7FD',
    // ocean
    tertiary: '#FAFBFC',
    ancillary: '#22a699',
    // for code
    // Complimentary
    orange: '#FC521F',
    gold: '#FFAE00',
    green: '#66BF3C',
    seafoam: '#37D5D3',
    purple: '#6F2CAC',
    ultraviolet: '#2A0481',
    // Monochrome
    lightest: '#FFFFFF',
    lighter: '#F8F8F8',
    light: '#F3F3F3',
    mediumlight: '#EEEEEE',
    medium: '#DDDDDD',
    mediumdark: '#999999',
    dark: '#666666',
    darker: '#444444',
    darkest: '#333333',
    // For borders
    border: 'rgba(0,0,0,.1)',
    // Status
    positive: '#66BF3C',
    negative: '#FF4400',
    warning: '#E69D00',
    critical: '#FFFFFF',
    defaultText: '#333333',
    inverseText: '#FFFFFF'
};

const background = {
    app: '#F6F9FC',
    bar: '#FFFFFF',
    content: color.lightest,
    gridCellSize: 10,
    hoverable: 'rgba(0,0,0,.05)',
    // hover state for items in a list
    // Notification, error, and warning backgrounds
    positive: '#E1FFD4',
    negative: '#FEDED2',
    warning: '#FFF5CF',
    critical: '#FF4400'
};

const typography = {
    fonts: {
        base: ['"Nunito Sans"', '-apple-system', '".SFNSText-Regular"', '"San Francisco"', 'BlinkMacSystemFont', '"Segoe UI"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'].join(', '),
        mono: ['"Operator Mono"', '"Fira Code Retina"', '"Fira Code"', '"FiraCode-Retina"', '"Andale Mono"', '"Lucida Console"', 'Consolas', 'Monaco', 'monospace'].join(', ')
    },
    weight: {
        regular: 400,
        bold: 700,
        black: 900
    },
    size: {
        s1: 12,
        s2: 14,
        s3: 16,
        m1: 20,
        m2: 24,
        m3: 28,
        l1: 32,
        l2: 40,
        l3: 48,
        code: 90
    }
};


const dark = {
    base: 'dark',

    // Storybook-specific color palette
    colorPrimary: '#FF4785', // coral
    colorSecondary: '#1EA7FD', // ocean

    // UI
    appBg: '#2f2f2f',
    appContentBg: '#333',
    appBorderColor: 'rgba(255,255,255,.1)',
    appBorderRadius: 4,

    // Fonts
    fontBase: typography.fonts.base,
    fontCode: typography.fonts.mono,

    // Text colors
    textColor: color.lightest,
    textInverseColor: color.darkest,
    textMutedColor: color.mediumdark,

    // Toolbar default and active colors
    barTextColor: '#999999',
    barSelectedColor: color.secondary,
    barBg: color.darkest,

    // Form colors
    inputBg: '#3f3f3f',
    inputBorder: 'rgba(0,0,0,.3)',
    inputTextColor: color.lightest,
    inputBorderRadius: 4,
};

const light = {
    base: 'light',
  
    // Storybook-specific color palette
    colorPrimary: '#FF4785', // coral
    colorSecondary: '#1EA7FD', // ocean
  
    // UI
    appBg: background.app,
    appContentBg: color.lightest,
    appBorderColor: color.border,
    appBorderRadius: 4,
  
    // Fonts
    fontBase: typography.fonts.base,
    fontCode: typography.fonts.mono,
  
    // Text colors
    textColor: color.darkest,
    textInverseColor: color.lightest,
    textMutedColor: color.dark,
  
    // Toolbar default and active colors
    barTextColor: color.mediumdark,
    barSelectedColor: color.secondary,
    barBg: color.lightest,
  
    // Form colors
    inputBg: color.lightest,
    inputBorder: color.border,
    inputTextColor: color.darkest,
    inputBorderRadius: 4,
  }

export const themes = { dark, light };