if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {

    var button = document.getElementsByClassName('stay-duration');
    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener('click',toggleDuration);
    }
    

}

function toggleDuration () {
    if (this.className === 'stay-duration passive'){
        document.getElementsByClassName('active')[0].className = 'stay-duration passive';
        this.className = 'stay-duration active';
    }
}