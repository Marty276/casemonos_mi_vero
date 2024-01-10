import { useRef } from "react"
import "./styles.css"

export function App() {

    const modalShadowRef = useRef()
    const noButtonRef = useRef()

    function handleYes(){
        modalShadowRef.current.style.display = "flex"
    }

    function handleNo(){
        noButtonRef.current.style.position = "fixed"
        noButtonRef.current.style.top = 0
        noButtonRef.current.style.left = 0
        noButtonRef.current.style.transform = `translate(${Math.floor(Math.random() * (window.innerWidth - 50))}px, ${Math.floor(Math.random() * (window.innerHeight - 50))}px)`
    }

    return <main>
        <div className="modal_shadow" ref={modalShadowRef}>
            <section className="modal">
                <span>Sabía que dirías que sí 🥰<br/>TE AMOOOO</span>
            </section>
        </div>
        <h1>Vero, quieres casarte conmigo? 💐</h1>

        <section className="buttons_cont">
            <button onClick={handleYes}>Sí</button>
            <button onClick={handleNo} onMouseOver={handleNo} ref={noButtonRef} style={{float: "right"}}>No</button>
        </section>
    </main>
}