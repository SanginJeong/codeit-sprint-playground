import React, { useState } from "react";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const submitLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col h-full gap-4 justify-center items-center">
      <h1 className="text-[32px] text-purple-600">로그인</h1>
      <form className="flex flex-col gap-4 w-[50%]" onSubmit={submitLogin}>
        <label className="font-bold">아이디</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="border-1 focus:outline-none px-2 py-1 focus:border-purple-600"
          placeholder="Enter Email..."
        />
        <label className="font-bold">비밀번호</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="border-1 focus:outline-none px-2 py-1 focus:border-purple-600"
          placeholder="Enter Password..."
        />
        <button
          type="submit"
          className="bg-purple-600 text-white p-1 cursor-pointer"
        >
          로그인
        </button>
        <button
          onClick={() => navigate("/register")}
          type="button"
          className="bg-gray-400 text-white p-1 cursor-pointer"
        >
          회원가입
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
