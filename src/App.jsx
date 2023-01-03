import { useState } from "react";
import AddCurrency from "./container/AddCurrency";
import Wallet from "./container/Wallet";
import CanChange from "./container/CanChange";
import ExChangeRecord from "./container/ExChangeRecord";

function App() {
  const [currencyData, setCurrencyData] = useState([
    { coinName: "日幣", rate: 0.29 },
    { coinName: "美金", rate: 32 },
  ]);

  const [wallet,setWallet] = useState(5000)
  const [inputNTD ,setInputNTD] = useState(``)
  return (
    <>
      <AddCurrency setCurrencyData={setCurrencyData}/>
      <Wallet wallet={wallet} setWallet={setWallet} inputNTD={inputNTD} setInputNTD={setInputNTD}/>
      <div className="flex container border-b border-black">
        <CanChange currencyData={currencyData}/>
        <ExChangeRecord />
      </div>
    </>
  );
}

export default App;
