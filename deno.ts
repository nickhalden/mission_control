import { Application, send, Router } from "https://deno.land/x/oak@v7.7.0/mod.ts";

const app = new Application();
const PORT = 9000;


app.use(async  (ctx, next) => {
  await next();
  const time = ctx.response.headers.get("X-Response-Time")
  console.log(`${ctx.request.method} ${ctx.request.url} ${time}`)
});

app.use(async  (ctx, next) => {
    const start = Date.now();
    await next();
    const delta = Date.now() - start; 
    ctx.response.headers.set("X-Response-time", `${delta}`)
});

Router.

// whitelist the files
app.use(async (ctx, next)) =>{
  const filePath = ctx.request.url.pathname;
  await send(ctx, filePath, {
    root : `${Deno.cwd}/public`,
  })
  await next();

})




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


await app.listen({ port: PORT });