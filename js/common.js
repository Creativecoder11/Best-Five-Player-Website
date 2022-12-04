function getInnerText(getId){
    const playerNameField = document.getElementById(getId);
    const playerName = playerNameField.innerText;
    return playerName;
}
//get InnerValue
function getInnerValue(getId){
    const playerNameField = document.getElementById(getId);
    const playerName = parseInt(playerNameField.value);
    return playerName;
}
//set text field
function setTextFeild(setId,value){
    const setField = document.getElementById(setId);
    setField.innerText = value;
}
