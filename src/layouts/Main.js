import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ConnectedContent from './components/Content';
import Footer from './components/Footer';

const Main = ({ children, noFooter }) => (
  <>
    <Header />
    <Sidebar />
    <ConnectedContent>
      {children}
      {!noFooter && (<Footer />)}
    </ConnectedContent>
  </>
);

Main.propTypes = {
  children: PropTypes.node,
  noFooter: PropTypes.bool,
};

Main.defaultProps = {
  children: null,
  noFooter: false,
};

export default Main;
