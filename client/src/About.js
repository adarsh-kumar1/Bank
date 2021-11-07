import React from "react";
import about_photo from "./Image/about_page_photo.jpg";
import { Card, Row, Col, Container } from "react-bootstrap";
import manu from "./Image/manu.jpg";
import anand from "./Image/anand.jpg";
import adarsh from "./Image/adarsh.jpg";
import aditya from "./Image/aditya.jpg";


const About = () => {

    const arr=[]
    arr.push({photo:manu,title:"Patel Manu",enroll:"0187cs191007"})
    arr.push({photo:anand,title:"Anand Kumar",enroll:"0187cs191030"})
    arr.push({photo:adarsh,title:"Adarsh Pandey",enroll:"0187cs191009"})
    arr.push({photo:aditya,title:"Aditya Kumar",enroll:"0187cs191011"})


    return (
        <>
            <div>
                <div>
                    <img src={about_photo} width={"1510"} height={"590"} alt="loading.." />
                </div>
                <Card className="text-center">
                    <Card.Header className="fs-2">OUR VISION</Card.Header>
                    <Card.Body>
                        <Card.Title>To build a large, scalable & open
                            transaction ecosystem that
                            creates the maximum positive
                            impact for all stakeholders</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.

                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="text-center">
                    <Card.Header className="fs-2">A Payments App built for India, by Indians</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Container>
                    <Row xs={1} md={4} className="g-4">
                        {arr.map((val,index)=>(
                            <Col key={index}>
                            <Card>
                                <Card.Img variant="top" src={val.photo} height="350px" className="rounded-circle"/>
                                <Card.Body>
                                    <Card.Title>{val.title}--{val.enroll}</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default About;
