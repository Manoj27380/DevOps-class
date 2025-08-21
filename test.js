const greet = require('./app');

if (greet() === "hello from dev!"){
    console.log("tst passed");
    Process.exit(0);
}else{
    console.log("test failed");
    process.exit(1);
}