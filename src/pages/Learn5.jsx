import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Learn5 = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="fixed top-0 h-dvh overflow-y-scroll" style={{ width: "-webkit-fill-available" }}>
      <div
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4"
        style={{ width: "-webkit-fill-available"}}
        >
        <div className="w-full max-w-md mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {isLogin ? 'Selamat Datang Kembali' : 'Buat Akun Baru'}
          </h1>
          <p className="text-gray-600">
            {isLogin ? 'Silakan masuk ke akun Anda' : 'Bergabunglah dengan kami hari ini'}
          </p>
        </div>
        
        {isLogin ? <LoginForm /> : <RegisterForm />}
        
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            {isLogin ? 'Belum punya akun?' : 'Sudah punya akun?'}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-blue-600 font-medium hover:text-blue-800 hover:underline focus:outline-none"
            >
              {isLogin ? 'Daftar di sini' : 'Login di sini'}
            </button>
          </p>
        </div>
      </div>  
    </div>
  );
};

export default Learn5;