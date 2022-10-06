/**
 * This function represents the Category class and its defined by its name/title.
 * @param {String} title
 */
function Category(title){
    if(!title || arguments.length !== 1 || typeof title !== 'string'){
      throw Error('Nome da Categoria inválido!');
    }
    this.title = title;
  }
  
  /**
   * This function represents the Categories class. Its consistes of an array of Category objects.
   */
  function Categories(){
    this.categories = [new Category("Truques e Dicas"), new Category("Receitas Portuguesas"), new Category("Receitas Saudáveis"), new Category("Sabores do Mundo")];
  }
  
  /**
   * This method adds a new Category to the array through its name
   * @param {String} newCatg
   */
  Categories.prototype.addCategory = function(newCatg){
      this.categories.push(new Category(newCatg));
  }
  
  /**
   * This method removes a specific element from the array (with the name of the Category to be removed).
   * @param {String} remCatg 
   */
  Categories.prototype.removeCategory = function(remCatg){
    this.categories = this.categories.filter(category => category.title.toLowerCase() !== remCatg.toLowerCase());
  }
  
  /**
   * This method edits a category's name.
   * @param {String} oldTitle 
   * @param {String} newTitle 
   */
  Categories.prototype.editCategoryName = function(oldTitle, newTitle){
    let found = this.categories.find(category => category.title.toLowerCase() === oldTitle.toLowerCase());
    found.title = newTitle;
  }
  
  Categories.prototype.findCategory = function(categoryName){
    let found = this.categories.find(category => category.title.toLowerCase() === categoryName.toLowerCase());
    return found;
  }


  
/**
 * This function represents the Category class and its defined by its name/title.
 * @param {String} title
 */
function Category(title){
    if(!title || arguments.length !== 1 || typeof title !== 'string'){
      throw Error('Nome da Categoria inválido!');
    }
    this.title = title;
  }
  
  /**
   * This function represents the Categories class. Its consistes of an array of Category objects.
   */
  function Categories(){
    this.categories = [new Category("Truques e Dicas"), new Category("Receitas Portuguesas"), new Category("Receitas Saudáveis"), new Category("Sabores do Mundo")];
  }
  
  /**
   * This method adds a new Category to the array through its name
   * @param {String} newCatg
   */
  Categories.prototype.addCategory = function(newCatg){
      this.categories.push(new Category(newCatg));
  }
  
  /**
   * This method removes a specific element from the array (with the name of the Category to be removed).
   * @param {String} remCatg 
   */
  Categories.prototype.removeCategory = function(remCatg){
    this.categories = this.categories.filter(category => category.title.toLowerCase() !== remCatg.toLowerCase());
  }
  
  /**
   * This method edits a category's name.
   * @param {String} oldTitle 
   * @param {String} newTitle 
   */
  Categories.prototype.editCategoryName = function(oldTitle, newTitle){
    let found = this.categories.find(category => category.title.toLowerCase() === oldTitle.toLowerCase());
    found.title = newTitle;
  }
  
  Categories.prototype.findCategory = function(categoryName){
    let found = this.categories.find(category => category.title.toLowerCase() === categoryName.toLowerCase());
    return found;
  }
  
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  /**
   * This method turns every word's first letter to upper case.
   * @param {String} s 
   */
  function formatString(s) {
    var formattedStr = s.toLowerCase().split(' ');
    for (var i = 0; i < formattedStr.length; i++) {
      formattedStr[i] = formattedStr[i].charAt(0).toUpperCase() + formattedStr[i].substring(1);     
    }
    return formattedStr.join(' '); 
  }
  
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  let categories = new Categories();
  
  const addCategoryBtn = document.getElementById('addCategory');
  const editCategoryBtn = document.getElementById('editCategory');
  const removeCategoryBtn = document.getElementById('removeCategory');
  
  /**
   * This function adds a new Category and creates the necessary elements in HTML.
   */
  function addCategoryPrompt(){
    let p = prompt('Insira o nome da categoria:');
    if(p !== null && p !== ""){
      let catgs = document.getElementById('categories');
      let newli = document.createElement('li');
      let newCatg = document.createElement('a');
      newCatg.href = '#' + p.toLowerCase();
      let newSection = document.createElement('div');
      newli.id = 'm' + p.replace(/\s/g, '').toLowerCase();
      newSection.id = p.replace(/\s/g, '').toLowerCase();
      let innerDiv = document.createElement('div');
      let title = document.createElement('h1');
  
      title.textContent = formatString(p);
      newSection.appendChild(innerDiv);
      innerDiv.appendChild(title);
      newCatg.textContent = p;
      newli.appendChild(newCatg);
      catgs.prepend(newli);
      document.body.insertBefore(newSection, document.body.childNodes[10]);
  
      newSection.classList.add('section');
      title.classList.add('sectionTitle');
  
      alert('Categoria adicionada com sucesso!')
      categories.addCategory(p);

  
    }else if(p === ""){
      alert('Categoria Inválida!');
    }else{
      return;
    }
  }
  
  /**
   * This method removes the chosen category html elements and changes it in the Categories collection collection
   */
  function removeCategoryPrompt(){
    let p = prompt('Insira a Categoria que pretende remover:');
    let cleanP;
    if(p !== null){
        cleanP = p.replace(/\s/g, '').toLowerCase();
    }else{
        return;
    }
    let removed = document.getElementById(cleanP);
    let menuRemoved = document.getElementById('m' + cleanP);
  
    if(p !== null && p !== ""){
      if(removed === null || menuRemoved === null){
        alert('Categoria inválida!');
        return;
      }else{
        removed.remove();
        menuRemoved.remove();
      }
      alert('Categoria removida com sucesso!');
      categories.removeCategory(p);
    }else{
      alert('Categoria inválida!');
    }
  }

  /**
   * This function edits the category title.
   */
  function editCategoryPrompt(){
    let p = prompt('Insira a Categoria que pretende editar e o seu novo nome:', "<nomedacategoria>|<novonome>");
    if(p === "<nomedacategoria>|<novonome>") return;
    if(p !== null && p !== ""){
      let campos = p.split("|");
      let cleanCategory = campos[0].replace(/\s/g, '');
      if(categories.categories.find(elem => elem.title.toLowerCase() === campos[0].toLowerCase())){
        if (p) {
          if (campos.length !== 2){
              alert("Dados mal introduzidos. Devia ser '<nomedacategoria>|<novonome>");
          }else {
            let editTitle = document.getElementById(cleanCategory).getElementsByTagName('h1')[0];
            let menuEdit = document.getElementById('m' + cleanCategory).getElementsByTagName('a')[0];
            let UpdateMenuID = document.getElementById('m' + cleanCategory);
            let updateDivID = document.getElementById(cleanCategory.toLowerCase());
            if(editTitle === null || menuEdit === null){
              return;
            }else{
              editTitle.textContent = formatString(campos[1]);
              menuEdit.textContent = formatString(campos[1]);
              alert('Categoria atualizada com sucesso!');
              categories.editCategoryName(campos[0], formatString(campos[1]));
              updateDivID.id = campos[1].toLowerCase();
              UpdateMenuID.id = 'm' + campos[1].toLowerCase();
              
            }
          }
        }
      }else{
        alert('Categoria inválida!');
      } 
    }
  }
  
  addCategoryBtn.addEventListener('click', addCategoryPrompt);
  removeCategoryBtn.addEventListener('click', removeCategoryPrompt);
  editCategoryBtn.addEventListener('click', editCategoryPrompt);


  //module.exports = Categories;