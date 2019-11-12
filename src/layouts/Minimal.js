import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import { Content } from './components/Content';
import Footer from './components/Footer';

const Minimal = ({ children, noFooter }) => (
  <>
    <Header noSidebar />
    <Content>
      {children}
      <Footer noFooter={noFooter} />
    </Content>
  </>
);

Minimal.propTypes = {
  children: PropTypes.node,
  noFooter: PropTypes.bool,
};

Minimal.defaultProps = {
  children: null,
  noFooter: false,
};

export default Minimal;
