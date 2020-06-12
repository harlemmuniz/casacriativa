function onOff() {
    document.querySelector("#modal").classList.toggle("hide")
}

function displayMenu(){
    var submenu = document.getElementById('submenu');
    if(submenu.style.display == 'block'){
      submenu.style.display = 'none';
    }else{
      submenu.style.display = 'block';
    }
    }