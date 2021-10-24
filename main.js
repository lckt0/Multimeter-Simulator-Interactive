/*html etiketlerine ulaşmak için yazılan kodlar.*/
var katsayi1=document.getElementById("renk1");
var katsayi2=document.getElementById("renk2");
var katsayi3=document.getElementById("renk3");
var tolerans=document.getElementById("renk4");
var birim=document.getElementById("birim");
var goster=document.getElementById("goster");

/*seçim yapıldığında kutuyu boyamak için oluşturulan javascript dizisi*/
var renk=[
    {"arkaplan":"#000000","yazi":"#fff"},
    {"arkaplan":"#953700","yazi":"#fff"},
    {"arkaplan":"#FF0000","yazi":"#fff"},
    {"arkaplan":"#ff6600","yazi":"#000"},
    {"arkaplan":"#ffff00","yazi":"#000"},
    {"arkaplan":"#00ff00","yazi":"#fff"},
    {"arkaplan":"#0000ff","yazi":"#fff"},
    {"arkaplan":"#fe01fc","yazi":"#000"},
    {"arkaplan":"#999","yazi":"#000"},
    {"arkaplan":"#fff","yazi":"#000"}
];

/*töleransın renklerini göstermek için yapılan javascript dizisi*/
var toleransRenk=[
    {"arkaplan":"#9b3300","yazi":"#fff"},
    {"arkaplan":"#ff0000","yazi":"#fff"},
    {"arkaplan":"#ffcc01","yazi":"#000"},
    {"arkaplan":"#969a99","yazi":"#000"}
];

/*tek fonksyion içinde tanımlanabilirdi ama daha anlaşılır olması için tek tek yazdıldı. katsayi1 nesnesine tıklanınca çalışacak kodlar*/
katsayi1.onclick=function(){
    //console.log(renk[this.selectedIndex].arkaplan);
    this.style.backgroundColor=renk[this.selectedIndex].arkaplan;
    this.style.color=renk[this.selectedIndex].yazi;
    
    hesapla();
}

/*katsayı2 nesnesine tıklanınca çalışacak kodlar*/
katsayi2.onclick=function(){
    //console.log(renk[this.selectedIndex].arkaplan);
    this.style.backgroundColor=renk[this.selectedIndex].arkaplan;
    this.style.color=renk[this.selectedIndex].yazi;
    
    hesapla();
}

katsayi3.onclick=function(){
    //console.log(renk[this.selectedIndex].arkaplan);
    this.style.backgroundColor=renk[this.selectedIndex].arkaplan;
    this.style.color=renk[this.selectedIndex].yazi;
    
    hesapla();
}

birim.onclick=function(){
    
    hesapla();
}

tolerans.onclick=function(){
    //console.log(renk[this.selectedIndex].arkaplan);
    this.style.backgroundColor=toleransRenk[this.selectedIndex].arkaplan;
    this.style.color=toleransRenk[this.selectedIndex].yazi;
    
    hesapla();
}

function hesapla(){}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/*hesaplama yapıp ekrana yazdıran fonksiyonun gövdesi. direnç değerini hesaplama kısmı ve ekrana yazdırma*/
function hesapla2(){
    //Birleştirilen iki metinsel ifade Number ile sayısal değere dönüştürülüyor
    var birlestir=Number(katsayi1.value+katsayi2.value);/*dikkat metinsel iki ifade birleştiriliyor örn:33 gibi*/
    
    var sonuc=(birlestir*Math.pow(10,katsayi3.value))/1;
    
    var enaz=sonuc*(100-Number(tolerans.value))/100;
    var encok=sonuc*(100+Number(tolerans.value))/100;
    
    sonuc=randomInt(enaz, encok);
    
    sonuc=Math.ceil(sonuc/birim.value);
    
    var gosterge=birim.options[birim.selectedIndex].text;
    var multimeter_screen = document.getElementById("multimeter_valuebox");
    var multimeter_screen_valuetype = document.getElementById("multimeter_valuetype");
    
    multimeter_screen.innerHTML = sonuc;
    multimeter_screen_valuetype.innerHTML = gosterge;
    ///document.getElementById("multimeter_options").innerHTML = "<h3>Tolerans: "+tolerans.value+"%</h3>\n<h3>En az: "+enaz+"%</h3>\n<h3>En çok: "+encok+"%</h3>";
    /*goster.innerHTML="<h3>Direnç Değeri:"+sonuc+gosterge+"</h3>"+
    "<h3>Tölerans:%"+tolerans.value+"</h3>"+
    "<h3>Direnç Aralığı: "+enaz+gosterge+" - "+encok+gosterge+"</h3>";
    */ 
}

function tamEkran(){
    document.getElementById("fullscreen").requestFullscreen();
}