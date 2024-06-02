let nameHero;
let matches;
let countV = 0;
let countD = 0;
let balance;

//função do botão enviar
function send(){
    nameHero = document.getElementById("nameHero").value;
    matches = document.getElementById("matchesHero").value;
    console.log(nameHero);
    console.log(matches);

    countV = 0;
    countD = 0;

    for(i=0;i<matches;i++){
        let randonNumber = Math.round(Math.random(0,1));
        if(randonNumber == 1){
            countV += 1;
        }
        else{
            countD += 1;
        }
    }

    showRank();
}





//função para exibir rankeamento do herói
function showRank(){
    balance = countV - countD;
    if(balance < 10){
        document.getElementById("result").innerHTML = "<p> O herói de nome " + nameHero + " tem um saldo de " + countV + " vitórias e " + countD + " derrotas. Seu nível atual é: Ferro </p>"
    }
    else if (balance >= 11 && balance <=20){
        document.getElementById("result").innerHTML = "<p> O herói de nome " + nameHero + " tem um saldo de " + countV + " vitórias e " + countD + " derrotas. Seu nível atual é: Bronze </p>"
    }
    else if (balance >= 21 && balance <=50){
        document.getElementById("result").innerHTML = "<p> O herói de nome " + nameHero + " tem um saldo de " + countV + " vitórias e " + countD + " derrotas. Seu nível atual é: Prata </p>"
    }
    else if (balance >= 51 && balance <=80){
        document.getElementById("result").innerHTML = "<p> O herói de nome " + nameHero + " tem um saldo de " + countV + " vitórias e " + countD + " derrotas. Seu nível atual é: Ouro </p>"
    }
    else if (balance >= 81 && balance <=90){
        document.getElementById("result").innerHTML = "<p> O herói de nome " + nameHero + " tem um saldo de " + countV + " vitórias e " + countD + " derrotas. Seu nível atual é: Diamante </p>"
    }
    else if (balance >= 91 && balance <=100){
        document.getElementById("result").innerHTML = "<p> O herói de nome " + nameHero + " tem um saldo de " + countV + " vitórias e " + countD + " derrotas. Seu nível atual é: Lendário </p>"
    }
    else if (balance >= 101){
        document.getElementById("result").innerHTML = "<p> O herói de nome " + nameHero + " tem um saldo de " + countV + " vitórias e " + countD + " derrotas. Seu nível atual é: Imortal </p>"
    }
}


