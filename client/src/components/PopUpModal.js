import React from "react";
import { Modal, ModalFooter } from "react-bootstrap";
import {Button} from "react-bootstrap";

class PopUpModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: true,
        }
    }

    handleClose = () => {
        this.setState({
            show: false,
        })
    }

    render(){
        let temp = [];
        let i = 0;
        let temp2 = Object.keys(this.props.choices)
        for (const property in this.props.choices){
            if(i + 1 == temp2.length){
                temp.push(<Button onClick={() => this.props.closeModal()} key={i}>{property}</Button>);
            }
            else{
                temp.push(<Button onClick={this.props.choices[property]} key={i}>{property}</Button>);
            }
            ++i;
        }
        console.log(temp);
        return (
            <>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    {/* <Modal.Title>Modal heading</Modal.Title> */}
                    </Modal.Header>
                    <Modal.Body>{this.props.text}</Modal.Body>
                    <Modal.Footer>
                    {temp}
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default PopUpModal;