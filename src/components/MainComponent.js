
import React from "react";
import Page from './PageComponent';
import Header from './HeaderComponent';
import { connect } from 'react-redux';
import { deleteItem, fetchPhotos, postPhoto } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    photos: state.photos
  }
}
const mapDispatchToProps = dispatch => ({
  fetchPhotos: ()=> {dispatch(fetchPhotos())},
  postPhoto: (label, photoUrl)=> dispatch(postPhoto(label, photoUrl)),
  deletePhoto: (id) => dispatch(deleteItem(id))
});


class Main extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchPhotos();
        console.log(this.props.photos)
    }

    render(){
        return(

                <div className="container mx-auto py-6">
            <header>
                <Header postPhoto={this.props.postPhoto}/>
            </header>
            <section>
                <Page photos={this.props.photos} deletePhoto={this.props.deletePhoto}/>
            </section>
            
        </div>
            )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);