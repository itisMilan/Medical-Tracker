import React from 'react'

function Register() {
  return (
    <>
<form action="/signup" method="POST">
        <div>
            <label for="userName">User Name</label>
            <input type="text" id="userName" name="userName" />
          </div>
        <div>
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"/>
          <div id="emailHelp">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="password">Password</label>
          <input type="password" id="password" name="password"/>
        </div>
        <div class="mb-3">
            <label for="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword"/>
          </div>
        <button type="submit">Submit</button>
      </form>

    </>
  )
}

export default Register