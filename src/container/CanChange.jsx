import CurrencyList from "./CurrencyList";

function CanChange({
  currencyData,
  setExchangeRecord,
  inputNTD,
  setWallet,
}) {
  return (
    <div className="w-1/2 py-4">
      <h2 className="text-center mb-2">幣值換算</h2>
      <CurrencyList
        currencyData={currencyData}
        setExchangeRecord={setExchangeRecord}
        inputNTD={inputNTD}
        setWallet={setWallet}
      />
    </div>
  );
}

export default CanChange;
