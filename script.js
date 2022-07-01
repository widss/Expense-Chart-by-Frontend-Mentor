let chartDiv=document.querySelector('.chart-div');
let addChart="";
let maxIndex=0;


data.forEach((input,index)=>
 {if(input.amount>data[maxIndex].amount){
   maxIndex=index;
 }
});
function getHeight(amount){
return (amount*120)/data[maxIndex].amount;
}
data.forEach((input,index)=>{
   addChart+="<div class='chart'>"
   addChart+=`<span class='hover-amount'><p>$${input.amount}</p></span>`
   if(index===maxIndex)
   {addChart+=`<div class='blue chart-bar' style='height:${getHeight(input.amount)}px'></div>`}
   else
   {addChart+=`<div class='red chart-bar' style='height:${getHeight(input.amount)}px'></div>`}
   addChart+=`<p>${input.day}</p>`
   addChart+="</div>"
});
chartDiv.innerHTML=addChart;
function log(a){
   console.log(a);
}
