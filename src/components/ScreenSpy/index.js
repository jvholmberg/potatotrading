import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';

import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import { mapDispatchToProps } from './selectors';

class ScreenReporter extends PureComponent {

	componentDidMount() {
		this.handleReport(this.props.isDesktop);
	}

	componentDidUpdate(prevProps) {
		this.handleReport(this.props.isDesktop);
	}

	handleReport() {
		if (this.props.isDesktop) return this.props.setScreenSize('lg');
		if (!this.props.isDesktop) return this.props.setScreenSize('sm');
	}

	render() {
		return (<Fragment />)
	}
}

const ScreenSpy = ({ setScreenSize }) => {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
		defaultMatches: true,
	});
	return (<ScreenReporter isDesktop={isDesktop} setScreenSize={setScreenSize} />);
};

export default connect(
	null,
	mapDispatchToProps,
)(ScreenSpy);