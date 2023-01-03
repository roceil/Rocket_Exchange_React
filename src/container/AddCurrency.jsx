import AddCoinName from "../component/AddCoinName";
import AddRate from "../component/AddRate";
import { useState } from "react";



function AddCurrency({ setCurrencyData }) {
  const [coinName, setCoinName] = useState(``);
  const [rate, setRate] = useState(``);
  const sendData=()=>{
    setCurrencyData(prev=>{
      return [...prev,{ coinName: coinName, rate: Number(rate) }]
    })
  }
  return (
    <div className="container flex items-center justify-center border-b border-black py-4">
      <AddCoinName coinName={coinName} setCoinName={setCoinName} />
      <AddRate rate={rate} setRate={setRate} />
      <button type="button" className="ml-2" onClick={sendData}>
        新增
      </button>
    </div>
  );
}

export default AddCurrency;
