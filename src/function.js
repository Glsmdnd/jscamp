function addToCart1(productName) {
    console.log("sepete eklendi: "+productName)

}
addToCart1()
//undifineddir.(nulla karıştırma ben aslında burda yoğum demek)
//sen aslında yukarda productName i parametre olarak söyledin ama
//bellekte buna ait birşey ne yazdın ne gönderdin
addToCart1("elma")
addToCart2("yumurta")
addToCart2(15)


function addToCart2(productName="elma") 
//product name gönderilmez ise defoult olarak elma gönder
{
    console.log("sepete eklendi: "+productName)
}
addToCart2()
addToCart2("yumurta")

function addToCart3(productName="elma",quantity) 
//product name gönderilmez ise defoult olarak elma gönder
{
    console.log("sepete eklendi:"+productName+" adet: "+quantity)
}

addToCart3("yumurta",15)
addToCart3(15)
//olduğunda patlar ürün adına 15 yazar quantity ise boş geçer undefined
//sepete yumurta adet 15 eklendi!
//sepete 15 undefined eklendi!fakat biz defoult değer olan elmayı sona yazarsak
//problem kalkar adam sadece adet girerse def. olarak elma gelir
//bu yüzden fonksiyonlarda default. değerini parametre tamınında sona yazarız

function addToCart4(quantity,productName="elma") 
//product name gönderilmez ise defoult olarak elma gönder
{
    console.log("sepete eklendi:"+productName+" adet: "+quantity)
}

addToCart4(15)
addToCart4("limon")
//çağrıdaki parametreler sırasıyla yerleşir

let sayHello=()=> //arrow func
{
console.log("hello word")
//fonksiyonu bir değişkene atama   
}
sayHello()

let sayHello2=function () 
{
console.log("hello word")
//fonksiyonu bir değişkene atama   
}
sayHello2()

//bi ürünü sepete eklediğimizd eismini,fiyatnı,adedt bilgisi
//sepete ekle derken bu bilgileri alırız
function addCart5(productName,quantity,unitPrice)
{

}
//farklı sayfalardan çağırdığımızı düşünelim
addCart5("Elma",5,9)//bir sayfada elma
addCart5("Armut",10,10)//başka sayfada armut ekledik
addCart5("bal",3,200)

//bu fonk türü kullanılmaması gerek çünkü gönderirken sırasını
//karıştırabiliriz gibi kullanışsız
//3 parametreyi ayrı ayrı geçmek yerine

//3 özelliği olan objeler oluşturmayı tercih etmeliyiz 
let product1={productName:"elma",quantity:5,unitPrice:10}
function addToCart6(product)
//farklı servislerden farklı data türleride gelebilirdi.Bu daha iyi (encapculation)
{
console.log("ürün:"+product.productName)
console.log("adet:"+product.quantity)
console.log("fiyat:"+product.unitPrice)
}

//Değişkenler iyiye ayrılır,değer ve referans tip değşken switchindeki farka bakalım 
//referans tipte değişken objedir(objeler,diziler)
//nesne adresinin alanı ile ilgilenirken

addToCart6(product1)
let product2={productName:"elma",quantity:5,unitPrice:10}//101
let product3={productName:"elma",quantity:5,unitPrice:10}//102
product2=product3 //prod2 ninde adresi artık102
product2.productName="karpuz"//102 nin prod.nam i karpuz diye okunur
console.log(product3.productName)

//bellekte bulunan stack ve heap alanlarımızda  Stackte 101.adresde let product2 
//heapte ise 101 adreste {productName:"elma",quantity:5,unitPrice:10}olsun
//stack 102 deaynı şekilde let product3 //heap 102 de {productName:"elma",quantity:5,unitPrice:10}
//switch işlemindenden sonra
//çıktı karpuzdur çünkü referans ettiği şey bir nesnenin adresiydi burada 
//artık product2 nin ref num(101) artık product3 ün  ün ref num ile aynı 
//adresi tutar.yani prod2 ve prod 3 (102) olur.Buyüzden karpuz ikisi içinde geçerli

let sayi1=10
let sayi2=20
sayi1=sayi2
sayi2=100
console.log(sayi1)

//değer tipte değişken sayısalar basit değerlerdir
//buradaki swtich işleminde isedeğişken belleğin sadece stack yapısında tanımlanır
//101.adresde sayı1=10 var
//102.adresde sayı2=20 var 
//değer tiplerde atama yaptığında değeri atarsın (kendini değil)işin biter.
//sayi1=sayi2 switchinde sayi1 in artık değeri sayi iki dersin biter
//sayi1 değeri 20 olduğundan çıktı 20 dir (sayı2 ise 100)

function addtoCart7(x) {
    console.log(x)//addtocart7(products) tan sadece referansları alır
}
//şimdi buraya ürünler göndericez ama her bir ürün aslında kendi içinde birer
//nesne atıyorum vatan bilg sitesine girdin birden fazla objenin bilgisayarın olduğu bir
//alan her objenin içinde kendine has özellikleride var bu yüzden nesnenin özellik
//lerini tanımlarken ve birden fazla nesnein olduğunu göze alarak array içinde nesne tanımlıyoruz
let products=[
{productName:"elma",quantity:5,unitPrice:10},
{productName:"elma",quantity:5,unitPrice:10},
{productName:"elma",quantity:5,unitPrice:10}
]
//buradaki olay alışveriş sitelerinde bunun yanında bunuda al mantığı yan ürün önergesi
//bunu alanlar bunlarıda aldı bunlarıda sepete ekle birden fazla ürün sepete atılması mantığı
//dolayısıyla bu çoklu ürünleri tektek fonk atamıcamıza göre arrayın içinde atarız
addtoCart7(products)//aslında burada x e referansları göndermiş oluruz

function add0(number1,number2)
{
    console.log(number1+number2)
}
add(20,30)

//yönetim karar değiştirdi ikitane yaptık ama belki adam 1 belki daha fazla sayı gönderebilirse;

function add1(number1,number2,number3)
{
    console.log(number1+number2+number3)
}
function add2(number1,number2,number3,number4)
{
    console.log(number1+number2+number3+number4)
}
//bu şekilde bir işlem yapılması mantıklı değildir.
//bunun yerine bize kaç tane yanyana sayı toplanılması isteniyorsa paramet olarak ver

function add(...numbers)//rest işlemi önünde ... varsa
//Not:...numbers)  operatoru dışında başka birşey var ise önce o yazılır x,..numbers gibi
//aşağıda agönderdiğim parametreler burada array benzeri bir yapı ile tutulur
{
    let total=0;
    for (let i = 0; i < numbers.length; i++) {
         total=total+numbers[i]
        
        
    }
    console.log(total)
}
add(20,30)//let numbers[20,30] gibi arrayleyip funk parametresine gönder buna rest denir
add(20,30,40)
add(20,30,40,50)//funct. gönderilen bu sayıları numbers ismiyle array yap  gönder

function addex(birsey,...numbers)
{
    let total=0;
    for (let i = 0; i < numbers.length; i++) {
         total=total+numbers[i]
        
        
    }
    console.log(total) //burayada kalanlar gittiğinden 30 ve 40 kalır o yansır
    console.log(birsey)//birseye 20 gider
    //en sonda 20+30+40+20=90
}
add(20,30,40)//birseye 20 gider kalanlar ise numbers restine gider dolayısı ile

console.log(Math.max(30,10,500,600,120))//console.log(Math.max(30,10,500,600,120))
//bana ne gönderirsen ben onları içerdie arraye çeviririm ve en büyüğünü sana veririm cvp 600

//bizim elimizde bir veri var ve bu veri backendden geliyor yani apiden geliyor 
//sayıları ordan aldığımızı varsayalım sayı dizisi aldığımzı var sayalım
let numbers=[30,10,500,600,120]//elimdeki veri ayrı ayrı parametreler şeklinde değil bir dizi
//bu yüzden bunu ayırarak göndermeliyiz restin tam tersi seperate ayırma yapmalıyız
console.log(Math.max(...numbers))//üstteki  yapıyı kullanmadık çünkü verilerback end apiden array olrk gelebilir
//seperate ayrıştırır , rest toparlar


let isciler=[
    {workername:"ali",workersurname:" Yılmaz",workercender:"Erkek",workerpn:"055445",workeradd:"GürselMah kağıthane",workerjob:"bilg-müh",workerlang:"Kürtçe",workerhobby:"uçurtma yapmak"},
    {workername:"ayşe",workersurname:" Yılmaz",workercender:"Erkek",workerpn:"055445",workeradd:"GürselMah kağıthane",workerjob:"bilg-müh",workerlang:"Kürtçe",workerhobby:"uçurtma yapmak"},
    {workername:"ahmet",workersurname:" Yılmaz",workercender:"Erkek",workerpn:"055445",workeradd:"GürselMah kağıthane",workerjob:"bilg-müh",workerlang:["Kürtçe","Lazca"],workerhobby:"uçurtma yapmak"}
           ]      
         
           
for (let i = 0; i < isciler.length; i++)
 {
   console.log(isciler[i])
   
   if (isciler[i].workername=="ahmet") 
   {
         
      
       for (let y= 0; y< isciler[i].workerlang.length; y++) 
       {
           let y1 = isciler[y];
        
           
            if(isciler[i].workerlang[y]=="Lazca")
            {
                let abd=(isciler[i].workerlang)
                let aba=(isciler[i].workerlang.length)
            }
            
       }
     
   }
   else if (isciler[i].workername=="ali") 
   {
    let ah=(isciler[i].workerhobby)
   }
}

console.log("Ali'nin hobisi:"+ah)
console.log("Ahmet'in Bildiği Diller:"+aba+" tanedir. Onlar: "+abd)

 function workers(workersİnfo)
 {
    for (let i = 0; i <workersİnfo.length; i++)
     {
    
        console.log(workersİnfo[i])
        if (workersİnfo[i].workername=="ayşe")
        {
            let a=workersİnfo[i].workerhobby;
            
        }
        else if (workersİnfo[i].workername=="ahmet") 
        {
            let abd=(isciler[i].workerlang)
        }
        let abt=workersİnfo[i].workerlang.length
    }  
    console.log("Ayşe'nin Hobisi:",a)
    console.log("Ahmet'in Bildiği Diller: "+abt+" tanedir. Onlar: "+abd)
   
}
let worker=[
    {workername:"ali",workersurname:" Yılmaz",workercender:"Erkek",workerpn:"055445",workeradd:"GürselMah kağıthane",workerjob:"bilg-müh",workerlang:"Kürtçe",workerhobby:"uçurtma yapmak"},
    {workername:"ayşe",workersurname:" Yılmaz",workercender:"Erkek",workerpn:"055445",workeradd:"GürselMah kağıthane",workerjob:"bilg-müh",workerlang:"Kürtçe",workerhobby:"elma soymak"},
    {workername:"ahmet",workersurname:" Yılmaz",workercender:"Erkek",workerpn:"055445",workeradd:"GürselMah kağıthane",workerjob:"bilg-müh",workerlang:["Kürtçe","Lazca"],workerhobby:"ağacaselam vermek"}
]  
 workers(worker)
 //distructing bir array içinde tanımlanan nesneleri elemanları tam karşı sırasındaki değşkene atar.
//=liğin sol tarafındaki değişkenleri [] arasına almak zorundayız


//soner çetinkayahocam şöyle de olabilir regions kalsa[icAnadolu,marmara,karadeniz] = regions desek de olur
//Önder ALKAN​@soner çetinkaya genelde öyle kullanılır çünkü regions arrayi servisten gelir genelde
// çetinkaya@Önder ALKAN dimi daha kolay
//Önder ALKAN ama bundan ziyade bunun birde object için olanı var. object destruction. hatta js dosyalarında import statement larda çok kullnaılır.
let [doguAnd,akdeniz,ege]=[
    {name:"Doğu Anadolu",population:"15M"},
    {name:"Akdeniz",population:"18M"},
    {name:"Ege",population:"10M"}
]
console.log(doguAnd.name)
console.log(akdeniz.population)
console.log(ege)
//bir array yada objedeki */ 
///alanları farklı farklı değişkenlere atıp uygulamanın 
//devamında o değişken isimleri ile kullanma yöntemi
//apilerden gelen veri formatına göre gelen veriyi hızlıca parçalamak istiyoruz
//apiyi yazan arkadaş geldi dediki bide bunlara array olarak şehir ekleyelim
//icAnadolu sehirlerinin karşılığı array["ankara,konya"]

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirleri]]=[
    {name:"İç Anadolu",population:"15M"},
    {name:"Marmara",population:"18M"},
    {name:"Karadeniz",population:"10M"},
    [
        ["ankara","konya"],
        ["istanbul","bursa"],
        ["ordu","trabzon"]

    ]
]
console.log(icAnadolu.name)
console.log(icAnadolu.population)
console.log(marmara)
console.log(karadeniz)
console.log(icAnadoluSehirleri)
console.log(marmaraSehirleri)

//
let product4={productName:"Elma",unitPrice:5,quantity:2}
console.log(product4)
//bu objeninde elemanlarını değişkenlere atamak istiyorsak//dikkat yukarıdaki array di bu obje
//değişkenlerimizi tanımlayalım
//amaç burada productName altta console.log(product4) yazıdğımız yerde console.log(productName) yazıp
//parçalamak gibi
//arrayda köşeli parantez kullanıyorduk objede obje notasyonu kullanmak zorundayız
//Not=burada yazdığımız let fonksiyonu altına yazdığımız süslü parantez içindeki işlemleri kod bloğu zanneder
//bu yüzden bunları paranteze almalıyız
let proName,unPrice,quant
({productName:proName, productName:unPrice,quantity:quant}={productName:"elma",unitPrice:5,quantity:2})
console.log(proName)
let numberss =[10,20,[30,40]]
let a,b,c,d;
[a,b,[c,d]]=numberss
console.log(d*2)//80

function somefunction([x],y,z=10)
{
    console.log(x)
}
somefunction([10000,20000],30000)
//z de 10 //y de 30000 //x de 10000 yaza

