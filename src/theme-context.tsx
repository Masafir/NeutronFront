import React from "react";

export const themes = {
  light: {
    foreground: '#272727',
    background: '#eeeeee',
    itembg: '#dee2e6'
  },
  dark: {
    foreground: '#ffffff',
    background: '#272727',
    itembg: '#525252'
  },
};

export const ThemeContext = React.createContext({
  theme: themes.light, // valeur par défaut,
  isLight: true,
  toggleTheme: () => {},
});