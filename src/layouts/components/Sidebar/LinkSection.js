import React from 'react';
import List from '@material-ui/core/List';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LinkItem from './LinkItem';

const LinkSection = () => (
  <List>
    <LinkItem icon={LockOpenIcon} to="/">Landing</LinkItem>
  </List>
);

LinkSection.propTypes = {

};

export default LinkSection;
