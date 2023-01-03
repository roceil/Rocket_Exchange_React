import CurrencyList from "./CurrencyList";

function CanChange({ currencyData ,setExchangeRecord,exchangeRecord }) {
  return (
    <div className="w-1/2 py-4">
      <h2 className="text-center mb-2">幣值換算</h2>
      <CurrencyList currencyData={currencyData} setExchangeRecord={setExchangeRecord} exchangeRecord={exchangeRecord}/>
    </div>
  );
}

export default CanChange;
