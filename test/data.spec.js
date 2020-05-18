import {filterType, filterEggs, filterData, pokemonId} from '../src/data.js';

describe('filterType', () => {
  test('is a function', () => {
    expect(typeof filterType).toBe('function');
  });

  it('should return filterType', () => {
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

    expect(filterType(inputType, 'Fuego'))===(outputType);
  });
});



describe('filterEggs', () => {
  test('is a function', () => {
    expect(typeof filterEggs).toBe('function');
  });

  it('should return filterEggs', () => {
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

    expect(filterEggs(inputEggs, '2 km'))===(outputEggs);
  });
});



describe ( 'Order Alphabetically and Number' ,  ( )  =>  {
  it ( 'is a function' ,  ( )  =>  {
    expect( typeof filterData ) . toBe ( 'function' ) ;
  } ) ;
  
  it ( 'Should return array order that orders numbers from least to greatest' ,  ( )  =>  {
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
    expect( filterData (inputOrderNum1) )===(outputOrderNum1) ;
  } ) ;

    it ( 'Should return array order that orders numbers from greatest to least' ,  ( )  =>  {
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
      expect( filterData (inputOrderNum2) )===(outputOrderNum2) ;
    } ) ;
  

  it ( 'Should return array order alphabetically A~Z' ,  ( )  =>  {
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
    expect( filterData (inputOrderA) )===(outputOrderA) ;
  } ) ;

  it ( 'Should return array order alphabetically Z~A' ,  ( )  =>  {
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
    expect( filterData (inputOrderB) )===(outputOrderB) ;
  } ) ;

} ) ;


describe ( 'pokemonId', ( )  =>  {
  it ( 'is a function', ( )  =>  {
    expect( typeof pokemonId ) . toBe ('function') ;
  } ) ;
  it ( 'Should return an element' ,  ( )  =>  {
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
    expect( pokemonId (inputElement) )===(outputElement) ;
  }) 

})







