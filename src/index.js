module.exports = function getZerosCount(number, base) {
  // your implementation

var multiplier=2;
var base2=base;
var sqrt=Math.sqrt(base2);
var allmultiplier=[];
var k=0;
while (base2 > 1 && multiplier <= sqrt){
    if (base2 % multiplier == 0){
        allmultiplier[k]=multiplier;
        k++;
        base2 /= multiplier;
    }
    else if (multiplier == 2){
        multiplier++;
        
    }
    else{
        multiplier += 2;
        
    }

  }
  if (base2 != 1){
    allmultiplier[k]=base2;
    k++;
}
var result=[];
var lengthmas=allmultiplier.length;
for(var i=0;i<lengthmas;i++){
  var a1=Math.floor(number/allmultiplier[i]);
  var a2=Math.floor(number/Math.pow(allmultiplier[i],2));
  var a3=Math.floor(number/Math.pow(allmultiplier[i],3));
  var a4=Math.floor(number/Math.pow(allmultiplier[i],4));
  var a5=Math.floor(number/Math.pow(allmultiplier[i],5));
  var a6=Math.floor(number/Math.pow(allmultiplier[i],6));
  var a7=Math.floor(number/Math.pow(allmultiplier[i],7));
  var a8=Math.floor(number/Math.pow(allmultiplier[i],8));
  var a9=Math.floor(number/Math.pow(allmultiplier[i],9));
  var a10=Math.floor(number/Math.pow(allmultiplier[i],10));
  var a11=Math.floor(number/Math.pow(allmultiplier[i],11));
  var a12=Math.floor(number/Math.pow(allmultiplier[i],12));
  var a13=Math.floor(number/Math.pow(allmultiplier[i],13));
  var a14=Math.floor(number/Math.pow(allmultiplier[i],14));
  var a15=Math.floor(number/Math.pow(allmultiplier[i],15));
  var a16=Math.floor(number/Math.pow(allmultiplier[i],16));
  var a17=Math.floor(number/Math.pow(allmultiplier[i],17));
  var a18=Math.floor(number/Math.pow(allmultiplier[i],18));
  var a19=Math.floor(number/Math.pow(allmultiplier[i],19));
  var a20=Math.floor(number/Math.pow(allmultiplier[i],20));
  var a21=Math.floor(number/Math.pow(allmultiplier[i],21));
  var a22=Math.floor(number/Math.pow(allmultiplier[i],22));
  var a23=Math.floor(number/Math.pow(allmultiplier[i],23));
  var a24=Math.floor(number/Math.pow(allmultiplier[i],24));
  var a25=Math.floor(number/Math.pow(allmultiplier[i],25));
  var a26=Math.floor(number/Math.pow(allmultiplier[i],26));
  var a27=Math.floor(number/Math.pow(allmultiplier[i],27));
  var a28=Math.floor(number/Math.pow(allmultiplier[i],28));
  var a29=Math.floor(number/Math.pow(allmultiplier[i],29));
  var a30=Math.floor(number/Math.pow(allmultiplier[i],30));
  var a31=Math.floor(number/Math.pow(allmultiplier[i],31));
  var a32=Math.floor(number/Math.pow(allmultiplier[i],32));
  var a33=Math.floor(number/Math.pow(allmultiplier[i],33));
  var a34=Math.floor(number/Math.pow(allmultiplier[i],34));
  var a35=Math.floor(number/Math.pow(allmultiplier[i],35));
  var a36=Math.floor(number/Math.pow(allmultiplier[i],36));
  var a37=Math.floor(number/Math.pow(allmultiplier[i],37));
  var a38=Math.floor(number/Math.pow(allmultiplier[i],38));
  var a39=Math.floor(number/Math.pow(allmultiplier[i],39));
  var a40=Math.floor(number/Math.pow(allmultiplier[i],40));
  var a41=Math.floor(number/Math.pow(allmultiplier[i],41));
  var a42=Math.floor(number/Math.pow(allmultiplier[i],42));
  var a43=Math.floor(number/Math.pow(allmultiplier[i],43));
  var a44=Math.floor(number/Math.pow(allmultiplier[i],44));
  var a45=Math.floor(number/Math.pow(allmultiplier[i],45));
  var a46=Math.floor(number/Math.pow(allmultiplier[i],46));
  var a47=Math.floor(number/Math.pow(allmultiplier[i],47));
  var a48=Math.floor(number/Math.pow(allmultiplier[i],48));
  var a49=Math.floor(number/Math.pow(allmultiplier[i],49));
  var a50=Math.floor(number/Math.pow(allmultiplier[i],50));
  var a51=Math.floor(number/Math.pow(allmultiplier[i],51));
  var a52=Math.floor(number/Math.pow(allmultiplier[i],52));
  var a53=Math.floor(number/Math.pow(allmultiplier[i],53));
  var a54=Math.floor(number/Math.pow(allmultiplier[i],54));
  var a55=Math.floor(number/Math.pow(allmultiplier[i],55));
  var a56=Math.floor(number/Math.pow(allmultiplier[i],56));
  var a57=Math.floor(number/Math.pow(allmultiplier[i],57));
  var a58=Math.floor(number/Math.pow(allmultiplier[i],58));
  var a59=Math.floor(number/Math.pow(allmultiplier[i],59));
  var a60=Math.floor(number/Math.pow(allmultiplier[i],60));
  var a61=Math.floor(number/Math.pow(allmultiplier[i],61));
  var a62=Math.floor(number/Math.pow(allmultiplier[i],62));
  var a63=Math.floor(number/Math.pow(allmultiplier[i],63));
  var a64=Math.floor(number/Math.pow(allmultiplier[i],64));
  var a65=Math.floor(number/Math.pow(allmultiplier[i],65));
  var a66=Math.floor(number/Math.pow(allmultiplier[i],66));
  var a67=Math.floor(number/Math.pow(allmultiplier[i],67));
  var a68=Math.floor(number/Math.pow(allmultiplier[i],68));
  var a69=Math.floor(number/Math.pow(allmultiplier[i],69));
  var a70=Math.floor(number/Math.pow(allmultiplier[i],70));
  var a71=Math.floor(number/Math.pow(allmultiplier[i],71));
  var a72=Math.floor(number/Math.pow(allmultiplier[i],72));
  var a73=Math.floor(number/Math.pow(allmultiplier[i],73));
  var a74=Math.floor(number/Math.pow(allmultiplier[i],74));
  var a75=Math.floor(number/Math.pow(allmultiplier[i],75));
  var a76=Math.floor(number/Math.pow(allmultiplier[i],76));
  var a77=Math.floor(number/Math.pow(allmultiplier[i],77));
  var a78=Math.floor(number/Math.pow(allmultiplier[i],78));
  var a79=Math.floor(number/Math.pow(allmultiplier[i],79));
  var a80=Math.floor(number/Math.pow(allmultiplier[i],80));
  var a81=Math.floor(number/Math.pow(allmultiplier[i],81));
  var a82=Math.floor(number/Math.pow(allmultiplier[i],82));
  var a83=Math.floor(number/Math.pow(allmultiplier[i],83));
  var a84=Math.floor(number/Math.pow(allmultiplier[i],84));
  var a85=Math.floor(number/Math.pow(allmultiplier[i],85));
  var a86=Math.floor(number/Math.pow(allmultiplier[i],86));
  var a87=Math.floor(number/Math.pow(allmultiplier[i],87));
  var a88=Math.floor(number/Math.pow(allmultiplier[i],88));
  var a89=Math.floor(number/Math.pow(allmultiplier[i],89));
  var a90=Math.floor(number/Math.pow(allmultiplier[i],90));
  var a91=Math.floor(number/Math.pow(allmultiplier[i],91));
  var a92=Math.floor(number/Math.pow(allmultiplier[i],92));
  var a93=Math.floor(number/Math.pow(allmultiplier[i],93));
  var a94=Math.floor(number/Math.pow(allmultiplier[i],94));
  var a95=Math.floor(number/Math.pow(allmultiplier[i],95));
  var a96=Math.floor(number/Math.pow(allmultiplier[i],96));
  var a97=Math.floor(number/Math.pow(allmultiplier[i],97));
  var a98=Math.floor(number/Math.pow(allmultiplier[i],98));
  var a99=Math.floor(number/Math.pow(allmultiplier[i],99));
  var a100=Math.floor(number/Math.pow(allmultiplier[i],100));
  var a101=Math.floor(number/Math.pow(allmultiplier[i],101));
  var a102=Math.floor(number/Math.pow(allmultiplier[i],102));
  result[i]=a1+a2+a3+a4+a5+a6+a7+a8+a9+a10+a11+a12+a13+a14+a15+a16+a17+a18+a19+a20+a21+a22+a23+a24+a25+a26+a27+a28+a29+a30+a31+a32+a33+a34+a35+a36+a37+a38+a39+a40+a41+a42+a43+a44+a45+a46+a47+a48+a49+a50+a51+a52+a53+a54+a55+a56+a57+a58+a59+a60+a61+a62+a63+a64+a65+a66+a67+a68+a69+a70+a71+a72+a73+a74+a75+a76+a77+a78+a79+a80+a81+a82+a83+a84+a85+a86+a87+a88+a89+a90+a91+a92+a93+a94+a95+a96+a97+a98+a99+a100+a101+a102;
}
var sortresult=result.sort(compareNumeric);
var h=0;
var lengthsort=sortresult.length;
for(var j=0;j<lengthsort;j++){
  if(sortresult[0]==sortresult[0+1]){
    h++;
  }
}
//h=Math.abs(h-1);
//return Math.floor(sortresult[0]);
if(h==0){
  return Math.floor(sortresult[0]);
}
else{
  return Math.floor(sortresult[0]/h);
}


}

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}