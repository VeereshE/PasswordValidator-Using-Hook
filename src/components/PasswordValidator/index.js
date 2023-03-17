// Write your code here
import {useState} from 'react'

import {BackGround, Container, Header, Para, Error} from './styledComponents'

import './index.css'

const PasswordValidator = () => {
  const [error, setError] = useState(false)
  const [length, setLength] = useState(true)
  const [password, setPassword] = useState(false)

  const onClickText = () => {
    setError(!error)
    setLength(!length)
    setPassword(!password)
  }

  return (
    <BackGround>
      <center>
        <Container>
          <Header>Password Validator</Header>
          <Para>Check how strong and secure is your password</Para>
          <input
            type="password"
            className="passwordText"
            placeholder="Enter your password"
            onClick={onClickText}
          />
          {password ? (
            ''
          ) : (
            <Error>Your password must be at least 8 characters</Error>
          )}
        </Container>
      </center>
    </BackGround>
  )
}

export default PasswordValidator
