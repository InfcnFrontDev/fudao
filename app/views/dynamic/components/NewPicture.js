import React, {Component} from "react";
import {connect} from "react-redux";
import {selectPhotoTapped} from "../../../actions/dynamic";
import {Text} from "native-base";
import {View,Image,TouchableHighlight} from "react-native";

/**
* 上传图片
*/
class NewPicture extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    var arr=this.props.addPicture;
    var item = arr.map((p,i)=>{
      return (
        <TouchableHighlight key={i}>
                <Image source={p} style={styles.addPicture}/>
        </TouchableHighlight>
      )
    })
    return (
      <View style={styles.pictureView}>
          {item}
          <TouchableHighlight onPress={this.selectPhotoTapped.bind(this)} underlayColor='#fafafa'>
                  <Image source={require('../assets/addPicture.png')} style={styles.addPicture}/>
          </TouchableHighlight>
      </View>
    )
  }

  selectPhotoTapped(){
    const {dispatch} = this.props;
    dispatch(selectPhotoTapped())

  }


}

const styles={
  pictureView:{
    flexDirection:'row',
    flexWrap:'wrap',
    borderBottomWidth:1,
    borderBottomColor:'#dbdbdb',
    alignItems:'flex-start',
  },
  addPicture:{
    width:68,
    height:68,
    marginLeft:10,
    marginBottom:10,
  }
}

const mapStateToProps = state => ({
  addPicture:state.dynamic.addPicture
});

export default connect(mapStateToProps)(NewPicture);
