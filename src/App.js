import { Route, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MainHeader from "./components/MainHeader";
import Cotizar from "./pages/Cotizar/Cotizar";
import Citas from "./pages/Citas/Citas";
import Productos from "./pages/Productos/Productos";
import AddCarro from "./pages/Productos/AddCarro";
import Contactenos from "./pages/Contactenos/Contactenos";
import ProductosList from "./pages/Productos/ProductosList";
import { useCallback, useEffect, useState } from "react";
function App() {
  const [carros, setCarros] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCarrosHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://carcodb-default-rtdb.firebaseio.com/carros.json"
      );
      if (!response.ok) {
        throw new Error("Algo anda mal...");
      }
      const data = await response.json();

      const loadedCarros = [];

      for (const key in data) {
        loadedCarros.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setCarros(loadedCarros);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);
  useEffect(() => {
    fetchCarrosHandler();
  }, [fetchCarrosHandler]);

  async function addCarroHandler(carro) {
    const response = await fetch(
      "https://carcodb-default-rtdb.firebaseio.com/carros.json",
      {
        method: "POST",
        body: JSON.stringify(carro),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  let content = <p>Found no movies</p>;
  if (carros.length > 0) {
    content = <ProductosList carros={carros} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }
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
          <section>
            <AddCarro onAddCarro={addCarroHandler} />
          </section>
          <section>
            <button onClick={fetchCarrosHandler}>Fetch Carros</button>
          </section>
          <section>{content}</section>
        </Route>
        <Route path="/contactenos">
          <Contactenos />
        </Route>
        <Route path="/cotizar">
          <Cotizar />
        </Route>
        <Route path="/citas">
          <Citas />
        </Route>
      </main>
    </div>
  );
}
export default App;
