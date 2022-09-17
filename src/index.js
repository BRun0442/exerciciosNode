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
  const cleanJson = await getDataJson();

  const dataFormat = cleanJson.map((estado) => {
    return {
      Estado: estado.nome
    }
  });
  
  return dataFormat;
}

//Procura estados iniciados com o parametro passado, no caso, com a letra "A"
async function statesFind(find)
{
  const cleanJson = await getDataJson();
  const findedItems = [];

  const findResult = cleanJson.forEach((estado) => {
    if(estado.nome.startsWith(find) == true)
    {
      findedItems.push(estado);
    }  
  });

  return findedItems;
}


//Organiza os estados de modo crescente de acordo com a quantidade de letras de seus nomes
async function crescentLetter()
{
  const cleanJson = await getDataJson();
  const statesLettersQuant = [];
  cleanJson.forEach((estado) => {
    statesLettersQuant.push((estado.name.toString()).length);
  })

  console.log(cleanJson);
}

// console.log(await getAllStates()); 
// console.log(await statesFind("A"));

// crescentLetter();
console.log(await statesFind('A'));