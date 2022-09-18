import {promises as fs} from 'fs';

//Le o json e manda para variavel data
async function getDataJson()
{
  try {
    const data = JSON.parse(await fs.readFile('./src/estados-cidades.json'));
    return data;
  } catch(error) {
    console.log('Arruma o erro aqui chefia: ', error);
  }
}

//Retorna todos os estados do json
async function getAllStates()
{
  const data = await getDataJson();

  const dataFormat = data.map((state) => {
    return {
      Estado: state.nome
    }
  });
  
  return dataFormat;
}

//Procura estados iniciados com o parametro passado, no caso, com a letra "A"
async function findStateByLetter(find)
{
  const data = await getDataJson();
  const findedItems = [];

  const findResult = data.forEach((state) => {
    if(state.nome.startsWith(find) == true)
    {
      findedItems.push(estado);
    }  
  });

  return findedItems;
}


//Organiza os estados de modo crescente de acordo com a quantidade de letras de seus nomes
async function crescentLetter()
{
  const data = await getDataJson();

  const ordenedArray = data.sort((state1, state2) => {
    return state1.nome.length - state2.nome.length;
  });

  const cleanedJson = ordenedArray.map((state) => {
    return state.nome;
  });

  return cleanedJson;
}


//Função que pesquisa o nome de um estado através de um parametro, e retorna suas cidades
async function findStateByName(name){
  const data = await getDataJson();

  const findItem = data.find((state) => {
    return state.nome == name;
  });

  return findItem.cidades;
}


async function findCitiesByLetterQuantMajor(name, quantity)
{
  const data = await getDataJson();
  
  const findState = data.find((state) => {
    return state.nome == name;
  });

  return findState.cidades.filter((city) => {
    return city.length > quantity;
  });
}

async function getStatesCitiesCount()
{
  const data = await getDataJson();

  const dataFormat = data.map((state) => {
    return {
      Estado: state.nome,
      QuantidadeDeCidades: state.cidades.length
    }
  });

  return dataFormat;
}

async function findCitiesByLetterQuantMinor(name, quantity)
{
  const data = await getDataJson();
  
  const findState = data.find((state) => {
    return state.nome == name;
  });

  return findState.cidades.filter((city) => {
    return city.length < quantity;
  });
}

//console.log(await getDataJson());
//console.log(await getAllStates()); 
//console.log(await findStateByLetter("A"));
//console.log(await crescentLetter());
//console.log(await findStateByName("São Paulo"));
//console.log(await findCitiesByAboveLetterQuant("Maranhão", 6));
console.log(await getStatesCitiesCount());
//console.log(await findCitiesByLetterQuantMinor("Bahia", 5)); 