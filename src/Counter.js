import './Counter.css';

export default function Counter({ count, inc, dec }) {
  return (
    <div className="Counter">
      <button onClick={dec}>-</button>
      <span className="count">{count}</span>
      <button onClick={inc}>+</button>
    </div>
  );
}
