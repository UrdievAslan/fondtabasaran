function myFunction(x) {
  x.classList.toggle("change");
}



const volont = document.querySelector('.volont'),
      volontBlock= document.querySelector('.volont-block')
      helpBuy = document.querySelector('.help-buy'),
      gift = document.querySelector('.gift'),
      helpBlock = document.querySelector('.help-buy-block'),
      volontClose = document.querySelector('.volont-close'),
      helpClose = document.querySelector('.help-close'),
      anketLink = document.querySelector('.anket-link');

volont.addEventListener('click', (e) => {
  e.preventDefault()
  volontBlock.style.display = 'flex';
  console.log(e);
});

helpBuy.addEventListener('click', (e) => {
  e.preventDefault();
  helpBlock.style.display = 'flex';
  console.log(e);
})

volontClose.addEventListener('click', (e) => {
  volontBlock.style.display = 'none';
  console.log(e);
})



helpClose.addEventListener('click', (e) => { 
  e.preventDefault();
  helpBlock.style.display = 'none';
  console.log(e);
})



anketLink.addEventListener('click', () => {
  volontBlock.style.display = 'none';
})

