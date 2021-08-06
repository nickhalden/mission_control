import { denode } from "./my_module.js";

console.log(denode("NODE"));

// deno run my_module_user.js
//deno info my_module_user.js

// import {BufReader} from "https://doc.deno.land/https/deno.land/std@0.101.0/io/mod.ts";

const response = await fetch("https://reqres.in/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=UTF-8"
  },
  body: JSON.stringify({
    name: "Elon Musk",
    job: "billionaire"
  })
});
 
const body = await response.json();
 
console.log(body);