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
