import './login3.css'
export default function Login3() {
  return (
    <div className='App'>
      <div className="input-container">
        <input type='text' placeholder='Username' />
        <i className='zmdi zmdi-account zmdi-hc-lg'></i>
      </div>
      <div className="input-container">
        <input type='password' placeholder='Password' />
        <i className='zmdi zmdi-lock zmdi-hc-lg'></i>
      </div>
      <button type='submit'>Login</button>
    </div>
  )
}
