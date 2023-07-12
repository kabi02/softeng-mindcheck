import BlueBtn from "./components/BlueBtn"
import Layout from './components/Layout'
import img from './assets/homepage_gfx.png'
import Title from "./components/Title"

export default function Homepage() {
    return (
        <Layout>
        <div className="flex flex-col items-center pb-10 justify-center md:max-w-[80%] max-w-[90%] mx-auto gap-5"> 
            <Title>ABOUT THIS TEST</Title>
            <div className="flex md:flex-row flex-col gap-5 mx-auto min-[1700px]:w-[70%] lg:w-[90%] items-center justify-center">
                <p className="sm:w-[70%] w-[90%] sm:text-base text-sm text-justify">
                Welcome to MindCheck! As part of our commitment to help clinical evaluation and research, we created a website and evaluation that incorporates the American Psychological Association (APA)'s DSM-5-TR measures. These measures have been specifically developed to be administered during the initial patient interview and to effectively evaluate mental stability. <br /><br />
                It is important to note that these assessment measures should not be used as the sole basis for making a clinical diagnosis. Instead, they are intended to be utilized as potentially valuable tools to enhance clinical decision-making. Instructions, scoring information, and interpretation guidelines are readily available to assist clinicians and users.<br /><br />
                By leveraging these patient assessment measures, we aim to aid the field of clinical evaluation, promote evidence-based decision-making, and ultimately enhance the overall quality of mental health evaluation. </p>
                <img src={img} className='w-[60%] max-[1174px]:w-[45%] max-[860px]:w-[55%] max-[640px]:w-[75%]' alt="" />

            </div>
            <BlueBtn 
                text="Take the Test"
                link='/what-is-dsm-5-tr'
            />
        </div>
        </Layout>
    )
}