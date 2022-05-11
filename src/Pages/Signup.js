import React from 'react';
import CreateForm from '../Components/CreateForm';

const Signup = (props) => {

    return (
        <div>
            <CreateForm addWorker={props.addWorker} />
        </div>
    );
}

export default Signup;
