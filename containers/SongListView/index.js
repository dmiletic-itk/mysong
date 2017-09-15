import React from 'react';
import { connect } from 'react-redux';

import { addSong, changeCurrentSong, clearCurrentSong } from './actions';

import { StyleSheet, Text, View, ListView, TextInput, Button } from 'react-native';

import { styles } from './styles';

class SongListView extends React.Component {
    constructor(props) {
        super(props);
    }

    addNewSong() {
        this.props.dispatchAddSong(this.props.currentSong);
        this.props.clearCurrentSong();
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <TextInput
                        style={styles.textInput}
                        value={this.props.currentSong}
                        onChangeText={this.props.changeCurrentSong}
                    />
                    <Button
                        title="Add song"
                        style={styles.addButton}
                        accessibilityLabel="Add new song in the list"
                        onPress={this.addNewSong.bind(this)}
                    />
                </View>
                <ListView
                    style={styles.listView}
                    dataSource={(new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})).cloneWithRows(this.props.songs)}
                    renderRow={(rowData) => <Text>{rowData}</Text> }
                    enableEmptySections={true}
                />

            </View>
        );
    }
}

function mapStateToProps (state) {
    return {
        songs: state.songs.songs,
        currentSong: state.songs.currentSong
    }
}

function mapDispatchToProps (dispatch) {
    return {
        dispatchAddSong: (song) => dispatch(addSong(song)),
        changeCurrentSong: (song) => dispatch(changeCurrentSong(song)),
        clearCurrentSong: () => dispatch(clearCurrentSong())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SongListView)