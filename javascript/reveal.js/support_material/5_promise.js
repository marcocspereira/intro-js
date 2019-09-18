// o exemplo de callback adaptado para promise

/******************************************
 * EXAMPLE 1 - one simple promise
 ******************************************/

// como em qualquer outro objecto, para o criar, utiliza-se a keyword new para o Promise constructor
// o construtor recebe uma função callback async (corre imediatamente após a criação da Promise)
// com métodos para resolver ou rejeitar a promise
var getIds = new Promise(function(resolve, reject) {
  // async code representado pelo setTimeout
  setTimeout(function() {
    /**
     * - RESOLVE marks the promise as fulfilled:
     * - takes an argument which is the result of the promise: how we return our result
     *   from the promise if it was successful
     * - in this case, the array of IDs
     * - setTimeout will not fail, so reject will not be used in this case
     **/
    resolve([523, 883, 432, 974]);
    /**
     * comment resolve and uncomment reject to test the .catch()
     **/
    // reject("pumbas");
  }, 1500);
});

/**
 * Promise Consumer:
 * .then() - allows to add a handler, callback function, for the case that the promise is fulfilled
 * .catch() - allows to add a handler, callback function, for the case that a promise gets rejected, so then an error happened
 */
getIds
  .then(function(ids) {
    console.log(ids);
  })
  .catch(function(error) {
    console.log("error: " + error);
  });

/******************************************
 * EXAMPLE 2 - promise chain
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

getIds2
  .then(function(ids) {
    console.log(ids);
    // return of the 1st 'then' will return a Promise that feeds the next then
    return getRecipe(ids[2]);
  })
  .then(function(recipe) {
    console.log(recipe);
  })
  .catch(function(error) {
    console.log("error: " + error);
  });

// no callback hell

/******************************************
 * EXAMPLE 3 - promise chain with complete example of callback
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

getIds2
  // 1
  .then(function(ids) {
    console.log(ids);
    // return of the 1st 'then' will return a Promise that feeds the next 'then'
    return getRecipe(ids[2]);
  })
  // 2
  .then(function(response) {
    // return of the 2nd 'then' will return a Promise that feeds the next 'then'
    console.log(response.id + ": " + response.recipe.title);
    return getRelated(response.recipe.publisher);
  })
  // 3
  .then(function(publisher) {
    console.log(publisher);
  })
  .catch(function(error) {
    console.log("error: " + error);
  });

// no callback hell
