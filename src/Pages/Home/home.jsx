import React from 'react'
import Slider from './slider'
import Cards from './cards'
import Feedback from '../About/feedback'
export default function home() {
  return (
    <>
      <Slider />
      <div className="flex flex-col md:flex-row items-center justify-center ">
        <div className="w-full md:w-1/2">
          <img src="https://pnghq.com/wp-content/uploads/studying-png-free-png-images-download-27930.png" alt="Home Tuition" className="w-full h-auto rounded-lg" />
        </div>

        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-6 p-6">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Who We Are</h1>
          <p className="text-gray-600 leading-relaxed text-sm">
            Welcome to Read Home Tuition, your trusted home tuition service provider in Faisalabad. With a mission to ignite a passion for learning, we strive to provide quality education tailored to each student’s unique needs. At Read Home Tuition, we understand that every learner is different, and we embrace this diversity by offering personalized one-on-one tutoring sessions. Our team of experienced and qualified tutors is dedicated to nurturing academic growth and cultivating a love for knowledge in our students. We believe in creating a conducive learning environment where students feel comfortable to ask questions, explore ideas, and excel academically. We have a branch in Lahore as well, where we provide home tutors in Lahore.
          </p>
        </div>
      </div>
      <Cards />
      <Feedback />

    </>
  )
}
