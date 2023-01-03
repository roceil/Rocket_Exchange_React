import ExchangeItems from "../component/ExchangeItems";
function ExchangeList({ currencyData, exchangeRecord }) {
  return (
    <ul className="flex  flex-col items-center space-y-3">
      {exchangeRecord.map((item, index) => {
        const { coinName, rate, NTD } = item;
        return (
          <ExchangeItems
            key={index}
            coinName={coinName}
            rate={rate}
            NTD={NTD}
          />
        );
      })}
    </ul>
  );
}

export default ExchangeList;
