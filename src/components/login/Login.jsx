import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

class Login extends Component{
    render()
    {
        return(
            <div className="container-fluid login-container d-flex align-items-center justify-content-center">
                <div className="login-box bg-white p-5 rounded shadow">
                    <div className="text-center mb-4">
                        <div className="circle mx-auto mb-3"></div>
                        <h1 className="app-name">Login</h1>
                    </div>
                    <form>
                        <div className="form-group mb-3">
                            <input type="text" className="form-control rounded-pill" placeholder="Username" />
                        </div>
                        <div className="form-group mb-4">
                            <input type="password" className="form-control rounded-pill" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-dark w-100 rounded-pill">Login</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;