import CurrencyItems from "../component/CurrencyItems";

function CurrencyList({
  currencyData,
  setExchangeRecord,
  inputNTD,
  setWallet,
}) {
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
            setExchangeRecord={setExchangeRecord}
            inputNTD={inputNTD}
            setWallet={setWallet}
          />
        );
      })}
    </ul>
  );
}

export default CurrencyList;
