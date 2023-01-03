function AddRate({ rate, setRate }) {
  const changeRate = (e) => {
    setRate(e.target.value);
  };
  return (
    <label htmlFor="currencyInput" className="flex items-center">
      <input
        id="currencyInput"
        type="text"
        placeholder="幣值匯率"
        value={rate}
        onChange={changeRate}
      />
    </label>
  );
}

export default AddRate;
