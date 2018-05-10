import { START_TIMER, STOP_TIMER, SHOW_START } from '../actionTypes';

const initialState = {
    counter: 0,
    canStop: false,
};
export default function timerReducer(prevState = initialState, action) {
    switch (action.type) {
        case START_TIMER:
            return { ...prevState, counter: prevState.counter + 1 };
        case SHOW_START:
            return { ...prevState, canStop: true, };
        case STOP_TIMER:
            return { ...prevState, canStop: false, };
        default:
            return prevState;
    }
}