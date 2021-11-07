import { React, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom"
import logo from "../Image/money-transfer-img.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'
import { useHistory } from "react-router";
const { Body, Header, Footer, Title } = Modal
const { Control, Label, Group, Select } = Form

const axios = require("axios");

const name_reg = /^[a-zA-Z]([a-zA-Z]){1,20}$/;
const mobile_reg = /^[0-9]{10}$/;
const email_reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const password_reg = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
let pass = "";

const Navs = () => {

    const history = useHistory();
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("")
    const [type, setType] = useState(false)
    const [showRegisterForm, setShowRegisterForm] = useState(false)
    const [isLogin, setLogin] = useState(false)
    const handleClose = () => {
        setShow(false);
        setShowRegisterForm(false)
    }

    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        date_of_birth: "",
        mobile_no: "",
        email: "",
        password: "",
        conform_password: ""
    });

    const [loginData, setLoginData] = useState({
        user_name: "",
        password: "",
        user_type: "ADMIN"
    })

    // const [user_type, setUser_type] = useState()

    const [error, setError] = useState(false)

    const [details, setDetails] = useState({})

    const handleShow = (e) => {
        setShow(true)
        if (e.target.value === "1") {
            setTitle("Admin Login")
            setType(true);
        }
        else {
            setTitle("User Login")
            // setShow(true) 
            setLoginData((preval) => {
                return {
                    ...preval, user_type: "USER"
                }
            });
            setType(false);
        }

    }

    const userRegister = () => {
        setShowRegisterForm(true)
        setShow(false)
    }


    const handleChangeLogin = (e) => {
        const { name, value } = e.target;
        setLoginData((preval) => {
            return {
                ...preval, [name]: value
            }
        });
        // console.log("data",value);
    }

    const handleSubmitLoginForm = (e) => {
        e.preventDefault();
        // console.log("data", loginData);
        axios.post("/auth/login", loginData)
            .then((result) => {
                Swal.fire('Done', result.data.message || 'Login successfully !!', 'success')
                setShow(false);
                setLogin(true);
                setDetails(result.data.user);
                history.push("/customer/dashboard");
            })
            .catch((err) => {
                Swal.fire('Failed', err.response.data.message || 'Something went wrong !!', 'error')
            });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((preval) => {
            return {
                ...preval, [name]: value
            }
        });
        if (e.target.name === "first_name" || e.target.name === "last_name") {
            if (name_reg.test(e.target.value)) {
                e.target.style.border = "none";
                setError(false);
            }
            else {
                e.target.style.border = "2px solid red"
                setError(true);
            }
        }
        else if (e.target.name === "mobile_no") {
            if (mobile_reg.test(e.target.value)) {
                e.target.style.border = "none"
                setError(false);
            }
            else {
                e.target.style.border = "2px solid red"
                setError(true);
            }
        }
        else if (e.target.name === "email") {
            if (email_reg.test(e.target.value)) {
                e.target.style.border = "none"
                setError(false);
            }
            else {
                e.target.style.border = "2px solid red"
                setError(true);
            }
        }
        else if (e.target.name === "date_of_birth") {
            const dob = new Date(e.target.value).getTime();
            const currentDate = new Date().getTime();
            if ((currentDate - dob) >= "567648000000") {
                e.target.style.border = "none"
                setError(false);
            }
            else {
                e.target.style.border = "2px solid red"
                setError(true);
            }
        }
        else if (e.target.name === "password") {
            // var con_pass = e.target.value;
            // console.log("pass",con_pass);

            if (password_reg.test(e.target.value)) {
                e.target.style.border = "none"
                pass = e.target.value;
                setError(false);
            }
            else {
                e.target.style.border = "2px solid red"
                setError(true);
            }
        }
        else if (e.target.name === "conform_password") {
            // console.log("password", pass);
            if (pass === e.target.value) {
                e.target.style.border = "none"
                setError(false);
            }
            else {
                e.target.style.border = "2px solid red"
                setError(true);
            }
        }
        else {
            e.target.style.border = "2px solid red"
            setError(true);
        }

    }

    const onSubmit = async (e) => {
        e.preventDefault();
        // console.log("error", error);
        if (error) {
            Swal.fire('Failed', 'Fill all fields carefully !!', 'warning')
        }
        else {
            try {
                const result = await axios.post("/auth/user/register", user);
                Swal.fire('Done', result.data.message || 'You are registered successfully !!', 'success')
            } catch (err) {
                Swal.fire('Failed', err.response.data.message || 'Something went wrong !!', 'error')
            }
        }
    }

    return (
        <>
            <div className="w-100 d-flex m-auto p-4 font-monospace"
                style={{
                    backgroundColor: "white",
                    // opacity: 0.75
                }}
            >
                <div className="w-25 d-flex justify-content-end">
                    <img src={logo} width="100" height="50" alt="loading.." className="rounded-circle" />
                    <h2>MoneyTransfer</h2>
                </div>
                <div className="w-50 d-flex justify-content-around fs-3">
                    <NavLink className="text-decoration-none" to="/">Home</NavLink>
                    <NavLink className="text-decoration-none" to="/service">Service</NavLink>
                    <NavLink className="text-decoration-none" to="/about">About us</NavLink>
                    <NavLink className="text-decoration-none" to="/contact">Contact us</NavLink>
                </div>
                {isLogin ?
                    <div className="w-25 d-flex justify-content-evenly p-1">
                        <img src={details.profile_photo} style={{width:60, height:60, borderRadius: "50px" }}></img>
                        {details.first_name + " " + details.last_name}
                    </div>
                    :
                    <div className="w-25 d-flex justify-content-evenly p-1">
                        <Button onClick={handleShow} variant="outline-primary" value="1" >Admin Login</Button>
                        <Button variant="outline-primary" onClick={handleShow}>User Login</Button>
                    </div>
                }
            </div>

            {/* ===================================Login Form ===================================== */}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={true}
                centered={true}
            >
                <Header closeButton>
                    <Title>{title}</Title>
                </Header>
                <Body>
                    <Form >
                        <Group className="mb-3" >
                            <Label>Username</Label>
                            <Control type="text" name="user_name" onChange={handleChangeLogin} value={loginData.user_name} placeholder="Enter Your Username" />
                        </Group>
                        <Group className="mb-3">
                            <Label>Password</Label>
                            <Control type="password" name="password" onChange={handleChangeLogin} value={loginData.password} placeholder="Enter Your Password" />
                        </Group>
                        {type && <Group className="mb-3">
                            <Label>Select Your Role</Label>
                            <Select name="user_type" onChange={handleChangeLogin} value={loginData.user_type}>
                                <option>ADMIN</option>
                                <option>SUPERADMIN</option>
                            </Select>
                        </Group>}
                    </Form>
                    <div className="d-flex flex-column align-items-end">
                        {!type && <Button variant="outline-primary" onClick={userRegister}>Register Yourself</Button>}
                        <Link className="text-decoration-none" to="/">Forgot Password</Link>
                    </div>
                </Body>
                <Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmitLoginForm} >Login</Button>
                </Footer>
            </Modal>

            {/* ===================================User Register Form ===================================== */}
            <Modal
                show={showRegisterForm}
                onHide={handleClose}
                backdrop="static"
                keyboard={true}
                // centered={true}
                size="lg"
            >
                <Header closeButton>
                    <Title>Registration Form For User</Title>
                </Header>
                <Body>
                    <Form onSubmit={onSubmit}>
                        <Group className="mb-3">
                            <Label>Your First Name</Label>
                            <Control type="text" name="first_name" onChange={handleChange} value={user.first_name} placeholder="enter your first name" required />
                        </Group>
                        <Group className="mb-3">
                            <Label>Your Last Name</Label>
                            <Control type="text" name="last_name" onChange={handleChange} value={user.last_name} placeholder="enter your last name" required />
                        </Group>
                        <Group className="mb-3">
                            <Label>Your Mobile Number</Label>
                            <Control type="number" name="mobile_no" onChange={handleChange} value={user.mobile_no} placeholder="enter your mobile no:" required />
                        </Group>
                        <Group className="mb-3">
                            <Label>Your Email</Label>
                            <Control type="email" name="email" onChange={handleChange} value={user.email} placeholder="enter your email" required />
                        </Group>
                        <Group className="mb-3">
                            <Label>Date of Birth</Label>
                            <Control type="date" name="date_of_birth" onChange={handleChange} value={user.date_of_birth} placeholder="enter your birth date" required />
                        </Group>
                        <Group className="mb-3">
                            <Label>Password</Label>
                            <Control type="password" name="password" onChange={handleChange} value={user.password} placeholder="must be more than 8 character, 1 special character, alphabet and Numeric required [Qwer@123]" required />
                        </Group>
                        <Group className="mb-3">
                            <Label>Conform Password</Label>
                            <Control type="password" name="conform_password" onChange={handleChange} value={user.conform_password} placeholder="conform password" required />
                        </Group>
                        <div className="d-grid gap-2">
                            <Button type="submit" variant="success" size="lg">
                                REGISTER
                            </Button>
                        </div>
                    </Form>
                </Body>
                <Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Footer>
            </Modal>


        </>
    )
}

export default Navs;
