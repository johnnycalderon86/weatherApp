
// function getdassshit(){
// input.addEventListener("keypress",function(){
//   let input = document.getElementById('input').value;
//   console.log(input)
//   return input
// })
// 
// }

const key ='b7409c487f66458cf93606bd0ff48ffa'

document.getElementById('button').addEventListener('click', getWeather)


function getWeather(){
  
  let city = document.getElementById('input').value.toUpperCase();
  
  
  
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${key}`)
  .then((res) => res.json())
  .then((data)=> {
    console.log(data)
    console.log(data.list[0].main.temp);
    let output;

    output = `THE TEMPERATUR IN ${city}: <h3>${data.list[0].main.temp}</h3>`;

    // data.forEach(function(get){
      
    //    output = `THE TEMPERATUR IN ${city}: <h3>${get.main.temp}</h3>`;
       
       
    //   });
      let newoutput = document.getElementsByClassName("output")

      let counter = 0;
      for (let index = 0; index < 5; index++) {
 
  let tempy =data.list[counter].main.temp;
  newoutput[index].innerHTML = `°C ${tempy}`
  counter +=8
}
      
        // document.getElementById('output').innerHTML = output;
        // document.getElementById('output').style.color = 'white';

      })

    }
    
  



