import React from 'react';
import ThemeProvider from "../core/ThemeProvider";

const Wrapper = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

export default Wrapper;