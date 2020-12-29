import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Standards from '../../components/Standards/Standards';
import BuildControls from '../../components/Standards/BuildControls/BuildControls';
import { readingList, writingList, mathList } from '../../utils/staticData';

class StandardsBuilder extends Component {
   state = {
        standards: {
            reading: readingList,
            writing: writingList,
            math: mathList,
        },
        added: false
    }

       addStandardHandler = ( type ) => {
        const updatedStandards = {
            ...this.state.standards
        };
        updatedStandards[type] = updatedStandards;
       
        this.setState( {standards: updatedStandards } );
    }


    render () {
     
        return (
            <Aux>
          
                <Standards standards={this.state.standards}/>
                <BuildControls standardAdded={this.addStandardHandler}/>
               
            </Aux>
        );
    }
}

export default StandardsBuilder;