window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup_box").style.display = "block";
        },
        10
    )
});
    document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup_box").style.display = "none";
});