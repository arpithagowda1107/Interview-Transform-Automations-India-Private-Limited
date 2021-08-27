import { BrowserRouter, Route} from 'react-router-dom';
import Resource from "./components/Resource";
import Home from './components/Home';
import ResourceDetail from './components/ResourceDetailPage';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/resources" exact component={Resource} />
        <Route path="/resources/:id" component={ResourceDetail} />
      </BrowserRouter>
    </div>
  );
}

export default App;