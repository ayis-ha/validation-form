
import { useState } from 'react';
import './App.css';
import { TextField } from '@mui/material';


function App() {
  const [userName, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmpassword] = useState("")

  const [validname, setValidname] = useState(true)
  const [validEmail, setvalidEmail] = useState(true)
  const [validPassword, setvalidPassword] = useState(true)
  const [validconfirmPassword, setValidconfirmpassword] = useState(true)


  const validateUser = (e) => {
    // e.preventDefault()
    // console.log(e.target);
    const { name, value } = e.target
    console.log(value);
    // console.log(value);
    if (name === "userName") {
      if (!!value.match(/^[A-Za-z" "]+$/)) {
        setName(value)
        setValidname(true)

      } else {
        setName(value)
        setValidname(false)
      }
    } else if (name === "email") {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))+$/;
      // let re=value.endsWith("@gmail.com")
      if (!!re.test(value) && value.endsWith("@gmail.com")) {
        setEmail(value)
        setvalidEmail(true)
      } else {
        setEmail(value)
        setvalidEmail(false)
      }

    } else if (name === "password") {
      var re = /[A-Z]/.test(value) && /[0-9]/.test(value)&& /^[@#][A-Za-z0-9]{7,13}$/.test(value);
      if (!!re) {
        setPassword(value)
        setvalidPassword(true)
      } else {
        setPassword(value)
        setvalidPassword(false)
      }
    } else if (name === "confirmPassword") {
      if (value == password) {
        setConfirmpassword(value)
        setValidconfirmpassword(true)
      } else {
        setConfirmpassword(value)
        setValidconfirmpassword(false)
      }
    }
  }

  const handleSubmit = () => {
    if (userName && email && password && confirmPassword) {
      alert(`Name : ${userName}
Email : ${email}
      `)
    } else {
      alert('Please Fill The Form!')
    }
  }

  const clearform = () => {
    setName("")
    setEmail("")
    setConfirmpassword("")
    setPassword("")
  }


  return (
    <div>
     

<section  style={{backgroundColor:'#9EDDFF'}} >
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11 p-5">
        <div className="card text-black" style={{borderRadius: '25',height:'65%'}} >
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center  h1 fw-bold mb-5 mx-1 mx-md-4 mt-3">Sign up</p>

                <form onSubmit={handleSubmit}className="mx-1 mx-md-4 h-75">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <TextField id="form3Example1c" name='userName' value={userName||""} onChange={(e)=>validateUser(e)}  label="user name" className="form-control" />
                      
                            {
                              !validname &&
                              <div style={{ color: '#ff0000', fontSize: '13px', fontFamily: "'Noto Sans JP', sans-serif;" }} className=' ms-5'>
                                *Inavlid Name
                              </div> 
                              
                            } 
                
                      
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <TextField name='email' value={email || ""}  onChange={(e) => validateUser(e)} id="filled-basic" label="Email" className="form-control"  />

{
  !validEmail &&
  <div style={{ color: '#ff0000', fontSize: '13px', fontFamily: "'Noto Sans JP', sans-serif;", }} className=' ms-5'>
    *Email must be valid
  </div>
}</div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <TextField type='password' name='password' value={password || ""} onChange={(e) => validateUser(e)} id="filled-basic" label="Password"  className="form-control" />
                    {
  !validPassword &&
  <div style={{ color: '#ffffff', fontSize: '12px', fontFamily: "'Noto Sans JP', sans-serif;", }} className='mt-1 ms-5'>
    Password contains one Capital letter and start with @ or #,It should be alphanumeric,Length between 8 to 14.              
    </div>
}
               </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <TextField type='password' name='confirmPassword' value={confirmPassword || ""} onChange={(e) => validateUser(e)} id="filled-basic" label="Confirm Password"  className="form-control" />
                    {
              !validconfirmPassword &&
              <div style={{ color: '#ff0000', fontSize: '13px', fontFamily: "'Noto Sans JP', sans-serif;", }} className=' ms-5'>
                *The password confirmation does not match
              </div>
            }

                    </div>
                  </div>

                  

                  <div className='d-flex'>
              <button type='submit' style={{height:'50px',width:'120px', marginLeft: '50px' }} class="btn btn-primary mt-4"
                disabled={validname && validEmail && validPassword && validconfirmPassword ? false : true}>SIGN UP</button>
              <button onClick={clearform} type='button' style={{height:'50px',width:'120px', marginLeft: '50px' }} class="btn btn-secondary mt-4">CLEAR</button>
            </div>


                </form>

              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
  );
}

export default App;