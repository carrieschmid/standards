import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Standard.css';

class Standard extends Component {
    render () {
        let standard = null;

        switch ( this.props.type ) {
            // case ( 'reading' ):
            //     standard = <div className={classes.BreadBottom}></div>;
            //     break;
            // case ( 'writing' ):
            //     standard = (
            //         <div className={classes.BreadTop}>
            //             <div className={classes.Seeds1}></div>
            //             <div className={classes.Seeds2}></div>
            //         </div>
            //     );
            //     break;
            case ( 'reading' ):
                standard = <div className={classes.Reading}></div>;
                break;
            case ( 'writing' ):
                standard = <div className={classes.Writing}></div>;
                break;
            case ( 'math' ):
                standard = <div className={classes.Math}></div>;
                break;
            default:
                standard = null;
        }

        return standard;
    }
}

Standard.propTypes = {
    type: PropTypes.string.isRequired
};

export default Standard;