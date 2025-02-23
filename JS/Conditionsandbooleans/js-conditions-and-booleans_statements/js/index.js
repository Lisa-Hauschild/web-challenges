console.clear();


// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "hippo1234";

if (receivedPassword === SUPER_SECRET_PASSWORD)

{console.log("Welcome! You are logged in as Brunhilde1984.");}

    else { var divEl = document.createElement("div");
            var pEl = document.createElement("p");
            divEl.textContent="🦛🦛🦛🦛🦛🦛🦛🦛🦛🦛";
            pEl.textContent = "How dare you deny access ??!"
            pEl.style.backgroundColor= "white";
            divEl.style.fontSize="8rem"
            document.body.append(divEl);
            divEl.append(pEl);

    }


// Part 2: Even / Odd
const number = 5;

if (number%2=== 0)

    {console.log("even");}

else {console.log("odd");}

// Part 3: Hotdogs
const numberOfHotdogs = 2;


if (numberOfHotdogs < 5)

    {console.log("You have to pay "+ numberOfHotdogs*2 +" €");}

 else if (numberOfHotdogs < 100)

 
{ console.log("You have to pay "+ numberOfHotdogs*1.5 +" €");}

 else if (numberOfHotdogs < 1000000)


 {console.log("You have to pay "+ numberOfHotdogs +" €");}


 else if (numberOfHotdogs > 100000)

 {console.log("You have to pay "+ numberOfHotdogs *0.1 +" €");}

    
// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);


// Part 5: Greeting
const userName = "Archibalda";

const greeting = userName==="Archibald"?"Hello " + "Coach" + "!": "hello, stranger!";

console.log(greeting);
