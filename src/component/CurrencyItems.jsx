function CurrencyItems({ coinName, rate}) {
  return (
    <li className="flex items-center justify-between space-x-2 min-w-[120px]">
      <p>{coinName}:{rate}</p>
      <button type="button">兌換</button>
    </li>
  );
}

export default CurrencyItems;
