import {capitalize} from 'lodash';

export function tmCaps() {
  return 'TM-' + capitalize(...arguments);
}

