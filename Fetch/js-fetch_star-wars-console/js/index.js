console.clear();

const url = "https://swapi.py4e.com/api/people";



async function fetchData() {
    const response = await fetch("https://swapi.py4e.com/api/people");
    const data = await response.json();
    console.log(data);
    console.log(data.results);

    const firstPerson = data.results[0];
    console.log(firstPerson);
    const secondPerson = data.results[3];
    console.log(secondPerson);
    console.log(secondPerson.mass);

    const 小机器 = data.results[2];
    console.log(小机器.eye_color);

    return data;
   

}


fetchData();
