import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';

function MyApp(){
    return(
        <div>
            <h1>custom App same jsx file !</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: "https://google.com",
//         target: "_blank",
//     },
//     children: 'CLick me to visit Google'
// }

const anotherElement = (
    <a href="https://google.com" target = '_blank'>Visit Google</a>
)

const anotherUser = 'CHai aur React'

const reactElement = React.createElement(
    'a',
    {href: "https://google.com", target: "_blank"},
    'click me to visit Google',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement
    // <App />

)
