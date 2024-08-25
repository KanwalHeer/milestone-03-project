
function Card({text,heading}:{text:string,heading:string}) {
  return (
    <div>
        <h1 className="text-blue-600 text-2xl text-center m-4">{heading}</h1>
      <p className="bg-slate-500 text-gray-900 text-lg text-center m-4">{text}</p>
    </div>
  )
}

export default Card
