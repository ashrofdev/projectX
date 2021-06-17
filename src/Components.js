import React from "react"

// creating react context
export const UserContext = React.createContext()

export const Btn = ({text, bgColor, color }) => <button className="btn" style={{color, backgroundColor:bgColor}} >{text}</button>

export const Notification = ({type, message}) => {

    if(type==='warning'){
        return (
            <div className="notification warning">
                {/* component features */}
                <header>Warning</header>
                <p>{message}</p>
            </div>
        )
    }else if(type==='error'){
        return (
            <div className="notification error">
                {/* component features */}
                <header>Error</header>
                <p>{message}</p>
            </div>
        )
    }else {
        return (
            <div className="notification success">
                {/* component features */}
                <header>Success</header>
                <p>{message}</p>
            </div>
        )
    }
    
}

