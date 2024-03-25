var list = [31,31,31,31,31,31]
var rlist = ["o","o","o","o","o","o"]
function gettype(){
    var v = rlist[0]+rlist[1]+rlist[2]+rlist[3]+rlist[4]+rlist[5]
    if(v=="oeoooo"){return "ICE"}
    if(v=="ooeooo"){return "ICE"}
    if(v=="eooooo"){return "ICE"}
    if(v=="eeoooo"){return "ICE"}

    if(v=="oeeoeo"){return "FIRE"}
    if(v=="eeeoeo"){return "FIRE"}
    if(v=="oooeeo"){return "FIRE"}
    if(v=="eooeeo"){return "FIRE"}

    if(v=="oeeeoe"){return "GROUND"}
    if(v=="ooeeoe"){return "GROUND"}
    if(v=="eeoeoe"){return "GROUND"}
    if(v=="eoeeoe"){return "GROUND"}

    if(v=="oooooo"){return "DRAGON"}

    if(v=="eeeoee"){return "FIGHTING"}
    if(v=="oooeee"){return "FIGHTING"}
    if(v=="oeoeee"){return "FIGHTING"}
    if(v=="eooeee"){return "FIGHTING"}

    if(v=="ooeoee"){return "FLYING"}
    if(v=="eeooee"){return "FLYING"}
    if(v=="oeeoee"){return "FLYING"}
    if(v=="eoeoee"){return "FLYING"}

    if(v=="ooooee"){return "POISON"}
    if(v=="eoooee"){return "POISON"}
    if(v=="oeooee"){return "POISON"}
    if(v=="eeeeoe"){return "POISON"}

    if(v=="oeoeoe"){return "ROCK"}
    if(v=="oooeoe"){return "ROCK"}
    if(v=="eooeoe"){return "ROCK"}
    if(v=="oeeooe"){return "ROCK"}
    if(v=="eeeooe"){return "ROCK"}

    if(v=="eoeooe"){return "BUG"}
    if(v=="oeoooe"){return "BUG"}
    if(v=="ooeooe"){return "BUG"}
    if(v=="eeoooe"){return "BUG"}

    if(v=="oooooe"){return "GHOST"}
    if(v=="eeeeeo"){return "GHOST"}
    if(v=="eooooe"){return "GHOST"}
    if(v=="oeeeeo"){return "GHOST"}

    if(v=="oeoeeo"){return "STEEL"}
    if(v=="ooeeeo"){return "STEEL"}
    if(v=="eoeeeo"){return "STEEL"}
    if(v=="eeoeeo"){return "STEEL"}

    if(v=="ooeoeo"){return "WATER"}
    if(v=="oeooeo"){return "WATER"}
    if(v=="eoeoeo"){return "WATER"}
    if(v=="eeooeo"){return "WATER"}
    if(v=="eoooeo"){return "WATER"}

    if(v=="ooooeo"){return "GRASS"}
    if(v=="eoeeoo"){return "GRASS"}
    if(v=="oeeeoo"){return "GRASS"}
    if(v=="eeeeoo"){return "GRASS"}

    if(v=="oeoeoo"){return "ELECTRIC"}
    if(v=="ooeeoo"){return "ELECTRIC"}
    if(v=="eooeoo"){return "ELECTRIC"}
    if(v=="eeoeoo"){return "ELECTRIC"}

    if(v=="oeeooo"){return "PSYCHIC"}
    if(v=="eeeooo"){return "PSYCHIC"}
    if(v=="eoeooo"){return "PSYCHIC"}
    if(v=="oooeoo"){return "PSYCHIC"}

    if(v=="eeoeee"){return "DARK"}
    if(v=="ooeeee"){return "DARK"}
    if(v=="eoeeee"){return "DARK"}
    if(v=="oeeeee"){return "DARK"}
    if(v=="eeeeee"){return "DARK"}
}
function ulist(x){
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
    ulist(num-1)
}