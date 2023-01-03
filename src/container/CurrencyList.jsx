import CurrencyItems from "../component/CurrencyItems";



function CurrencyList({ currencyData }) {
  return (
    <ul className="flex  flex-col items-center space-y-3">
      {currencyData.map((item, index) => {
        const { coinName,rate } = item
        return <CurrencyItems key={index} coinName={coinName} rate={rate}/>;
      })}
    </ul>
  );
}

export default CurrencyList;
