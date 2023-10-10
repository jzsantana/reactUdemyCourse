import { useState } from "react"

const ListRender = () => {

    const [list] = useState(["Júlia", "Lara", "Karina"])
    const [users, setUsers] = useState([
        {id: 1, name: "Júlia", age: 19},
        {id: 2, name: "João", age: 24},
        {id: 3, name: "Pedro", age: 35},
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);
        console.log(randomNumber)
    
        setUsers((prevUsers) => {
          return prevUsers.filter((user) => randomNumber !== user.id);
        });
      };
    

    return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>

        <ul>
            {users.map((user)=>(
                <li key={user.id}> {user.name} - {user.age} anos</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender