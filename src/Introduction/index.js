import React from "react";
import './style.css'

const Introduction = () =>{
    return(
        <div className="intro">
            <h1 className="heading">What I have learnt about React</h1>
            <p>It uses reusable components</p>
            <p>The writing format is JSX</p>
            <p>It is fun.</p>
            <div className="countries">
                <div className="part-one">
            <img src="images/globe.png" className="globe"/>
                </div>
                    <div className="part-two">
            <table class="table">
        <thead>
          <tr>            
              <th>Country</th>
            <th>Capital City</th>
         </tr>
       </thead>
        <tbody>
         <tr>
             <td>United States</td>
            <td>Washington, D.C.</td>
          </tr>
         <tr>
            <td>United Kingdom</td>
             <td>London</td>
          </tr>
          <tr>
            <td>France</td>
            <td>Paris</td>
          </tr>
          <tr>
            <td>Germany</td>
            <td>Berlin</td>
          </tr>
        </tbody>
      </table>
      </div>
      </div>
        </div>

    )
};

export default Introduction
