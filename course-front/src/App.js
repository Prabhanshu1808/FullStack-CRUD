// import logo from './logo.svg';
import './App.css';
import { Button, Col, Container, Row } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';
import Course from './components/Course';
import Allcourses from "./components/Allcourses";
import Addcourse from './components/Addcourse';
import Header from './components/Header';
import Menus from './components/Menus';
import { BrowserRouter as Router, Route,Routes,  Switch, Link } from "react-router-dom";

function App() {

  const btnhandle = () => toast.error("done", {
    position: 'top-center',
  });


  return (
    <Router>
      <div>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            {/* first column */}
            <Col md={4}>
              <Menus />
            </Col>
            {/* second column */}
            <Col md={8}>
              <Routes>
              <Route path="/" element={<Home/>}  exact/>
              <Route path="/add-course" element={<Addcourse/>} exact />
              <Route path="/view-course" element={<Allcourses/>} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
