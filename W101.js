if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {

    var slideshow = document.getElementsByClassName('gallery-container')[0];
    slideshow.addEventListener('click',showSlideShow)

    var cross = document.getElementsByClassName('cross-box')[0];
    cross.addEventListener('click', closeSlideshow);

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
    
    updateMinCin();
    updateMinCout();

    document.getElementById('cinDate').addEventListener('change', updateMinCout);
    document.getElementById('coutDate').addEventListener('change', checkMinCout);

    var info = document.getElementsByClassName('open-info');
    for (var i = 0; i < info.length; i++) {
        var button = info[i];
        button.addEventListener('click', openSection)
    }

    var info = document.getElementsByClassName('close-info');
    for (var i = 0; i < info.length; i++) {
        var button = info[i];
        button.addEventListener('click', closeSection)
    }

    var info = document.getElementsByClassName('open-faq');
    for (var i = 0; i < info.length; i++) {
        var button = info[i];
        button.addEventListener('click', openFAQ)
    }

    var info = document.getElementsByClassName('close-faq');
    for (var i = 0; i < info.length; i++) {
        var button = info[i];
        button.addEventListener('click', closeFAQ)
    }
}

function showSlideShow (event) {
    document.getElementsByClassName('slideshow-main-container')[0].style.display = 'block';
    document.getElementsByClassName('page-container')[0].style.display = 'none';
}

function closeSlideshow(event) {
    document.getElementsByClassName('slideshow-main-container')[0].style.display = 'none';
    document.getElementsByClassName('page-container')[0].style.display = 'block';
}

function updateMinCin () {
    var today = new Date().toISOString().split('T')[0];
    document.getElementById("cinDate").setAttribute('min', today);
    document.getElementById('cinDate').value = today;
    updateMinCout();
}

function updateMinCout () {
    var cinDate = new Date(document.getElementById('cinDate').value);
    var today = new Date();
    var d = Math.round((cinDate.getTime() - today.getTime())/(24*60*60*1000));
    if (d < -1){
        updateMinCin();
    } else {
    var coutDate = new Date(cinDate.getTime()+(7*24*60*60*1000)).toISOString().split('T')[0];
    document.getElementById('coutDate').value = coutDate;
    document.getElementById("coutDate").setAttribute('min', coutDate);
    }
}

function checkMinCout () {
    var minCoutDate = new Date(document.getElementById('cinDate').value);
    var coutDate = new Date(document.getElementById('coutDate').value);
    var d = Math.round( ( (coutDate.getTime() - minCoutDate.getTime() )/ (24*60*60*1000) ) );
    console.log(d);
    if (d < 7) {
        updateMinCout();
    } else {
        updateTotalCost();
    }
}

function calcDuration () {
    var cinDate = new Date(document.getElementById('cinDate').value);
    var coutDate = new Date(document.getElementById('coutDate').value);
    var duration = Math.round((coutDate.getTime()-cinDate.getTime())/(24*60*60*1000));
    return duration;
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
    if (value > 4) {
        buttonClicked.disabled = true;
    }
    buttonClicked.parentElement.parentElement.getElementsByClassName('productQty')[0].value = value;
    updateTotalCost();    
}

function decrementValue(event) {
    var buttonClicked = event.target;
    var value = buttonClicked.parentElement.parentElement.getElementsByClassName('productQty')[0].value;
    value--;
    buttonClicked.parentElement.parentElement.getElementsByClassName('productQty')[0].value = value;
    console.log(value);
    if (value == 0 ) {
        buttonClicked.parentElement.parentElement.parentElement.style.display = 'none';
        buttonClicked.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('select-btn')[0].style.display = 'flex';
    } else if (value == 4) {
        buttonClicked.parentElement.parentElement.getElementsByClassName('plus')[0].getElementsByTagName('button')[0].disabled = false;
    }
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
    var duration = calcDuration();
    gtotal = total*duration;
    document.getElementsByClassName('costing-value')[0].innerText = '₹' + gtotal;
}

function openSection (event) {
    var buttonClicked = event.target;
    
    buttonClicked.style.display = 'none';
    buttonClicked.parentElement.getElementsByClassName('close-info')[0].style.display = 'block';

    var section = buttonClicked.parentElement.parentElement.getElementsByClassName('info-details')[0];
    section.style.fontSize = '1em';
    section.style.height = '15em';
    section.style.padding = '1em 1em';
}

function closeSection (event) {
    var buttonClicked = event.target;
    
    buttonClicked.style.display = 'none';
    buttonClicked.parentElement.getElementsByClassName('open-info')[0].style.display = 'block';

    var section = buttonClicked.parentElement.parentElement.getElementsByClassName('info-details')[0];
    section.style.fontSize = '0em';
    section.style.height = '0em';
    section.style.padding = '0em';
}

function openFAQ (event) {
    var buttonClicked = event.target;
    
    buttonClicked.style.display = 'none';
    buttonClicked.parentElement.getElementsByClassName('close-faq')[0].style.display = 'block';

    var section = buttonClicked.parentElement.parentElement.getElementsByClassName('info-details')[0];
    var value = section.id;
    console.log(value);
    section.style.fontSize = '1em';
    section.style.height = value;
    section.style.padding = '1em';
}

function closeFAQ (event) {
    var buttonClicked = event.target;
    
    buttonClicked.style.display = 'none';
    buttonClicked.parentElement.getElementsByClassName('open-faq')[0].style.display = 'block';

    var section = buttonClicked.parentElement.parentElement.getElementsByClassName('info-details')[0];
    section.style.fontSize = '0em';
    section.style.height = '0em';
    section.style.padding = '0em';
}