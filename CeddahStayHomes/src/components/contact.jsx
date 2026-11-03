
function Contactdetails() {
    return (
        <div className="contact">
            <br /><br /><br /><br />
            <h1>Need to <span className="den">Talk?</span></h1>

            <div className="contact-wrapper">
                <div className="contact-card1">
                    <h1>Find us through the following channels</h1>

                    <div className="channels">
                        <i className="fab fa-whatsapp"></i>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-x-twitter"></i>
                        
                    </div>
                </div>

                <div className="contact-card2">
                    <form action="">
                        <h2>Send us your message</h2>

                        <div className="input">
                            <input type="text" name="fname" id="fname" placeholder="Enter your firstname"required />
                        </div>

                        <div className="input">
                            <input type="text" name="lname" id="lname" placeholder="Enter your lastname"required />
                        </div>
                        <div className="input">
                            <input type="tel" name="phone" id="phone" placeholder="Enter your phone number"required />
                        </div>

                        <div className="input">
                            <textarea name="message" id="message" placeholder="Enter your message here"required></textarea>
                        </div>

                        <button id="sendmessagebtn">Send message </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contactdetails;