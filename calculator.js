class Calculator {
  constructor (inputString){
    this.tokenStream = this.lexer(inputString);
  }
  lexer(inputString) {
    var makeESLintHappy = this;
    var tokenStream = [],
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
      for (let j=0; j<tokenTypes.length; j++) {
        let [token, regEx] = [tokenTypes[j][0], tokens[j][1]];
        if (regEx.test(char)) tokenStream.push({'name': token, 'value': char})
      }
    }
    return tokenStream
  }
} //1 + 2 * (3+4) => [1, +, 2, *, (, +, 4, )]
