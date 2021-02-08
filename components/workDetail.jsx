const WorkDetail = ({ workDetail }) => {
  const { title, text, imgSrc } = workDetail
  return (
    <div className="mt-8 flex flex-col max-w-sm mx-auto">
      <div className="flex flex-col w-full p-4">
        <h1 className="text-red-500 text-2xl font-bold">{title}</h1>
        <p className="mt-8 text-primary text-base leading-normal">{text}</p>
      </div>
      <div className="mt-6">
        <img className="mx-auto w-64 h-64" src={imgSrc} alt={title} />
      </div>
    </div>
  )
}

export default WorkDetail