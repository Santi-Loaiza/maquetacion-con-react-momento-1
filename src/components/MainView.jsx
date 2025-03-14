import FirstComponent from "./FirstComponent"
import FourthComponent from "./FourthComponent"
import './MainView.css'
import SecondComponent from "./SecondComponent"
import ThirdComponent from "./ThirdComponent"

const MainView = () => {
    return(
        <section className="main-view-section">
            <div className="container-first-components">
                 <FirstComponent />
                 <FirstComponent />
            </div>
            <div className="container-main-content">
                 <SecondComponent />
                <aside>
                    <ThirdComponent />
                    <ThirdComponent />
                </aside>
            </div>
            <FourthComponent/>
        </section>
    )
}
export default MainView