import Link from "next/link"
import Layout from "../components/layout"
import WorkDetail from "../components/workDetail"
const workData = [
  {
    title: "Marketing Strategy",
    text: "I will give an in-depth analysis of your current market positioning and plan a winning strategy aligned with your business goals.",
    imgSrc: "/assets/images/work-1.svg",
  },
  {
    title: "SEO & Branding",
    text: "After an in-depth review of your website, I will give you brand marketing advice and SEO recommendations.",
    imgSrc: "/assets/images/work-2.svg",
  },
  {
    title: "Email & Social Marketing ",
    text: "I will give advice on how to market with email and popular social apps (Instagram, Facebook, Twitter, etc.).",
    imgSrc: "/assets/images/work-3.svg",
  },
]

const Work = () => {
  return (
    <Layout>
      <div className="font-bot mt-16">
        <div className=" bg-primary pb-6 md:pb-0 md:flex">
          <div className="md:flex-1 mt-2 md:mt-24 max-w-sm md:max-w-none mx-auto">
            <div className="flex flex-col md:max-w-lg md:mx-auto">
              <h1 className="p-4 text-red-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Hi, I’m Ben Addison.</h1>
              <img src="/assets/images/ava-1.jpg" alt="" className="w-full h-72 object-cover md:hidden" />
              <div className="flex flex-col w-full p-4 space-y-4">
                <p className=" text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-relaxed ">I have over 10 years of experience helping businesses improve their digital marketing and generate profit.</p>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:flex-1">
            <img src="/assets/images/ava-1.jpg" alt="" className="w-full h-screen object-cover object-center" style={{ maxHeight: "100vw" }} />
          </div>
        </div>
        <div className="md:my-20 bg-white pb-6">
          {
            workData.map((w, index) => <WorkDetail key={w.title} workDetail={w} index={index} />)
          }
        </div>
        <div className="mt-4 flex flex-col justify-center items-center py-12 px-2" style={{ backgroundColor: "#FFDBDB", }}>
          <p className="font-bold text-2xl md:text-3xl lg:text-4xl text-center">
            I’d love to hear from <br /> you!
          </p>
          <Link href="/contact">
            <a className="mt-6 bg-red-600 px-12 py-2 rounded-full border-2 border-primary tracking-wide md:text-lg font-medium transform duration-75 active:scale-95">Get In Touch</a>
          </Link>
        </div>
        <footer className="py-8 px-8 text-white text-sm bg-primary">
          <p>© 2021 JCLee, all rights reserved</p>
        </footer>
      </div>
    </Layout>
  )
}

export default Work