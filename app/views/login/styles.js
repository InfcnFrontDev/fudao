const styles = {
    container:{
        justifyContent:'center',
        alignItems: 'center',

    },
    //包裹输入框View样式
    textInputViewStyle: {
        flexDirection:'row',
        alignItems: 'center',
        //设置宽度减去30将其居中左右便有15的距离
        width: 280,
        height: 40,
        //设置圆角程度
        borderRadius: 6,
        //设置边框的颜色
        borderColor: '#D4D4D4',
        //设置边框的宽度
        borderWidth: 1,
        //内边距
        paddingLeft: 10,
        paddingRight: 10,
        //外边距
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        //设置相对父控件居中
        alignSelf: 'center',


    },
    //输入框样式
    textInputStyle: {
        width: 300,
        height: 35,
        paddingLeft: 8,
        backgroundColor: '#D4D4D4',
        // alignSelf: 'center',
        //根据不同平台进行适配
       /* marginTop: Platform.OS === 'ios' ? 4 : 8,*/
    },
    textInputView:{
        marginTop:10,
        width: 280,
        height: 40,
        alignSelf: 'center',
    },

    view:{
        width:320,
        height:540,
    },
    img:{
        marginLeft:10,
        width:300,
        height:300,
        resizeMode:'cover',
    },
    textdoc:{
        width:280,
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignSelf: 'center',
      /*  fontSize:16,
        fontColor:'blue',*/
    },
    text:{
        fontSize:16,


    }


};

export default styles;
