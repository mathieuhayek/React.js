export function PostData2(userData){

    let Baseurl ="http://blog.etherial.fr/user";

    return new Promise((resolve, reject) => {

    

     fetch(Baseurl,{
         method: 'POST',
         body: JSON.stringify(userData)
     })
    .then((response) => response.json())
    .then((responseJson) => {
      resolve(responseJson);
    })
    .catch((error) => {
     reject(error);
    });

});

}