/* eslint-disable camelcase */
import _ from 'lodash';
import Color from 'color';
import randomColor from 'randomcolor';
import MathColor from './MathColor.js';

import { MAX_COLOR_LIMIT, MIN_COLOR_LIMIT } from './config';

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
  return _.sample(potionNames).toUpperCase();
};

const getRandomInt = (min = MIN_COLOR_LIMIT, max = MAX_COLOR_LIMIT) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const colorCode = () => {
  return `rgb(${getRandomInt()},${getRandomInt()},${getRandomInt()})`;
};

export const getRandom = () => {
  return randomColor({
    hue: 'random',
    format: 'cmyk',
  });
};

const rgb2lab = (rgb) => {
  let r = rgb[0] / 255;
  let g = rgb[1] / 255;
  let b = rgb[2] / 255;
  let x;
  let y;
  let z;

  r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
  g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
  b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

  x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
  y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.0;
  z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;

  x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
  y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
  z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;

  return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
};

// calculate the perceptual distance between colors in CIELAB
// https://github.com/THEjoezack/ColorMine/blob/master/ColorMine/ColorSpaces/Comparisons/Cie94Comparison.cs

// export const deltaE = (rgb1, rgb2) => {
//   const labA = rgb2lab(rgb1);
//   const labB = rgb2lab(rgb2);

//   const deltaL = labA[0] - labB[0];
//   const deltaA = labA[1] - labB[1];
//   const deltaB = labA[2] - labB[2];
//   const c1 = Math.sqrt(labA[1] * labA[1] + labA[2] * labA[2]);
//   const c2 = Math.sqrt(labB[1] * labB[1] + labB[2] * labB[2]);
//   const deltaC = c1 - c2;
//   let deltaH = deltaA * deltaA + deltaB * deltaB - deltaC * deltaC;
//   deltaH = deltaH < 0 ? 0 : Math.sqrt(deltaH);
//   const sc = 1.0 + 0.045 * c1;
//   const sh = 1.0 + 0.015 * c1;
//   const deltaLKlsl = deltaL / 1.0;
//   const deltaCkcsc = deltaC / sc;
//   const deltaHkhsh = deltaH / sh;
//   const i =
//     deltaLKlsl * deltaLKlsl + deltaCkcsc * deltaCkcsc + deltaHkhsh * deltaHkhsh;
//   return i < 0 ? 0 : 100 - Math.sqrt(i);
// };

export const CIE2000 = (rgb1, rgb2) => {
  const potion = Color(rgb1)
    .lab()
    .object();
  const target = Color(rgb2)
    .lab()
    .object();

  return MathColor.DeltaE00(
    potion.l,
    potion.a,
    potion.b,
    target.l,
    target.a,
    target.b
  );
};
