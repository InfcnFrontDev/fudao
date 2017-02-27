import themes from "../../themes/material"
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
    textdoc:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    text1:{
        fontSize:themes.DefaultFontSize-2,
        color:'#666'
    },
    text2:{
        fontSize:themes.DefaultFontSize-2,
        color:'#666',
        textDecorationLine:'underline'
    }

};

export default styles;
