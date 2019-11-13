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
  primary: '#7DDAD3',
  secondary: '#C5EAF1',
  warning: '#F8D762',
  danger: '#F28391',
  info: '#F8DABB',
  light: '#fafafa',
  dark: '#282c34',
  device: device
};

export default theme;
