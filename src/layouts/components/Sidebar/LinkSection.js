import React from 'react';
import List from '@material-ui/core/List';
import AppsIcon from '@material-ui/icons/Apps';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import SettingsIcon from '@material-ui/icons/Settings';
import LinkItem from './LinkItem';

const LinkSection = () => (
  <List>
    <LinkItem icon={AppsIcon} to="/overview">Overview</LinkItem>
    <LinkItem icon={SettingsIcon} to="/settings">Settings</LinkItem>
    <LinkItem icon={FitnessCenterIcon} to="/exercises">Exercises</LinkItem>
    <LinkItem icon={RestaurantIcon} to="/nutrition">Nutrition</LinkItem>
  </List>
);

LinkSection.propTypes = {

};

export default LinkSection;
