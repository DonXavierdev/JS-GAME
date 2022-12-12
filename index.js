//document.getElementById("count-el").innerText=count
firstcard=Math.floor(Math.random()*11)+1
secondcard=Math.floor(Math.random()*11)+1
mess=document.getElementById("message-el")
sum2=document.getElementById("sum-el")
cards=document.getElementById("card-el")
title=document.getElementById("title")
flag=0
function start(){
    if(flag==0){
    cards.textContent="Cards:"+firstcard+' '+secondcard
    sum=firstcard+secondcard
    sum2.textContent+=sum
    flag=1
    title1()}
}
function newcard(){
    thirdcard=Math.floor(Math.random()*11)+1
    cards.textContent+=' '+thirdcard
    sum+=thirdcard
    sum2.textContent="Sum:"+sum
    title1()}
function reset(){
        sum=0
        flag=0
        title.textContent='Want to play a round?'
        sum2.textContent="Sum:"
        cards.textContent="Cards:"
        firstcard=Math.floor(Math.random()*11)+1
        secondcard=Math.floor(Math.random()*11)+1
    }
function title1(){
    if(sum<21){
        title.textContent="keep trying"
    }
    else if(sum==21){
        title.textContent="Blackjack"
    }
    else{
        title.textContent="You lose"
    }
}
