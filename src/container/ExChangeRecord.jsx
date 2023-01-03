import ExchangeList from "./ExchangeList";

function ExChangeRecord({ currencyData,exchangeRecord }) {
  return (
    <div className="w-1/2 text-center py-4">
      <h2 className="mb-2">兌換記錄</h2>
      <ExchangeList currencyData={currencyData} exchangeRecord={exchangeRecord}/>
    </div>
  );
}

export default ExChangeRecord;
