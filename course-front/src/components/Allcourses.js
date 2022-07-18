import React, { useState , useEffect } from "react";
import { Button } from "reactstrap";
import Course from "./Course";
import base_url from "../Api/Bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allcourse = () => {

    useEffect(()=>{
       document.title="All courses";
       getAllCoursesFromServer();
    }, []);


    //function to call server
    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
            //   console.log(response);
              console.log(response.data);
              toast.success("courses has been loaded",{
                  position:"bottom-center",
              });
              setCourses(response.data);
            },
            (error)=>{
                //for error
                console.log(error);
                toast.error("something went wrong",{
                    position:"bottom-center",
                });
            }
        );
    };

    const [courses, setCourses] = useState([]);

    const updateCourses=(id)=>{
      setCourses(courses.filter((c)=>c.id!=id));
    };

    return (
        <div>
            <h1>All courses</h1>
            <p>List of courses are as follows</p>

        {
            courses.length>0 ? courses.map((item) => (<Course key={item.id} Course={item}  update={updateCourses}/>)) : "No course"
        }

        </div>

    );
};

export default Allcourse;