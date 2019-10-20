import _ from 'lodash';
import randomcolor from 'randomcolor';

const potionNames = [
  'Elixir de ciúmes',
  'Elixir do Tempo Infinito',
  'Elixir do Alto Mago',
  'Elixir do Crepúsculo',
  'Poção do Caos',
  'Elixir da Verdade',
  'Elixir da Corrupção',
  'Poção do Peso da Pena',
  'Poção de Fogo',
  'Elixir de Sedução',
  'Elixir da Luxúria',
  'Poção de Impotência',
  'Elixir de Reflexos Aprimorados',
  'Elixir de Purificação',
  'Poção da velocidade da luz',
  'Elixir da Ignorância',
  'Elixir de Conforto',
  'Elixir de falha',
  'Elixir do Esquecimento',
  'Poção do Vidente',
  'Elixir de Mentes Alteradas',
  'Poção de Suborno',
  'Elixir de Perturbação',
  'Poção do incentivo dos sonhos',
  'Elixir de Escapes',
  'Poção de fogos de artifício',
  'Poção da Fúria',
  'Poção de Incapacitar',
  'Elixir de Mentes Quebradas',
  'Elixir de Alucinação',
  'Poção de Mentes Alteradas',
  'Elixir da Insanidade',
  'Poção de Paralisação',
  'Elixir do Gigante',
  'Elixir da Terra',
  'Elixir da fome',
  'Elixir das febres',
  'Poção da Filtragem da Mente',
  'Elixir do Arqueiro',
  'Elixir do Sol',
  'Poção de Reflexos',
  'Elixir dos Segredos Antigos',
  'Poção do Amor',
  'Poção da Floresta',
  'Elixir do Desconhecido',
  'Elixir do Alívio da Dor',
  'Elixir do Sangue de Vampiro',
  'Elixir de Amnésia',
  'Poção das Almas',
  'Elixir da Ruptura',
  'Poção dos Finais',
  'Poção de dobrar a mente',
  'Poção de Invisibilidade',
  'Poção dos sentidos',
  'Poção do Vulcão',
  'Elixir de Resistir ao Fogo',
  'Poção de Pele de Aço',
  'Poção de Crescimento Gigante',
  'Elixir de pés leves',
  'Poção da Paciência',
  'Elixir da Mente Aprimorada',
  'Elixir de Explosões',
  'Elixir do Fracasso',
  'Poção de Gigantes',
  'Poção do Trovão',
  'Elixir do Espírito',
  'Elixir da velocidade da luz',
  'Elixir da Sorte',
  'Elixir de Fixação',
  'Poção da mente para acalmar',
  'Poção de Brutos',
  'Elixir do Silêncio',
  'Poção de Poder de Fogo',
  'Elixir de Mentes Quebradas',
  'Poção de perturbação',
  'Elixir de Escrutínio',
  'Poção de Defesa',
  'Poção da Sorte',
  'Elixir dos Inícios',
  'Elixir das Sombras',
  'Elixir da Amnésia',
  'Poção do Curador',
  'Elixir de Mentes Ociosas',
  'Poção do Crescimento',
  'Elixir de influência',
  'Poção da Fortitude',
  'Elixir dos Cegos',
  'Elixir de Perfeição',
  'Elixir de Poder de Fogo',
  'Elixir do Curador',
  'Poção de indução do sono',
  'Poção da estupidez',
  'Poção das Flores',
];

export const nameGen = () => {
  return _.capitalize(_.sample(potionNames));
};

export const colorCode = () => {
  return randomcolor({
    format: 'rgb',
  });
};

export const generatePotion = () => {
  const potion = { name: nameGen(), color: colorCode() };
  return potion;
};
