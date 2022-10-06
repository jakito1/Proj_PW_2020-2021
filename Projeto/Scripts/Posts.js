const Comments = require('./Comments');
const Reactions = require('./Reactions');

/**
 * This function represents the Post class.
 * @param {String} title 
 * @param {String} image 
 */
function Post(category, title, image){
    if(typeof title !== 'string' || title === ''){
      this.title = 'No Title Needed';
    }else{
      this.title = title;
    }
    if(typeof image !== 'string' || image === ''){
      this.image = 'ND';
    }else{
      this.image = image;
    }
    //if(categories.find(catg => catg.title.toLowerCase() === category.toLowerCase())){
      this.category = category;
    //}else{
      //this.category = '';
    //}
    this.comments = new Comments();
    this.reactions = new Reactions();
    this.upvotes = 0;
    this.downvotes = 0;
  }

  const db = require('./dboperations');

  

module.exports = Post;


