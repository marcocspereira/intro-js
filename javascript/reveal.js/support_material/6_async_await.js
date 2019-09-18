/**
 * o exemplo de promises adaptado para async/await
 * - A produção de Promises continua igual
 * - O consumo será com Async/Await
 */
//
//
//

/******************************************
 * EXAMPLE 1 - one simple promise
 ******************************************/

// como em qualquer outro objecto, para o criar, utiliza-se a keyword new para o Promise constructor
// o construtor recebe uma função callback async (corre imediatamente após a criação da Promise)
// com métodos para resolver ou rejeitar a promise
var getIds = new Promise(function(resolve, reject) {
  // async code representado pelo setTimeout
  setTimeout(function() {
    resolve([523, 883, 432, 974]);
    /**
     * comment resolve and uncomment reject to test the .catch()
     **/
    // reject("pumbas");
  }, 1500);
});

/**
 * Promise Consumer with Async/Await:
 */

// async marks as an asynchronous function,
// that basically keeps running in the background
// and returns a promise
async function getRecipesAW() {
  // inside an async function, we can have one or more await expressions
  // getIDs returns a Promise, await consumes it an assignes to IDs
  const IDs = await getIds;
  console.log(IDs);
}

getRecipesAW();

/******************************************
 * EXAMPLE 2 - async/await chain
 ******************************************/

// promise to return the array of IDs
var getIds2 = new Promise(function(resolve, reject) {
  // async code representado pelo setTimeout
  setTimeout(function() {
    resolve([523, 883, 432, 974]);
  }, 1500);
});

// function that receives an id and returns a promise
var getRecipe = function(recipeID) {
  return new Promise(function(resolve, error) {
    setTimeout(
      function(id) {
        var recipe = {
          title: "Bacalhau Gomes de Sá",
          publisher: "Gomes de Sá"
        };
        resolve(id + ": " + recipe.title);
      },
      1500,
      recipeID
    );
  });
};

/**
 * Promise Consumer with Async/Await:
 */

async function getRecipesAW() {
  const IDs = await getIds2;
  console.log(IDs);
  const recipe = await getRecipe(IDs[2]);
  console.log(recipe);
}

getRecipesAW();

/******************************************
 * EXAMPLE 3 - async/await chain with complete example of promise
 ******************************************/

// 1
// promise to return the array of IDs
var getIds2 = new Promise(function(resolve, reject) {
  // async code representado pelo setTimeout
  setTimeout(function() {
    resolve([523, 883, 432, 974]);
  }, 1500);
});

// 2
// function that receives an id and returns a promise
var getRecipe = function(recipeID) {
  return new Promise(function(resolve, error) {
    setTimeout(
      function(id) {
        var recipe = {
          title: "Bacalhau Gomes de Sá",
          publisher: "Gomes de Sá"
        };
        resolve({ id: id, recipe: recipe });
      },
      1500,
      recipeID
    );
  });
};

// 3
var getRelated = function(publisher) {
  return new Promise(function(resolve, error) {
    setTimeout(
      function(pub) {
        var recipe = {
          title: "Pizza",
          publisher: "Gomes de Sá"
        };
        resolve(pub + ": " + recipe.title);
      },
      1500,
      publisher
    );
  });
};

/**
 * Promise Consumer with Async/Await:
 */

async function getRecipesAW() {
  // 1
  const IDs = await getIds2;
  console.log(IDs);
  // 2
  const response1 = await getRecipe(IDs[2]);
  console.log(response1.id + ": " + response1.recipe.title);
  // 3
  const response2 = await getRelated(response1.recipe.publisher);
  console.log(response2);
}

getRecipesAW();

/******************************************
 * EXAMPLE 4 - returning a value from an async function
 ******************************************/

// como em qualquer outro objecto, para o criar, utiliza-se a keyword new para o Promise constructor
// o construtor recebe uma função callback async (corre imediatamente após a criação da Promise)
// com métodos para resolver ou rejeitar a promise
var getIds = new Promise(function(resolve, reject) {
  // async code representado pelo setTimeout
  setTimeout(function() {
    resolve([523, 883, 432, 974]);
    /**
     * comment resolve and uncomment reject to test the .catch()
     **/
    // reject("pumbas");
  }, 1500);
});

/**
 * Promise Consumer with Async/Await:
 */
async function getRecipesAW() {
  return await getIds;
}

getRecipesAW().then(function(result) {
  console.log(result);
});
