import CurrencyList from "./CurrencyList";

function CanChange({ currencyData }) {
  return (
    <div className="w-1/2 py-4">
      <h2 className="text-center mb-2">幣值換算</h2>
      <CurrencyList currencyData={currencyData}/>
    </div>
  );
}

export default CanChange;
