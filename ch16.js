const left = document.querySelector(".left");
const right = document.querySelector(".right");
const f1 = document.querySelector(".f1");

// زر ok ثابت في آخر right
let ok = document.getElementById("ok");
if (!ok) {
    ok = document.createElement("button");
    ok.id = "ok";
    ok.textContent = "OK";
    ok.style.marginTop = "auto";
    ok.style.width = "100%";
    right.appendChild(ok);
}

function element(img, namep, dscrip, payp) {
    let card = document.createElement("div");
    card.classList.add("card");

    let image = document.createElement("img");
    let button = document.createElement("button");
    let namee = document.createElement("p");
    let scrip = document.createElement("h3");
    let pay = document.createElement("h4");

    image.src = img;
    button.innerHTML = `<img src="icon-add-to-cart.svg" alt="cart icon" style="width:16px; vertical-align:middle; margin-right:5px;"> Add to cart`;
    namee.textContent = namep;
    scrip.textContent = dscrip;
    pay.textContent = payp;

    button.onclick = function () {
        if (f1) f1.remove();

        let clone = card.cloneNode(true);

        const btnInClone = clone.querySelector("button");
        if (btnInClone) btnInClone.remove();

        let deletee = document.createElement("button");
        deletee.textContent = "DELETE";
        deletee.onclick = function (e) {
            e.stopPropagation();
            clone.remove();
           
        };
        clone.appendChild(deletee);

        
        right.insertBefore(clone, ok);

        ok.textContent = "OK";
    };

    card.appendChild(image);
    card.appendChild(button);
    card.appendChild(namee);
    card.appendChild(scrip);
    card.appendChild(pay);

    left.appendChild(card);
}


function updateTotalPay() {
    let total = 0;
    const cardsInRight = right.querySelectorAll(".card");
    cardsInRight.forEach(card => {
        let payText = card.querySelector("h4").textContent.trim();
        let number = parseFloat(payText.replace(/[^0-9.]/g, ""));
        if (!isNaN(number)) total += number;
    });
    ok.textContent = `Total: $${total.toFixed(2)}`;
}


// عند الضغط على زر ok يتم حساب المجموع
ok.onclick = function () {
    updateTotalPay();
};

// قائمة المنتجات
const products = [
    ["image-waffle-desktop.jpg", "waffle", "waffle with berries", "$6.50"],
    ["image-creme-brulee-desktop.jpg", "creme brulee", "Vanilla Bean Crème Brûlée", "$7"],
    ["image-macaron-desktop.jpg", "macaron", "Macaron Mix of Five", "$8"],
    ["image-tiramisu-desktop.jpg", "tiramisu", "Classic Tiramisu", "$5.50"],
    ["image-baklava-desktop.jpg", "baklava", "Pistachio Baklava", "$4"],
    ["image-meringue-desktop.jpg", "meringue", "Lemon Meringue Pie", "$5"],
    ["image-cake-desktop.jpg", "cake", "Salted Caramel Brownie", "$4.50"],
    ["image-brownie-desktop.jpg", "brownie", "Salted Caramel Brownie", "$5.5"],
    ["image-panna-cotta-desktop.jpg", "panna cotta", "Vanilla Panna Cotta", "$6.5"]
];

products.forEach(product => {
    element(...product);
});
