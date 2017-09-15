import { combineReducers } from 'redux'
import songViewReducer from '../SongListView/reducer';
import moneyReducer from '../MoneyCounter/reducer';

const rootReducer = combineReducers({
    songs: songViewReducer,
    money: moneyReducer
})

export default rootReducer