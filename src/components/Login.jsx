import side from "../assets/side.png";
const Login = () => {
  return (
    <div>
      
      <section className="min-h-screen flex items-center justify-center">
        {/* Login Container */}
        <div className="
          bg-gray-100 
            text-black 
            flex 
            rounded-xl
            shadow-lg
            shadow-black/50
            max-w-3xl
            p-5
            ">
          {/* form */}
          <div className="sm:w-1/2 px-10">
            <h2 className="font-bold text-2xl text-[#25333C]">Login</h2>
            <p className="text-sm mt-4 text-[#25333C]">
              If You already a member, easily login
            </p>

            <form action="#" className="flex flex-col gap-4">
              <input className="p-2 mt-8 rounded-xl border shadow-sm" type="text" name="email" placeholder="Email" />
              <input className="p-2 rounded-xl border shadow-sm" type="password" name="password" placeholder="Password" />
              <button className="bg-[#25333C] rounded-xl text-white py-2 shadow-lg hover:scale-110 duration-300">Login</button>
            </form>

            <div className="mt-10 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400"/>
              <p className="text-center">OR</p>
              <hr className="border-gray-400"/>
            </div>

            <button className="bg-white border py-2 w-full rounded-xl mt-5">Login with Google</button>

          </div>

          {/* image */}
          <div className="sm:block hidden w-1/2">
            <img className="rounded-2xl" src={side} alt="logo" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
