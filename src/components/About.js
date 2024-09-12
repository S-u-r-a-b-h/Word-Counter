import React from 'react'

export default function About(props) {
    let myStyle ={
        color : props.mode=== "dark"? "white" : "black",
        backgroundColor : props.mode=== "dark"? "grey" : "white"
    }
    return (
        <div className='container' >
            <h1 className='my-2' style={{color: props.mode === "dark"? "white": "black"}}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           <strong> Analyse Your Text </strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            We provide a user-friendly platform designed to help you manage and manipulate text effortlessly. Whether you need to count words and characters, convert text between uppercase and lowercase, or eliminate unnecessary spaces, our tool simplifies the process with just a few clicks. We understand that text processing can sometimes be tedious, which is why we've built a tool to streamline these tasks, allowing you to focus on what really matters. Our mission is to make text analysis more accessible, efficient, and enjoyable for everyone, from students to professionals.

                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" style={myStyle}>
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          <strong> Free to Use </strong> 
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            We believe that everyone should have access to powerful tools without any cost. That's why our text manipulation platform is completely free, with no hidden fees or premium plans. Whether you're looking to count words, adjust formatting, or clean up text, our features are available to everyone at no charge. We are committed to providing a reliable and efficient service that empowers users to handle their text-related tasks effortlessly, with no barriers to entry. Our goal is to make productivity tools accessible to all.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            we ensure that our text manipulation tool works seamlessly across all major web browsers. Whether you’re using Chrome, Firefox, Safari, Edge, or any other popular browser, our platform is designed to deliver a consistent and smooth experience. We understand the importance of accessibility and compatibility in today’s diverse tech landscape, which is why we’ve tested our tool extensively to ensure it functions flawlessly no matter which browser you prefer. Enjoy reliable performance and a user-friendly interface, regardless of your browsing environment.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
