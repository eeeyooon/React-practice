import React from "react";

function Counter(props) {
  //함수 안에 지역 변수 선언
  //let count = 1;

  //React Hook
  //상태 관리 React.useState()
  const [count, setCount] = React.useState(props.count); 

  //함수 안에 이벤트 청취 함수를 작성한다.
  const handleIncrement = () => { 
    console.log('카운트 값 증가');
    count++; //수정(mutation)
   }
  const handleDecrement = () => {
    console.log('카운트 값 감소');
    count--;
   }

  return (
    <div className="Counter">
      <button type="button">+</button>
      <output>1</output>
      <button type="button">-</button>
    </div>
  )
}

Counter.defaultProps = {
  
}

export default Counter;