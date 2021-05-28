
import {combineReducers} from 'redux';
// import bh from './bh.json';
// import _ from 'lodash';


export const bhHours = (state=[], action) => {
    switch(action.type){
        case 'FETCH_HOURS':
            return action.payload;
        case 'BH_DELETED':
            return state.filter((ele) => ele !== action.payload);
        case 'SAVE_BH':
            return action.payload;
        case 'RESET_BH':
            return action.payload.bhHours;
        default:
            return state;
    }
};

export const selectBH = (selectedBH = {}, action) => {
    switch (action.type) {
      case "BH_SELECTED":
        return action.payload;
      case "CHANGE_ENDTIME":
        return {
          bhIndex: selectedBH.bhIndex,
          bhClicked: action.payload.bhClicked,
        };
      case "CHANGE_CLOSEDTIME":
        return {
          bhIndex: selectedBH.bhIndex,
          bhClicked: action.payload.bhClicked,
        };
      case "CHANGE_STARTTIME_OR_ENDTIME":
        return {
          bhIndex: selectedBH.bhIndex,
          bhClicked: action.payload.bhClicked,
        };
      case 'RESET_BH':
          return {
            bhIndex: selectedBH.bhIndex,
            bhClicked: action.payload.bhClicked
          };
      default:
        return selectedBH;
    }
};

// export const deleteBH = (state=[], action) => {
//             // console.log('reduce........');
//             // console.log(state);
//     switch(action.type) {
//         case 'BH_DELETED':
//             return state.filter((ele) => ele !== action.payload);
//         default:
//             return state;
//     }
// };

export default combineReducers({
    hours: bhHours,
    selectBH: selectBH
});