document.addEventListener("DOMContentLoaded", () => {
    let money = 0;
    let auto = 0;
    let click = 1;

    function updateArgs(target, count){
        if (target === "click") click += count;
        else if (target === "auto") auto += count;
        else if (target === "money") money += count;

        document.getElementById("money").innerHTML = `$${money}`;
        document.getElementById("auto").innerHTML = `$${auto} / per seconds`;
        document.getElementById("click").innerHTML = `+${click}`;
    }

    setInterval(() => {updateArgs("money", auto)}, 1000);

    const itemList = [
        {"id": "more-finger", "icon": "img/point.png", "title": "多一根手指", "description": "{type} +{earn}$", "type": "click", "earn": 1, "price": 50},
        {"id": "save-coin", "icon": "img/profit.png", "title": "存點硬幣", "description": "{type} +{earn}$", "type": "auto", "earn": 1, "price": 200},
        {"id": "training", "icon": "img/speed.png", "title": "鍛鍊身體", "description": "{type} +{earn}$", "type": "click", "earn": 10, "price": 500},
        {"id": "save-money", "icon": "img/money.png", "title": "存點鈔票", "description": "{type} +{earn}$", "type": "auto", "earn": 10, "price": 2000},
        {"id": "recruit", "icon": "img/point.png", "title": "雇用員工", "description": "{type} +{earn}$", "type": "click", "earn": 100, "price": 5000},
        {"id": "stock", "icon": "img/trend.png", "title": "炒股票", "description": "{type} +{earn}$", "type": "auto", "earn": 100, "price": 20000},
        {"id": "company", "icon": "img/product.png", "title": "開公司", "description": "{type} +{earn}$", "type": "auto", "earn": 200, "price": 40000}
    ];

    const shelves = document.getElementById("shelves");

    for(const v of itemList) {
        let item = document.createElement("div");
        item.setAttribute("class", "item");

        let left = document.createElement("div");
        left.setAttribute("class", "left");
        let icon = document.createElement("img");
        icon.src = v.icon;
        left.appendChild(icon);

        let center = document.createElement("div");
        center.setAttribute("class", "center");
        let title = document.createElement("div");
        title.setAttribute("class", "top");
        title.innerHTML = v.title;
        center.appendChild(title);
        let description = document.createElement("div");
        description.setAttribute("class", "bottom");
        description.innerHTML = (() => {
            let result = v.description;
            const type = {"click": "每次點擊", "auto": "每秒進帳", "give": "捐獻"};
            result = result.replaceAll("{type}", type[v.type]);
            result = result.replaceAll("{earn}", v.earn);
            return result;
        })();
        center.appendChild(description);

        let right = document.createElement("div");
        right.setAttribute("class", "right");
        right.innerHTML = `$${v.price}`;

        item.append(left);
        item.append(center);
        item.append(right);

        shelves.append(item);

        item.addEventListener("click", () => {
            if(money < v.price){
                alert("無法購買，錢包金額不足。");
                return;
            }

            if(v.type === "click") click += v.earn;
            else if(v.type === "auto") auto += v.earn;

            updateArgs("money", -v.price);
            
            v.price = Math.floor(v.price * 1.25);
            item.querySelector('.right').innerHTML = `$${v.price}`;

            updateArgs();

            return;
        });
    }

    document.getElementById("click-block").addEventListener("click", () => {
        updateArgs("money", click);
        return;
    });

    updateArgs();
});