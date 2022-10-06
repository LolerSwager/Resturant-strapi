import Header from '../Component/Header'
import Footer from '../Component/Footer'
import ContactForm from '../Component/ContactForm'

export default function About() {
    return (
        <body>
            <Header/>
                <main>
                    <h3>About</h3>
                    <p>her skal der være lidt om siden men det er der ikke lige nu </p>
                    <ContactForm/>
                </main>
            <Footer/>
        </body>
    );
}