import {filterType, filterEggs, pokemonId, filterData} from '../src/data.js';

const inputType = [
  { "name": "Charmander",
    "type": [
       "Fuego"
    ],
  },
  { "name": "Squirtle",
    "type": [
       "Agua"
    ],
  },
  { "name": "Vulpix",
    "type": [
    "Fuego"
    ],
  },
];

const outputType = [
{ "name": "Charmander",
  "type": [
     "Fuego"
  ],
},
{ "name": "Vulpix",
  "type": [
     "Fuego"
  ],
}
];

const inputEggs = [
  { "name": "Charmander",
    "egg" : "2 km",
  },
  { "name": "Squirtle",
    "egg": "2 km",
  },
  { "name": "Ivysaur",
    "egg": "Not in Eggs",
  },
];

const outputEggs =  [
{ "name": "Charmander",
  "egg" : "2 km",
},
{ "name": "Squirtle",
  "egg": "2 km",
},
];

const  inputElement = [
  { id : 25 ,
    name : 'Pikachu' ,
  },
 ];
const  outputElement = [
  { id : 25 ,
    name : 'Pikachu' ,
  },
];

const  inputOrderNum1 = [
  { num : '025' ,
    name : 'Pikachu' ,
  },
  { num : '001' ,
    name : 'Bulbasaur' ,
  },
  { num : '041' ,
    name : 'Zubat' ,
  },
  { num : '063' ,
    name : 'Abra' ,
  }
 ];
const  outputOrderNum1 = [
  { num : '001' ,
    name : 'Bulbasaur' ,
  },
  { num : '025' ,
    name : 'Pikachu' ,
  },
  { num : '041' ,
    name : 'Zubat' ,
  },
  { num : '063' ,
    name : 'Abra' ,
  }
];

const  inputOrderNum2 = [
  { num : '025' ,
    name : 'Pikachu' ,
  },
  { num : '001' ,
    name : 'Bulbasaur' ,
  },
  { num : '041' ,
    name : 'Zubat' ,
  },
  { num : '063' ,
    name : 'Abra' ,
  }
 ];
const  outputOrderNum2 = [
  { num : '063' ,
    name : 'Abra' ,
  },
  { num : '041' ,
    name : 'Zubat' ,
  },
  { num : '025' ,
    name : 'Pikachu' ,
  },
  { num : '001' ,
    name : 'Bulbasaur' ,
  }
];

const  inputOrderA = [
  { name : 'Pikachu'
  },  
  { name : 'Bulbasaur'
  },  
  { name : 'Zubat' 
  },  
  { name : 'Abra'
  }
];
const  outputOrderA = [
 { name : 'Abra'
 },  
 { name : 'Bulbasaur'
 },  
 { name : 'Pikachu'
 },  
 { name : 'Zubat'
 }
];

const  inputOrderB = [
  { name : 'Pikachu'
  },  
  { name : 'Bulbasaur'
  },  
  { name : 'Zubat' 
  },  
  { name : 'Abra'
  }
];
const  outputOrderB = [
 { name : 'Zubat'
 },  
 { name : 'Pikachu'
 },  
 { name : 'Bulbasaur'
 },  
 { name : 'Abra'
 }
];



describe('filterType',()=>{
  test('is a function',()=>{
    expect(typeof filterType).toBe('function');
  });

  test('should return filterType',()=>{
    expect(filterType(inputType,'Fuego'))===(outputType);
  });
});


describe('filterEggs',()=>{
  test('is a function',()=>{
    expect(typeof filterEggs).toBe('function');
  });

  test('should return filterEggs',()=>{
    expect(filterEggs(inputEggs, '2 km'))===(outputEggs);
  });
});


describe ('pokemonId',()=>{
  test('is a function',()=>{
    expect(typeof pokemonId).toBe('function') ;
  } ) ;
  test( 'Should return an element',()=>{
    expect(pokemonId(inputElement))===(outputElement);
  }) 
});


describe ('Order Alphabetically and Number',()=>{
  test('is a function',()=>{
    expect(typeof filterData).toBe('function');
  }) ;
  
  test('Should return array order that orders numbers from least to greatest',() =>{
    expect(filterData(inputOrderNum1))===(outputOrderNum1) ;
  });

  test( 'Should return array order that orders numbers from greatest to least',()=>{
    expect(filterData(inputOrderNum2))===(outputOrderNum2) ;
  });

  test( 'Should return array order alphabetically A~Z',()=>{
    expect(filterData(inputOrderA))===(outputOrderA) ;
  });
});

test('Should return array order alphabetically Z~A',()=>{
  expect(filterData(inputOrderB))===(outputOrderB);
});