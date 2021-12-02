//set up the store
const store = Redux.createStore(moodReducer);
//variable needed to renderIMG
const img = document.getElementById('img');

/// Buttons
document.getElementById('happy').addEventListener('click', function (e) {
  store.dispatch({ type: 'HAPPY', payload: '(^_^)' }); 
});

document.getElementById('sad').addEventListener('click', function (e) {
  store.dispatch({ type: 'SAD' , payload: '⊙︿⊙'});
 
});

document.getElementById('angry').addEventListener('click', function (e) {
  store.dispatch({ type: 'ANGRY', payload:'ಠ▃ಠ' });
  
});

document.getElementById('confused').addEventListener('click', function (e) {
  store.dispatch({ type: 'CONFUSED', payload: 'ఠ_ఠ' });

});

function renderImg() {
    img.innerHTML = store.getState().img;
  }
  
  renderImg()
  store.subscribe(renderImg)