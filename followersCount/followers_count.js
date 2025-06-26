let count = 0;

function increaseCount(){
    count ++;
    displayCount();
    checkCountValue()
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
}

function checkCountValue(){
    if(count === 10){
        alert('tu publi gano 10segidores')
    } else if (count=== 20){
        alert("tu publi gabo 20 seguidores")
    }
}



