import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
const TrackForm = () => {

    const { state: { name, recording, locations }, startRecording, stopRecording, changeName } = useContext(LocationContext);

    console.log(locations.length);

    return <>
        <Spacer>
            <Input value={name} onChangeText={changeName} placeholder="Enter Name" />
        </Spacer>
        <Spacer>
            {recording ? <Button title="Stop Recording" onPress={stopRecording} /> : <Button onPress={startRecording} title="Start Recording" />}
        </Spacer>
    </>
}

export default TrackForm;