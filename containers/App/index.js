import React from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { styles } from './styles';

import SongListView from '../SongListView';
import MoneyCounter from '../MoneyCounter';

class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>MySongs Test App</Text>
                <MoneyCounter numberOfSongs={this.props.songs.length}/>
                <SongListView />
            </View>
        );
    }
}

function mapStateToProps (state) {
    return {
        songs: state.songs.songs
    }
}

function mapDispatchToProps (dispatch) {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)