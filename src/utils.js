import _ from 'lodash';

const potionNames = [
  'Elixir de ciúmes',
  'Elixir do Tempo Infinito',
  'Elixir do Alto Mago',
  'Elixir do Crepúsculo',
  'Elixir do Caos',
  'Elixir da Verdade',
  'Elixir da Corrupção',
  'Elixir do Peso da Pena',
  'Elixir de Fogo',
  'Elixir de Sedução',
  'Elixir da Luxúria',
  'Elixir de Impotência',
  'Elixir de Reflexos Aprimorados',
  'Elixir de Purificação',
  'Elixir da velocidade da luz',
  'Elixir da Ignorância',
  'Elixir de Conforto',
  'Elixir de falha',
  'Elixir do Esquecimento',
  'Elixir do Vidente',
  'Elixir de Mentes Alteradas',
  'Elixir de Suborno',
  'Elixir de Perturbação',
  'Elixir do incentivo dos sonhos',
  'Elixir de Escapes',
  'Elixir de fogos de artifício',
  'Elixir da Fúria',
  'Elixir de Incapacitar',
  'Elixir de Mentes Quebradas',
  'Elixir de Alucinação',
  'Elixir de Mentes Alteradas',
  'Elixir da Insanidade',
  'Elixir de Paralisação',
  'Elixir do Gigante',
  'Elixir da Terra',
  'Elixir da fome',
  'Elixir das febres',
  'Elixir da Filtragem da Mente',
  'Elixir do Arqueiro',
  'Elixir do Sol',
  'Elixir de Reflexos',
  'Elixir dos Segredos Antigos',
  'Elixir do Amor',
  'Elixir da Floresta',
  'Elixir do Desconhecido',
  'Elixir do Alívio da Dor',
  'Elixir do Sangue de Vampiro',
  'Elixir de Amnésia',
  'Elixir das Almas',
  'Elixir da Ruptura',
  'Elixir dos Finais',
  'Elixir de dobrar a mente',
  'Elixir de Invisibilidade',
  'Elixir dos sentidos',
  'Elixir do Vulcão',
  'Elixir de Resistir ao Fogo',
  'Elixir de Pele de Aço',
  'Elixir de Crescimento Gigante',
  'Elixir de pés leves',
  'Elixir da Paciência',
  'Elixir da Mente Aprimorada',
  'Elixir de Explosões',
  'Elixir do Fracasso',
  'Elixir de Gigantes',
  'Elixir do Trovão',
  'Elixir do Espírito',
  'Elixir da velocidade da luz',
  'Elixir da Sorte',
  'Elixir de Fixação',
  'Elixir da mente calma',
  'Elixir de Brutos',
  'Elixir do Silêncio',
  'Elixir de Poder de Fogo',
  'Elixir de Mentes Quebradas',
  'Elixir de perturbação',
  'Elixir de Escrutínio',
  'Elixir de Defesa',
  'Elixir da Sorte',
  'Elixir dos Inícios',
  'Elixir das Sombras',
  'Elixir da Amnésia',
  'Elixir do Curador',
  'Elixir de Mentes Ociosas',
  'Elixir do Crescimento',
  'Elixir de influência',
  'Elixir da Fortitude',
  'Elixir dos Cegos',
  'Elixir de Perfeição',
  'Elixir de Poder de Fogo',
  'Elixir do Curador',
  'Elixir de indução do sono',
  'Elixir da estupidez',
  'Elixir das Flores',
  'Elixir da Vida Longa',
];

export const nameGen = () => {
  return _.capitalize(_.sample(potionNames));
};

const getRandomInt = (min = 40, max = 220) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const colorCode = () => {
  return `rgb(${getRandomInt()},${getRandomInt()},${getRandomInt()})`;
};

// export const generatePotion = () => {
//   const potion = { name: nameGen(), color: colorCode() };
//   return potion;
// };
