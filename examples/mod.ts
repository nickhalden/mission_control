// const response = await fetch("http://my.json.host/data.json");
// console.log(response.status);  // e.g. 200
// console.log(response.statusText); // e.g. "OK"
// const jsonData = await response.json();

// async function downloadData(){
//     const response = await fetch("https://api.spacexdata.com/v4/launches",{method: "GET"});
//     const launchData =  await response.json();
//     console.log(launchData);
// }

// await downloadData();

console.log("Hello", Deno.env.get("USER"));

// async function downloadRobinhoodData(){
//     const response = await fetch("https://api.robinhood.com/instruments/",{method: "GET"});
//     const launchData =  await response.json();
//     console.log(launchData);
// }
// await downloadRobinhoodData();
