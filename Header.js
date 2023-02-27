import React from 'react';
const Header=()=>{
    return(
        <header>
            <div className="head">
                <h2>ONLINE ASSESSMENT</h2>
            </div>
            <div className="sss">
                <p>
                <strong>Note:&nbsp;</strong>The Online assessment include a wide range of questions, including general aptitude questions.General aptitude questions are designed to assess a person's overall cognitive abilities, including their reasoning and critical thinking skills.These questions may cover topics such as math, logic,and abstract reasoning etc.
                </p>     
            </div>
            <div className='requirements'>
                <h2>Requirements:</h2>
                <ul>
                    <li>
                        Bachelor's Degree
                    </li>
                    <li>
                        0-1 Years of experience
                    </li>
                </ul>    
            </div>
            <div className="hhh">
                <p>Application deadline:&nbsp;<emp><date>22/04/2023</date></emp></p>
            </div>
            <div className="desc">
                <p>Interested students click on <strong>Register!</strong></p>
            </div>
            <a href="#"className="btn">Register</a>
        </header>
    );
}
export default Header;