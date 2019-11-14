export function PostData(email, password){

    let Baseurl ="http://blog.etherial.fr/auth";

    return new Promise((resolve, reject) => {

    

     fetch(Baseurl,{
         method: 'POST',
         body: JSON.stringify({
           email: email,
           password: password
         })
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