import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';

const sqlurl = 'https://backend-nod.herokuapp.com/';
//const sqlurl = 'localhost:3000/'; //run on local line


const Signup = () => {
  const history = useHistory();
  const [show, setShow] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCancel = () => history.push('/');

  const handleSignup = () => {
    if (username.length === 0 || email.length === 0 || password.length === 0) {
      return;
    }
    axios.post(sqlurl + '/api/signup', { username, email, password })
      .then(response => {
        // localStorage.setItem('token', response.data.token);
        console.log(response.data.users);
        setShow(false);
      }).catch(reject => {
        console.log(reject);
      });
  }

  return (
    <div>
      <Modal show={show} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="sign">
            <form className='sign'>
              <p>Username</p>
              <input type="text"
                onChange={e => setUsername(e.target.value)
                }
              /><br></br><br />
              <p>Password</p>
              <input type="text"
                onChange={e => setEmail(e.target.value)
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
                onClick={handleSignup}
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

      <h1>{show ? '' : 'Success Sign up!'}</h1>
    </div>
  );
}

export default Signup;