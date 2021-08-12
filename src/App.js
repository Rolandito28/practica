import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import Principal from "./paginas/Principal"
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <div>
        <ul>
          {rutas.map(ruta => <Enlace href={ruta.ruta} label={ruta.label} />)}
        </ul>
      </div>
      <Switch>
        <Route exact path="/">
        <Principal />
        </Route>
        <Route path="/section" >
        <h1>hola desde section</h1>
        </Route>
        <Route path="/about">pagina de about</Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

const rutas = [ {ruta: "/", label: "Home page"}, {ruta: "/section", label: "section page"}, {ruta: "/about", label: "about page"}, {ruta: "/about2", label: "about page2"}]


function Enlace({href, label}){
  return <li><Link to={href}>{label}</Link></li>
}


export default App;
