import { useState } from "react";

function TransferMoney({ setWallet, inputNTD, setInputNTD }) {
  const changeNTD = (e) => {
    setInputNTD(e.target.value);
  };
  const changeWallet = () => {
    setWallet((prev) => {
      return prev - inputNTD;
    });
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
      </label>
    </>
  );
}

export default TransferMoney;
