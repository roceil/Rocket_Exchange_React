import ExchangeItems from "../component/ExchangeItems"
const test2=[1,2,3]
function ExchangeList() {

  return (
<ul className="flex  flex-col items-center space-y-3">
  {test2.map((item,index) =>{
    return <ExchangeItems key={index}/>
  })}
</ul>
  )
}

export default ExchangeList
