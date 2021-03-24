import React, { useState,useRef } from 'react'
import IdleTimer from 'react-idle-timer'
import Modal from 'react-modal'
import { createHashHistory } from 'history'
import AuthenticationService from '../components/authentication/AuthenticationService'

 export const history = createHashHistory()

Modal.setAppElement('#root')

function IdleTimerContainer() {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const idleTimerRef = useRef(null)
    const sessionTimeoutRef = useRef(null)
   
    const onIdle = () => {
        console.log("user id idle")
        setModalIsOpen(true)
        sessionTimeoutRef.current = setTimeout(logOut, 5000)
    }

    const stayActive = () => {
        setModalIsOpen(false)
        clearTimeout(sessionTimeoutRef.current)
        console.log("user is active")
        history.push('/login')
    }

    const logOut = () => {
        setModalIsOpen(false)
        setIsLoggedIn(false)
        clearTimeout(sessionTimeoutRef.current)
        sessionStorage.removeItem("authenticatedUser")
        window.location.replace('http://localhost:4200/login')
        console.log("user has logged out")
    }
    
    return (
        <div> 
            {isLoggedIn ? console.log("Hello") : console.log("Goodbye")}
            <Modal isOpen={modalIsOpen}>
                <br/>
                <br/>
                <h2>You've been idle for awhile!</h2>
                <p>You will be logged out soon</p>
                <div>
                    <button onClick={logOut && AuthenticationService.logout}>Log me out</button>
                    <button onClick={stayActive}>Keep me signed in</button>
                </div>
            </Modal>
            <IdleTimer 
            ref={idleTimerRef} 
            timeout={600 * 1000} 
            onIdle={onIdle}>
            </IdleTimer>
        </div>
    )
}

export default IdleTimerContainer
