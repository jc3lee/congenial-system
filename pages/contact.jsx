import Layout from "../components/layout"
import FacebookIco from "../icons/FacebookIco"
import LinkedInIco from "../icons/LinkedInIco"
import TwitterIco from "../icons/TwitterIco"

const Contact = () => {
  function handleFormSubmit(e) {
    e.preventDefault()
    e.target.reset()
  }

  return (
    <Layout>
      <div className="font-bot mt-16 md:flex md:min-h-screen">
        <div className=" pt-10 bg-white pb-12 md:flex-1">
          <div className="px-6 mt-2 flex flex-col max-w-sm mx-auto">
            <h1 className="text-center text-red-500 text-2xl sm:text-3xl md:text-4xl font-bold">Contact Me Here</h1>
            <form className="mt-8 flex flex-col font-light " onSubmit={handleFormSubmit}>
              <label className=" tracking-tight" htmlFor="nameId">Name </label>
              <input required={true} className="py-1 px-2 bg-gray-100 focus:outline-none focus:ring-1 ring-black" type="text" name="name" id="nameId" />
              <label className="mt-4 tracking-tight" htmlFor="emailId">Email </label>
              <input required={true} className="py-1 px-2 bg-gray-100 focus:outline-none focus:ring-1 ring-black" type="email" name="email" id="emailId" />
              <label required={true} className="mt-4 tracking-tight" htmlFor="msgId">Message </label>
              <textarea className="py-1 px-2 resize-none h-32 bg-gray-100 focus:outline-none focus:ring-1 ring-black" type="text" name="msg" id="msgId" />
              <button className="self-center mt-10 bg-red-600 px-12 py-2 rounded-full border-2 border-primary tracking-wide font-medium transform duration-75 active:scale-95">Submit</button>
            </form>
            <div className="mt-8 relative w-full flex justify-center items-center">
              <div className="absolute top-1/2 inset-x-0 transform -translate-y-1/2 w-56 mx-auto h-px bg-primary"></div>
              <p className="relative w-8 h-8 flex justify-center items-center bg-white font-medium">OR</p>
            </div>
            <div className="flex justify-center space-x-4 text-primary mt-8">
              <a href="twitter.com/ljc_dev" className="">
                <span className="sr-only">twitter</span>
                <TwitterIco icoClasses="h-6 w-6" />
              </a>
              <a href="facebook.github.io" className="">
                <span className="sr-only">facebook</span>
                <FacebookIco icoClasses="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/jc-lee-a939831b5" className="">
                <span className="sr-only">linkedIn</span>
                <LinkedInIco icoClasses="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="relative pt-6 pb-40 w-full md:flex-1">
          <div className="absolute bg-center bg-cover bg-no-repeat inset-0" style={{ backgroundImage: "url('/assets/images/place.png')", filter: "brightness(45%) contrast(105%)" }}></div>
          <div className="pt-10 relative z-10 px-6 flex flex-col max-w-sm mx-auto">
            <h1 className="text-center text-red-500 text-2xl sm:text-3xl md:text-4xl font-bold">Available Here Too</h1>
            <div className="flex flex-col mt-20 text-center text-lg sm:text-xl text-white">
              <a href="mailto:ben.marketing@gmail.com">ben.marketing@gmail.com</a>
              <a className="mt-2" href="tel:555-555-5555">Tel: 555-555-5555</a>
              <p className="mt-8">Looking forward to hearing <br /> from you.</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="py-8 px-8 text-white text-sm bg-primary">
        <p>© 2021 JCLee, all rights reserved</p>
      </footer>
    </Layout>
  )
}

export default Contact