const WorkDetail = ({ workDetail, index }) => {
  const { title, text, imgSrc } = workDetail
  return (
    <div className={`mt-8 ${index !== 0 ? "md:mt-20" : ""} flex flex-col max-w-sm md:max-w-screen-lg mx-auto  md:justify-around ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
      <div className="flex flex-col w-full p-4 md:max-w-xs ">
        <h1 className="text-red-500 text-2xl sm:text-3xl font-bold">{title}</h1>
        <p className="mt-8 text-primary text-base sm:text-lg leading-normal">{text}</p>
      </div>
      <div className="mt-6 md:mt-0 ">
        <img className="mx-auto w-64 md:w-full p-4 md:max-w-xs h-64" src={imgSrc} alt={title} />
      </div>
    </div>
  )
}

export default WorkDetail