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
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            UserName:
            <input
              type="text"
              value={username}
              onChange={e => setName(e.target.value)}
            />
          </p>
          <p>
            Password:
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleLogin}>
            Login
          </Button>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      <h9>{show ? '' : 'Login success'}</h9>

      {/* <ul>
        <li>
          <Link to={`${url}/getmydata`}>Get My Data</Link>
        </li>
      </ul>

      <Switch>
        <Route path={path}>
          <LogData />
        </Route>
      </Switch> */}

      {/* <table>
        <thead>
          <td>Name</td>
          <td>Email</td>
        </thead>
      </table> */}
    </div>
  );
}

export default Login;