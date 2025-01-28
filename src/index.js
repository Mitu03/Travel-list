export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textdecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button></button>
    </li>
  );
}
