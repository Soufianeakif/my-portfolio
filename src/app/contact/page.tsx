import { ContactForm } from '@/components/ContactForm';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Contact() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
