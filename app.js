
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
  
  console.log(input);
  
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${key}`)
  .then((res) => res.json())
  .then((data)=> {
    // console.log(data)
    // console.log(data.list[0].main.temp);
    
    let output = "<h1>Temperature</h1>";
    data.list.forEach(function(get){
      
       output = `THE TEMPERATUR IN ${city}: <h3>${get.main.temp}</h3>`;
       output1= ``
       
      });
        document.getElementById('output').innerHTML = output;
        document.getElementById('output').style.color = 'white';

      })

    }
    
  



