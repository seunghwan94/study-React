## React study

- ### JXS
  - ReactDOM = React.createElement()
  - { }
- ### Element
  - Document Object Model (DOM)
  - immutable
  - root DOM node
- ### Props (like function parameter)
  - props in JavaScript Object
  - All React components must act like pure functions with respect to their props
- ### Components (Element aggregate)
  - function component VS Class component
  - Rendering
  - Composing components
  - Extracting components
- ### State
  - State = JavaScript Object
  - Life Cycle method
    - componentDidMount
    - componentDidUpdate
      - New props
      - setState()
      - forceUpdate()
    - componentWillUnmount
- ### Hook

  ※ Promise, Async/Await, CORS 공부하고 진행할 것

  - ### useState : reRendering
    ex_)const [변수명, set함수명] = useState(초깃값);
  - useEffect : 서버에서 값 받아올때 많이 사용
    
    ex_) useEffect(Effect function, Array of Dependencies);
  - useMemo
  - useCallback
  - useRef

##### React 비동기 KeyWord
```
CORS 처리 (Origin issue) / security
Re render 조건 : state, props 변화 감지
useEffect (componentWillUnmount 실행하기 위해 사용)
js / promise, async await (비동기를 동기처리하기 위해)
fetch, axios
```

- ### Event
  - onClick={(e) => console.log(e)}
  - e.target
  - e.currentTarget
- ### Conditional Rendering
  - Element Variables
  - Inline Conditions
  - Component Rendering Null
- ### List / Key
  - map()
  - key : reRendering 하기 위해 사용

## Library
- axios
  ```
  yarn add axios
  ```
- react router dom
  ```
  yarn add react-router-dom
  ```
- bootstrap
  ```
  yarn add bootstrap react-bootstrap bootstrap-icons
  ```
