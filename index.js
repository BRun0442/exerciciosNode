import {promise as fs} from 'fs';

async function getDataJson()
{
  try
  {
    const json = JSON.parse(await fs.readFile('./src/estados-cidades-atividade.json'));
    return json;
  }catch (error)
  {
    console.log('ERRO!!!!: ', error);
  }
}