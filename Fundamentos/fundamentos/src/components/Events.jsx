const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e)
        console.log("Ativou o evento!")
    }

    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>
        }else{
            return <h1>Também posso renderizar isso!</h1>
        }
    }

  return (
    <div>
        <div>
            <button onClick={handleMyEvent}>Clique aqui</button>
        </div>

        <div>
            <button onClick={() => console.log("Clicou!")}>clique aqui também</button>
            {/* Não é uma boa pratica fazer funções em bloco desse jeito,
            nesse caso é recomendado criar uma função fora do return */}
            <button onClick={() => {
                if (true){
                    console.log("Isso não deveria existir")
                }
            }}>clica aqui também!</button>
        </div>
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Events