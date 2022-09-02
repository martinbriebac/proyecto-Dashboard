let dataState = [], dataPositive = [], dataHospitalized = [], dataDeath = []

async function dummyChart() {
  await getDummyData() // llamamos al fetch al comienzo para que se llenen los array vacios de la variable

  const ctx = document.getElementById('myChart').getContext('2d');

  const chart = new Chart(ctx, {
    // tipo de grafico que deseamos crear
    type: 'bar',

    // data de nuestro datasets
    data: {
      labels: dataState,
      datasets: [{
        label: 'Test positive',
        backgroundColor: 'blue',
        borderColor: 'rgb(255, 99, 132)',
        data: dataPositive // ojo tomamos la data de los array vacios ya que se llenan gracias al fecth y el map que hacemos
      },
      {
        label: 'Hospitalized',
        backgroundColor: 'green',
        borderColor: 'rgb(255, 99, 132)',
        data: dataHospitalized // ojo tomamos la data de los array vacios ya que se llenan gracias al fecth y el map que hacemos
      }, {
        label: 'Death',
        backgroundColor: 'black',
        borderColor: 'rgb(255, 99, 132)',
        data: dataDeath // ojo tomamos la data de los array vacios ya que se llenan gracias al fecth y el map que hacemos
      },
      ]
    },

    // Configuracion de opciones
    options: {
      tooltips: {
        mode: 'index'
      }
    }
  })
}

dummyChart() // se llama a la funcion


//Fetch ddesde la api

async function getDummyData() {
  const apiUrl = "https://api.covidtracking.com/v1/states/daily.json" // tomamos la url de la api
  const response = await fetch(apiUrl) // fetch
  const barChatData = await response.json() // Tomamos toda data para el grafico
  console.log(barChatData)

  for (let i = 0; i < barChatData.length; i++) {
    if (barChatData.length = 10) {
      console.log(i)
      break
    }
      
    }

  const state = barChatData.map((x) => x.state)
  const positive = barChatData.map((y) => y.positive)
  const hospitalized = barChatData.map((z) => z.hospitalized)
  const death = barChatData.map((w) => w.death)


  // igualamos los arrays vacios con los maps
  dataState = state;
  dataPositive = positive;
  dataHospitalized = hospitalized;
  dataDeath = death;

  
}
getDummyData()






// // 0 Arreglo con los ids de los responsables de cada cuartel
// function listPaddockManagerIds() {
//   return paddockManagers.map((paddockManager) => paddockManager.id);
// };

// // 1 Arreglo con los ruts de los responsables de los cuarteles, ordenados por nombre
// function listPaddockManagersByName() {
//   // CODE HERE
//   paddockManagers.sort((a,b) => (a.name > b.name) ? 1 : -1 );

//   return paddockManagers.map((paddockManager) => paddockManager.taxNumber);
// };


// // 2 Arreglo con los nombres de cada tipo de cultivo, ordenados decrecientemente por la suma TOTAL de la cantidad de hectáreas plantadas de cada uno de ellos.
// function sortPaddockTypeByTotalArea() {
//   // CODE HERE

//   let paddocksByType = []; // lista para guardar resultados

//     //extraer hectareas por tipo de cultivo
//     paddockType.forEach(type =>
//       paddocksByType.push([type.id ,((paddocks.filter(paddock => paddock.paddockTypeId === type.id))
//         .reduce((sum, thisPaddock) => sum + thisPaddock.area/10000, 0))]));

//     // ordenar por hectareas decreciente
//     paddocksByType.sort((a,b) => (a[1] < b[1]) ? 1 : -1 );

//     let typeByHectarea = [];

//     function getTypeName(type, paddock){
//       if(type.id === paddock[0]){
//         typeByHectarea.push(type.name)
//       }
//     };

//     // mapear con el nombre del cultivo
//     paddocksByType.forEach(paddock =>
//       paddockType.forEach(type => getTypeName(type, paddock)));

//     return typeByHectarea;
  
// };

// // 3 Arreglo con los nombres de los administradores, ordenados decrecientemente por la suma TOTAL de hectáreas que administran.
// function sortFarmManagerByAdminArea() {
//   // CODE HERE
//   let paddocksByManager = []; // lista para guardar resultados

//     //extraer hectareas por manager
//     paddockManagers.forEach(manager =>
//       paddocksByManager.push([manager.id ,((paddocks.filter(paddock => paddock.paddockManagerId === manager.id))
//         .reduce((sum, thisPaddock) => sum + thisPaddock.area / 10000, 0))]));

//     // ordenar por hectareas decreciente
//     paddocksByManager.sort((a,b) => (a[1] < b[1]) ? 1 : -1 );

//     let managerByHectarea = [];

//     function getManagerName(manager, paddock){
//       if(manager.id === paddock[0]){
//         managerByHectarea.push(manager.name)
//       }
//     };

//     // mapear con el nombre del cultivo
//     paddocksByManager.forEach(paddock =>
//         paddockManagers.forEach(manager => getManagerName(manager, paddock)));

//     return managerByHectarea;
// };