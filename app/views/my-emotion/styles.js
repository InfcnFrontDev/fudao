import {theme} from "../../utils/";

const styles = {
  container:{
    backgroundColor:'#fff',
  },
  content:{
    paddingTop:10,
    paddingRight:12,
    paddingLeft:12,
    backgroundColor:'#fff',
  },
  divideList:{
    backgroundColor:'#fff',
  },
  divideTitle:{
    color:'#2e7fae',
    fontSize:theme.DefaultFontSize+2,
  },
  contentList:{
    borderColor:'#fff',
    paddingTop:0,
    paddingBottom:0,

  },
  oneEmotion:{
    marginBottom:0,
    marginTop:0,
    marginRight:0,
    marginLeft:0,
    flex:1,
    flexDirection:'column',
    alignItems:'flex-start',
    height:80,
  },
  oneEmotionImg:{
    width:50,
    height:50,
  },
  oneEmotionTitle:{
    color:'#9b9b9b',
    textAlign:'center',
    marginLeft:13,
  },
  right:{
    paddingTop:0,
  },
  selectedEmotion:{
    flexDirection:'column',
    marginTop:0,
  },
  selectedEmotionImg:{
    width:36,
    height:36,
  },
  selectedEmotionTitle:{
    color:'#fff',
    marginLeft:7,
  }
};

export default styles;
