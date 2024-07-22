var listc = {} // COOKIES DATA
var maps = { 
    "ICE":["oeoooo","ooeooo","eooooo","eeoooo"],
    "FIRE":["oeeoeo","eeeoeo","oooeeo","eooeeo"],
    "GROUND":["oeeeoe","ooeeoe","eeoeoe","eoeeoe"],
    "DRAGON":["oooooo"],
    "FIGHTING":["eeeoee","oooeee","oeoeee","eooeee"],
    "FLYING":["ooeoee","eeooee","oeeoee","eoeoee"],
    "POISON":["ooooee","eoooee","oeooee","eeeeoe"],
    "ROCK":["oeoeoe","oooeoe","eooeoe","oeeooe","eeeooe"],
    "BUG":["eoeooe","oeoooe","ooeooe","eeoooe"],
    "GHOST":["oooooe","eeeeeo","eooooe","oeeeeo"],
    "STEEL":["oeoeeo","ooeeeo","eoeeeo","eeoeeo"],
    "WATER":["ooeoeo","oeooeo","eoeoeo","eeooeo","eoooeo"],
    "GRASS":["ooooeo","eoeeoo","oeeeoo","eeeeoo"],
    "ELECTRIC":["oeoeoo","ooeeoo","eooeoo","eeoeoo"],
    "PSYCHIC":["oeeooo","eeeooo","eoeooo","oooeoo"],
    "DARK":["eeoeee","ooeeee","eoeeee","oeeeee","eeeeee"]
}
function funny(ivs){
    var hp = getHP(ivs)
    var opt = []
    for(let i=0; i < 6; i++){
        var those = getMAP(ivs)
        var a = those.split("");
        //console.log()
        if(a[i] == "o"){
            a[i]="e"
        }else{
            a[i]="o"
        }
        //a[i-1] = those.charAt(i) == "o" ? "e" : "o";
        a = a.join("")
        //console.log(a)
        for(im in maps[hp]){
            if(maps[hp][im] == a){
                a = those.split("");
                a[i] = "n"
                a = a.join("")
                opt.push(a)
            }
        }
    }
    return opt
}
function observer(id){ // it works, so I won't touch it, lmao
    var targetElement = document.getElementById(id);
    var config = { characterData: true, subtree: true};
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'characterData') {
                reload('typelabel','ii')
            }
        });
    });
observer.observe(targetElement, config);
}
function rreload(){
    reload('typelabel','ii')
    observer('typelabel')
    reload('hid2','i')
}
function reload(special,t){
    var list = {}
    var stats2 = [];
    for (let i = 0; i < 6; i++){
        stats2[i] = Math.round(document.getElementById(t+i).value)
    }
    list[t] = stats2
    document.getElementById(special).innerHTML = getHP(list[t])
    return getHP(list[t])
}
function stat(obj,number,t,label){
    var ivs = []
    for (let i = 0; i < 6; i++){
        ivs[i] = Math.round(document.getElementById(t+i).value)
    }
    document.getElementById(label).innerHTML = getHP(ivs)
}
function getMAP(stats){
    var odd = ""
    for (let i in stats) {
        odd = stats[i]%2==0 ? odd+"e" : odd+"o"
    }
    return odd
}
function getHP(stats){
    var v = getMAP(stats)
    for (let i in maps) {
        for (let ia in maps[i]) {
            if(v==maps[i][ia]){return i}
        }
      }
    return "ERROR"
}
/* BUTTON */
function popup(){
    loadobjects()
    if( document.getElementById("button").classList.contains('buttond') ){
        document.getElementById("button").classList.remove('buttond')
    }else{document.getElementById("button").classList.add('buttond')}
    return 0
}
function saveOpen(obj){
    if( obj.parentNode.parentNode.classList.contains('opened') ){
        obj.parentNode.parentNode.classList.remove('opened')
        obj.parentNode.querySelector("#minput").disabled = true
    }else{
        obj.parentNode.parentNode.classList.add('opened')
        obj.parentNode.querySelector("#minput").disabled = false
    }
    return 0  
}
function removeOpen(num){
    removeData("saves","pokemons",num)
    loadobjects()
}
function saveDataPart(name, id, value, adiv){
    if(name == "name"){
        listc.pokemons[id][0] = value
    }else{
        listc.pokemons[id][1][adiv] = value
    }
    save("saves")
}
/* Button for cookies */
function create(){
    var ivs = []
    var name = document.getElementById("namesto").value
    document.getElementById("namesto").value = ""

    for (let i = 0; i < 6; i++){
        ivs[i] = Math.round(document.getElementById("i"+i).value)
    }
    for (let i = 0; i < 6; i++){
        document.getElementById("i"+i).value = 31
    }
    addData("saves","pokemons",[name,ivs])
    loadobjects()
    reload('hid2','i')
}
function arrmove(type,num){
    if(type=="up"){
        if(num >0){
            const element = listc.pokemons.splice(num, 1)[0];
            listc.pokemons.splice(num-1, 0, element);
        }
    }else{
        if(num < listc.pokemons.length){
            const element = listc.pokemons.splice(num, 1)[0];
            listc.pokemons.splice(num+1, 0, element);     
        }
    }
    save("saves")
    loadobjects()
}
function loadobjects(){
    document.getElementById("storage").innerHTML = ""
    for(let i in listc.pokemons){
        document.getElementById("storage").innerHTML = document.getElementById("storage").innerHTML+
        `
        <div class="label" id="tg`+i+`">
        <div id="rlabel">
            <label id="mlabel"><button id="mbutton1" onclick="arrmove('up',`+i+`)">&#11165;</button><button id="mbutton2" onclick="arrmove('down',`+i+`)">&#11167;</button></label>
            <button id="open" onclick="saveOpen(this)">V</button>
            <button id="remove" onclick="removeOpen(`+i+`)">X</button>
            <input id="minput" placeholder="NAME" value="`+listc.pokemons[i][0]+`" onchange="saveDataPart('name',`+i+`,this.value,0)" disabled>
            <br></br>
            <input class="IV2" id="ivr`+i+`0" placeholder="IV" type="number" max=31  min="0" value="`+listc.pokemons[i][1][0]+`" onchange="saveDataPart('in',`+i+`,this.value,0)" oninput="stat(this,0,'ivr`+i+`','ivr`+i+`h')" >
            <input class="IV2" id="ivr`+i+`1" placeholder="IV" type="number" max=31  min="0" value="`+listc.pokemons[i][1][1]+`" onchange="saveDataPart('in',`+i+`,this.value,1)" oninput="stat(this,1,'ivr`+i+`','ivr`+i+`h')" >
            <input class="IV2" id="ivr`+i+`2" placeholder="IV" type="number" max=31  min="0" value="`+listc.pokemons[i][1][2]+`" onchange="saveDataPart('in',`+i+`,this.value,2)" oninput="stat(this,2,'ivr`+i+`','ivr`+i+`h')" >
            <input class="IV2" id="ivr`+i+`3" placeholder="IV" type="number" max=31  min="0" value="`+listc.pokemons[i][1][3]+`" onchange="saveDataPart('in',`+i+`,this.value,3)" oninput="stat(this,3,'ivr`+i+`','ivr`+i+`h')" >
            <input class="IV2" id="ivr`+i+`4" placeholder="IV" type="number" max=31  min="0" value="`+listc.pokemons[i][1][4]+`" onchange="saveDataPart('in',`+i+`,this.value,4)" oninput="stat(this,4,'ivr`+i+`','ivr`+i+`h')" >
            <input class="IV2" id="ivr`+i+`5" placeholder="IV" type="number" max=31  min="0" value="`+listc.pokemons[i][1][5]+`" onchange="saveDataPart('in',`+i+`,this.value,5)" oninput="stat(this,5,'ivr`+i+`','ivr`+i+`h')" >
            <br><br><b> <label id="hide">HIDDEN POWER: <a id="ivr`+i+`h">`+getHP(listc.pokemons[i][1])+`</a></label></b>
        </div>
        </div>
        `
    }
}
/*              */
/*              */
const Datalist = loadData('saves')
const newSave = {"pokemons":[["Volcarona",[31,31,30,30,31,30]],["Venusaur",[31,30,30,31,30,31]],["Amoonguss",[31,30,30,31,30,31]]]} // Default save
listc = Datalist != undefined ? JSON.parse(Datalist) : newSave
if(listc == {}){
    listc = newSave
}
save("saves")
