function adduser(){
    player1_name=document.getElementById("p1name").value;
    player2_name=document.getElementById("p2name").value;

    localStorage.setItem("p1name",player1_name);
    localStorage.setItem("p2name",player2_name);

    window.location="gamepage.html";
}