// const numeroRandom = Math.round(Math.random() * 50);
//     console.log(`NUMERO: ${numeroRandom}`);

//     setTimeout(() => {
//       if (numeroRandom % 2 !== 0) {
//         console.log(`Operación rechazada paso 2: ${mensaje}`);
//         reject(`Numero impar: ${numeroRandom}`);
//       } else {
//         console.log(`Operación completada paso 2: ${mensaje}`);
//         resolve(numeroRandom);
//       }
//     }, tiempo);

function promesa (mensaje, tiempo) {
    return new Promise((resolve, reject)=>{
        const numeroRandom = Math.round(Math.random() * 50);
    console.log(`NUMERO: ${numeroRandom}`);

    setTimeout(() => {
      if (numeroRandom % 2 !== 0) {
        console.log(`Operación rechazada paso 2: ${mensaje}`);
        reject(`Numero impar: ${numeroRandom}`);
      } else {
        console.log(`Operación completada paso 2: ${mensaje}`);
        resolve(numeroRandom);
      }
    }, tiempo);
    })
}

async function llamada (){
    console.log("Antes de promesa")
    await promesa("bootcamp", 2000).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
    console.log("despues de promesa")
}
llamada()