function setListItem(setId,playerName){
    const listContainer = document.getElementById(setId);
    const li = document.createElement('li');
    li.innerText = playerName;
    const playerList = document.querySelectorAll('li');
    if(playerList.length <= 4){
        listContainer.appendChild(li);
    }
    else{
        alert('Bro!! You have already selected 5 players!');
    }
}
//disbled btn
function disableButton(btnId) {
    const btn = document.getElementById(btnId);
    btn.disabled = 'true';
}
// select player
document.getElementById('btn-neymar').addEventListener('click', function(){
    const getName = getInnerText('player-neymar');
    setListItem('players-list', getName);
    disableButton('btn-neymar');
})
document.getElementById('btn-messi').addEventListener('click', function(){
    const getName = getInnerText('player-messi');
    setListItem('players-list', getName);
    disableButton('btn-messi');
})
document.getElementById('btn-mbappe').addEventListener('click', function(){
    const getName = getInnerText('player-mbappe');
    setListItem('players-list', getName);
    disableButton('btn-mbappe');
})
document.getElementById('btn-ronaldo').addEventListener('click', function(){
    const getName = getInnerText('player-ronaldo');
    setListItem('players-list', getName);
    disableButton('btn-ronaldo');
})
document.getElementById('btn-salah').addEventListener('click', function(){
    const getName = getInnerText('player-salah');
    setListItem('players-list', getName);
    disableButton('btn-salah');
})
document.getElementById('btn-maria').addEventListener('click', function(){
    const getName = getInnerText('player-maria');
    setListItem('players-list', getName);
    disableButton('btn-maria');
})
document.getElementById('btn-ramos').addEventListener('click', function(){
    const getName = getInnerText('player-ramos');
    setListItem('players-list', getName);
    disableButton('btn-ramos');
})
document.getElementById('btn-pablo').addEventListener('click', function(){
    const getName = getInnerText('player-pablo');
    setListItem('players-list', getName);
    disableButton('btn-pablo');
})
document.getElementById('btn-icardi').addEventListener('click', function(){
    const getName = getInnerText('player-icardi');
    setListItem('players-list', getName);
    disableButton('btn-icardi');
})