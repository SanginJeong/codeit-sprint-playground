import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    checkPassword: "",
    name: "",
  });
  const submitRegister = (e) => {
    e.preventDefault();
    if (formData.checkPassword !== formData.password) {
      return toast.error("비밀번호를 확인해주세요");
    }
  };
  return (
    <div className="flex flex-col h-full gap-4 justify-center items-center">
      <h1 className="text-[32px] text-purple-600">회원가입</h1>
      <form className="flex flex-col gap-4 w-[50%]" onSubmit={submitRegister}>
        <label className="font-bold">아이디</label>
        <input
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
          type="email"
          className="border-1 focus:outline-none px-2 py-1 focus:border-purple-600"
          placeholder="Enter Email..."
        />
        <label className="font-bold">비밀번호</label>
        <input
          value={formData.password}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, password: e.target.value }))
          }
          type="password"
          className="border-1 focus:outline-none px-2 py-1 focus:border-purple-600"
          placeholder="Enter Password..."
        />
        <label className="font-bold">비밀번호 확인</label>
        <input
          value={formData.checkPassword}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, checkPassword: e.target.value }))
          }
          type="password"
          className="border-1 focus:outline-none px-2 py-1 focus:border-purple-600"
          placeholder="Check Password..."
        />
        <label className="font-bold">이름</label>
        <input
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
          type="text"
          className="border-1 focus:outline-none px-2 py-1 focus:border-purple-600"
          placeholder="Enter your name..."
        />
        <button
          type="submit"
          className="bg-purple-600 text-white p-1 cursor-pointer"
        >
          제출
        </button>
        <button
          onClick={() => navigate("/login")}
          type="button"
          className="bg-gray-400 text-white p-1 cursor-pointer"
        >
          돌아가기
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
