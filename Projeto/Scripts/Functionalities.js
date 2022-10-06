const DarkModeBtn = document.getElementById('darkMode');

/**
 * This function allows the client to switch the website theme between dark (black background) and light (white background) modes.
 */
DarkModeBtn.addEventListener('click', () => {
  let sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    if(section.style.backgroundColor === 'white'){
      section.style.backgroundColor = 'black';
      DarkModeBtn.innerHTML = '<button id="darkMode"><i class="fa fa-sun-o" aria-hidden="true"></i></button>';
    }else{
      section.style.backgroundColor = 'white';
      DarkModeBtn.innerHTML = '<button id="darkMode"><i class="fa fa-moon-o" aria-hidden="true"></i></button>'; 
    }
  })
});

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

