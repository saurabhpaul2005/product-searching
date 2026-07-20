// // let change=document.getElementById("head");
// // let btn=document.getElementById("btn1")
// // btn.classList.add ("m-20", "bg-blue-400", "w-15", "h-7", "rounded-full");
// // btn.innerHTML="click me"
// // let flag=0;
// //     change.classList.add("text-black", "w-25", "h-8");


// // btn.addEventListener("click", function(){
// //     if(flag==1){
// //     change.textContent="java script";
// //     change.classList.add("bg-blue-700");
// //     flag++;
// //     }
// //     else if(flag==2){
// //     change.textContent=" DOM ";
// //     change.classList.add("bg-blue-300");
// //         flag++;
// //     }
// //     else if(flag==3){
// //     change.textContent="kuch bhi";
// //     change.classList.add("bg-green-500");
// //     flag=0;
// //     }
// //      else{
// //        change.textContent="saurabh"; 
// //        change.classList.add("bg-red-500");
// //     flag=1; 
// //     }
// // });

// // let count=0;
// // let plus=document.getElementById("btn1");
// // let minus=document.getElementById("btn2");
// // let reset=document.getElementById("btn3");
// // let number=document.getElementById("head");
// // number.innerHTML=count
// // plus.classList.add("bg-blue-400", "w-20", "h-7", "m-20")
// // minus.classList.add("bg-orange-400", "w-20", "h-7", "m-20")
// // reset.classList.add("bg-red-400", "w-20", "h-7", "m-20")
// // number.classList.add("bg-black", "w-10", "h-7", "m-5", "text-white") 
// // // name
// // plus.innerHTML="Plus"
// // minus.innerHTML="Minus"
// // reset.innerHTML="Reset"

// // plus.addEventListener("click",function(){
// //     number.classList.remove(
// //         "bg-black",
// //         "bg-red-500",
// //         "bg-green-400"
// //     )
// //      number.innerHTML= ++count;
// //      if(count<0){
// //    number.classList.add("bg-red-500") 
// //   }
// //    else if(count>0){
// //     number.classList.add("bg-green-400")
// //   }
// //    else{
// //      number.classList.add("bg-black")
// //   }

// // });
// // minus.addEventListener("click",function(){
// //     number.classList.remove(
// //         "bg-black",
// //         "bg-red-500",
// //         "bg-green-400"
// //     )
// //      number.innerHTML= --count;
// //      if(count<0){
// //    number.classList.add("bg-red-500") 
// //   }
// //    else if(count>0){
// //     number.classList.add("bg-green-400")
// //   }
// //   else{
// //      number.classList.add("bg-black")
// //   }
// // });
// // reset.addEventListener("click",function(){
// //     number.classList.remove(
// //         "bg-black",
// //         "bg-red-500",
// //         "bg-green-400"
// //     )
// //       count=0;
// //       number.innerHTML=count;
// //       number.classList.add("bg-black")
// //   });



// let second=0;
// let hour=0;
// let min=0;
// let timer;
//  let start=document.getElementById("btn1")
//  let reset=document.getElementById("btn3")
//  let time=document.getElementById("head")
//  let added=document.getElementById("head2")
// //  css
//   time.classList.add("m-10", "w-40", "h-7", "bg-blue-500")
//   added.classList.add("pl-70","w-20", "h-7")
//  start.classList.add("w-20", "h-10", "bg-green-400","rounded-full")
//  reset.classList.add("w-20", "h-10", "bg-red-400","rounded-full")
//       //    name
//    start.innerHTML="START"
//      reset.innerHTML="RESET"
//      time.innerHTML= hour.toString().padStart(2,"0") + ":" +  min.toString().padStart(2, "0") +":" +
//       second.toString().padStart(2, "0");
//         // event
// start.addEventListener("click",function(){
//      if(timer){
//       clearInterval(timer)
//       added.innerHTML += hour.toString().padStart(2,"0") + ":" + min.toString().padStart(2,"0") + ":" +
//         second.toString().padStart(2,"0")+"<br>";
//         start.innerHTML="START"
//          start.classList.remove("bg-yellow-400")
//     start.classList.add("bg-green-400")
//     timer = null;
//      }
//      else{
//   timer=setInterval(function(){
//     if(second==60){second=0; min++}
//     if(min==60){min=0; hour++}
//     ++second
//     time.innerHTML= hour.toString().padStart(2,"0") + ":" + min.toString().padStart(2,"0") + ":" +
//     second.toString().padStart(2, "0");},1000)
//     start.innerHTML="STOP"
//     start.classList.remove("bg-green-400")
//     start.classList.add("bg-yellow-400")
//   }
//  });
//  reset.addEventListener("click" ,function(){
//     second=0;
//     min=0;
//     hour=0;
//     clearInterval(timer) 
//     time.innerHTML= hour.toString().padStart(2,"0") + ":" + 
//     min.toString().padStart(2,"0")+":"+
//     second.toString().padStart(2,"0")
//      timer = null;
//      start.innerHTML="START"
//     start.classList.remove("bg-yellow-400")
//     start.classList.add("bg-green-400")
//  }
//  );
//  start.addEventListener("mouseover",function(){
//    start.classList.remove("bg-green-400")
//    start.classList.add("bg-green-300")
//  });