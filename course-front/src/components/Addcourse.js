
import React, { Fragment, useEffect, useState } from "react";
import { Container, Form, FormGroup, Input , Button} from "reactstrap";
import axios from "axios";
import base_url from "../Api/Bootapi";
import { toast } from "react-toastify";

const Addcourse=()=>{
   useEffect(()=>{
       document.title="Add course"
   },[]);

  const [course, setCourses] = useState({});
  //form handler function
  const handleForm=(e)=>{
      console.log(course);
      postDataToServer(course);
      e.preventDefault();
  }


  //creating function to post data on server
  const postDataToServer=(data)=>{
    axios.post(`${base_url}/courses`, data).then(
        (response)=>{
          console.log(response);
          console.log("success");
          toast.success("course added successfully");
        },
        (error)=>{
          console.log(error);
          console.log("error");
          toast.error("error something went wrong");
        }
    );
  };



    return (
        <Fragment>
            <h1 className="text-center my-3">Fill course Detail</h1>
          <Form onSubmit={handleForm}>
              <FormGroup>
                  <label for="userId">Course Id</label>
                  <Input type="text"  name="userId" id="userId" placeholder="Enter here"
                  onChange={(e)=>setCourses({...course, id:e.target.value})}/>
              </FormGroup>
          
              <FormGroup>
                  <label for="title">Course Title</label>
                  <Input type="text"  name="title" id="title" placeholder="Enter Title here"
                  onChange={(e)=>setCourses({...course, title:e.target.value})}
                  />
              </FormGroup>
             
              <FormGroup>
                  <label for="exampletext">Course Description</label>
                  <Input type="textarea"  name="text" id="exampletext" placeholder="Enter Description here"
                  style={{height:100}}
                  onChange={(e)=>setCourses({...course, description:e.target.value})}
                  />
              </FormGroup>
             
              <Container className="text-center">
                 <Button type="submit" color="success me-md-2">Add Course</Button>
                 <Button type="reset" color="warning">Clear</Button>
              </Container>

              
          </Form>

          
        </Fragment>
    );
};

export default Addcourse;