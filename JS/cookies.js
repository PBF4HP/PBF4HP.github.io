function addData(name,place,data){
    //const listv = [name,ivs];
    listc[place].push(data)
    document.cookie =  name+"="+JSON.stringify(listc)+"; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT"
    return document.cookie
}
function removeData(name,place,num){
    if(listc[place][num] != undefined){
    listc[place].splice(num,1)
    document.cookie =  name+"="+JSON.stringify(listc)+"; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT"
    }
    return document.cookie
}
function loadData(name){
    let matches = document.cookie.match(new RegExp("(?:^|; )"+name+"=([^;]*)"))
    return matches ? decodeURIComponent(matches[1]) : undefined
}
function save(name){
    document.cookie =  name+"="+JSON.stringify(listc)+"; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT"
    return document.cookie
}