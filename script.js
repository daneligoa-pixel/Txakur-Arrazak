// 1. Testu-Aldatzailea
function aldatuTestua() {
    document.getElementById("testu_aldagarria").innerText = "Testua aldatu da!";
}

// 2. Kolore Txandakatzailea (Estiloak JS-tik aplikatuz)
function aldatuKolorea() {
    const p = document.getElementById("kolore_aldagarria");
    p.style.color = (p.style.color === "red") ? "blue" : "red";
}

// 3. Elementuen Ezkutagailua (display propietatea aldatuz)
function txandakatuEzkutatzea() {
    const elem = document.getElementById("ezkutatu_hau");
    elem.style.display = (elem.style.display === "none") ? "block" : "none";
}

// 4. Batuketa Kalkulagailua
function batuketaEgin() {
    const a = Number(document.getElementById("zenbaki1").value);
    const b = Number(document.getElementById("zenbaki2").value);
    document.getElementById("emaitza4").innerText = a + b;
}

// 5. Testu-Gehitzailea (Elementu berriak sortzea)
function gehituElementua() {
    const textua = document.getElementById("elementu_berria").value;
    if (textua === "") return;

    const li = document.createElement("li");
    li.innerText = textua;
    document.getElementById("zerrenda_dinamikoa").appendChild(li);

    document.getElementById("elementu_berria").value = "";
}

// 6. Kontagailua (aldagai globalak erabiliz)
function kontatuKlik() {
    klikKopurua++;
    document.getElementById("kontagailu_emaitza").innerText = klikKopurua;
}

// 7. Zenbaki Asmatzearen Jokoa
function konprobatuZenbakia() {
    const erabiltzaileZenb = Number(document.getElementById("asmatutako_zenbakia").value);
    const emaitza = document.getElementById("joko_emaitza");

    if (erabiltzaileZenb === zenbakiSekretua) {
        emaitza.innerText = "🎉 Zorionak! Asmatu duzu!";
        zenbakiSekretua = Math.floor(Math.random() * 5) + 1; // berriro sortu
    } else {
        emaitza.innerText = "❌ Ez da zuzena. Saiatu berriro!";
    }
}

// 8. Atzeko Planoaren Kolore-Aldatzailea (Random)
function aldatuAtzekoPlanoarenKolorea() {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}
