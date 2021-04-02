import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const updateInput = (input) => (
  {
    type: ActionTypes.SEARCH_INPUT,
    payload: {txt: input, len: input.trim().length},
  }
)

export const addPhoto = (photo) => ({
    type: ActionTypes.ADD_PHOTO,
    payload: {
        id: photo.id,
        label: photo.label,
        photo_url: photo.photo_url
    }
});

export const fetchPhotos = () =>(dispatch) =>{
    dispatch(photosLoading(true));
    return fetch(baseUrl)
    .then(response => {
        if(response.ok){
          
          return response;
        }
        else{
          var error = new Error('Error '+ response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      }, 
        error => {
            var errmess = new Error(error.message);
            throw errmess;
    })
    .then(response => response.json())
    .then(photos => {dispatch((addPhotos(photos)))})
    .catch(error => dispatch(photosFailed(error.message)));
}

export const postPhoto = (label, photoUrl) => (dispatch) => {
    console.log(label+"  "+photoUrl)
    const newPhoto = {
       label: label,
       photo_url: photoUrl
    };
    
    return fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(newPhoto),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => {
        console.log(response)
        dispatch(addPhoto(response));
    })
    .catch(error =>  { 
        console.log('post photo', error.message); 
        alert('Your photo could not be posted\nError: '+error.message); 
    });
  };
  

export const photosLoading = () => ({
    type: ActionTypes.PHOTOS_LOADING
});

export const photosFailed = (errmess) => ({
    type: ActionTypes.PHOTOS_FAILED,
    payload: errmess
});

export const addPhotos = (photos) => ({
    type: ActionTypes.ADD_PHOTOS,
    payload: photos
});

export const deletePhoto = (res)=>({
    type: ActionTypes.DELETE_PHOTO,
    payload: res.id
});

export const deleteFailed = (errMsg) => ({
    type: ActionTypes.DELETE_PHOTO_FAILED,
    payload: errMsg

})

export const deleteItem = (id) => (dispatch)=>{
    return fetch(baseUrl+id+'/',{
        method: "DELETE",
        body: JSON.stringify({id:id}),
        header:{
            "Content-Type" : "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response=> response.json())
    .then(response=>dispatch(deletePhoto(response)))
    .catch(err=>{
        console.log("photo failed to delete "+err.message);
        dispatch(deleteFailed(err.message));
    })
}


