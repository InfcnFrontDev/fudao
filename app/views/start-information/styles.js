import {theme} from "../../utils/";
const styles = {
    bigBox:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    box:{
        width:280,
        height:500,
    },
    photo:{
        marginTop:40,
        flexDirection:'row',
       justifyContent:'space-around',

    },
    touxiang:{
        width:80,
        height:80,
        borderRadius:40,
    },
    row1:{
        marginTop:40,
        justifyContent:'center',
    },
    pop:{
        width:280,
        height:50,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
  text:{
        textAlign:'center',
      fontSize:theme.DefaultFontSize
  },
    text2:{
        textAlign:'center',
        fontSize:theme.DefaultFontSize-3,
    },
    btn:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    mb:{
        width:80,
        height:80,
        borderRadius:40,
        backgroundColor:'#fff',
        opacity:0.7,
        position:'absolute',
        left:0,
        top:0,
        zIndex:1000
    },
    mb1:{
        width:80,
        height:80,
        borderRadius:40,
        backgroundColor:'#fff',
        opacity:0,
        position:'absolute',
        left:0,
        top:0,
        zIndex:1000
    },

};

export default styles;

