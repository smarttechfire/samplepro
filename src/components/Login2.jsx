import bg from '../assets/bg.jpeg'


export default function Login2() {
  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
      <img className='absolute w-full h-full object-cover mix-blend-overlay' src={bg} alt='/' />

      
      <div className="flex justify-center items-center h-full">
        <form className='w-full mx-auto bg-white p-8'>
            <h2 className='text-4xl font-bold text-center'>BRAND.</h2>
            <div className="">
                <p>ICON. Facebook</p>
                <p>ICON. Google</p>
            </div>
            <div className="">
                <label htmlFor="">UserName</label>
                <input type='password' />
            </div>
            <div className="">
                <label htmlFor="">Password</label>
                <input type='password' />
            </div>
            <button>SignIn</button>
            <p><input type="checkbox"  />Remember Me</p>
            <p>Not a member? Sign Up now</p>
        </form>
      </div>
    </div>
  )
}
