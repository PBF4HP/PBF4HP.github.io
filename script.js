var list = [31,31,31,31,31,31]
var rlist = ["o","o","o","o","o","o"]
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
function gettype(){
    var v = rlist[0]+rlist[1]+rlist[2]+rlist[3]+rlist[4]+rlist[5]
    for (let i in maps) {
        for (let ia in maps[i]) {
            if(v==maps[i][ia]){return i}
        }
      }
}
function createlist(x){
    if((list[x]%2)==0){
        rlist[x] = "e"
    }else{
        rlist[x] = "o"
    }
    document.getElementById("busy").innerHTML = gettype()
}
function stat(val,fr,num){
    if (isNaN(val)){
        fr.value = list[num-1]
        val = list[num-1]
    }
    if (val> 31){
        fr.value = list[num-1];
        val = list[num-1];
    }else if(val<0){
        fr.value = 0
        val = 0
    }
    list[num-1] = parseInt(val)
    createlist(num-1)
}
