import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

class CopyRight extends React.Component {
    render() { 
        return (<div>
<FontAwesomeIcon icon={faCopyright}/>
        </div>);
    }
}
 
export default CopyRight;