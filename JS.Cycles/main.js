let a;
console.log("Task 1")
for(a=0; a<=10; a++){
    if(a%2==0){
        console.log(a);
    }
}

let b, sum;
console.log("Task 2")
b=1;
sum=0;
while(sum<10){
    if(b%2==0){
        console.log(b);
        sum++;
    }
    b++;
}

let userPassword = '';
let currentPassword = '.';
console.log("Task 3")
do {
    userPassword = prompt("Введите пароль");
} 
while (userPassword != currentPassword);
console.log("Авторизация успешна");

let c;
console.log("Task 4:")
for(c=0; c<=10; c++){
    if(c%2==0){
        console.log(c);
    }
}

console.log("Task 5 (Вариант 1)")
let d=1
let e = prompt("Введите число:");
do {
    console.log("*");
    d++;
} while (d<=e);

console.log("Task 5 (Вариант 2)")
let f=1
let g = prompt("Введите число:");
do {
    console.log("*","("+f,")" );
    f++;
} while (f<=g);