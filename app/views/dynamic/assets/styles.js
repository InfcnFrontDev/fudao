import {theme} from "../../../utils/";

const styles = {
  contain:{
    // backgroundColor:'#444',
    // flexDirection:'column',
  },
  contain1:{
    backgroundColor:'#fff',
    flex:1,
  },
  content1:{
    height:180,
    marginBottom:20,
  },
  bgImg:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:null,
    height:null,
  },
  person:{
    position:'absolute',
    top:145,
    right:100,

  },
  color9b:{
    color:'#000',
    fontSize:theme.DefaultFontSize+1,
  },
  touxiang:{
    width:78,
    height:78,
    position:'absolute',
    top:120,
    right:10,
    borderColor:'#fff',
    borderWidth:2.5,
  },
  dynamic:{
    borderBottomColor:'#E0E0E2',
    borderBottomWidth:1,
    paddingRight:8,
    paddingBottom:16,
    marginTop:16,
    paddingLeft:8,
  },

  time:{
    color:'#999',
    fontSize:theme.DefaultFontSize,
  },


  dynamicMessage:{
    position:'absolute',
    right:0,
  },
  dynamicMessageImage:{
    width:16,
    height:16,
  },
  showContain:{
    height:20,
    marginBottom:6,
  },
  show:{
    flexDirection:'row',
    position:'absolute',
    right:34,
  },
  showMessage:{
    position:'absolute',
    right:0,
  },
  divid:{
    paddingLeft:8,
    paddingRight:8,
    paddingTop:0,
    height:24,
  },
  showoneText:{
    textAlign:'center',
    color:'#999',
    fontSize:theme.DefaultFontSize-2,
  },
  textInputContain:{
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:10,
    paddingRight:10,
    position:'absolute',
    zIndex:99,
    bottom:0,
    flexDirection:'row',
    backgroundColor:'#fff',
  },
  textInput:{
    flex:1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius:10,
    paddingLeft:12,
  },
  allComments:{
    backgroundColor:'#F3F3F5',
    paddingLeft:10,
    marginLeft:50,
    // paddingBottom:8,
  },
  oneComment:{
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'center',
justifyContent:'flex-start',
    marginBottom:4,
  },
  commentName:{
    color:'#5E7192',
    lineHeight:25,
    fontSize:theme.DefaultFontSize-2,
    marginRight:6,
  },
  commentContent:{
    fontSize:theme.DefaultFontSize-2,     
    lineHeight:25,
    color:'#060608',

  },
  allSupports:{
    backgroundColor:'#F3F3F5',
    paddingLeft:10,
    marginLeft:50,
    paddingBottom:8,
    flexDirection:'row',
    borderBottomWidth:0.3,
    borderBottomColor:'#E0E0E2',
    flexWrap:'wrap',
    alignItems:'center',
  },
  xin:{
    marginTop:6,
    marginRight:4,
    width:20,
    height:20,
  }
};

export default styles;
