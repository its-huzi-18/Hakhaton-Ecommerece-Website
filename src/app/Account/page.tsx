import React from 'react';
import MainImage from '../Component/MainImage';
import Features from '../Component/Features';

function Page() {
  return (
    <div>
      <MainImage tittle="Account" />

      <div className="flex flex-col md:flex-row md:justify-end justify-between md:h-[650px] items-center px-4 md:px-0">
        {/* Login Section */}
        <div className="md:w-[45%] w-full mb-8 md:mb-0">
          <div className="flex flex-col gap-8">
            <h1 className="text-[28px] md:text-[36px] font-semibold">Log In</h1>

            <div>
              <label
                htmlFor="username-or-email"
                className="text-[13px] md:text-[16px] font-medium"
              >
                Username or email address
              </label>
              <input
                type="text"
                id="username-or-email"
                className="rounded-[4px] w-full md:w-[423px] h-[50px] md:h-[75px] border-[2px] border-black/40 mt-4 p-2"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="rounded-[4px] w-full md:w-[423px] h-[50px] md:h-[75px] border-[2px] border-black/40 mt-4 p-2"
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="remember-me"
                className="w-[20px] md:w-[30px] h-[20px] md:h-[27px] border-[2px] border-[#9F9F9F]"
              />
              <label htmlFor="remember-me" className="text-sm">
                Remember me
              </label>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-5">
              <button className="rounded-lg w-full md:w-[215px] py-2 md:py-0 md:h-[64px] border-black/70 border-[2px] md:text-[20px]">
                Log In
              </button>
              <p className="font-light text-black/80 text-sm md:text-base cursor-pointer">
                Lost Your Password?
              </p>
            </div>
          </div>
        </div>

        {/* Register Section */}
        <div className="md:w-[45%] w-full">
          <div className="flex flex-col gap-8">
            <h1 className="text-[28px] md:text-[36px] font-semibold">Register</h1>

            <div className="flex flex-col">
              <label
                htmlFor="email-address"
                className="font-medium"
              >
                Email address
              </label>
              <input
                type="text"
                id="email-address"
                className="rounded-[4px] w-full md:w-[423px] h-[50px] md:h-[75px] border-[2px] border-black/40 mt-4 p-2"
              />
            </div>

            <div className="md:w-[453px] text-sm md:text-base text-black/80">
              A link to set a new password will be sent to your email address.
            </div>

            <div className="md:w-[453px] text-sm md:text-base text-black/80">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and
              for other purposes described in our <b>privacy policy</b>.
            </div>

            <button className="rounded-lg w-full md:w-[215px] h-[50px] md:h-[64px] border-black/70 border-[2px] text-[16px] md:text-[20px] mt-4">
              Register
            </button>
          </div>
        </div>
      </div>

      <Features />
    </div>
  );
}

export default Page;
