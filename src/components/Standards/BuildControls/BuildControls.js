import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Reading', type: 'reading' },
    { label: 'Writing', type: 'writing' },
    { label: 'Math', type: 'math' },
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.standardAdded(ctrl.type)}
                //this function address the proptype for build controls
                />
        ))}

    </div>
);

export default buildControls;