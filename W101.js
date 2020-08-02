if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {

    var addRoomButtons = document.getElementsByClassName('select-btn');
    for (var i = 0; i < addRoomButtons.length; i++) {
        var button = addRoomButtons[i];
        button.addEventListener('click', addRoom)
    }

    var plusButtons = document.getElementsByClassName('plus');
    for (var i = 0; i < plusButtons.length; i++) {
        var button = plusButtons[i];
        button.addEventListener('click',incrementValue)
    }

    var minusButtons = document.getElementsByClassName('minus');
    for (var i = 0; i < minusButtons.length; i++) {
        var button = minusButtons[i];
        button.addEventListener('click',decrementValue)
    }


}

function addRoom(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.style.display = 'none';
    var addButton = buttonClicked.parentElement.parentElement.getElementsByClassName('select1-btn')[0];
    addButton.style.display = 'flex';
    addButton.getElementsByClassName('productQty')[0].value = 1;
    updateTotalCost();
}

function incrementValue(event) {
    var buttonClicked = event.target;
    var value = buttonClicked.parentElement.parentElement.getElementsByClassName('productQty')[0].value;
    value++;
    buttonClicked.parentElement.parentElement.getElementsByClassName('productQty')[0].value = value;
    updateTotalCost();    
}

function decrementValue(event) {
    var buttonClicked = event.target;
    var value = buttonClicked.parentElement.parentElement.getElementsByClassName('productQty')[0].value;
    value--;
    buttonClicked.parentElement.parentElement.getElementsByClassName('productQty')[0].value = value;
    updateTotalCost();
} 

function updateTotalCost() {
    var cartItemContainer = document.getElementsByClassName('room-qty-container');
    var total = 0;
    for (var i = 0; i < cartItemContainer.length; i++) {
    var price = parseInt(cartItemContainer[i].getElementsByClassName('room-price')[0].innerText.replace('₹',''))
    var qty = parseInt(cartItemContainer[i].getElementsByClassName('productQty')[0].value)
    total = total + price*qty;
    }
    document.getElementsByClassName('costing-value')[0].innerText = '₹' + total;
}

/*
<script>
function addRoom(){
    document.getElementById('select-btn').style = "display : none;";
    document.getElementById('number-btn').style = "display : flex;";
    document.getElementById('productQty').value = "1";
}

function incrementValue(){
    var value = parseInt(document.getElementById('productQty').value, 10);
    if(value == "5")
    {
        document.getElementById('plus-btn').style.pointer = 'none';
    }
    value++;
    document.getElementById('productQty').value = value;
    }
function decrementValue()
{
    var value = parseInt(document.getElementById('productQty').value, 10);
    if(value == "1") {
        document.getElementById('select-btn').style = "display : flex;";
        document.getElementById('number-btn').style = "display : none;";
        document.getElementById('productQty').value = "0";
    }
    else {
    value--;
    document.getElementById('productQty').value = value;
    }
}
</script>*/