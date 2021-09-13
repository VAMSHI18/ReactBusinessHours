// Action creators
// import bhAPI from '../apis/bhRequest';
import apis from '../apis/bhRequest';
import hours from '../data/hours.json';

import _ from 'lodash';
import {
    v4 as uuidv4
} from 'uuid';

export const selectedBH = (bh, index) => {
    console.log('action executed!!');
    let bhClicked = _.cloneDeep(bh);
    return {
        type: "BH_SELECTED",
        payload: { bhIndex: index, bhClicked}
    }
};

export const deleteBusinessHour = (bh) => {
    // console.log('action');
    // console.log(bh);
    return {
        type: "BH_DELETED",
        payload: bh
    }
};

export const fetchBusinessHours = () => async (dispatch) => {
    const response = await apis.get('/flow-api/businesshours');

    dispatch({
        type: 'FETCH_HOURS',
        payload: response.data
    });
};

export const changeEndTimeHandler = (bhClicked, index) => {
    // console.log('bhClicked');
    // console.log(bhClicked);
    bhClicked.hours[index].noend = !bhClicked.hours[index].noend;
    // console.log('index: ', index);
    return {
        type: 'CHANGE_ENDTIME',
        payload: {
            bhClicked
        }
    }
};

export const changeClosedTimeHandler = (bhClicked, index) => {
    bhClicked.hours[index].closed = !bhClicked.hours[index].closed;
    return {
        type: 'CHANGE_CLOSEDTIME',
        payload: {bhClicked}
    };
};

export const saveBH = (bhHours, bhClicked) => {
    let clonedBusinessHours = _.cloneDeep(bhHours);
    let index = _.findIndex(clonedBusinessHours, (bh) => {return bh.name === bhClicked.name});
    clonedBusinessHours[index] = bhClicked;
    return {
        type: 'SAVE_BH',
        payload: clonedBusinessHours
    }
};

export const startTimeHandler = (bhClicked, index, timeString) => {
    bhClicked.hours[index].starttime = timeString;
    return {
        type: 'CHANGE_STARTTIME_OR_ENDTIME',
        payload: {bhClicked}
    }
};

export const endTimeHandler = (bhClicked, index, timeString) => {
  bhClicked.hours[index].endtime = timeString;
  return {
    type: "CHANGE_STARTTIME_OR_ENDTIME",
    payload: { bhClicked },
  };
};

export const resetHandler = (bhHours, bhClicked) => {
    let clonedBusinessHours = _.cloneDeep(bhHours);
    let index = _.findIndex(clonedBusinessHours, (bh) => {
        return bh.name === bhClicked.name;
    });
  return {
    type: "RESET_BH",
    payload: {bhHours: clonedBusinessHours, bhClicked: clonedBusinessHours[index], bhIndex: index}
  };
};

export const saveNewBH = (bhHours, name, tags=[]) => {
    //generate busines hour object
    let  newBHObject = {};
    newBHObject.id = uuidv4();
    newBHObject.name = name;
    newBHObject.tags = tags;
    newBHObject.hours = hours;
    return{
        type: "SAVE_NEW_BH",
        payload: {
            bhHours,
            newBHObject
        }
    };
};
export const addBusinessHour = (newName) => {
    let bhHours = {id: '1234', name: newName, lastmodified: '', tags: [], hours: hours.hours};
    return {
        type: 'NEW_BH',
        payload: bhHours
    }
};
