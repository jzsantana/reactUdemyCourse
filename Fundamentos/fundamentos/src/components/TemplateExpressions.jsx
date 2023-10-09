const TemplateExpressions = () => {
    const name = "Júlia"
    const data = {
        age: 31,
        jog: "Programmer",
    }

  return (
    <div>
        <h1>Olá {name}, tudo bem?</h1>
        <p>Você atua como: {data.jog}</p>
        <p>{ 20 + 25}</p>
    </div>
  )
}

export default TemplateExpressions