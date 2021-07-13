// /* 1 to 10 numbers*/
// const btnone = document.getElementById('one');
// const btntwo = document.getElementById('two');
// const btnthree = document.getElementById('three');
// const btnfour = document.getElementById('four');
// const btnfive = document.getElementById('five');
// const btnsix = document.getElementById('six');
// const btnseven = document.getElementById('seven');
// const btneight = document.getElementById('eight');
// const btnnine = document.getElementById('nine');
// const btnzero = document.getElementById('zero');

// /* Input box & label*/
const display1 = document.getElementById("display-1");
const display2 = document.querySelector("#display-2");
// /* Clear button*/
// const clear = document.getElementById('clear');

// /* Operation buttons*/
// let temp = 0;
// let a = 0,
//     b = 0,
//     ans = 0;

// let cnt = 0;

const button = document.querySelectorAll("td");
const btn = document.getElementsByTagName("td");
let c = "",
    old = "";
let temp = 0;
for (iteam of button) {
    iteam.addEventListener("click", (e) => {
        c = e.target.innerText;
        if (c == 'x') {
            c = '*';
        }
        /* For first time input*/
        if (temp == 0) {
            display1.innerHTML = "";
            display2.innerHTML = "";
            temp = 1;
        }
        /* For Equal to Input*/
        if (c == "=") {
            display2.innerHTML = eval(display1.innerHTML);
            // alert(eval(display1.innerHTML));
        }
        /* CLear*/
        else if (c == "CE") {
            display1.innerHTML = '0';
            display2.innerHTML = '0';
            temp = 0;
            old = "";
            c = "";
        }
        /* For operators */
        else {
            /* */
            if (c == "+" || c == "-" || c == "*" || c == "/") {
                /* for operator non repetaion*/
                if (old == c || old == "+" || old == "-" || old == "*" || old == "/") {} else {
                    display1.innerHTML += c;
                    display2.innerHTML = "";
                }

            }
            /* Number Input (operand)*/
            else {
                display2.innerHTML += c;
                display1.innerHTML += c;
            }
        }
        // if (c == '+' || c == '-' || c == 'x' || c == '/') {

        //     display1.innerHTML += c;
        //     display2.innerHTML = '';
        // } else {
        //     // display2.innerHTML = '';
        //     display2.innerHTML += c;
        //     display1.innerHTML += c;
        // }
        old = c;
    });
}

// // for (iteam);
// /* */
// let le;
// let arr = [];
// let two = [];

// function fun(val) {
//     if (val >= 0 || val <= 0) {
//         if (temp == 0) {
//             display2.innerHTML = '';
//             temp = 1;
//         }
//         display2.innerHTML += val;
//     } else if (val == 'CE') {
//         display1.innerHTML = '0';
//         display2.innerHTML = '0';
//         temp = 0;
//         cnt = 0;
//         arr.length = 0;
//         ans = 0;
//         a = 0;
//         le = 0;
//         arr = [];
//         two = [];

//     } else {

//         a = display2.innerHTML;
//         // remove number from display1
//         // if (cnt == 0) {
//         //     display1.innerHTML = '';
//         // }
//         if (val == '+') {
//             display1.innerHTML += '+' + display2.innerHTML;
//             a = Number(a);
//             cnt++;
//             ans += a;
//             // move to AND
//             display2.innerHTML = ans;
//             temp = 0;
//             /*
//             arr = display1.innerHTML;
//             le = arr.length;
//             // alert("ARR " + arr.length);
//             for (let i = 0; i < le - 3; i++) {
//                 console.log(i);
//                 two[i] = arr[i];
//             }
//             le = two.length;
//             alert(two.length);
//             two[le] = '(';
//             // console.log("TWO "+two);
//             le = two.length;
//             // console.log("TWO " + two);
//             for (let i = le; i <= arr.length; i++) {
//                 two[i] = arr[i - 1];
//             }
//             le = two.length;
//             two[le] = ')';
//             display1.innerHTML = two.join('');
//             // alert(two.length);
//             */
//         } else if (val == '-') {
//             display1.innerHTML += '-' + display2.innerHTML;
//             a = Number(a);
//             cnt++;
//             ans -= a;

//             display2.innerHTML = ans;
//             temp = 0;
//         } else if (val == '*') {
//             display1.innerHTML += 'x' + display2.innerHTML;
//             a = Number(a);
//             cnt++;
//             ans *= a;

//             display2.innerHTML = ans;
//             temp = 0;

//         } else if (val == '/') {
//             if (display2.innerHTML == '0') {
//                 display2.innerHTML = 'ERROR';
//             } else {
//                 display1.innerHTML += '/' + display2.innerHTML;
//                 a = Number(a);
//                 cnt++;
//                 ans /= a;
//                 alert(ans);
//                 display2.innerHTML = ans;
//                 temp = 0;

//             }
//         } else if (val == '=') {
//             a = Number(a);
//             ans += a;
//             display2.innerHTML = ans;
//         }

//         alert(eval('display1'));
//         /* Adding brackets*/
//         // arr = display1.innerHTML;
//         // le = arr.length;
//         // two[0] = '(';

//         // for (let i = 1; i <= arr.length; i++) {
//         //     two[i] = arr[i - 1]
//         // }
//         // le = two.length;
//         // two[le] = ')';
//         // console.log(two);
//         // display1.innerHTML = two.join('');
//         // arr = [];
//     }
// }

/*
btnone.addEventListener('click', () => {
    display1.value += '1';
});

btntwo.addEventListener('click', () => {
    display1.value += '2';
});

btnthree.addEventListener('click', () => {
    display1.value += '3';
});

btnfour.addEventListener('click', () => {
    display1.value += '4';
});

btnfive.addEventListener('click', () => {
    display1.value += '5';
});

btnsix.addEventListener('click', () => {
    display1.value += '6';
});

btnseven.addEventListener('click', () => {
    display1.value += '7';
});

btneight.addEventListener('click', () => {
    display1.value += '8';
});

btnnine.addEventListener('click', () => {
    display1.value += '9';
});

btnzero.addEventListener('click', () => {
    display1.value += '0';
});

clear.addEventListener('click', () => {
    document.getElementById('display2').placeholder = 0;
    alert();
})

*/