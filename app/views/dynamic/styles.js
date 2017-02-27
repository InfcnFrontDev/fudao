import theme from "../../themes/material";

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
    marginBottom:30,
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
    top:185,
    right:95,
  },
  touxiang:{
    width:78,
    height:78,
    position:'absolute',
    top:150,
    right:10,
  },
  dynamic:{
    flexDirection:'row',
    marginRight:8,
    marginBottom:20,
    marginTop:20,
    marginLeft:20,
  },
  time:{
    color:'#999',
    fontSize:theme.DefaultFontSize-3,
  },
  dynamicDetail:{
    flex:1,
  },
  dynamicTouxiang:{
    width:44,
    height:44,
    marginLeft:12,
    marginRight:12,
  },
  dynamicName:{
    color:'#0f9dc9',
    fontSize:17,
  },
  dynamicContent:{
    marginTop:8,
  },
  imageTouch:{
    marginRight:7,
    marginTop:8,
    height: 120,
    width:78,
    height:78,
  },
  allImage:{
    flexDirection:'row',
    flexWrap:'wrap',
  },
  msgImage: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:null,
    height:null,
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
    right:12,
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
    fontSize:theme.DefaultFontSize-4,
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
    backgroundColor:'#eee',
    paddingLeft:10,
    marginRight:16,
    // paddingBottom:8,
  },
  oneComment:{
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'center',
justifyContent:'flex-start',
    // backgroundColor:'#000'
    marginBottom:4,
  },
  commentName:{
    color:'#0f9dc9',
    lineHeight:25,
    fontSize:theme.DefaultFontSize-3,
    marginRight:6,
  },
  commentContent:{
    lineHeight:25,
  },
  allSupports:{
    backgroundColor:'#eee',
    paddingLeft:10,
    marginRight:16,
    paddingBottom:8,
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:'#ccc',
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
