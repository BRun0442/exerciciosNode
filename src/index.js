import {promises as fs} from 'fs';

async function getDataJson()
{
  try {
    const data = JSON.parse(await fs.readFile('./src/estados-cidades.json'));
    return data;
  } catch(error) {
    console.log('Arruma o erro aqui chefia: ', error);
  }
}

async function getAllStates()
{
  const cleanJson = await getDataJson();

  const dataFormat = cleanJson.map((estado) => {
    return {
      Estado: estado.nome
    }
  });
  
  return dataFormat;
}

async function statesFind(find){
  const cleanJson = await getDataJson();

  const findResult = cleanJson.forEach((estado) => {
    if(estado.nome.startsWith(find) == true)
    {
      console.log(estado);
    }  
  });
  
  return findResult;
}

// console.log(await getAllStates()); 
console.log(await statesFind("A"));
