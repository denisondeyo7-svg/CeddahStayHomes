
function AboutComponent() {
    const AboutContents= [
        {number:"1",title:"Home Away From Home", icon: "fa-regular fa-house",content:"Discover the perfect balance of study and lifestyle at Ceddah. Located just minutes away from KIBABII UNIVERSITY, our purpose-built student accommodation offers everything you need to succeed academically while enjoying a vibrant student community. Whether you are looking for the privacy , we provide spaces tailored to your needs."},
        {number:"2",title:"Why Choose Us ", icon: "fas fa-question ",content:"Prime Location: Just a walking disctance to campus and close to patrol base which offers top-tier security.<br/><br/>  24/7 Security: Peace of mind bacause we are adjacent to Tutii patrol base."},
        {number:"3",title:"Mission", icon: "fas fa-globe-asia ",content:"Our mission is to provide an automated, stress-free and transparent living experience for every student.We aim to eliminate hassle of traditional renting- ensuring secure access, instant communication and reliable utilities so you can focus on what truly matters:"},
        {number:"4",title:"Vision", icon: "fas fa-hand-holding-heart ",content:"Founded with a vision to redefine student living, our plot was built to blend community comfort. What started as a simple space has evolved into a fully integrated residential environment. We believe that managing your home should be effortless , which is why we've paired this system to handle bookings, view vacancies and track payments."},
        {number:"5",title:"Location", icon: "fas fa-flag-checkered",content:"We are conveniently located in Bungoma county,Tutii-marakaru ward within Kanduyi constituency.You can find as adjacent to Tutii patrol base, offering enhanced security and peace of mind. We are situated just about 1500m from kibabii university making it the perfect balance of proximity and quiet residential living for all students."}
    ]

    return (
        <div className="about" id="about">
            <br /><br />
            <h1>About <span className="den">Us</span></h1>
<br /><br />
            <div className="about-content-wrapper">
                <div className="card-wrapper">
                    {AboutContents.map((about)=>(
                        <div className="about-card"key={about.number}>
                            <div className="title-wrapper">
                                <i className={about.icon}></i>
                                <h2>{about.title}</h2>
                            </div>
                            
                            <p dangerouslySetInnerHTML={{ __html: about.content }} />
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
}

export default AboutComponent;