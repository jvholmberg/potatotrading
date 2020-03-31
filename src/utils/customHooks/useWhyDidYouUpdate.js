import { useRef, useEffect } from 'react';
import _ from 'lodash';

export default (name, props) => {
  const prevProps = useRef();

  useEffect(() => {
    if (prevProps.current) {
      const changes = _.reduce(Object.keys({ ...prevProps.current, ...props }), (result, key) => {
        if (prevProps.current[key] !== props[key]) {
          _.set(result, key, {
            from: prevProps.current[key],
            to: props[key]
          });
        }
      }, {});
      if (Object.keys(changes).length) {
        // eslint-disable-next-line no-console
        console.log('[why-did-you-update]', name, changes);
      }
    }
    prevProps.current = props;
  });
};
