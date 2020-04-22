import * as React from 'react';
export const useStateWithCallback = <T>(defaultValue: T, synchronous?: boolean) => {
    const [value, setValue] = React.useState<T>(defaultValue);
    const [callback, setCallback] = React.useState<Function | null>(null);

    const handler = () => {
        if (typeof callback === 'function') {
            callback(value);
        }
        return () => {
            setCallback(null);
        };
    };

    React.useEffect(synchronous ? () => {} : handler, [value, callback]);

    React.useLayoutEffect(synchronous ? handler : () => {}, [value, callback]);

    const setValueWithCallback = (newValue: T, callback?: Function) => {
        if (typeof callback === 'function') {
            setCallback(() => callback);
        }
        setValue(newValue);
    };

    return [value, setValueWithCallback];
};
