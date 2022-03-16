import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
const Hello = ({ url }) => {
    const [message, setMessage,] = useState('Not message yet.');
    useEffect(() => {
        fetch(`${url}/api/v1/hello`)
            .then(res => res.json())
            .then(res => setMessage(res?.message))
            .catch(() => setMessage('Unable to get message.'));
    }, [
        message,
        url,
    ]);
    return <Text>{message}</Text>;
};
export default Hello;
//# sourceMappingURL=index.js.map