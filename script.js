// let allInps = document.querySelectorAll("input");

// let [inp1, inp2, inp3 , inp4] = allInps
// console.log(inp1)
// let arr = []
// leng=1
// // inp2.value = "2"
// inp1.addEventListener("input", (e)=>{
//     if(isNaN(parseInt(e.target.value))) {
//         e.target.value = "";
//         return
//     }
//     leng=1
//     inp2.focus()
// });

// inp2.addEventListener("input", (e)=>{
//     if(isNaN(parseInt(e.target.value))) {
//         if(e.inputType == "deleteContentBackward" && leng<0) {
//             leng--;
//             inp1.focus()
//         };
//         e.target.value = "";
//         return
//     }
//     leng=1
//     inp3.focus()
// });

// inp3.addEventListener("input", (e)=>{
//     if(isNaN(parseInt(e.target.value))) {
//         if(e.inputType == "deleteContentBackward" && leng<0) {
//             leng--;
//             inp2.focus()
//         };
//         e.target.value = "";
//         return
//     }
//     leng=1
//     inp4.focus()
// });

// inp4.addEventListener("input", (e)=>{
//     if(isNaN(parseInt(e.target.value))) {
//         if(e.inputType == "deleteContentBackward" && leng<0) {
//             leng--;
//             inp3.focus()
//         };
//         e.target.value = "";
//         return
//     }
//     leng=1
//     // inp2.focus()
// });


let inputs = document.querySelector(".inputs")
inputs.addEventListener("input" , (e)=>{
    if(isNaN(parseInt(e.target.value))) {
        e.target.value = "";
        return;
    }
    if(e.target.value != "") e?.target?.nextElementSibling?.focus();
});
inputs.addEventListener("keyup" , (e)=>{
    if(e.key == "Backspace" || e.key == "Delete") {
        e?.target?.previousElementSibling?.focus();
        e.target.value = "";
        return;
    }
    if(e.target.value != "") e?.target?.nextElementSibling?.focus();
});


