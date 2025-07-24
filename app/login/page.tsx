"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginWithCredentials = async () => {
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/dashboard",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Login</h1>

      <input
        className="mb-2 p-2 border border-gray-300 rounded w-64"
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="mb-4 p-2 border border-gray-300 rounded w-64"
        type="password"
        placeholder="Senha"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={loginWithCredentials}
        className="mb-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Entrar com Email/Senha
      </button>

      <hr className="my-4 w-64 border-gray-300" />

      <button
        onClick={() => signIn("google")}
        className="mb-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
      >
        Entrar com Google
      </button>

      <button
        onClick={() => signIn("github")}
        className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900"
      >
        Entrar com GitHub
      </button>
    </div>
  );
}
