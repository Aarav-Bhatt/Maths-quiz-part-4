p1_name=localStorage.getItem("p1name");
p2_name=localStorage.getItem("p2name");

player1_score=0;
player2_score=0;

document.getElementById("l1").innerHTML=p1_name;
document.getElementById("l2").innerHTML=p2_name;
document.getElementById("p1score").innerHTML=player1_score;
document.getElementById("p2score").innerHTML=player2_score;
document.getElementById("lquestion").innerHTML="questionturn" +p1_name;
document.getElementById("lans").innerHTML="ansturn" +p2_name;

function send() {
    get_word=document.getElementById("text").value;
    word=get_word.toLowerCase();

    

    CharAt1= word.charAt(1);

    

    lenth_divide_2=Math.floor(word.length/2);

    CharAt2=word.charAt(lenth_divide_2);

   

    length_minus_1= word.length-1;
    CharAt3=word.charAt(length_minus_1);
   

r_1=word.replace(CharAt1,"_");
r_2=r_1.replace(CharAt2,"_");
r_3=r_2.replace(CharAt3,"_");

question="question: <h4 id='h4'>"+r_3+"</h4>";

textbox="<br> answer: <input type ='text' id='textbox'>";
button="<br> <button  onclick='check()'>Check</button>";
row=question+textbox+button;
document.getElementById("d1").innerHTML=row;
document.getElementById("text").value="empty";



}