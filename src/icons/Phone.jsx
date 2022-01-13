import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

class Phone extends React.Component {
    render() { 
        return (<div>
<FontAwesomeIcon icon={faPhoneAlt}/>
        </div>);
    }
}
 
export default Phone;