import './App.css';

/*
    리액트: 사용자 정의 태그를 만드는 기술
    - 사용자 정의 태그: component

    - 컴포넌트는 함수이다.
    - 함수의 리턴 값이 컴포넌트의 ui가 된다.
    - 컴포넌트의 이름은 반드시 대문자로 시작해야 한다(html의 코드와 native 코드를 분간하는 규칙).
    - return 값은 하나의 태그로 시작해야 한다(일반적으로 div로 감싼다).
*/

/* 사용자 정의 태그 생성 */
function Counter(props) {
    console.log(props);
    return <div>
                <h1>{props.title}</h1>
                <button>+</button> {props.initValue}
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
            <Counter title="불면증 카운터" initValue="10"></Counter>
            <Counter title="손님 카운터" initValue={20}></Counter>
        </div>
    );
}

export default App;
