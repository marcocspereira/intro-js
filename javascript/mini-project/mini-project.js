/*
  // example
  async function getRepositories() {
    const response = await fetch("http://api.github.com/repositories", {
      method: "GET"
    });
    const json = await response.json();
    return json;
  }
 */

(async function() {
  // inside this IIFE to not to not pollute global namespace
  async function get(url) {
    const response = await fetch(`${url}`, {
      method: "GET"
    });
    const json = await response.json();
    return json;
  }

  const repos = await get("http://api.github.com/repositories");
  console.log(repos);
})();
