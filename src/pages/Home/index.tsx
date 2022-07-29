import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Card } from "../../components/Card";
import { Details } from "../../components/Details";
import api from "../../services/api";
import "./styles.css";

function Home() {
  const [developers, setDevelopers] = useState<any>([]);

  useEffect(() => {
    api
      .get("/developers/")
      .then((response) => setDevelopers(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="screen">
      <h1> Becoming Dev </h1>
      <h2> Developers </h2>

      <Routes>
        <Route path="/" element={
          developers.map((dev: any) => (
            <Card key={dev.id} obj={dev} />
          ))
        } />

        <Route path="/:id" element={<Details />} />
      </Routes>


    </div>
  )
}

export default Home
