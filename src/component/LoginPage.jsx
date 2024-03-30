import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate hook from react-router-dom

const LoginPage = () => {
    const [username, setUsername] = useState(''); // State for username
    const [password, setPassword] = useState(''); // State for password
    const navigate = useNavigate(); // useNavigate hook for navigating to different pages

    // Function to handle login
    const handleLogin = (e) => {
        e.preventDefault(); // Preventing default form submission behavior

        // After successful login, navigate to the home page
        navigate('/'); // Navigating to the home page
    };

    return (
        <div style={styles.container}>
            {/* Login form */}
            <form onSubmit={handleLogin} style={styles.form}>
                <h2 style={styles.heading}>Login</h2>
                {/* Username input field */}
                <div style={styles.formGroup}>
                    <label htmlFor="username" style={styles.label}>Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} // Updating username state on input change
                        style={styles.input}
                        required
                    />
                </div>
                {/* Password input field */}
                <div style={styles.formGroup}>
                    <label htmlFor="password" style={styles.label}>Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Updating password state on input change
                        style={styles.input}
                        required
                    />
                </div>
                {/* Login button */}
                <button type="submit" style={styles.button}>Login</button>
            </form>
        </div>
    );
};

// Styles for the LoginPage component
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full height of the viewport
    },
    form: {
        width: '300px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
        textAlign: 'center',
    },
    formGroup: {
        marginBottom: '20px',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
    },
    input: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    button: {
        width: '100%',
        padding: '10px 0',
        backgroundColor: '#0D0D0D',
        color: '#ffffff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default LoginPage;
