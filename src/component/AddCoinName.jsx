function AddCoinName({ coinName,setCoinName }) {

  const changeCoin = (e)=>{
    setCoinName(e.target.value)
  }
  return (
    <label htmlFor="currencyInput" className="flex items-center mr-3">
      <p>新增幣種</p>
      <input
        id="currencyInput"
        type="text"
        className="ml-2"
        placeholder="幣種名稱"
        value={coinName}
        onChange={changeCoin}
      />
    </label>
  );
}

export default AddCoinName;
