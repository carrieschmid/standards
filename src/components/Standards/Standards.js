import React from 'react';

import classes from './Standards.css';
import Standard from './Standard/Standard';

const standards = ( props ) => {
    let transformedStandards = Object.keys( props.standards)
        .map( stKey => {
            return [...Array( props.standards[stKey] )].map( ( _, i ) => {
                return <Standard key={stKey + i} type={stKey} />;
            } );
        } )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedStandards.length === 0) {
        transformedStandards = <p>Please start adding standards!</p>;
    }
    return (
        <div className={classes.Standards}>
            <Standard/>
            {transformedStandards}
        </div>
    );
};

export default standards;