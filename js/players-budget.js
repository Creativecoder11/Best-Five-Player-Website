//Budget Part
document.getElementById('player-expense').addEventListener('click', function(){    
    const perPlayerCost = getInnerValue('player-cost');
    const playerNumber = document.querySelectorAll('li');
    const playerExpense = perPlayerCost * playerNumber.length;
    setTextFeild('expense-field',playerExpense);
})

//total expense
document.getElementById('total-expense').addEventListener('click', function(){
    const managerCost = getInnerValue('manager-cost');
    const coachCost = getInnerValue('coach-cost');
    const playerField = document.getElementById('expense-field');
    const playerCost = parseInt(playerField.innerText)
    const totalCost = managerCost + coachCost + playerCost;
    setTextFeild('total-cost-field',totalCost);
})
