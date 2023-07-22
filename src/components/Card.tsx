import React from "react"
interface Props{
    children : React.ReactNode
}
const Card = ({children}:Props) => {
  return (
    <div className="w-[90%] h-[50%] lg:w-[50%] shadow-lg p-4 my-8">
      {children}
    </div>
  )
}

export default Card
