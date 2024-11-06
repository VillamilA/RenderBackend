import express from "express"

const app = express();
const port = 3000;

//Datos del grupo 
const grupo = {
    nombre :"Equipo Dinamita",
    integrantes :[
        {id:1, nombre: "Angel Villamil" },
        {id:2, nombre: "Richard Robalino"},
        {id:3, nombre: "Christian Marquez"},
        {id:4, nombre: "Angelo Loor"}
    ]
}

const productos = [
    { id: 1, nombre: 'Laptop', precio: 10 },
    { id: 2, nombre: 'Mouse Gamer Logitech', precio: 15 },
    { id: 3, nombre: 'Minecraft', precio: 20 }
  ];

// creacion de las rutas
app.get("/",(req,res) => {
    res.json({mensaje: "Bienvenidos al equipo de trabajo: " + grupo.nombre});
})

app.get("/integrantes",(req,res) => {
    res.json(grupo.integrantes);
})

// Ruta "/integrantes/:id" para información de un integrante específico
app.get('/integrantes/:id', (req, res) => {
    const integranteId = parseInt(req.params.id);
    const integrante = grupo.integrantes.find(i => i.id === integranteId);
  
    if (integrante) {
      res.json(integrante);
    } else {
      res.json({ error: 'Integrante no encontrado' });
    }
  });


// Ruta "/productos" para presentar productos en HTML
app.get('/products', (req, res) => {
    let productosHtml = '<h1>Lista de Productos</h1><ul>';
    productos.forEach(prod => {
      productosHtml += `<li>${prod.nombre} - $${prod.precio}</li>`;
    });
    productosHtml += '</ul>';
    res.send(productosHtml);
  });


app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})
