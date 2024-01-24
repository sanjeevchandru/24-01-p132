document.write("98. to change the case of the minimum number of letters to make a given string written in upper case or lower case."+"<br>");
function test98(str){
    var x=0;
    var y=0;
    for(let i=0;i<str.length;i++){
        if(/[A-Z]/.test(str[i])){
            x++;
        }
        y++;
    }
    if(y>x){
        return str.toLowerCase();
    }
    return str.toUpperCase();
}
document.write("The string :SaNjeeV, ans :"+test98("SaNjeeV")+"<br><br>");