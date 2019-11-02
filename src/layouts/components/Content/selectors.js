import { createSelector } from 'reselect';
import { selectIsDesktop } from '../../../sagas/ui/selectors';

export const mapStateToProps = createSelector(
	[selectIsDesktop],
	(isDesktop) => ({ isDesktop }));