import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content'
import Footer from './Footer';

const Main = ({ children }) => (
  <>
    <Header />
    <Sidebar />
    <Content>
      {children}
      <Footer />
    </Content>
  </>
);

Main.propTypes = {
  children: PropTypes.node,
};

Main.defaultProps = {
  children: null,
};

export default React.memo(Main);
