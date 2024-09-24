import Navbar from '@/app/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
const Login = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      <div className="flex h-[100%]">
        <div className="hidden xl:flex w-[50%] h-full relative items-center justify-center">
          <Image src="/Signup.png" alt="Signup" layout="fill" objectFit="cover" />
        </div>
        <div className="w-full xl:w-1/2 bg-white flex flex-col items-center justify-center p-10 auth-section">
          <h1 className="text-5xl font-bebas font-bold mb-4">Create Your Account</h1>
          <form className="w-full px-4 xl:px-24">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
              <input className="mt-1 block w-full border border-zinc-300 rounded-md p-2" type="text" id="name" placeholder="name" required />
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username <span className="text-red-500">*</span>
              </label>
              <input className="mt-1 block w-full border border-zinc-300 rounded-md p-2" type="text" id="username" placeholder="username" required />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password <span className="text-red-500">*</span>
              </label>
              <input className="mt-1 block w-full border border-zinc-300 rounded-md p-2" type="password" id="password" placeholder="password" required />
            </div>
            <button type="submit" className="bg-[#A131DC] w-full py-2 rounded-lg text-white mb-4">
              Create Account
            </button>
          </form>
          <div className="flex items-center w-full px-6 xl:px-24 mt-4">
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
          <p className="mt-4">
            Aldready have an account?<Link href="/auth/login"> Login?</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
