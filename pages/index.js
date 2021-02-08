import { useEffect, useRef, useState } from 'react'
import Layout from '../components/layout'

// const HERO_VID_URL = "assets/videos/hero-dg.mp4"
const HERO_VID_URL = "assets/videos/RM-01.mp4"

export default function Home() {
  const videoRef = useRef(null)
  function handleFormSubmit(e) {
    e.preventDefault()
    e.target.reset()
  }

  useEffect(() => {
    canShowVid()
  }, [])

  function canShowVid() {
    if (!videoRef.current.paused) {
      console.log("show vid")
      showVid()
    } else {
      setTimeout(() => {
        console.log("waiting for vid to load")
        canShowVid
      }, 500)
    }
  }

  function showVid() {
    videoRef.current.classList.remove("opacity-0")
  }

  return (
    <Layout>
      <div className="h-screen w-full relative font-bot">
        <img src="/assets/images/hero-bg0.png" alt="Ben Addison website background" className="absolute  top-0 left-0 w-full h-full object-cover" />
        <video ref={videoRef}
          className="opacity-0 absolute object-cover top-0 left-0 w-full h-full" style={{ filter: "brightness(75%) contrast(115%)" }}
          src={HERO_VID_URL}
          muted={true}
          autoPlay={true}
          loop={true}
        />
        <div className="relative top-1/2 transform -translate-y-1/2 pb-6 flex flex-col ">
          <div className="px-4 mt-2 flex flex-col max-w-sm">
            <h1 className="mt-4 text-white text-4xl font-bold w-full" style={{ maxWidth: "18rem" }}>Take Your <span className="text-red-500">Business</span> to the next level</h1>
            <p className="mt-8 text-white text-xl font-bold w-full" style={{ maxWidth: "20rem" }}>Start generating new leads and sales now!</p>
            <p className="mt-20 text-white text-sm w-full" style={{ maxWidth: "20rem" }}>Get practical digital marketing advice straight in your inbox.</p>
            <form onSubmit={handleFormSubmit} className="flex">
              <label htmlFor="emailId" className="sr-only">Email</label>
              <input className="px-4 py-2 flex-1 w-40 text-black bg-input-light hover:bg-input focus:bg-input" style={{ maxWidth: "14rem", }} type="email" name="emailSub" id="emailId" />
              <button className="capitalize flex items-center px-1.5 bg-red-500 text-primary tracking-wider font-medium text-sm">tell me</button>
            </form>
          </div>
        </div>
      </div>
      <footer className="z-30 fixed bottom-0 inset-x-0 py-8 px-8 text-white text-sm bg-primary">
        <p>© 2021 JCLee, all rights reserved</p>
      </footer>
    </Layout>
  )
}
