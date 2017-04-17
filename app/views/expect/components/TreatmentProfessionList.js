import React, {PureComponent} from "react";
import {View, Text, ScrollView} from "react-native";
import {ListItem, Button, List} from "native-base";
import {Actions} from "react-native-router-flux";
import GiftedListView from '../../../components/GiftedListView'

class TreatmentProfessionList extends PureComponent {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <GiftedListView
                enableEmptySections={true}
                rowView={this.renderRowView.bind(this)}
                onFetch={this.onFetch.bind(this)}
                refreshable={false}
                firstLoader={true}
                withSections={true}
                paginationAllLoadedView={() => {
                }}
                sectionHeaderView={this._renderSectionHeaderView}
            />
        )
    }

    _renderSectionHeaderView(sectionData, sectionID) {
        return (
            <View style={styles.divider}>
                <Text>{sectionID}</Text>
            </View>
        )
    }

    onFetch(page = 1, callback, options) {
        let {professionalMethods} = this.props;
        callback(professionalMethods, {
            allLoaded: true
        })
    }

    renderRowView(row) {
        let {title, module} = this.props;
        return (
            <Button transparent style={styles.button}
                    onPress={() => module == 'question' ? Actions['questionTreatmentDetail']({
                        data: row,
                        title: title
                    }) : Actions['expectTreatmentDetail']({data: row, title: title})}>
                <View style={styles.borderBottom}>
                    <View style={styles.name}>
                        <Text>{row.name}</Text>
                    </View>
                    <Text>></Text>
                </View>
            </Button>
        )
    }

    renderPaginationAllLoadedView() {
        return (null)
    }

}

const styles = {
    divider: {
        paddingLeft: 20,
        borderColor: '#D8D8D8',
        borderBottomWidth: 0.5,
        height: 40,
        paddingTop: 10,
        paddingBottom: 0,
        backgroundColor: '#F0F0F0',
    },
    button: {
        flex: 1,
        padding: 0,
        margin: 0,
        height: 36,
        marginTop: 0,
        marginBottom: 0,

    },
    name: {
        flex: 1,
    },
    borderBottom: {
        borderBottomColor: '#D8D8D8',
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        paddingLeft: 30,
        paddingRight: 20,
        paddingBottom: 8,
        paddingTop: 8,
    }
};

TreatmentProfessionList.propTypes = {
    professionalMethods: React.PropTypes.object,
    title: React.PropTypes.string,
};

TreatmentProfessionList.defaultProps = {
    professionalMethods: {},
    title: '',
};

export default (TreatmentProfessionList);
