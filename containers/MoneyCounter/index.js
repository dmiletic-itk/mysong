import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { earnMoney } from './actions';
import PropTypes from 'prop-types';
import { styles } from './styles';

class MoneyCounter extends React.Component {
    constructor(props) {
        super(props);
        setInterval(this.increaseMoney.bind(this), 1000);
    }

    increaseMoney() {
        this.props.earnMoney(this.props.money + this.props.numberOfSongs);
    }

    render() {
        return (
            <Text style={styles.label}>Money earned: ${this.props.money}</Text>
        );
    }
}

MoneyCounter.propTypes = {
    numberOfSongs: PropTypes.number
}

MoneyCounter.defaultProps = {
    numberOfSongs: 0
}

function mapStateToProps (state) {
    return {
        money: state.money.money
    }
}

function mapDispatchToProps (dispatch) {
    return {
        earnMoney: (cash) => dispatch(earnMoney(cash))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MoneyCounter)
