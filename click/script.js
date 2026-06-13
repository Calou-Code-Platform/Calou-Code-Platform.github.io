let money = 0;
let click = 1;

function earn(){
    money = money + click;
    document.getElementById("money").value = money;
}

function buyUser1money(){
    if(money < 5){
        alert("你沒有錢購買!");
        return;
    }

    money = money - 5;
    document.getElementById("money").value = money;

    click = click + 1;
    document.getElementById("click_money").value = click;

    return;
}

function buyAuto1money(){
    if(money < 20){
        alert("你沒有錢購買!");
        return;
    }

    money = money - 20;
    document.getElementById("money").value = money;

    setInterval(function(){
        money = money + 1;
        document.getElementById("money").value = money;
    }, 1000);

    return;
}

function buyAuto10money(){
    if(money < 100){
        alert("你沒有錢購買!");
        return;
    }

    money = money - 100;
    document.getElementById("money").value = money;

    setInterval(function(){
        money = money + 10;
        document.getElementById("money").value = money;
    }, 1000);

    return;
}