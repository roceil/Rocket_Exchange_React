import { useState } from "react";

function TransferMoney({
  setWallet,
  inputNTD,
  setInputNTD,
  currencyData,
  setCurrencyData,
  wallet,
}) {
  const changeNTD = (e) => {
    setInputNTD(e.target.value);
  };
  const changeWallet = () => {
    if (inputNTD > wallet) {
      alert(`錢不夠拉`);
      setInputNTD(``);
      return;
    }
    setWallet((prev) => {
      return prev - inputNTD;
    });
    setCurrencyData(() => {
      const ExchangeData = currencyData.map((item) => {
        return {
          coinName: item.coinName,
          rate: item.rate,
          NTD: Number(inputNTD),
        };
      });
      return ExchangeData;
    });
    setInputNTD(``);
  };
  const clearCurrency = () => {
    location.reload();
  };
  return (
    <>
      <label htmlFor="transferInput">
        <p className="mb-1">請輸入您欲兌換的台幣</p>
        <input
          id="transferInput"
          type="text"
          placeholder="請輸入台幣"
          value={inputNTD}
          onChange={changeNTD}
        />
        <button type="button" className="ml-2" onClick={changeWallet}>
          計算
        </button>
        <button type="button" className="ml-2" onClick={clearCurrency}>
          重新計算
        </button>
      </label>
    </>
  );
}

export default TransferMoney;
