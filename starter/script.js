// // // // 'use strict';

// // // // const btn = document.querySelector('.btn-country');
// // // const countriesContainer = document.querySelector('.countries');

// // // // const input=document.querySelector('input');
// // // // const btnEnter=document.querySelector('.btn');

// // // // let newArr=[];
// // // // let arr=[...newArr];
// // // // let arr1=[];
// // // // let dataArr=[];

// // // //   btnEnter.addEventListener('click',function(){
    
// // // // arr.push(input.value);
// // // // // console.log(arr);
// // // // arr1=[...new Set(arr)];
// // // // //console.log(arr1);

 
// // // // arr1.forEach(function(val){
// // // //   if(!val) return;
  
// // // //   let r=newArr.find(function(val1){
// // // //     return val1==val;
// // // //   });
// // // //  // console.log(r);
// // // //   if(r==val) return;
// // // //   newArr.push(val);
// // // //   //console.log(newArr);

  
// // // //   const request=new XMLHttpRequest();
// // // //   request.open('GET',`https://restcountries.com/v2/name/${val}`);
// // // //   request.send();
  
  
  
// // // //   request.addEventListener('load',function(){
// // // //     const data=JSON.parse(request.responseText)
// // // //     //console.log(data);
// // // //     dataArr.push(data);
// // // //     localStorage.setItem('mashqlar',JSON.stringify(dataArr));
     
// // // // let bir=JSON.parse(localStorage.getItem("mashqlar"));
// // // // if(!bir){
// // // //   return;
// // // // }
// // // // arr1=[...bir];



// // // //     //console.log(dataArr);

// // // //     data.forEach(function(data){
  
    
// // // //     let html=
// // // //     ` <article class="country">
// // // //     <img class="country__img" src="${data.flag}" />
// // // //     <div class="country__data">
// // // //       <h3 class="country__name">${data.name}</h3>
// // // //       <h4 class="country__region">${data.region}</h4>
// // // //       <p class="country__row"><span>👫</span>${(data.population/1000000).toFixed(1)}</p>
// // // //       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
// // // //       <p class="country__row"><span>💰</span>${data.currencies? data.currencies[0].code: data.currencies}</p>
// // // //     </div>
// // // //   </article>`;
  
  
  
// // // //   countriesContainer.insertAdjacentHTML('afterbegin',html);
// // // //   countriesContainer.style.opacity=1;
  
// // // //   });
// // // //   });
// // // // })
// // // // input.value='';
// // // //   });


// // // // // }
// // // // ///////////////////////////////////////
// // // // // getCountry(`${input.value}`);






// // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








// // // 'use strict';

// // // const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
// // // const input = document.querySelector('.input');
// // // const btnSearch = document.querySelector('.btn');
// // // const form = document.querySelector('.form');

// // // let getCountry = function (country) {
// // //   const request1 = new XMLHttpRequest();

// // //   request1.open('GET', `https://restcountries.com/v2/name/${country}`);
// // //   request1.send();

// // //   request1.addEventListener('load', function () {
// // //     let [data]= JSON.parse(request1.responseText);
// // //     renderHtml(data);
// // //     console.log(data.borders[0]);
    
// // //       let border=data.borders;
// // //       border.forEach(function(val){
// // //           // yangi so'rov
// // //           let request2=new XMLHttpRequest();
// // //           request2.open('GET', `https://restcountries.com/v2/alpha/${val}`);
// // //           request2.send();

// // //           request2.addEventListener('load',function(){
// // //           let data2=JSON.parse(request2.responseText);
// // //           renderHtml(data2,'neighbour');
// // //     })
// // //   })
    
    




// // //   });
// // // };

function renderHtml(data,className) {
  let html = `      <article class="${className}">
  <button class="close">x</button>
<img class="country__img" src="${data.flag}" />
<div class="country__data">
  <h3 class="country__name">${data.name}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(
    1
  )}</p>
  <p class="country__row"><span>🗣️</span>${
    data.languages ? data.languages[0].name : data.language
  }</p>
  <p class="country__row"><span>💰</span>${
    data.currencies ? data.currencies[0].name : data.currencie
  }</p>
</div>
</article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}

// const errorXabar=function(response,msg){
//     if(!response.ok){
//     throw new Error(`${msg} ${response.status} ${response.statusText}`);
//   }
// }

// const fetchFunc=function(url,msg){
//   return fetch(url)
//     .then(function(response){

//     errorXabar(response,msg)
//     return response.json();
// })
// }

// // // getCountry('uzbekistan');
// const getCountry=function(country){

// fetchFunc(`https://restcountries.com/v2/name/${country}`,"Davlatni topa olmadim")
// .then(function(res){
//   let [data]=res;
//   renderHtml(data);
//   let border=data.borders[0];
//   return fetchFunc(`https://restcountries.com/v2/alpha1/${border}`,"Qoshni davlatni topa olmadim")
// })
// .then(function(res){
//   let [data]=res;
//   renderHtml(data);
// })
// .catch(function(error){
//   alert(error);
// })
// // .finally(function(){
// //   alert("yuklandi")
// // })

// }
// getCountry('uzbekistan');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log('Sync1');
// setTimeout(() => {
//   console.log('Async')
// },0);
// Promise.resolve('promise').then(res=>console.log(res));
// console.log('Sync2')

// console.time('loop')
// console.log("async")
// fetch('https://restcountries.com/v2/name/uzbekistan');

// console.timeEnd('loop');


// ////////////////////////////////////////////////////////////////


const tanga=new Promise(function(resolve,reject){
  setTimeout(()=>{
    if(Math.random() >= 0.5){
      resolve('Siz yutdingiz')
    }
    else{
      reject('Siz yutqazdingiz');
    }
  },0)
});

tanga.then(res=>console.log(res)
).catch(err=>console.log(err))




//////////////

// const data=async function(){
//   try{
//     let data2=await fetch('https://restcountries.com/v2/name1/uzbekistan');
//     console.log(data2);
//     if(!data2.ok){
//       throw new Error(`Davlat topilmadi ${data2.status}  ${data2.statusText}`)
//     }
//     let [body]=await data2.json();
//     console.log(body);
//     renderHtml(body);
//     let border=body.borders[1];
//     let data3=await fetch(`https://restcountries.com/v2/alpha/${border}`);
//     let body1=await data3.json();
//     renderHtml(body1)
//   }catch(err){
//     alert(err)
//   }
// }
// data();
////////////////////////////// Lokatsiyani olish //////////////////

const getPosition = function () {
  const lokatsiyaOlish = new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        resolve(position);
      },
      function (err) {
        reject(err);
      }
    );
  });
  return lokatsiyaOlish;
};

const qayerdaMan = function () {
  getPosition()
    .then(res => {
      let a = res.coords.latitude;
      let b = res.coords.longitude;
      console.log(a, b);
      return fetch(`https://geocode.xyz/${a},${b}?geoit=json`);
    })
    .then(res => res.json())
    .then(response => {
      let country = response.country;
      return fetch(`https://restcountries.com/v2/name/${country}`);
    })
    .then(res => res.json())
    .then(response => {
      let data = response;
      renderHtml(data);
    });
};

qayerdaMan();
///////////////////////

const functionRet = async function () {
  // 1 - usul;
  // console.time("s");

  // const data1 = await fetch("https://restcountries.com/v2/name/uzbekistan");
  // const data1Json = await data1.json();

  // const data2 = await fetch("https://restcountries.com/v2/name/uzbekistan");
  // const data2Json = await data2.json();

  // const data3 = await fetch("https://restcountries.com/v2/name/uzbekistan");
  // const data3Json = await data3.json();

  // const data4 = await fetch("https://restcountries.com/v2/name/uzbekistan");
  // const data4Json = await data4.json();

  // const data5 = await fetch("https://restcountries.com/v2/name/uzbekistan");
  // const data5Json = await data5.json();

  // const data6 = await fetch("https://restcountries.com/v2/name/uzbekistan");
  // const data6Json = await data6.json();
  // console.log(data1Json, data2Json, data3Json, data4Json, data5Json, data6Json);
  // console.timeEnd("s");

  // 2 - usul;
  
  const data =Promise.all([
    fetch("https://restcountries.com/v2/name/uzbekistan"),
    fetch("https://restcountries.com/v2/name/usa"),
    fetch("https://restcountries.com/v2/name/russia"),
  ]);
  console.log(data);
  
 let setTime=function(a){
   return new Promise(function(resolve){
     setTimeout(function(){
       resolve("internetingiz sekin");
     },a*1000)
   })
 }

 const data1=await Promise.race([data,setTime(0.2)]);
 console.log(data1);

};

functionRet();








