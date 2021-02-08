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
        <div className=" bg-primary pb-6">
          <div className="mt-2 flex flex-col max-w-sm mx-auto">
            <h1 className="p-4 text-red-500 text-2xl font-bold">Hi, I’m Ben Addison.</h1>
            <img src="/assets/images/ava-2.jpg" alt="" className="w-full h-72 object-cover" />
            <div className="flex flex-col w-full p-4 space-y-4">
              <p className=" text-white text-2xl font-bold leading-relaxed">I Help Businesses Improve their online marketing strategy.</p>
              <p className=" text-white text-xl font-normal leading-normal">I have over 10 years of experience  utilizing digital marketing techniques to generate profit for businesses. </p>
            </div>
          </div>
        </div>
        <div className=" bg-white pb-6">
          {
            workData.map(w => <WorkDetail key={w.title} workDetail={w} />)
          }
        </div>
        <div className="mt-4 flex flex-col justify-center items-center py-12 px-2" style={{ backgroundColor: "#FFDBDB", }}>
          <p className="font-bold text-2xl text-center">
            I’d love to hear from <br /> you!
          </p>
          <button className="mt-6 bg-red-600 px-12 py-2 rounded-full border-2 border-primary tracking-wide font-medium">Get In Touch</button>
        </div>
        <footer className="py-8 px-8 text-white text-sm bg-primary">
          <p>© 2021 Ben Addison, all rights reserved</p>
        </footer>
      </div>
    </Layout>
  )
}

export default Work