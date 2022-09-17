import {promises as fs} from 'fs';

function print(variable){
  console.log(variable);
}

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
      Sigla: estado.sigla,
      Estado: estado.nome
    }
  });
  
  return dataFormat;
}

console.log(await getAllStates());