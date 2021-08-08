import { Application, send, Router } from "https://deno.land/x/oak@v7.7.0/mod.ts";

import api from "./api";

const app = new Application();
const PORT = 9000;


app.use(async  (ctx, next) => {
  await next();
  const time = ctx.response.headers.get("X-Response-Time")
  console.log(`${ctx.request.method} ${ctx.request.url} ${time}`)
});

// timing info 
app.use(async  (ctx, next) => {
    const start = Date.now();
    await next();
    const delta = Date.now() - start; 
    ctx.response.headers.set("X-Response-time", `${delta}`)
});

//app.use(api.routes());

// App startup middleware
app.use(async (ctx, next) => {
  await next();
  ctx.response.body = `
  __________      ___.   .__       .__                      .___
\\______   \\ ____\\_ |__ |__| ____ |  |__   ____   ____   __| _/
 |       _//  _ \\| __ \\|  |/    \\|  |  \\ /  _ \\ /  _ \\ / __ | 
 |    |   (  <_> ) \\_\\ \\  |   |  \\   Y  (  <_> |  <_> ) /_/ | 
 |____|_  /\\____/|___  /__|___|  /___|  /\\____/ \\____/\\____ |
 `;
});


// methods from the api 
app.use(api.routes());
app.use(api.allowedMethods());


// static file middle ware whitelist the files
app.use(async  (ctx, next) => {
  const filePath = ctx.request.url.pathname;
  const fileWhitelist = [
    "/index.html",
    "/javascrupts/script.js",
    "/stylesheets/styles",
    "/images/favicon.png"
  ]
  if (fileWhitelist.includes(filePath)){
      await send(ctx, filePath, {
        root : `${Deno.cwd()}/public`,
      })
      console.log("whitelist")
  }
  await next();
});




await app.listen({ port: PORT });