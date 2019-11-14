import fetch from 'isomorphic-fetch'
return dispatch => {
        dispatch(requestPosts(data));
        return fetch('/trendings', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Authorization': Config.token
            },
            credentials: 'same-origin', 
            body: JSON.stringify(data),
        })
        .then(checkStatus)
        .then(reponse => {
            console.log('request succeeded with JSON response', data);
            dispatch(successSent("The output list has been successfully sent!"));
        }).catch(err => {
            console.log('request failed', err);
            dispatch(failSent("Error on sending request: " + err));
        });
    }