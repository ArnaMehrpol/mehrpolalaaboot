import axios from "axios";
import config from './axiosSetup'


const axiosSetup = async(apiAddress, method, header, sendData, success = function(data){ 
 console.log(data)
}, error = function(data){
  console.log(data)
}) =>{
  console.log({method, apiAddress, header, sendData})
    
  console.log('this is axios')
  let body = sendData
  let headers = {
    'Accept': "application/json",
    "Content-Type": "application/json; charset= UTF-8",      
    'Authorization':"Bearer 53|LMjCFzxRCMS4ycJ9iTZzbTMsB5guw4YoY2d9jhVI",
  };

  for(var key of Object.keys(headers))
    headers[key] = header[key];

  //console.log({body})
  if (sendData === ''){
    console.log('بدون بادی')
    await axios({
      method: method,
      url: `https://dfgsdfgsdfgj32gsdg.mehrpol.com/api${apiAddress}`,
      headers: headers,
    })
    .then(function(data){
      console.log({data})
      return success(data)
    })
    .catch(function(data){
      console.log({data})
      return error(data)
    });
  }else{

    // axios.post('https://dfgsdfgsdfgj32gsdg.mehrpol.com/api/user/addresses', {
    //   // firstName: 'Fred',
    //   // lastName: 'Flintstone'

    //     name: 'Fred',
    //     postal_code: '2',
    //     mobile: '2',
    //     description: 'Fred',
    //     place_id: 22,

    // },
    //  { headers: headers})
    // .then(function (response) {
    //   console.log("ssss : "+response.data.name);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

   console.log(body)
    await axios({
      method: method,
      url: `https://dfgsdfgsdfgj32gsdg.mehrpol.com/api${apiAddress}`,
      body: body,
      headers: headers,
    })
    .then(function(data){
      console.log("alireza:" + data)
      return success(data)
    })
    .catch(function(data){
      console.log({data})
      return error(data)
    });
  }
// .then(async response =>{
//   const dataFiles = await response.data;
//   console.log({dataFiles})
//   })
//   .catch(async error => {
//     const errorMsg = await error.message
//     console.log({errorMsg})
//   })
    
}


export {axiosSetup}