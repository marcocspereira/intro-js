(async function() {
  class Base {
    constructor(id) {
      this.id = id;
    }
  }

  class Repo extends Base {
    constructor(id, name, fullName, htmlUrl, description) {
      super(id);
      this.name = name;
      this.fullName = fullName;
      this.htmlUrl = htmlUrl;
      this.description = description;
    }
  }

  class User extends Base {
    constructor(id, url, login, avatarUrl) {
      super(id);
      this.url = url;
      this.login = login;
      this.avatarUrl = avatarUrl;
    }
  }
  // inside this IIFE to not to not pollute global namespace
  async function get(url) {
    const response = await fetch(url, {
      method: "GET"
    });
    const json = await response.json();
    return json;
  }

  const repos = await get("http://api.github.com/repositories");

  // map
  const repoInstances = repos.map(repo => {
    return new Repo(
      repo.id,
      repo.name,
      repo.full_name,
      repo.html_url,
      repo.description
    );
  });
  console.log(repoInstances);

  // filter
  const repoInstancesFiltered = repos.filter(repo => {
    if (repo.id > 50) {
      return new Repo(
        repo.id,
        repo.name,
        repo.full_name,
        repo.html_url,
        repo.description
      );
    }
  });
  console.log(repoInstancesFiltered);

  // reduce
  const repoReduced = repos.reduce((accumulator, repo) => {
    if (repo.id > 50) {
      accumulator.push(
        new Repo(
          repo.id,
          repo.name,
          repo.full_name,
          repo.html_url,
          repo.description
        )
      );
    }
    return accumulator;
  }, []);

  console.log(repoReduced);
})();

async function checkUser() {
  class User {
    constructor(id, url, login, avatarUrl) {
      this.id = id;
      this.url = url;
      this.login = login;
      this.avatarUrl = avatarUrl;
    }
  }
  let username = document.getElementById("username").value;

  const response = await fetch(`http://api.github.com/users/${username}`);
  const json = await response.json();
  const user = new User(json.id, json.url, json.login, json.avatarUrl);
  console.log(user);
}
