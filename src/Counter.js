export default function Counter({ count, inc, dec }) {
  return (
    <div>
      <button onClick={dec}>-</button> {count} <button onClick={inc}>+</button>
    </div>
  );
}
