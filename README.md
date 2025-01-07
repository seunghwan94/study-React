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
  - State = JavaScript Object
  - Life Cycle method
    - componentDidMount
    - componentDidUpdate
      - New props
      - setState()
      - forceUpdate()
    - componentWillUnmount
## Hook

  ※ Promise, Async/Await, CORS 공부하고 진행할 것

### useState : reRendering
  ex_)const [변수명, set함수명] = useState(초깃값);
  - useEffect : 서버에서 값 받아올때 많이 사용
    
    ex_) useEffect(Effect function, Array of Dependencies);
  - useMemo
  - useCallback
  - useRef

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
