import { useState } from "react";

export const useCounter = () => {
    const [count, setCount] = useState(0);
    
    const handleDecrement = () => {
        alert('decrement')
        setCount(count - 1);
    };

    const handleIncrement = () => {
        alert('increment')
        setCount(count + 1);
    };

    const handelResetCounter = () => {
        alert('Reset')
        setCount(0);
    };

    return {
        count,
        handleDecrement,
        handleIncrement,
        handelResetCounter,
    };
};