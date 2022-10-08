  
    let ingresoCliente = prompt('ingrese el modelo deseado')

    let cliente =ingresoCliente.toLowerCase()

    let audi= {
      puertas: 3,
      motor: 'v8',
    }
    
    let ford={
      puertas:4,
      motor: 1.4,
    }
    let autos=[]
    autos.push(audi)
    autos.push(ford)
    
    
    switch (cliente) {
      case 'ford':
       console.log(ford);
        break;
      case 'audi':
        console.log(audi);
        break;
        }



