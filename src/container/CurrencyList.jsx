import CurrencyItems from "../component/CurrencyItems";

function CurrencyList({ currencyData, setExchangeRecord,exchangeRecord }) {
  return (
    <ul className="flex  flex-col items-center space-y-3">
      {currencyData.map((item, index) => {
        const { coinName, rate, NTD } = item;
        return (
          <CurrencyItems
            key={index}
            coinName={coinName}
            rate={rate}
            NTD={NTD}
            currencyData={currencyData}
            setExchangeRecord={setExchangeRecord}
            exchangeRecord={exchangeRecord}
          />
        );
      })}
    </ul>
  );
}

export default CurrencyList;
