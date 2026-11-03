import TestimonialImg from '../assets/morning.jpg'
function Testimonials() {

    const Testimonies=[
        {number:"1",names:"John Doe",proffession:"CEO" ,message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, laboriosam eaque."},
        {number:"2",names:"John Doe",proffession:"DOCTOR" ,message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, laboriosam eaque."},
        {number:"3",names:"John Doe",proffession:"LECTURER" ,message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, laboriosam eaque."},
        {number:"4",names:"John Doe",proffession:"STUDENT" ,message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, laboriosam eaque."},
        {number:"5",names:"John Doe",proffession:"WORKER" ,message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, laboriosam eaque."},
    ]
    return (
        <div className="Testimonials-container">
            <br /><br />
            <h1>Testim<span className="den">onials</span></h1>

            <div className="testimonials-wrapper">
                <h2>People Who Trust Us</h2>

                <div className="testimonial-card-container">
                    {Testimonies.map((testimony)=>(
                        <div className="testimonial-card"key={testimony.number}>
                            <div className="details">
                                <small className="name">{testimony.names}</small>
                                <p className="position">{testimony.proffession}</p>
                            </div>

                            <div className="message">
                                <small>{testimony.message}</small>
                            </div>

                            <div className="image">
                                <img src={TestimonialImg} alt="Testimonial image " />
                            </div>
                        </div>
                    ))}


                    
                </div>
            </div>
        </div>
    );
}

export default Testimonials;