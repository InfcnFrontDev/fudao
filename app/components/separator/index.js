import React, {Component} from "react";
import {Left, Right, Body, View} from "native-base";
import theme from "../../themes/material";

class Separator extends Component {

    render() {
        let {bordered, noTopBorder, noBottomBorder, height} = this.props;
        let style = {};

        if (bordered) {
            style.borderTopWidth = theme.borderWidth;
            style.borderTopColor = theme.listBorderColor;
            style.borderBottomWidth = theme.borderWidth;
            style.borderBottomColor = theme.listBorderColor;
        }

        if (noTopBorder) {
            style.borderTopWidth = 0;
        }

        if (noBottomBorder) {
            style.borderBottomWidth = 0;
        }

        if (height) {
            style.height = height;
        }

        return (
            <View style={style}/>
        )
    }

    shouldComponentUpdate() {
        return false
    }
}

Separator.propTypes = {
    bordered: React.PropTypes.bool,
    noTopBorder: React.PropTypes.bool,
    noBottomBorder: React.PropTypes.bool,
    height: React.PropTypes.number,
}

Separator.defaultProps = {
    bordered: false,
    noTopBorder: false,
    noBottomBorder: false,
    height: 15,
}

export default (Separator)