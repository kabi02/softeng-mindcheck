export default function Header() {
    return(
        <div className="flex flex-row py-7 px-16 items-center justify-center">
            <div className="order-1">
                <img src="./assets/logo.png" alt="" />
            </div>
            <div className="order-2 px-16 text-lg">
                <ul className="flex flex-row font-open-sans gap-16 text-white">
                    <li>Scoring Guide</li>
                    <li>Specialized Tests</li>
                    <li>About Us</li>
                    <li>Resources</li>
                </ul>
            </div>
            <div className="order-2">
                <button type="button" className="py-3 px-7 rounded-full bg-white font-open-sans font-bold">Take the Test</button>
            </div>
        </div>
    )
}