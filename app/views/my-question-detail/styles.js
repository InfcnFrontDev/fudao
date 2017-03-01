import {theme} from "../../utils/";

const styles = {
  container:{
    backgroundColor:'#fff',
  },
  content:{
    backgroundColor:'#fff',
  },
  myQuestion:{
    height:200,
    backgroundColor:'#F0F0F0',
    borderBottomColor:'#D8D8D8',
  },
  types:{
    borderBottomColor:'#F0F0F0',
    borderBottomWidth:1,
  },
  title:{
    fontSize:theme.DefaultFontSize+2,
    color:'#000',
    fontWeight:'400',
    textAlign:'center',
    marginTop:16,
    marginBottom:16,
  },
  contentList:{
    borderWidth:0,
    paddingRight:0,
    paddingTop:0,
    paddingBottom:0,
    marginLeft:6,
    marginRight:6,
  },
  oneQuestion:{
    marginBottom:0,
    marginTop:0,
    marginRight:6,
    marginLeft:6,
    paddingLeft:6,
    paddingRight:6,
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    backgroundColor:'#F1F7EE',
    marginBottom:16,
    // height:80,
  },
  oneTitle:{
    color:'#000',
    flex:1,
  },
  img:{
    width:36,
    height:36,
    marginRight:8,
  },
  choose:{
    width:20,
    height:20,
    justifyContent:'flex-end',

  }
};

export default styles;
