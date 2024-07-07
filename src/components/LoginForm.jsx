import React from 'react'

const LoginForm = () => {
  return (
    <div className="container">
            <form class="mt-3 mb-3">
  <div class="mb-3">
    <label for="username" class="form-label">Username</label>
    <input type="email" class="form-control" id="username" />
   </div>
  <div class="mb-3">
    <label for="pass" class="form-label">Password</label>
    <input type="password" class="form-control" id="pass"/>
  </div>

  <button type="submit" class="btn btn-primary">Envoyer</button>
</form>
    </div>

  )
}

export default LoginForm