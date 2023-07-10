export default function Homepage() {
    return (
        <div className="w-full bg-[rgba(255,255,255,0.75)] font-open-sans items-center justify-center">
            <div className="flex flex-col items-center py-10 justify-center"> 
                <h1 className="text-3xl font-bold">ABOUT THIS TEST</h1>
            </div>
            <div className="flex flex-row max-w-[60%] items-center justify-center">
                <p className="w-[70%]">Welcome to MindCheck! As part of our commitment to help clinical evaluation and research, we created a website and evaluation that incorporates the American Psychological Association (APA)'s DSM-5-TR measures. These measures have been specifically developed to be administered during the initial patient interview and to effectively evaluate mental stability. <br /><br />

                It is important to note that these assessment measures should not be used as the sole basis for making a clinical diagnosis. Instead, they are intended to be utilized as potentially valuable tools to enhance clinical decision-making. Instructions, scoring information, and interpretation guidelines are readily available to assist clinicians and users.<br /><br />

                By leveraging these patient assessment measures, we aim to aid the field of clinical evaluation, promote evidence-based decision-making, and ultimately enhance the overall quality of mental health evaluation. </p>
                <div className="w-[30%]">
                    <img src="./assets/homepage_gfx.png" alt="" />
                </div>
            </div>
        </div>
    )
}