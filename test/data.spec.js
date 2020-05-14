import {filterType, filterEggs} from '../src/data.js';

const dataPokemon = {
  pokemon : [
    { "num": "004",
      "name": "Charmander",
      "img": "http://www.serebii.net/pokemongo/pokemon/004.png",
      "type": [
         "Fuego"
      ],
      "egg": "2 km",
    },
    { "num": "007",
      "name": "Squirtle",
      "img": "http://www.serebii.net/pokemongo/pokemon/007.png",
      "type": [
         "Agua"
      ],
      "egg": "2 km",
    },
    { "num": "037",
      "name": "Vulpix",
      "img": "http://www.serebii.net/pokemongo/pokemon/037.png",
      "type": [
      "Fuego"
      ],
      "egg": "5 km",
    },
  ]
};

const output = [
  { "num": "004",
    "name": "Charmander",
    "img": "http://www.serebii.net/pokemongo/pokemon/004.png",
    "type": [
       "Fuego"
    ],
  },
  { "num": "007",
    "name": "Squirtle",
    "img": "http://www.serebii.net/pokemongo/pokemon/007.png",
    "type": [
       "Agua"
    ],
  },
  { "num": "037",
    "name": "Vulpix",
    "img": "http://www.serebii.net/pokemongo/pokemon/037.png",
    "type": [
       "Fuego"
    ],
  }
];

describe('filterType', () => {
  test('is a function', () => {
    expect(typeof filterType).toBe('function');
  });

  it('should return Fuego', () => {
    expect(filterType(dataPokemon, 'Fuego')).toEqual(output);
  });
});

describe('filterEggs', () => {
  test('is a function', () => {
    expect(typeof filterEggs).toBe('function');
  });

  it('should return 2 km', () => {
    expect(filterEggs(dataPokemon, '2 km')).toEqual(output);
  });
});
