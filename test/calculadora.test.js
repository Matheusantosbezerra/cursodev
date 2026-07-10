const calculadora = require("../models/calculadora.js")


test("somar 2 + 2", () => {
    const resultado = calculadora.somar(3,2);
    console.log(resultado)
});