import './App.css';
import { useState } from 'react';

/*
    리액트: 사용자 정의 태그를 만드는 기술
    - 사용자 정의 태그: component

    - 컴포넌트는 함수이다.
    - 함수의 리턴 값이 컴포넌트의 ui가 된다.
    - 컴포넌트의 이름은 반드시 대문자로 시작해야 한다(html의 코드와 native 코드를 분간하는 규칙).
    - return 값은 하나의 태그로 시작해야 한다(일반적으로 div로 감싼다).

    - react의 코드는 js가 아니라 jsx이다.
    - jsx는 js+태그를 쉽게 코드에 포함시킬 수 있도록 고안된 js 확장언어다.
    - onclick -> onClick
    - onchange -> onChange

    - 이벤트의 값은 함수다.
    - (중요) props, state가 바뀌면 컴포넌트가 다시 랜더링 된다(바뀌지 않으면 동작 x).
    - props의 값은 readonly
    - state의 값은 쓰기 가능
    - state는 배열이다.
    - 첫 번째 원소는 값이다. 읽을 때 쓴다. 수정하면 안된다.
    -두번째 원소는 함수다. 수정할 때 호출한다. 파라미터가 변경되었을 때만 컴포넌트가 다시 실행된다.
    - props, state가 바뀌면 컴포넌트가 다시 랜더링된다.
*/

/* 사용자 정의 태그 생성 */
/*function Counter(props) {*/
function Counter({ title, initValue }) {
    /*console.log(props);*/
    /*
        props: 외부에서 내부로 주입되는 상태
        state: 내부적으로 사용하는 상태
        -> props는 수정할 수 없음
    */
    /* 지역변수 (단, 적용 안됨 -> state로 승진시켜야 함) */
    /* let count = props.initValue; */
    /* import {useState} 하고 아래처럼 써줌 */
    /*let countState = useState(props.initValue);*/
    /*
        state는 배열
        - 첫번째 원소: 상태의 값 -> 읽을 때 씀
        - 두번째 원소: 상태의 값을 바꿀 때 호출하는 함수 -> 바꿀때 씀
    */
    /*console.log(countState);
    let count = countState[0];
    let setCount = countState[1];*/

    const [count, setCount] = useState(initValue);
    const [step, setStep] = useState(1);
    function up() {
        /* props.initValue = props.initValue + 1; */
        setCount(count + step);
        /* setCount(++count);로 해도 됨 */
    }
    return <div>
                <h1>{title}</h1>
                <button onClick={up}>+</button>
                <input type="number" value={step} onChange={(evt)=>{
                    //console.log('change', evt.target.value);
                    setStep(Number(evt.target.value));
                }} />
                {count}
            </div>
}

function App() {
    return (
        /*
            여러 줄에 걸쳐 생성된 기능을 하나의 태그로 생성할 수 있음
            -> 재사용, 가독성 높아짐 

            사용자 정의 태그 안의 설정들(title, initValue 등)은 props다.
            - props: 입력값
            - 데이터 타입
                -> 따옴표 안에 적으면 문자열로 취급
                -> 숫자로 다루고 싶다면 따옴표가 아니라 {} 사용 (문자를 {} 사이에 넣으면 오류남)
        */
        <div>
            {/* <Counter title="불면증 카운터" initValue="10"></Counter> */}
            <Counter title="불면증 카운터" initValue={10}></Counter>
            {/* <Counter title="손님 카운터" initValue={20}></Counter> */}
        </div>
    );
}

export default App;
