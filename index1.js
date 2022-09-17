import {promises as fs} from 'fs';

async function getDataJson() {
  // O comando readfile é um modulo nativo do Node.js e ele serve para podermos fazer a leitura de arquivos em nossos sistemas.

  try {
    const data = JSON.parse(await fs.readFile('./src/people.json'));
    return data;
  } catch(error) {
    console.log('Houve um erro: ', error);
  }
}


async function exemploForEach() {
  const dados = await getDataJson();
  
  dados.forEach((pessoa) => {
    console.log(pessoa.name.first);
  });
}


//Criar uma nova variavel apenas com os dados que voce escolher
async function exemploMap() {
  const dados = await getDataJson();

  const novosDados = dados.map((pessoa) => {
    return {
      nome: pessoa.name.first,
      email: pessoa.email,
      cidade: pessoa.location.city
    }
  });

  console.log(novosDados);

}


//Cria uma nova variavel com os dados que forem verdadeiros para o filtro que voce escolher
async function exemploFilter() {
  const dados = await getDataJson();

  const mais50 = dados.filter((pessoa) => {
    return pessoa.dob.age > 50;
  });

  const dadosLimpos = mais50.map((pessoa) => {
    return {
      nome: pessoa.name.first,
      idade: pessoa.dob.age
    }
  });

  console.log(dadosLimpos);
}


async function exemploFind() {
  const dados = await getDataJson();

  const dadoEncontrado = dados.find((pessoa) => {
    return pessoa.gender === 'male'
  })
  
  console.log(dadoEncontrado);

}

//Retorna TRUE se encontrar algum dado que satisfaça sua condição ou FALSE se nenhum dado satisfazer a condição
async function exemploSome() {
  const dados = await getDataJson();

  const boliviano = dados.some((pessoa) => {
    return pessoa.location.country === 'Bolivia';
  });

  console.log(boliviano);
}

//Retorna TRUE se todos os dados forem satisfeitos pela validação ou FALSE se algum deles não for
async function exemploEvery() {
  const dados = await getDataJson();

  const brasileiro = dados.every((pessoa) => {
    return pessoa.location.country === 'Brazil';
  });

  console.log(brasileiro);
}


async function exemploReduce(){

  const dados = await getDataJson();

  const somaIdades = dados.reduce((totalIdade, pessoa) => {
    if(pessoa.location.state === 'Minas Gerais') {
      return totalIdade + pessoa.dob.age;
    }   
    return totalIdade; 
  }, 0);

  console.log(somaIdades);
}


// O Comando SORT serve para podermos ordenar os dados dentro da nossa função. Ele cria uma nova variavel com esses dados ordenados.
async function exemploSort() {
  const dados = await getDataJson();

  //No código abaixo, estamos utilizando o .map para limpar os dados que faremos a ordenação. Assim, os dados ficarão apenas com os valores que quisermos.
  const dadosLimpos = dados.map((pessoa) => {
    return pessoa.name.email
  });

   // Este modelo pode ser utilizado para ordenação de dados com valores numericos
  const ordenados = dadosLimpos.sort((pessoa1, pessoa2) => {
    return pessoa1.idade - pessoa2.idade;
  });

  // Este modelo pode ser utilizado para ordenação de dados com valores strings
  const nomesOrdenados = dadosLimpos.sort();

  console.log(nomesOrdenados);
}

//O metodo chamado STARTSWITH verificar se um dado começa com a informação solicitada.
const cidade = 'Ribeirão Preto';
// console.log(cidade.startsWith('Rib'));

// o metodo chamado INCLUDES verifica se um dado possui em qualquer lugar a informação solicitada.
const estado = 'Minas Gerais';
// console.log(estado.includes('Gera'));


// exemploForEach();
// exemploMap();
// exemploFilter();
// exemploFind();
// exemploSome();
// exemploEvery();
// exemploReduce();
// exemploSort();

let cidadeExemplo = 'Parana';
console.log(cidadeExemplo.length)