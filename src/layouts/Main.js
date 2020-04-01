import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ConnectedContent from './components/Content';
import Footer from './components/Footer';

const Main = ({ children }) => (
  <>
    <Header />
    <Sidebar />
    <ConnectedContent>
      {children}
      <Footer />
    </ConnectedContent>
  </>
);

Main.propTypes = {
  children: PropTypes.node,
};

Main.defaultProps = {
  children: null,
};

export default React.memo(Main);
