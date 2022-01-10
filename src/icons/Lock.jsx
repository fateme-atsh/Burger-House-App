import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

class Lock extends React.Component {
    render() { 
        return (<div>
<FontAwesomeIcon icon={faLock}/>
        </div>);
    }
}
 
export default Lock;