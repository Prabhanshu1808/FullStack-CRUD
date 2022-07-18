import React from "react";
import{
    Card,CardBody,CardTilte,CardSubtitle,CardText,CardFooter,Button,Container,
} from 'reactstrap';
import axios from "axios";
import base_url from "../Api/Bootapi";
import { toast } from "react-toastify";

const Course =({Course , update}) => {

    const deleteCourse=(id)=>{
     axios.delete(`${base_url}/courses/${id}`).then(
         (response)=>{
             console.log(response);
             toast.success("course deleted")
             update(id);
         },
         (error)=>{
             console.log(error);
             toast.error("error someting went wrong")
         } 
     )
    }
 return (
    <Card>
        <CardBody className="text-center">
            <CardSubtitle><strong>{Course.title}</strong></CardSubtitle>
            <CardText>{Course.description}</CardText>
            <Container>
                <Button color="danger me-md-2" onClick={()=>{deleteCourse(Course.id)}}>Delete</Button>
                <Button color="warning">Update</Button>
            </Container>
        </CardBody>
    </Card>
 )

}

export default Course;