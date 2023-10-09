import MyComponent from "./MyComponent"


const FirstComponent = () =>{
    return(
        <div>
            <h1>Meu primeiro componente em React</h1>
            <p className="teste">Meu texto</p>
            <MyComponent/>
        </div>
    )
}

export default FirstComponent