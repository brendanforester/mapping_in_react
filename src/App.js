
import './style.css';
import Character from "./components/character";

function App() {

const list = [
    {
      name: "Cinder",
      power: "fire",
      color: "orange",
      age: 28,
      moves:["Trailblazer", "Inferno", "Fire Flash"]
    },
    {
      name: "Aganos",
      power: "rock",
      color: "#009999",
      age: 900000,
      moves:["Payload Assault", "Pulverize", "Ruin"]
    },
    {
    name: "Jago",
        power: "Tiger Spirit",
        color: "#336699",
        age: 25,
        moves:["Edokuken", "Tiger Fury", "Wind Kick"]
    }
  ];

    let characterEles = list.map((obj, idx)=>
        <Character key={idx} name={obj.name} power={obj.power} color={obj.color} age={obj.age} moves={obj.moves}/>
    )

const listTwo = [
        {
            nameTwo: "Apple",
            price: "$0.99",
            colorTwo: "green",
            weight: "1lb",
            tags:["Fruit", "Red", "Round"]
        },
        {
            nameTwo: "Kiwi",
            price: "$1.49",
            colorTwo: "saddlebrown",
            weight: "1lb",
            tags:["Fruit", "Brown", "Round"]
        },
        {
            nameTwo: "Banana",
            price: "$0.49",
            colorTwo: "yellow",
            weight: "1lb",
            tags:["Fruit", "Yellow", "Long"]
        }
    ];

    let productsEles = listTwo.map((obje, indx)=>
        <Character key={indx} nameTwo={obje.nameTwo} price={obje.price} colorTwo={obje.colorTwo} weight={obje.weight} tags={obje.tags}/>
    )



  return (
      <header className="App-header">
        <div className="boxes">
            {characterEles}
            {productsEles}
        </div>

      </header>
  );
}

export default App;
