class Calculator {
  constructor (inputString){
    this.tokenStream = this.lexer(inputString);
  }
  lexer(inputString) {
    var  = this;
    var result = [],
    tokenTypes =[
      ["NUMBER",    /^\d+/ ],
      ["ADD",       /^\+/  ],
      ["SUB",       /^\-/  ],
      ["MUL",       /^\*/  ],
      ["DIV",       /^\//  ],
      ["LPAREN",    /^\(/  ],
      ["RPAREN",    /^\)/  ]
    ];
    for (let i=0; i< inputString.length; i++){
      let char = inputString[i];
      for (let)
    }
  }
} //1 + 2 * (3+4) => [1, +, 2, *, (, +, 4, )]
