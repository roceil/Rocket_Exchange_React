

function ExchangeItems({ coinName, rate, NTD }) {

  return (
<li className="">
  <p>{`您用${NTD}元台幣，兌換了${rate*NTD}元${coinName}`}</p>
</li>
  )
}

export default ExchangeItems
