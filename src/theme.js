const screenWidth = {
  mobile: '320px',
  tablet: '768px',
  laptop: '1024px'
};

const device = {
  mobile: `(min-width: ${screenWidth.mobile})`,
  tablet: `(min-width: ${screenWidth.tablet})`,
  laptop: `(min-width: ${screenWidth.laptop})`
};

const theme = {
  font: 'Muli',
  primary: '#08c781',
  secondary: '#00bfb3',
  warning: '#F8D762',
  danger: '#F28391',
  info: '#F8DABB',
  light: '#f0f0f0',
  mid: '#4e4e4e',
  dark: '#282c34',
  device: device
};

export default theme;
