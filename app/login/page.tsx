'use client';

import { getServerSession } from 'next-auth';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import { Button } from '@/components/ui/button';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { signIn } from 'next-auth/react';

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6">
      <h1 className="text-4xl font-bold">IAARG – Assistente de Vendas com IA 🤖</h1>
      <p className="text-lg text-gray-600">Faça login para começar</p>

      <div className="space-y-4">
        <Button
          variant="outline"
          onClick={() => signIn('google')}
          className="flex items-center gap-2"
        >
          <FcGoogle size={20} />
          Entrar com Google
        </Button>

        <Button
          variant="outline"
          onClick={() => signIn('github')}
          className="flex items-center gap-2"
        >
          <FaGithub size={20} />
          Entrar com GitHub
        </Button>
      </div>
    </div>
  );
}
