window.onload = function(a)
{
    hidden();
    document.getElementById("btn").addEventListener("click", function showAlert(){
        alert("You push!");
    });
    
};

function hidden(){
    document.getElementById("helloWorld").style.display = "none";
}