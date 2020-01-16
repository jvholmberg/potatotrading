import { createSelector } from 'reselect';
import { selectScreenSize } from '../../sagas/ui/selectors';
import { setScreenSize } from '../../sagas/ui/actions';

export const mapStateToProps = createSelector(
  [selectScreenSize],
  screenSize => ({
    screenSize,
  }),
);

export const mapDispatchToProps = {
  setScreenSize,
};
