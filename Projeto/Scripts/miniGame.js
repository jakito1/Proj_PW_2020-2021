function Recipe(title, ingredients, instructions){
    if(typeof title === 'string' && title !== ""){
        this.title = title;
    }
    if(typeof ingredients === 'string' && ingredients !== ""){
        this.ingredients = ingredients;
    }
    if(typeof instructions === 'string' && instructions !== ""){
        this.instructions = instructions;
    }
  }
  
  const r1 = new Recipe('Caldo Verde', 'cebola|alho|azeite|chouriço|batata|sal|água|caldo verde', '1. Descasque a cebola e o alho, pique-os grosseiramente e leve ao lume numa panela com duas colheres de sopa de azeite e o chouriço. 2. Entretanto, pele as batatas e corte-as em cubos. 3. Quando a cebola estiver macia e translúcida, retire o chouriço e introduza as batatas. Tempere com o sal, tape e deixe cozinhar sobre lume muito brando durante cerca de 10 minutos. Regue com a água a ferver e deixe cozinhar até a batata estar macia. 4. Entretanto, deite o caldo-verde num coador de rede e passe-o por água corrente. 5. Triture a sopa com a varinha mágica até a batata estar desfeita. Leve de novo ao lume e quando retomar fervura introduza o caldo-verde e deixe cozinhar durante cerca de 8 minutos com a panela destapada. 6. Regue a sopa com o restante azeite e sirva com o chouriço cortado em rodelas.');
  const r2 = new Recipe('Sopa da Pedra', 'azeite|cebola|alho|tomate|água|carne vaca|entrecosto|orelha de porco|chouriço|morcela de arroz|sal|couve lombarda|cenouras|feijão manteiga|hortelã','1. Coloque o azeite num tacho e aloure a cebola picada e o dente de alho inteiro. De seguida junte o tomate limpo de pele e grainhas, cortado aos cubos. 2. Acrescente a água e deixe levantar fervura. 3. Junte as carnes, o chouriço e a morcela cortados às rodelas e o sal. Deixe cozinhar num total de 20 minutos e vá retirando as carnes conforme fiquem cozidas. 4. Corte a couve às tiras e a cenoura às rodelas e junte ao caldo. 5. Desfaça 200 g do feijão em puré e junte ao caldo da cozedura. Reserve os restantes e adicione-os quando os legumes estiverem cozidos. 6. Corte as carnes cozidas aos pedaços pequenos e junte à sopa. 7. Deixe ferver em lume brando durante 10 minutos para apurar. 8. Sirva decorado com o ramo de hortelã.');
  const r3 = new Recipe('Arroz de Marisco', 'marisco|cebola|alho francês|azeite|tomate|coentros|água|sal|arroz|limão', '1. Retire as delícias do mar do preparado de marisco e reserve-as. Pique a cebola e corte o alho-francês em rodelas. Aqueça o azeite num tacho, junte a cebola e o alho-francês e deixe cozinhar cerca de 5 minutos ou até começarem a alourar. 2. Lave o tomate, limpe-o de sementes e corte-o em pedaços. Pique os pés de um molho de coentros. Junte o tomate e os pés dos coentros picados aos legumes, tape e cozinhe em lume brando cerca de 10 minutos. 3. Noutro tacho, ferva a água temperada com o sal e introduza o preparado de mariscos. Deixe ferver 2 minutos e coe os mariscos. 4. Deite o caldo da cozedura sobre os legumes, mexa e assim que retomar fervura, introduza o arroz. Volte a mexer e cozinhe, tapado e em lume moderado a brando, durante 15 minutos. 5. Retire os camarões com casca, os mexilhões e as amêijoas e junte-os às delícias do mar reservadas. Adicione os restantes mariscos ao arroz no final da cozedura, mexa e retire do lume. 6. Junte uma mão-cheia de folhas de coentros e regue com o sumo do limão. Enfeite com os mariscos reservados e sirva de imediato.');
  const r4 = new Recipe('Bacalhau com Natas', 'batata|bacalhau|azeite|louro|alho|cebola|natas|molho bechamel|sal|noz moscada|limão|queijo', '1. Pré-aqueça o forno a 200º C. 2. Corte as batatas em cubos e frite-as em azeite. 3. Coloque o bacalhau num tacho com uma folha de louro e cubra-o com água. Leve-o a cozinhar em lume alto, quando levantar fervura baixe o lume e cozinhe 5 minutos. 4. Retire o bacalhau da água e deixe arrefecer. Retire a pele e as espinhas e desfie-o em lascas. 5. Num tacho, coloque 100 ml de azeite e deixe refogar as cebolas, os alhos e uma folha de louro. Adicione o bacalhau, mexa e deixe refogar um pouco. 6. Junte as batatas e envolva bem. Depois, acrescente o molho bechamel e as natas e tempere com o sal, a pimenta, a noz-moscada e as gotas do limão. Mexa bem, retire do lume e reserve. 7. Pincele um tabuleiro de forno com o restante azeite. Espalhe bem o preparado de bacalhau no tabuleiro e polvilhe com o queijo ralado. 8. Leve o bacalhau com natas ao forno a gratinar entre 15 e 20 minutos.');
  const r5 = new Recipe('Pastel de Nata', 'leite|limão|canela|açúcar|farinha|ovos|massa folhada', '1. Pré-aqueça o forno a 240º C. 2. Num tacho, coloque o leite, as cascas de limão e os paus de canela. 3. Leve ao lume até levantar fervura e desligue. 4. Numa taça, misture o açúcar com a farinha. 5. Acrescente a mistura ao leite, ainda bem quente, mexendo bem com varas. 6. Retire as cascas de limão e os paus de canela e deixe arrefecer durante 10 minutos. 7. Junte os ovos inteiros e as gemas. Mexa com as varas até formar um creme homogéneo. Leve ao lume novamente, mexendo sempre até engrossar. 8. Enrole a massa folhada formando um cilindro e corte em rodelas de 3 cm cada. 9. Com a ajuda dos polegares humedecidos, forre pequenas formas metálicas espalhando bem a massa até ao rebordo. 10. Deite o recheio nas formas e leve ao forno durante 15 minutos, ou até dourarem. Sirva ainda quente. Sugestão: polvilhe com canela.');
  
  
  const recipes = [r1, r2, r3, r4, r5]; 
  
  
  function getAllIngredients(){
    let ingredients = [];
  
    recipes.forEach(recipe => {
        let recipeIngs = recipe.ingredients.split('|');
        recipeIngs.forEach(ingredient => {
          if(!ingredients.find(ing => ingredient === ing)){
            ingredients.push(ingredient);
          }
        });
    });
    return ingredients;
  }

  function getRecipeIngredients(recipe){
    let ingredients = [];
    let recipeIngs = recipe.ingredients.split('|');
    recipeIngs.forEach(ingredient => {
      if(!ingredients.find(ing => ingredient === ing)){
        ingredients.push(ingredient);
      }
    });

    return ingredients;
  }

  function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drop(ev) {
    let id = ev.dataTransfer.getData("dragAndDropData");
    ev.target.appendChild(document.getElementById(id));
  }

//------------------------------------------------------------------------------------------------------------------------------------------------

const allIngredients = getAllIngredients();
const startGameBtn = document.getElementById('newGameBtn');
const endGameBtn = document.getElementById('endGameBtn');
const submitAnswerBtn = document.getElementById('submitAnswerBtn');
const miniGameSection = document.getElementById('miniJogo');
const gameDiv = document.querySelector('.divsContainer');
const resultsDiv = document.getElementById('resultsDiv');
let updateTitle = document.getElementById('gameTitle');
let gameIngs = getAllIngredients();
let currGameIngs = [];
let ingsDiv = document.getElementById('ingsDiv');
let answerDiv = document.getElementById('answerDiv');
let currId = 1;
let score = document.getElementById('score');
let currScore = 0;

function startGame(){
    startGameBtn.style.display = 'none';
    resultsDiv.style.display = 'none';
    
    let randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
    let newTitle = document.createElement('p');
    let instructions = document.createElement('p');
    let randomRecipeIngredients = getRecipeIngredients(randomRecipe);

    newTitle.textContent = randomRecipe.title;
    updateTitle.textContent += newTitle.textContent;
    
    newTitle.style.color = 'goldenrod';
    newTitle.style.marginBottom = '20px';
    newTitle.style.fontSize = '2rem';
    instructions.textContent = randomRecipe.instructions;
    instructions.style.color = 'white';
    instructions.style.marginBottom = '100px';

    miniGameSection.appendChild(newTitle);
    miniGameSection.appendChild(instructions);

    setTimeout(function(){ 
        instructions.style.display = 'none';
        newTitle.style.display = 'none';
        gameDiv.style.display = 'inline-block';
        currGameIngs = getRecipeIngredients(randomRecipe);
        for(i = currGameIngs.length; i< 25; i++){
          currGameIngs.push(gameIngs[Math.floor(Math.random() * gameIngs.length)]);
        }
        currGameIngs.forEach(ing => {   
          let newIng = document.createElement('p');
          newIng.textContent = '\n' +ing;
          newIng.style.paddingTop = '20px';
          newIng.style.paddingBottom = '50px';
          newIng.id = 'p' + currId;
          newIng.draggable = 'true';
          newIng.ondragstart = function drag(ev) {
            ev.dataTransfer.setData("dragAndDropData", ev.target.id);
          };
          ingsDiv.appendChild(newIng);
          currId++;

          
        });

    }, 2000);

    
    submitAnswerBtn.onclick = function(){
      let answerDivElements = answerDiv.querySelectorAll('p');
      answerDivElements.forEach(elem => {
        if(randomRecipeIngredients.find(ing => ing === elem.innerText)){
          currScore += 10;
        }else{
          currScore -= 5;
        }
      });  
      resultsDiv.style.display = 'inline-block';
      score.textContent += currScore;
      gameDiv.style.display = 'none';
      startGameBtn.style.display = 'inline-block';
      endGame();
    }
    
    score.textContent = 'O seu Score foi: ';

}

function endGame(){
    startGameBtn.style.display = 'inline-block';
    gameDiv.style.display = 'none';
    updateTitle.textContent = 'Arraste os Ingredientes que pertencem à receita:';
    currId = 1;
    ingsDiv.innerHTML = "";
    answerDiv.innerHTML = "";
    currScore = 0
}


startGameBtn.addEventListener('click', startGame);
endGameBtn.addEventListener('click', endGame);


