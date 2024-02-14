import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../Services/auth';


const Register =()=>{
    const [name, setName] = useState("");
const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 
    const handleLogin = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
    
        const formData = {
            name: name,
            email: email,
            password: password
            // Add other form fields as needed
        };
    
        signUp(formData)
            .then((res) => {
                // Handle successful sign-up
                setName("");
                setEmail("");
                setPassword("");
                navigate('/login');
            })
            .catch((err) => {
                // Handle sign-up error
                setName("");
                setEmail("");
                setPassword("");
                console.log(err);
            });
    };
  
    return (
        <div style={{
            margin: 0,
            padding: 0,
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f0f0f0',
            backgroundImage: `url('https://images.pexels.com/photos/2342400/pexels-photo-2342400.jpeg?auto=compress&cs=tinysrgb&w=600')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div className="auth" style={{
                maxWidth: '400px',
                padding: '20px',
                borderRadius: '10px',
                
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                animation: 'fadeIn 1s ease',
            }}>
                <h2>Register</h2>
                <form  className="auth-form">
                <input
                        type="text"
                        name="Name"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                       
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={(e) => setEmail(e.target.value)}
                    
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                       
                        required
                    />
                    <input
                        type="password"
                        name="Repeat password"
                        placeholder="Repeat Password"
                        required
                    />
                    <input
                        type="Number"
                        name=" Mobile"
                        placeholder=" Mob Number"
                        
                        required
                    />
                   
                   <button type="submit" onClick={handleLogin}>Login</button>
                </form>
                <p>
                   Already have an account <NavLink to="/login" className="switch"> Log in</NavLink>
                </p>
                <br>
                </br>
               
            </div>
        </div>
    );
    };

export default Register;
