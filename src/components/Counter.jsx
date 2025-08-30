import { useCounter } from "../hooks/useCounter";

const Counter = () => {
    const { count, handleDecrement, handleIncrement, handelResetCounter } = useCounter();

    return (
        <div style={{
            display: "flex",
            gap: "16px",
        }}>
            <button onClick={handleIncrement}>Tambah</button>
            <p style={{fontSize: '24px'}}>{count}</p>
            <button onClick={handleDecrement}>Kurang</button>
            <button onClick={handelResetCounter}>Reset</button>
        </div>
    )
}

export default Counter