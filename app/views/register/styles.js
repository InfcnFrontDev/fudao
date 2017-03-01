import {theme} from "../../utils/";

const styles = {
    inputNum:{
        flex:1,
        height: 40,
    },
    box1:{
        flexDirection:'row',
        marginBottom:20
    },
    box2:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderColor:'#D4D4D4',
        borderBottomWidth:1,

    },
    box3:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
      /*  paddingTop:10,
        paddingBottom:10,*/
        borderColor:'#D4D4D4',
        borderBottomWidth:1,

    },
    border1:{
        width:80,
        flexDirection:'row',
        justifyContent:'center',
        borderRightWidth:1,
        borderRightColor:"#D4D4D4",

    },
   tiaokuan:{
        fontSize:theme.DefaultFontSize-3,
       textAlign:'center',
       marginTop:6,
       color:'#666'
    }
};

export default styles;
