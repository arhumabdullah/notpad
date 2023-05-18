var text =document.getElementById("text");
function fSize(){
    var sValue = document.getElementById("fSize").value;
    console.log(sValue);
    switch(sValue){
        case "10px":
            text.style.fontSize = "10px";
            break;
            case "20px":
                text.style.fontSize="20px";
                break;
    }
}
