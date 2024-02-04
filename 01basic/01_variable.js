const accountId=111111112
let accountEmail="gaurav@"
var accountpassword="ga355"
accountEmail="TKSU"
console.log(accountEmail);
let accountstate;
// let accountpassword;SyntaxError: Identifier 'accountpassword' has already been declared
// prefer not use var
// because of issue in block scope and functional scope
console.table([accountId,accountEmail,accountpassword,accountstate])