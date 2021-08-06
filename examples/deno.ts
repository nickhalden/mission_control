import "https://deno.land/std@0.101.0/examples/welcome.ts";

import "https://deno.land/std@0.101.0/examples/chat/server.ts";

const arg = Deno.args[0];
console.log(arg);

// setTimeout(()=>{
//     console.log("check");
//     console.table(Deno.metrics())
// }, 100 )

// console.log(window)
