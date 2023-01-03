import HasMoney from "../component/HasMoney";
import TransferMoney from "../component/TransferMoney";
function Wallet({
  wallet,
  setWallet,
  inputNTD,
  setInputNTD,
  currencyData,
  setCurrencyData,
}) {
  return (
    <div className="container text-center border-b border-black py-4">
      <HasMoney wallet={wallet} setWallet={setWallet} />
      <TransferMoney
        wallet={wallet}
        currencyData={currencyData}
        setCurrencyData={setCurrencyData}
        setWallet={setWallet}
        inputNTD={inputNTD}
        setInputNTD={setInputNTD}
      />
    </div>
  );
}
export default Wallet;
