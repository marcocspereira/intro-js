/* 
fetch("http://api.github.com/repositories", {
  method: "GET"
})
  .then(response => response.json())
  .then(b => console.log(b))
  .catch(a => console.log(a));
 */

async function getRepositories() {
  const response = await fetch("http://api.github.com/repositories");
  const json = await response.json();
  return json;
}

(async function() {
  const repos = await getRepositories();
  console.log(repos);
})();
