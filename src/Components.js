import React from "react"

export const Btn = ({text, bgColor, color }) => <button className="btn" style={{color, backgroundColor:bgColor}} >{text}</button>

export const UserContext = React.createContext()
