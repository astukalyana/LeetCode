/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(str) {
    var retStr = "";
    for(var i=0; i<str.length; i++){
        if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <=90 ){
            retStr = retStr + String.fromCharCode(str.charCodeAt(i)+32);
        }
        else{
            retStr = retStr + str.charAt(i);
        }
   }
    return retStr;
};