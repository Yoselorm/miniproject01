import React from 'react';
import WorkerCard from '../Components/WorkerCard';

const Home = (props) => {

    return (
        <div>
            {props.workerData.map((worker) => {
                return (
                    <div key={worker.id}>
                        <WorkerCard data={worker} />
                    </div>
                )
            })}
        </div>
    );
}

export default Home;
