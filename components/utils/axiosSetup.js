import axios from "axios";
import config from "./config";
import Cookies from "universal-cookie";


const axiosSetup = async(apiAddress, method, header, sendData, success = function(data){ 
  console.log(data)
  }, error = function(data){
  console.log(data)
  }) =>{
  const cookies = new Cookies()
  const tokenId = cookies.get('token')
  console.log({method, apiAddress, header, sendData})
    
  console.log('this is axios')
  let body = sendData
  let headers = {
    'Accept': "application/json",
    "Content-Type": "application/json; charset= UTF-8",  
    'Authorization':"Bearer " + tokenId,
  };

  for(var key of Object.keys(headers))
    headers[key] = header[key];

  //console.log({body})
  if (sendData === ''){
    console.log('بدون بادی')
    await axios({
      method: method,
      url: `${config.api_url}${apiAddress}`,
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
   console.log(body)
    await axios({
      method: method,
      url: `${config.api_url}${apiAddress}`,
      data: body,
      headers: headers,
    })
    .then(function(data){
      console.log(data)
      return success(data)
    })
    .catch(function(data){
      console.log({data})
      return error(data)
    });
  }
}


export {axiosSetup}


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