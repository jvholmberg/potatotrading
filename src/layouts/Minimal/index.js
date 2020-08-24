import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

/**
 * Simple layout. Doesn't contain a sidebar.
 *
 * @param {node} props.children -
 * @param {bool} props.noFooter -
 */
const Minimal = ({ children }) => (
  <>
    <Header />
    <Content>
      {children}
      <Footer />
    </Content>
  </>
);

Minimal.propTypes = {
  children: PropTypes.node,
};

Minimal.defaultProps = {
  children: null,
};

export default Minimal;
