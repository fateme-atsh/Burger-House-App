import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

class User extends React.Component {
    render() { 
        return (<div>
<FontAwesomeIcon icon={faUser}/>
        </div>);
    }
}
 
export default User;