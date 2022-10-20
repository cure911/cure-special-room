var formContainer = document.querySelector(".form-container");
var gameContainer = document.querySelector(".game-container");

var gameModChose = document.querySelector(".game-mod-chose");
var gameModNamep = document.querySelector(".game-mod-name-p");

var titleTextChg = document.querySelector(".title-text-chg");

var valueName = document.querySelector(".value-name");
var valuePassword = document.querySelector(".value-password");
var valueSinir = document.querySelector(".value-sinir");

var olusturButton = document.querySelector(".olustur-buttons");
var ozelContainer = document.querySelector(".ozel-container");
olusturButton.onclick = function () {
    ozelContainer.style.display = "none";
    formContainer.style.display = "flex";
}

var geriGitButton = document.querySelector(".geri-git-button");
geriGitButton.onclick = function(){
    ozelContainer.style.display = "block";
    formContainer.style.display = "none";
}

gameModChose.onclick = function () {
    formContainer.style.display = "none";
    gameContainer.style.display = "flex";
    titleTextChg.innerHTML = "Game Mod Seçin";
};


function gameMod() {
    formContainer.style.display = "flex";
    gameContainer.style.display = "none";
    titleTextChg.innerHTML = "Özel Oda Oluştur";
}

var rifle = document.querySelector(".rifle");
var driveby = document.querySelector(".driveby");
var sniper = document.querySelector(".sniper");
var smg = document.querySelector(".smg");
var pistol = document.querySelector(".pistol");
var revolver = document.querySelector(".revolver");
var appistol = document.querySelector(".appistol");

rifle.onclick = function(){
    gameModNamep.innerHTML = "Rifle"
    gameMod();
}
driveby.onclick = function(){
    gameModNamep.innerHTML = "Drive-by"
    gameMod();
}
sniper.onclick = function(){
    gameModNamep.innerHTML = "Sniper"
    gameMod();
}
smg.onclick = function(){
    gameModNamep.innerHTML = "SMG"
    gameMod();
}
pistol.onclick = function(){
    gameModNamep.innerHTML = "Pistol"
    gameMod();
}
revolver.onclick = function(){
    gameModNamep.innerHTML = "Revolver"
    gameMod();
}
appistol.onclick = function(){
    gameModNamep.innerHTML = "Ap-pistol"
    gameMod();
}

var smurriseContainer = document.querySelector(".smurrise-container");
var olusturButton = document.querySelector(".olustur-button");

var lastLobyName = document.querySelector(".last-loby-name");
var lastLobyPassword = document.querySelector(".last-loby-password");
var lastLobySinir = document.querySelector(".last-loby-sinir");
var lastLobyMode = document.querySelector(".last-loby-mode");

var lastLobyRandom = document.querySelector(".last-loby-random");

var kacsinir = 2;

olusturButton.onclick = function(){
    if (gameModNamep.innerHTML !== "SEÇİLMEDİ") {
        if(valueName.value !== ""){
            if(valueName.value.length > 4 && valueName.value.length <11){
                if(valueSinir.value !== ""){
                    if(valuePassword.value !== ""){
                        if(Number(valueSinir.value)<2){
                            kacsinir = 2;
                        } else if(Number(valueSinir.value)>10){
                            kacsinir = 10;
                        }                    
                        smurriseContainer.style.display = "flex";
                        formContainer.style.display = "none";
                        lastLobyName.innerHTML = valueName.value;
                        lastLobyPassword.innerHTML = valuePassword.value;
                        lastLobySinir.innerHTML = kacsinir;
                        lastLobyMode.innerHTML = gameModNamep.innerHTML;
                        titleTextChg.innerHTML = "Onayla veya İptal Et";
                        lastLobyRandom.innerHTML = Math.floor(Math.random() * 10000) + 100;
                    }
                }
            }
        }
    }
}

var sonIptal = document.querySelector(".son-iptal");
sonIptal.onclick = function(){
    smurriseContainer.style.display = "none";
    formContainer.style.display = "flex";
}