import React from 'react';
import PropTypes from 'prop-types'; 
import {Toast, ToastContainer} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class NotificationToast extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: true,
        }
    }

    closeToast = () => {
        this.setState({show: false})
    }
    

    render(){
        const styleObj = {
            fontSize: 14,
            color: this.props.textColor ? this.props.textColor : "black",
            textAlign: "center",
            backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : "lightgray",
        }
        if(!this.props.message){
            return(null);
        }
        return(
            <>
            
            <div className="toast-container">
                <ToastContainer className="toast-container">
                <Toast show={this.state.show} onClose={this.closeToast} style={styleObj}>
                    <Toast.Header style={styleObj}>
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                        <strong className="me-auto">Notification</strong>
                    </Toast.Header>
                    <Toast.Body><p style={styleObj}>{this.props.message}</p></Toast.Body>
                </Toast>
                </ToastContainer>
            </div>
            
            </>
        )
    }
}

NotificationToast.propTypes = {
    message: PropTypes.string.isRequired,

}

export default NotificationToast;