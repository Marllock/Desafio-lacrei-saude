import Hero from '@/app/components/hero/homehero';


export const metadata = {
  title: 'Lacrei Saúde - Tela Inicial',
};

export default function HomePage() {
  return (
    <main id="conteudo" className="min-h-screen bg-cover bg-center text-emerald-40" role="main">
      <Hero />
    </main>
  );
}