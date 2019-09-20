/* 
fetch("http://api.github.com/repositories", {
  method: "GET"
})
  .then(response => response.json())
  .then(b => console.log(b))
  .catch(a => console.log(a));
 */

(async function() {
  // inside this IIFE to not to not pollute global namespace
  async function getRepositories() {
    const response = await fetch("http://api.github.com/repositories");
    const json = await response.json();
    return json;
  }

  const repos = await getRepositories();
  console.log(repos);
})();
