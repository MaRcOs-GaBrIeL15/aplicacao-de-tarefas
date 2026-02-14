  import { BrowserRouter, Routes, Route} from 'react-router-dom'; 
  import Home from "./pages/Home/Home";
  import FormTodo from './pages/FormTodo/FormTodo';
  import { ListProvider } from './components/ListContext';    
  import "./style.css";
import Cabecalho from './components/Cabecalho/Cabecalho';
  function App() {
    return (
      <ListProvider>
      <BrowserRouter>
       <Cabecalho />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/form" element={<FormTodo />}></Route>
      </Routes>
      </BrowserRouter>
      </ListProvider>
    );
  }

  export default App;
