/**
 * 发短息
 */
class Touchable extends Component{

    constructor(props){

        super(props);

    }

  /*  protoTypes:{

       /!* url:React.ProtoTypes.string*!/

    }
*/
    render (){

        return(

            <TouchableOpacity onPress={()=>{

                Linking.canOpenURL(this.props.url).then(supported => {

                    if (!supported) {

                        console.log('Can\'t handle url: ' + this.props.url);

                    } else {

                        return Linking.openURL(this.props.url);

                    }

                }).catch(err => console.error('An error occurred', err));

            }}>

                <MeItem lefttitle={this.props.title}/>

            </TouchableOpacity>

        )

    }

}