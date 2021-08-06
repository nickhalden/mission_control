// import { Application } from "https://deno.land/x/oak/mod.ts";


// import {Application} from "https://deno.land/x/oak@v7.7.0/mod.ts"
// const app = new Application();

// app.use((ctx) => {
//   ctx.response.body = "Hello World!";
// });

// await app.listen({ port: 8000 });


import { serve } from "https://deno.land/std@0.101.0/http/server.ts";
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}
