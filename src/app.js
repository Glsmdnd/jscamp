console.log("Merhaba Kodlama.io")
let dolarBugun=9.30
//js de type safe değildir.sayısal tanımladık sonrasında metin attık yazdı hatasız
let dolarDun=9.20
dolarDun="9.30"
{
    let dolarDun=9.10 
    //var dolardun globalgibi işlem görürdışarda ve içere
    //tanımlandığında içerdeki nin değerini yazarken
    //letde blok içine girmez
}
console.log(dolarDun)
const euroDun=11.2
//euroDun=11 yukarıda tipini verdiğini değştiremezsin
console.log(euroDun)
//array
let konutKredileri=["konut Kredisi","emlak Kredisi","kamu konut kredisi","özel kamu konut kredisi"]
console.log("<ul>")
for (let i=0;i<konutKredileri.length;i++)
{
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")
