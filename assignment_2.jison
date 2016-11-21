
/* description: Parses and executes mathematical expressions. */
%{
    var parseTree = require('./parseTree.js');
%}

/* lexical grammar */
%lex
%%

\s+                   /* skip whitespace */
[0-9]+("."[0-9]+)?\b  return 'NUMBER'
"+"                   return '+'
"-"                   return "-"
"*"                   return "*"
"/"                   return "/"
"!"                   return "!"
"^"                   return "^"
<<EOF>>               return 'EOF'
.                     return 'INVALID'

/lex

/* operator associations and precedence */

%left '+','-'
%left '*'
%left '/'
%left '^'
%left UMINUS


%start expressions

%% /* language grammar */

expressions
    : e EOF
        { typeof console !== 'undefined' ? console.log(parseTree.parse($1)) : print($1);
          return $1; }
    ;

e
    : e '+' e
        {$$ = {parent:$2,left:$1,right:$3}}
    | e '-' e
        {$$ = {parent:$2,left:$1,right:$3}}
    | e '*' e
        {$$ = {parent:$2,left:$1,right:$3}}
    | e '/' e
        {$$ = {parent:$2,left:$1,right:$3}}
    | e '^' e
        {$$ = {parent:$2,left:$1,right:$3}}
    | NUMBER
        {$$ = Number(yytext);}
    ;

