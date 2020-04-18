import * as React from 'react';
export const useStateWithCallback = <T>(defaultValue: T) => {
    const [value, setValue] = React.useState<T>(defaultValue);
    const [callback, setCallback] = React.useState<Function | null>(null);

    React.useEffect(() => {
        if (typeof callback === 'function') {
            callback();
        }
        return () => {
            setCallback(null);
        };
    }, [value, callback]);

    const setValueWithCallback = (newValue: T, callback?: Function) => {
        if (typeof callback === 'function') {
            setCallback(() => callback);
        }
        setValue(newValue);
    };

    return [value, setValueWithCallback];
};
