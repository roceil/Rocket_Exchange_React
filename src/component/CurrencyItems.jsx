function CurrencyItems({
  coinName,
  rate,
  NTD,
  setExchangeRecord,
  setWallet,
  inputNTD,
}) {
  const addRecord = () => {
    const ExRecord = { coinName: coinName, rate: rate, NTD: NTD };
    setExchangeRecord((prev) => {
      return [...prev, ExRecord];
    });
    setWallet((prev) => {
      return prev - inputNTD;
    });

  };
  return (
    <li className="flex items-center justify-between space-x-2 min-w-[120px]">
      <p>
        {coinName}:{rate * NTD}
      </p>
      <button type="button" onClick={addRecord}>
        兌換
      </button>
    </li>
  );
}

export default CurrencyItems;
