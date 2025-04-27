import { useState } from 'react'
import { IoPaperPlane } from 'react-icons/io5'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <article className="card contact">
      <header>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact</h2>
      </header>

      <section className="mapbox mb-8">
        <figure className="rounded-lg overflow-hidden shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="text-xl font-medium text-gray-800 mb-4">Contact Form</h3>
        <ContactForm />
      </section>
    </article>
  )
}