function HasMoney({ wallet, setWallet }) {
  return (
    <div>
      <p>{`你的錢包還有${wallet}元`}</p>
    </div>
  );
}

export default HasMoney;
