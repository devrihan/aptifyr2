import Navbar from '@/app/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
const Login = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      <div className="flex h-[100%]">
        <div className="hidden xl:flex w-[50%] h-full relative items-center justify-center">
          <Image src="/Login.png" alt="Login" layout="fill" objectFit="cover" />
        </div>
        <div className="w-full xl:w-1/2 bg-white flex flex-col items-center justify-center p-10 auth-section">
          <h1 className="text-5xl font-bebas font-bold mb-4">Login</h1>
          <p className="text-muted-foreground mb-6 w-full xl:w-1/2 text-center">Enter your username and password to access the account</p>
          <form className="w-full px-4 xl:px-24">
            <div className="mb-4">
              <input className="mt-1 block w-full border border-zinc-300 rounded-md p-2" type="text" id="username" placeholder="username" required />
            </div>
            <div className="mb-4">
              <input className="mt-1 block w-full border border-zinc-300 rounded-md p-2" type="password" id="password" placeholder="password" required />
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm text-zinc-600">
                Remember me
              </label>
              <a href="#" className="ml-auto text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <button type="submit" className="bg-[#A131DC] w-full py-2 rounded-lg text-white mb-4">
              Login
            </button>
            <Link href="/auth/signup">
              <button className="border-2 border-black w-full py-2 rounded-lg">Register</button>
            </Link>
          </form>
          <div className="flex items-center w-full px-6 xl:px-24 mt-6">
            <div className="flex-grow border-t border w-full border-black"></div>
            <span className="mx-2">or</span>
            <div className="flex-grow border-t border w-full border-black"></div>
          </div>
          <div className="flex flex-row justify-center items-center space-x-8 mt-4">
            <div className="border border-black rounded-lg p-2">
              <Image src="/Google.svg" alt="Google" width={30} height={30}></Image>
            </div>
            <div className="border border-black rounded-lg px-[0.60rem] py-[0.4rem]">
              <Image src="/Apple.svg" alt="Google" width={28} height={28}></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
