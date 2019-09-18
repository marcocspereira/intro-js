// this simulates a server call with setTimeout()

function getRecipe() {
  // 1
  setTimeout(function() {
    var recipeID = [523, 883, 432, 974];
    console.log(recipeID);

    // 2
    setTimeout(
      function(id) {
        var recipe = {
          title: "Bacalhau Gomes de Sá",
          publisher: "Gomes de Sá"
        };
        console.log(id + ": " + recipe.title);

        // 3
        setTimeout(
          function(publisher) {
            var recipe2 = {
              title: "Pizza",
              publisher: "Gomes de Sá"
            };
            console.log(publisher + ": " + recipe2.title);
          },
          1500,
          recipe.publisher
        );
      },
      2500,
      recipeID[2]
    );
  }, 1500);
}

getRecipe();
