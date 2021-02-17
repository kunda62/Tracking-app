import { Polygon } from 'react-native-maps';
import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'add_current_location':
            return { ...state, currentLocation: action.payload };
        case 'start_recording':
            return { ...state, recording: true };
        case 'stop_recording':
            return { ...state, recording: false };
        case 'add_location':
            return { ...state, locations: [...state.location, action.payload] };
        case 'change_name':
            return { ...state, name: action.payload }
        default:
            return state;
    }
};

const changeName = dispach => (name) => {
    dispach({ type: 'change_name', payload: name })
}

const startRecording = dispach => () => {
    dispach({ type: 'start_recording' });
};
const stopRecording = dispach => () => {
    dispach({ type: 'stop_recording' });
};
const addLocation = dispach => (location, recording) => {
    dispach({ type: 'add_current_location', payload: location });
    if (recording) {
        dispach({ type: 'add_location', payload: location });
    }
};

export const { Context, Provider } = createDataContext(locationReducer,
    { startRecording, stopRecording, addLocation, changeName },
    { name: "", recording: false, locations: [], currentLocation: null });