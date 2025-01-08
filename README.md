# React study

## JXS
- ReactDOM = React.createElement()
- { }
  
## Element
- Document Object Model (DOM)
- immutable
- root DOM node
  
## Props (like function parameter)
- props in JavaScript Object
- All React components must act like pure functions with respect to their props
  
## Components (Element aggregate)
- function component VS Class component
- Rendering
- Composing components
- Extracting components


  
## State
State = JavaScript Object
### Life Cycle method
| Class Component Method   | Functional Component (Hooks)                                | 설명                                    |
|---------------------------|------------------------------------------------------------|-----------------------------------------|
| `componentDidMount`      | `useEffect(() => { ... }, [])`                              | 컴포넌트가 처음 마운트될 때 실행       |
| `componentDidUpdate`     | `useEffect(() => { ... }, [dependencies])`                 | 특정 `dependencies`가 변경될 때 실행   |
| - New props              | -                                                          | 새로운 `props`가 전달될 때             |
| - setState()             | -                                                          | `state` 업데이트로 인해 렌더링될 때    |
| - forceUpdate()          | -                                                          | 강제로 업데이트가 호출될 때            |
| `componentWillUnmount`   | `useEffect(() => { return () => { ... }; }, [])`           | 컴포넌트가 언마운트되기 직전에 실행    |



## State Shared
### Props Drilling 막는 방법
- useState
- Context API
- Redux, Recoil, Mobx
- React Query
### 상태 관리 유형 예시
- Global State : 사용자 인증 정보
- Cross Component State : Theme 설정
- Local State : Modal 열림/닫힘
   
## Hook
####  Proxy Patterns 개념 활용한 Observer Patterns (State Patterns)
```
Hook Rule
1. Top Level 에서 호출
2. for, if 등 안에서 호출 X
3. rendering 될 때마다 같은 순서로 호출 되어야 한다.
```
※ Promise, Async/Await, CORS 공부하고 진행할 것

### useState : reRendering
```
  const [변수명, set함수명] = useState(초깃값);
```
### useEffect : 서버에서 값 받아올때 많이 사용 
```
  useEffect(Effect function, Array of Dependencies);
```
### Memoization
- useMemo VS useCallback (성능향상을 위해 사용 - 최적화 (Memoized Value에 따라 사용))
  - useMemo
    - return value;
```
  useMemo(() => computeExpensiveValue(a, b));
```
  - useCallback
    - return function;
```
  useCallback(() => {doSometing(a, b)}, [a, b]);
```
### useRef
  - focus()
  - re render X
  - .current
```
  const input = useRef(초깃값);
  const click = () => input.current.focus();
  return (
    <>
      <input ref={input} type="text" />
      <button onClick={click}>Click</button>
    </>
  )
```
### Custom Hook
공용 코드 만들기
```
## Role
1. use로 시작해야 된다.
2. 공용 공간에서 사용하면 편하다.


import React, { useEffect, useState } from 'react';

const MAX_CNT= 10;

// 원래는 따로 페이지 빼야됨 custom hook
const useCnt = (val) => {
  const [cnt, setCnt] = useState(val);
  const inc = () => setCnt(cnt => cnt + 1);
  const dec = () => setCnt(cnt => Math.max(cnt - 1, 0));

  return [cnt, inc, dec];
}

const CustomHook = () => {
  const [is, setIs] = useState(false);
  const [cnt, inc, dec] = useCnt(0);

  useEffect(() => {
    setIs(cnt >= MAX_CNT);
  },[cnt]);

  return (
    <div style={{padding: 16}}>
      <p>{`총 ${cnt}명 수용했습니다.`}</p>
      <button onClick={inc} disabled={is}>입장</button>
      <button onClick={dec}>퇴장</button>
      {is && <p style={{color: "red"}}>정원이 가득 찼습니다.</p>}
    </div>
  )
}

export default CustomHook;

```
### UseContext
### UseReducer

### React 비동기 KeyWord
```
CORS 처리 (Origin issue) / security
Re render 조건 : state, props 변화 감지
useEffect (componentWillUnmount 실행하기 위해 사용)
js / promise, async await (비동기를 동기처리하기 위해)
fetch, axios
```

## Event
- onClick={(e) => console.log(e)}
- e.target
- e.currentTarget
## Conditional Rendering
- Element Variables
- Inline Conditions
- Component Rendering Null
## List / Key
- map()
- key : reRendering 하기 위해 사용
## Form
- event.preventDefault()
- onSubmit, onClick, onChange, onFocus, onBlur
- Controlled Components
- UnControlled Component
## Composition
조합기법
- Containment
  - props.children
- Specialization



## Library
- bootstrap
  ```
  yarn add bootstrap react-bootstrap bootstrap-icons

  import 'bootstrap/dist/css/bootstrap.min.css';
  ```
- react router dom
  ```
  yarn add react-router-dom

  // 사용법
  function App() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/posts" element={<Posts/>}/>
          <Route path="/posts/:id" element={<PostDetail/>}/>
        </Routes>
      </BrowserRouter >
    );
  }
  ```
- axios
  ```
  yarn add axios

  // 사용 방법 
  const [post, setPost] = useState(); // 데이터
  const [loading, setLoading] = useState(true); // 로딩
  const [error, setError] = useState(null); // 에러
  
  useEffect(()=>{
    const get = async () =>{
      try{
        const resp = await axios.get("URL");
        setPost(resp.data)
      }catch(err){
        setError(err);
      }finally{
        setLoading(false);
      }
    }
    get();
  },[])
  
  // 로딩
  if(loading) return <>Loading...</>;
  
  // 에러
  if (error) return return <>{error}</>;

  // 데이터 처리
  return <>post</>
  ```
