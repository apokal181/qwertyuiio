import React, {useState} from 'react'
import './pop.css'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";



const Popcomp = (props) => {
    const [show, setShow] = useState(false);

    return (show | props.post.id === props.postId && props.trigger) ? (
        <div className='popup'>
            <div className="popup-inner">
                <div><button variant="danger" className="close-btn" onClick={() => {
                    setShow(false)
                    props.setTrigger(false)
                }}>
                    CLOSE</button></div>
                <div>
                    <Card border="success" style={{width: '42.5rem', height:'40rem'}}>
                        <Card.Header><mark style={{fontSize: "25px"}}>TITLE: {props.post.title}</mark> </Card.Header>
                        <Card.Body>
                            <Card.Title>{ props.post.title + props.post.id}</Card.Title>
                            <Card.Text>
                                {props.post.body}
                            </Card.Text>
                            <div><Button variant="primary">Go somewhere</Button></div>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </div>
    ) : "";
}

export default Popcomp