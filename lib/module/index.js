import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

const Hello = _ref => {
  let {
    url
  } = _ref;
  const [message, setMessage] = useState('Not message yet.');
  useEffect(() => {
    fetch(`${url}/api/v1/hello`).then(res => res.json()).then(res => setMessage(res === null || res === void 0 ? void 0 : res.message)).catch(() => setMessage('Unable to get message.'));
  }, [message, url]);
  return /*#__PURE__*/React.createElement(Text, null, message);
};

export default Hello;
//# sourceMappingURL=index.js.map