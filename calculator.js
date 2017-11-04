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
    
    while(inputString.length) {
      tokenTypes.forEach(function(tokenType) {
        let [token, regEx] = [tokenType[0], tokenType[1]];
        let match = regex.exec(inputString)
        if (match) {
          tokenStream.push({'name': token, 'value': match[0]})
        };
      })
    }

    return tokenStream
  }
} //1 + 2 * (3+4) => [1, +, 2, *, (, +, 4, )] 





// lexer(inputString) {
//   var makeESLintHappy = this;
//   var tokenStream = [],
//   tokenTypes =[
//     ["NUMBER",    /^\d+/ ],
//     ["ADD",       /^\+/  ],
//     ["SUB",       /^\-/  ],
//     ["MUL",       /^\*/  ],
//     ["DIV",       /^\//  ],
//     ["LPAREN",    /^\(/  ],
//     ["RPAREN",    /^\)/  ]
//   ];
//   for (let i=0; i< inputString.length; i++){
//     let char = inputString[i];
//     for (let j=0; j<tokenTypes.length; j++) {
//       let [token, regEx] = [tokenTypes[j][0], tokens[j][1]];
//       if (regEx.test(char)) {
//         tokenStream.push({'name': token, 'value': char});
//         break
//       }
//     }
//   }

//   for (let i=0; i<tokenStream.length; i++) {
//     if (tokenStream[i].name == 'NUMBER') {
//       if tokenStream[i+1].name == 'NUMBER') {
//         tokenStream[i].value =
//       }
//     }
//   }

//   return tokenStream
// }