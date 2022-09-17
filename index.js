import {promises as fs} from 'fs';

async function getDataJson()
{
  try {
    const data = JSON.parse(await fs.readFile('./estados-cidades.json'));
    return data;
  } catch(error) {
    console.log('Arruma o erro aqui chefia: ', error);
  }
}

async function getAllStates()
{
  const cleanJson = await getDataJson();

  const newData = cleanJson.map((estado) => {
    return {
      siglaEstado: estado.sigla,
      nomeEstado: estado.nome
    }
  });

  console.log(newData());
}

getAllStates();