import './App.css';
import { useEffect, useState } from 'react';

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
// function Counter(props) {
function Counter({ title, initValue }) {
    // console.log(props);
    /*
        props: 외부에서 내부로 주입되는 상태
        state: 내부적으로 사용하는 상태
        -> props는 수정할 수 없음
    */
    // 지역변수 (단, 적용 안됨 -> state로 승진시켜야 함)
    // let count = props.initValue;
    // import {useState} 하고 아래처럼 써줌
    // let countState = useState(props.initValue);
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
    // 자료형으로 배열 선언
    const [history, setHistory] = useState([5, 5]);

    function up() {
        // props.initValue = props.initValue + 1;
        // setCount(++count);로 해도 됨
        // setCount(count + step);
        // 상태의 값이 배열, 객체와 같은 값의 컨테이너인 경우 상태를 복제한 후에 데이터를 추가, 수정, 삭제해야 한다.
        // 그래야 리액트는 이전의 상태와 이후의 상태가 변경되었다는 것을 알 수 있다.
        //      -> immutability
        const newCount = count + step;
        setCount(newCount);
        const newHistory = [...history];
        // debugger;
        newHistory.push(newCount);
        setHistory(newHistory);
    }
    const stepHandler = (evt) => {
        setStep(Number(evt.target.value));
    };
    // css주기
    const style = { border: '5px solid black', padding: 10, backgroundColor: 'tomato' };
    // 배열을 태그로 만들 때는 map 함수를 사용한다.
    // 콜백함수는 2개의 파라미터를 갖는다.
    // 1. 순번에 해당하는 원소
    // 2. 해당 순번의 인덱스 (key)
    return <div style={style}>
                <h1>{title}</h1>
                <button onClick={up}>+</button>
                <input type="number" value={step} onChange={stepHandler} />
                {count}
                <ol>
                    {/* {[<li>5</li>, <li>5</li>]} */}
                    {/*
                        배열을 태그로 만들 때는 map 함수를 사용한다.
                        콜백함수는 2개의 파라미터를 갖는다.
                        1. 순번에 해당하는 원소
                        2. 해당 순번의 인덱스 (key)
                    */}
                    {history.map((e, idx) => <li key={idx}>{e}</li>)}
                </ol>
            </div>
}

function CounterUseEffect() {
    const [count, setCount] = useState(0);
    // sideEffect는 useEffect에 격리
    // -> 예측 가능성이 떨어지기 때문에 별도로 격리해서 관리
    // - 부작용을 쉽게 파악할 수 있음
    // - 테스팅할 때 유용 (부작용만 따로 테스트)
    // - 부작용의 실행 타이밍을 제어할 수 있다. 
    // -> 두 번째 파라미터가 없으면 컴포넌트와 함께 실행된다. 
    //    빈 배열이면 딱 한번 실행된다.
    //    값이 있으면 그 값이 변경되었을 때 실행된다.
    // - 함수가 정의될 때 함수 내에서 사용되는 변수는 함수 안에 봉인된다. -> 클로저
    // - set 함수의 입력값은 값이거나 함수이다.
    //   함수의 파라미터는 신선한 상태의 값이다.
    //   -> return값이 새로운 상태가 된다.
    // - useEffect의 리턴값은 정리할 때 사용한다.
    //   -> unmount, 재실행 시 자동으로 호출된다.
    useEffect(() => {
        const id = setInterval(() => {
            setCount(oldCount => oldCount+1);
        }, 1000)
        return () => {
           //console.log('clean');
            clearInterval(id);
        }
    }, []);
    // css주기
    const style = { border: '5px solid black', padding: 10 };
    return (
        <div style={style}>
            <h1>useEffect Counter</h1> {count}
        </div>
    );
}

function App() {
    return (
        /*
            여러 줄에 걸쳐 생성된 기능을 하나의 태그로 생성할 수 있음
            -> 재사용, 가독성 높아짐 

            사용자 정의 태그 안의 설정들(title, initValue 등)은 props다.
            - props: 입력값
            - 데이터 타입
                -> 따옴표 안에 적으2면 문자열로 취급
                -> 숫자로 다루고 싶다면 따옴표가 아니라 {} 사용 (문자를 {} 사이에 넣으면 오류남)
        */
        <div>
            {/* <Counter title="불면증 카운터" initValue="10"></Counter> */}
            <Counter title="불면증 카운터" initValue={10}></Counter>
            {/* <Counter title="손님 카운터" initValue={20}></Counter> */}
            <CounterUseEffect></CounterUseEffect>
        </div>
    );
}

export default App;
