import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';

import {
  selectAccessToken, selectRefreshToken,
  selectExpiresIn, selectValidUntil,
} from '../sagas/auth/selectors';

export const mapStateToProps = createSelector(
  [
    selectAccessToken,
    selectRefreshToken,
    selectExpiresIn,
    selectValidUntil,
  ],
  (accessToken, refreshToken, expiresIn, validUntil) => ({
    accessToken,
    refreshToken,
    expiresIn,
    validUntil,
  })
);

export const mapDispatchToProps = dispatch =>
  bindActionCreators({

  }, dispatch);
