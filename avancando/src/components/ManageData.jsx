import { useState } from "react"

const ManageData = () => {
  
    let someData = 10
    const [anotherNumber, setAnotherNumber] = useState(15);

    return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={()=>(someData = 15)}>Mudar a Variável</button>
        </div>

        <div>
            <p>Valor: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(25)}>Mudar o state</button>
        </div>
    </div>
  )
}

export default ManageData