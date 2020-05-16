//
const Impress = require("../Impress");

const Middleware = require("../Middleware/Middleware")

const fetch = require("node-fetch");

describe("check basic response type of ", () => {
  test(" Get Operation check", async () => {
      let res;
    await fetch("http://localhost:8000/one/1", {
      headers: { "Content-Type": "application/json" },
    }).then((res) => res).then(json => { res = json;console.log(json); console.log(typeof json)});

    //console.log(json)s

    expect(typeof res).toBe("object");
  });
});

describe("check basic response type of ", () => {
    test(" POST Operation check", async () => {
        let res;
      await fetch("http://localhost:8000/", {method: 'POST', body: 'a=1',
        headers: { "Content-Type": "application/json" },
      }).then((res) => res).then(json => { res = json;console.log(json); console.log(typeof json)});
  
      //console.log(json)s
  
      expect(typeof res).toBe("object");
    });
  });


  