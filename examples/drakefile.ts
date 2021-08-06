import { desc, run, sh, task } from "https://deno.land/x/drake@v1.5.0/mod.ts";

desc("Minimal Drake task");
task("hello", [], function () {
  console.log("Hello World!");
  sh("deno run --allow-env deno.js some_arg_0");
});

run();

//deno run --allow-env --allow-read drakefile.ts  hello
//deno run -A drakefile.ts  hello
