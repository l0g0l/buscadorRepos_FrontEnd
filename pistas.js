'use strict';

//importo los datos del archivo JSON
const fs = require('fs');
const { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } = require('node:constants');
let data = fs.readFileSync('MOCK_DATA.json');
let datacomplete = JSON.parse(data);


// *PrimerItem*: Número de veces que aparece el nombre Nuwe como last_name

const dataNuwe = datacomplete.filter(item => item.last_name === "Nuwe")
console.log("Las veces que se repite Nuwe son: " + dataNuwe.length);


// *SecondItem*: Coger el primer id con Nuwe, eliminar todas las mayúsculas y las minúsculas
console.log(dataNuwe[0].id.replace(/[a-z,A-Z]/g, ""))


// *ThirdItem*: De elementos que no tiene el atributo **[pet]** coger el màximo del primer elemento del parámetro ip
const noPet = datacomplete.filter(item => !(item.pet))
console.log(noPet);

let a =[]
noPet.forEach(element => {
    a.push(parseInt(element.ip.split(".",1)[0]))
});
console.log(a.sort((a,b)=> b-a));

 // Contraseña 9-129873-248





