import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "@/lib/Globalstyles";
import  Header  from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";

export const metadata = {
  title: {
    default: "Lacrei Saúde",
    template: "%s | Lacrei Saúde",
  },
  description: "Plataforma com foco em atendimento de saúde inclusivo e seguro para a comunidade LGBTQIAPN+.",
};

import { Inter, Nunito } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-body', weight: ['400','700'] });
const nunito = Nunito({ subsets: ['latin'], display: 'swap', variable: '--font-display', weight: ['400','700'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${nunito.variable} antialiased`}>
        <StyledComponentsRegistry>
          <a href="#content" className="skip-link">Pular para o conteúdo</a>
          <GlobalStyles />
          <Header />
          <div id="content" role="main">
            {children}
          </div>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}