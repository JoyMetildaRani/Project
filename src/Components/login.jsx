import '../style.css'
import '../all.min.css'
import '../bootstrap.min.css'

function Login() {
    return (
        <div className="wrapper">
        <div className="logo">
          <img src={require('../images/dark-logo.png')} className="img-fluid" alt="" />
        </div>
        <form className="p-3 mt-3">
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user" />
            <input type="text" name="userName" id="userName" placeholder="Username" />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key" />
            <input type="password" name="password" id="pwd" placeholder="Password" />
          </div>
          <button className="btn mt-3">Login</button>
        </form>
        <div className="text-center fs-6">
          <a href="#">Forget password?</a> or <a href="#">Sign up</a>
        </div>
      </div>
    );
  }
  
  export default Login;