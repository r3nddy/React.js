import { useRef, useState } from "react";

const FormPage = () => {
    //uncontrolled component/input
    const inputRef = useRef(null);
    const inputEmailRef = useRef(null);

    //Controlled component/input
    const [fullNameInput, setfullNameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    
    const [usernameErrorMessage, setusernameErrorMesagge] = useState("");
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

    const handleSubmit = () => {
        // const fullNameFromValue = inputRef.current?.value;
        // const emailForValue = inputEmailRef.current?.value;

        // alert('form submitted: ' + fullNameFromValue + " " + emailForValue);
        const fullNameValidation = fullNameInput.length < 3
        const passwordValidation = passwordInput.length < 8

        // if (fullNameValidation || passwordValidation ) {
        //     alert("UserName setidaknya 3 karakter dan password setidaknya 8 karakter")
        // }
        
        if (fullNameValidation) {
            setusernameErrorMesagge('username must be at least 3 characters');
        }

        if (passwordValidation) {
            setPasswordErrorMessage("password must be at least 8 characters");
        }

    };


    return (
        <div>
            <h1>form page</h1>
            <h3>email: {passwordInput}</h3>

            <h3>fullName: {fullNameInput}</h3>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                maxWidth: '250px'
                }}>

                <label htmlFor="full-name">Username</label>
                <input onChange={(event) => setfullNameInput(event.target.value)} id='full-name' type='text' value={fullNameInput}></input>

                <span style={{color: 'red'}}>{usernameErrorMessage}</span>

                <label htmlFor="password">Password</label>
                <input onChange={(event) => setPasswordInput(event.target.value)} id='password' type='password' value={passwordInput}></input>

                <span style={{color : 'red'}}>{passwordErrorMessage}</span>

                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default FormPage