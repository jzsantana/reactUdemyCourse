import { useState } from 'react';
import './App.css';
import Barco from './assets/barco.jpg'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDEtails from './components/CarDEtails';
import ExecuteFunctions from './components/ExecuteFunctions';

function App() {

  //const name = "Joaquim"
  const [userName] = useState("Maria")

  const cars = [
    {id: 1, brand: "Ferrari", color: "Yellow", newCar: true, km: 0},
    {id: 2, brand: "Jeep", color: "Black", newCar: false, km: 15326},
    {id: 3, brand: "Chevrolet", color: "Silver", newCar: false, km: 25},
  ]

  function showMessage(){
    console.log("Olá eu sou")
  }

  return (
    <div className="App">
      <h1>
        Avançando em React
      </h1>

      {/* Imagem em public, quando a imagem estao em public podemos acessar diretamente 
      src
       */}
      <div>
        <img src="/estufa.jpg" alt="Foto de uma estufa de plantas"/>
      </div>

      <div>
        <img src={Barco} alt="Imagem de um barco na China"/>
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/* Props */}
      <ShowUserName name={userName}/>
      {/* destruction */}
      <CarDEtails brand="Audi" color="Red" km={1000} newCar={false} />
      <CarDEtails brand="Ford" color="Black" km={1500} newCar={false} />
      <CarDEtails brand="Volksvagen" color="Grey" km={0} newCar={true} />
      
      {cars.map((car) => (
        <CarDEtails 
            key={car.id}
            brand={car.brand} 
            color={car.color} 
            km={car.km} 
            newCar={car.newCar}/>
      ))}
      <ExecuteFunctions myFunction={showMessage} />

    </div>
  );
}

export default App;
