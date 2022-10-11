import React from 'react';

const About = () => {

    return (
        <div className='container'>
            <h3>Q1:What is the purpose of react-router?</h3>
            <p>Ans:ReactJS Router is mainly used for developing Single <br />
                Page Web Applications. React Router is used to define multiple <br />
                routes in the application. When a user types a specific URL into the browser, <br />
                and if this URL path matches any 'route' inside the router file, the user will be <br />
                redirected to that particular route.</p>
            <h3>Q2: How the Context API works?</h3>
            <p>Ans:  React's context allows you to share information to any <br />
                component, by storing it in a central place and allowing access to any <br />
                component that requests it (usually you are only able to pass data from <br />
                parent to child via props).</p>
            <h3>Q2:what is useref?</h3>
            <p>Ans: The useRef Hook allows you to persist values between renders. It can be <br />
             used to store a mutable value that does not cause a re-render when updated. <br />
              It can be used to access a DOM element directly. <br />
               </p>
        </div>

    );
};

export default About;