import * as ActionTypes from './ActionTypes';

export const Photos = (state = { errMess: null, photos:[]}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PHOTOS:
      return {...state, errMess: null, photos: action.payload};

    case ActionTypes.PHOTOS_FAILED:
      return {...state, errMess: action.payload};

    case ActionTypes.ADD_PHOTO:
        let photo = action.payload;
        return { ...state, photos: state.photos.concat(photo)};
    
    
    case ActionTypes.PHOTOS_LOADING:
        return {...state, isLoading: true, errMess: null, photos: []}
    
    case ActionTypes.DELETE_PHOTO:
        return {...state, photos: state.photos.filter((photo,i)=> photo.id!==action.payload)}
    case ActionTypes.DELETE_PHOTO_FAILED:
        return {...state, errMess: action.payload};
    case ActionTypes.SEARCH_PHOTO:
        return {...state, photos: state.photos.filter((photo, i)=> photo.label.substring(0, action.payload.len).toLowerCase()===action.payload.txt.toLowerCase())}
    default:
      return state;
  }
};