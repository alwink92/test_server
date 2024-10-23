const express = require('express')
const app =express()

//configurar express
app.use(express.json())
const PORT = process.env.PORT || 3000

//configuracion de rutas

//PETICION ALL O METODO DE ACCESO ALL = CUALQUIER METODO CON ESA RUTA ME VA A DEVOLVER ALGO 
app.all('/',(req, res)=>{
    //el codigo para esa peticion "codigo": Unknow now.
    res.send('Hola esta es la respuesta de mi peticion raiz')
})

app.get('/getProducts', (req, res)=>{
    console.log("PETICION/GETPRODUCTS REALIZADA")

    const read_products = [
        {"id": "1A", "nombre": "Cocacola", "precio": "4200", "cantidad":3},  
        {"id": "28", "nombre": "Doritos", "precio": "3500", "cantidad":10},
        {"id": "30", "nombre": "Gomitas", "precio": "2750", "cantidad":7},      
    ]
    res.status(200).json({satus: "ok", products: read_products})
})

app.get('/searchProduc', (req, res)=>{
    console.log("PETICION/SEARCHPRODUCTS REALIZADA")
    if (Object.keys(req.query).length === 0)  {
        res.status(400).json({error: "se requiere ID o nombre del producto"})
    }
    let product ={}
    if (req.query.hasOwnProperty("ID")) {
        if (req.query.ID === "1A"){
            product = {"id": "1A", "nombre": "Cocacola", "precio": "4200", "cantidad":3}  
        }else if (req.query.ID === "2B"){
            product = {"id": "28", "nombre": "Doritos", "precio": "3500", "cantidad":10}
        }else if (req.query.ID === "3C"){
            product = {"id": "30", "nombre": "Gomitas", "precio": "2750", "cantidad":7}
        } else {
            res.status(404).json({error: "Producto No Encontrado"})
        }
    }else if (req.query.hasOwnProperty("name")) {
        if (req.query.name === "Cocacola"){
            product = {"id": "1A", "nombre": "Cocacola", "precio": "4200", "cantidad":3}  
        }else if (req.query.name === "Doritos"){
            product = {"id": "28", "nombre": "Doritos", "precio": "3500", "cantidad":10}
        }else if (req.query.name === "Gomitas"){
            product = {"id": "30", "nombre": "Gomitas", "precio": "2750", "cantidad":7}
        } else {
            res.status(404).json({error: "Producto No Encontrado"})
        }
    } else {
        res.status(400).json({error: "El parametro enviado no coincide con los requeridos"}) 
    }
    res.status(200).json({satus: "ok", products: product})
})


app.post('/createUser', (req, res) => {
    console.log("PETICION /CREATEUSER REALIZADA")
    console.log(req.body)
    if (!req.body.hasOwnProperty('nombre') || !req.body.hasOwnProperty('email') || !req.body.hasOwnProperty('password')) {
    res.status(400).json({error: "Para crear un usuario se requiere contraseña, nombre y correo electronico"})
    }
    res.status(201).json({status: "OK", msj: "usuario creado con éxito"})
})

//Iniciar escucha del puerto
app.listen(PORT, ()=>{
    console.log(`servidor escuchando en el puerto ${PORT}`)
})
