import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

class Mail extends React.Component {
    render() { 
        return (<div>
<FontAwesomeIcon icon={faEnvelope}/>
        </div>);
    }
}
 
export default Mail;