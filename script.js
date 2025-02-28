let math=document.querySelector(".math"); //h2 of Screen
let operator=document.querySelector(".op"); //h2 to display Operator
let val1; //1st Value
let val2; //2nd Value
let op=""; //Operator
let result;
function clr() //Clear Function
{
   math.innerHTML="";
   operator.innerHTML="";
   op="";
   val1="";
   val2="";
}
function add(){
   operator.innerHTML="+";
   op="+";
   val1=math.innerHTML;
   math.innerHTML="";
}
function subtract(){
   operator.innerHTML="-";
   op="-";
   val1=math.innerHTML;
   math.innerHTML="";
}
function multiply(){
   operator.innerHTML="x";
   op="x";
   val1=math.innerHTML;
   math.innerHTML="";
}
function divide(){
   operator.innerHTML="÷";
   op="/";
   val1=math.innerHTML;
   math.innerHTML="";
}
function btn9(){
   math.innerHTML=math.innerHTML+"9";
}
function btn8(){
   math.innerHTML=math.innerHTML+"8";
}
function btn7(){
   math.innerHTML=math.innerHTML+"7";
}
function btn6(){
   math.innerHTML=math.innerHTML+"6";
}
function btn5(){
   math.innerHTML=math.innerHTML+"5";
}
function btn4(){
   math.innerHTML=math.innerHTML+"4";
}
function btn3(){
   math.innerHTML=math.innerHTML+"3";
}
function btn2(){
   math.innerHTML=math.innerHTML+"2";
}
function btn1(){
   math.innerHTML=math.innerHTML+"1";
}
function btn0(){
   math.innerHTML=math.innerHTML+"0";
}
function equal(){
   val2=math.innerHTML;
   if(op=="+")
   {
      result=parseFloat(val1)+parseFloat(val2);
      operator.innerHTML="= "+result;
   }
   else if(op=="-")
   {
      result=parseFloat(val1)-parseFloat(val2);
      operator.innerHTML="= "+result;
   }
   else if(op=="x"){
      result=parseFloat(val1)*parseFloat(val2);
      operator.innerHTML="= "+result;
   }
   else if(op=="/"){
      if(parseInt(val2)==0){
         operator.innerHTML="";
         alert("Invalid Operation!");
         clr();
      }
      else{
         result=parseFloat(val1)/parseFloat(val2);
         operator.innerHTML="= "+result;
      }
   }
   math.innerHTML=val1+op+val2;
}