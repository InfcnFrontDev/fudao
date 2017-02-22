import DialogAndroid from "react-native-dialogs";
const dialogs = {
    showDialog(options){
        var dialog = new DialogAndroid();
        dialog.set(options);
        dialog.show();
    }
};
export default dialogs;