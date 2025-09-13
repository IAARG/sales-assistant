"use client"; // ← ESTA LINHA RESOLVE O PROBLEMA!

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>IAARG - Site em Construção</h1>
      <p>Em breve novidades incríveis de Inteligência Artificial!</p>
      <div style={{ marginTop: '2rem' }}>
        <a href="/sobre" style={{ color: 'blue', textDecoration: 'underline' }}>
          Sobre nós
        </a>
      </div>
    </div>
  );
}
