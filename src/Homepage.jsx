import BlueBtn from "./components/BlueBtn"
import Layout from './components/Layout'
import img from './assets/homepage_gfx.png'
export default function Homepage() {
    return (
        <Layout>
        <div className="flex flex-col items-center py-10 justify-center max-w-[80%] mx-auto gap-5"> 
            <h1 className="sm:text-3xl text-xl font-bold">ABOUT THIS TEST</h1>
            <div className="flex md:flex-row flex-col mx-auto min-[1700px]:w-[60%] lg:w-[80%] items-center justify-center">
                <p className="sm:w-[70%] w-[90%] sm:text-base text-sm">
                Welcome to MindCheck! As part of our commitment to help clinical evaluation and research, we created a website and evaluation that incorporates the American Psychological Association (APA)'s DSM-5-TR measures. These measures have been specifically developed to be administered during the initial patient interview and to effectively evaluate mental stability. <br /><br />

                It is important to note that these assessment measures should not be used as the sole basis for making a clinical diagnosis. Instead, they are intended to be utilized as potentially valuable tools to enhance clinical decision-making. Instructions, scoring information, and interpretation guidelines are readily available to assist clinicians and users.<br /><br />

                By leveraging these patient assessment measures, we aim to aid the field of clinical evaluation, promote evidence-based decision-making, and ultimately enhance the overall quality of mental health evaluation. </p>
                <div className="">
                    <img src={img} alt="" />
                </div>
            </div>
            <BlueBtn 
                text="Take the Test"
            />
        </div>
        </Layout>
    )
}