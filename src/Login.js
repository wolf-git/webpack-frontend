import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import {  useHistory } from "react-router-dom";
import axios from 'axios';

// const sqlurl = 'https://backend-nod.herokuapp.com/';
const sqlurl = 'localhost:3000/'; //run on local line

const Login = () => {
  const history = useHistory();
  const [show, setShow] = useState(true);
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
     
    axios.post(sqlurl +'api/login', { username, password })
      .then(response => {
        // setUsers(Array.from(response.data.users));///////////////////////////
        // console.log(Array.from(response.data.users));
        // localStorage.setItem('token', response.data.token);
        console.log(response.data.users);
        // localStorage.setItem('users', response.data.users);
        setShow(false);
      }).catch(reject => {
        console.log(reject);
      });
  }

  const handleCancel = () => history.push('/');

  return (
    <div>
      <Modal show={show} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Log in and Start!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="Login">
            <form className='Login'>
              <p>Username</p>
              <input type="text"
                onChange={e => setName(e.target.value)
                }
              /><br></br><br />
              <p>Password</p>
              <input type="text"
                onChange={e => setPassword(e.target.value)
                }
              /><br></br><br />
              <br />
              <Button
                className='button'
                onClick={handleLogin}
                block
                type="submit"
                primary={true}
              >
                <h3>Log in</h3>
              </Button>
              <Modal.Footer>
              <Button variant="secondary" onClick={handleCancel}>close</Button>
              </Modal.Footer>
            </form>
          </div>
        </Modal.Body>
      </Modal>

      <h1>{show ? '' : 'Success log in!'}</h1>
    </div>
  );
}

export default Login;