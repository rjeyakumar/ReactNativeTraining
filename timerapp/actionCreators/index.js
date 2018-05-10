import { START_TIMER, STOP_TIMER, SHOW_START } from '../actionTypes';

export function startTimerActionCreator() {
    return {
        type: START_TIMER,
    }
}

export function showStartActionCreator() {
    return {
        type: SHOW_START,
    }
}

export function stopTimerActionCreator() {
    return {
        type: STOP_TIMER,
    }
}