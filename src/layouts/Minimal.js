import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import { Content } from './components/Content';
import Footer from './components/Footer';

/**
 * Simple layout. Doesn't contain a sidebar.
 * Should only be used when user not yet authorized.
 *
 * @param {node} props.children -
 * @param {bool} props.noFooter -
 */
const Minimal = ({ children, noFooter }) => (
  <>
    <Header noMenuButton />
    <Content>
      {children}
      <Footer {...{ noFooter }} />
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
