
// ! 重新計算需要調整
import { useState } from "react";
import AddCurrency from "./container/AddCurrency";
import Wallet from "./container/Wallet";
import CanChange from "./container/CanChange";
import ExChangeRecord from "./container/ExChangeRecord";

function App() {
  const [currencyData, setCurrencyData] = useState([
    { coinName: "日幣", rate: 29, NTD: 1 },
    { coinName: "美金", rate: 0.32, NTD: 1 },
  ]);
  const [exchangeRecord, setExchangeRecord] = useState([]);
  const [wallet, setWallet] = useState(5000);
  const [inputNTD, setInputNTD] = useState(``);

  return (
    <div className="flex flex-col justify-center h-full container">
      <h1 className="text-center text-2xl font-bold border border-black py-2">匯率計算機</h1>
      <AddCurrency setCurrencyData={setCurrencyData}/>
      <Wallet
        currencyData={currencyData}
        setCurrencyData={setCurrencyData}
        wallet={wallet}
        setWallet={setWallet}
        inputNTD={inputNTD}
        setInputNTD={setInputNTD}
      />
      <div className="flex container border-b border-black">
        <CanChange
          currencyData={currencyData}
          setExchangeRecord={setExchangeRecord}
          wallet={wallet}
          inputNTD={inputNTD}
          setWallet={setWallet}
        />
        <ExChangeRecord
          currencyData={currencyData}
          exchangeRecord={exchangeRecord}
        />
      </div>
    </div>
  );
}

export default App;
