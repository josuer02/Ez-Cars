import { Route, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MainHeader from "./components/MainHeader";
import Cotizar from "./pages/Cotizar/Cotizar";
import Citas from "./pages/Citas/Citas";
import Productos from "./pages/Productos/Productos";
import Vender from "./pages/Vender/Vender";
import Comprar from "./pages/Productos/Comprar";
import Gracias from "./pages/Gracias";
import Reserva from "./pages/Productos/Reserva";
import Reservas from "./pages/Productos/Reservas";
import Success from "./pages/Productos/Success";
import RevisarCitas from "./pages/Citas/RevisarCitas";
import Confirmar  from "./pages/Productos/Confirmar";
import RevisarTestDrives from "./pages/TestDrives/RevisarTestDrives";
import TestDrive from "./pages/TestDrives/TestDrive";
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/productos">
          <Productos />
        </Route>
        <Route path="/testdrive">
          <TestDrive />
        </Route>
        <Route path="/cotizar">
          <Cotizar />
        </Route>
        <Route path="/citas">
          <Citas />
        </Route>
        <Route path="/vender">
          <Vender />
        </Route>
        <Route path="/compras">
          <Comprar />
        </Route>
        <Route path="/gracias">
          <Gracias />
        </Route>
        <Route path="/reserva">
          <Reserva />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/reservas">
          <Reservas />
        </Route>
        <Route path="/revisarcitas">
          <RevisarCitas />
        </Route>
        <Route path="/confirmar">
          <Confirmar />
        </Route>
        <Route path="/revisartestdrives">
          <RevisarTestDrives />
        </Route>
      </main>
    </div>
  );
}
export default App;