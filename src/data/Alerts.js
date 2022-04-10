import { Alert } from 'react-bootstrap'; 
import { useState } from 'react';

export function AlertSuccess(props) {

    const [show, setShow] = useState(false);

     return (
        <Alert show={show} variant="success">
         <Alert.Heading>Exchange rate updated!</Alert.Heading>
        </Alert>

     );

}

export function AlertFailure(props) {
   
  const [show, setShow] = useState(false);
    
    return(   
    <Alert show={show} variant="danger">
         <Alert.Heading>Update failed!</Alert.Heading>
        </Alert>
    );
}

export function SettingsUpdated(props) {
  
    const [show, setShow] = useState(false);
  
    return(
        <Alert show={show} variant="success">
        <Alert.Heading>Settings updated!</Alert.Heading>
        </Alert>

    );

}