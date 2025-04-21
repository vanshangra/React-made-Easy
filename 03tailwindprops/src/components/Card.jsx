// import React from 'react'

// function Card({username}) {
//   console.log(username);
  
//   return (
//     <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
//         <img
//           src="https://source.unsplash.com/300x300/?random"
//           alt=""
//           className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
//         />
//         <div className="mt-6 mb-2">
//           <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
//             Title
//           </span>
//           <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
//         </div>
//         <p className="text-gray-300">
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
//           amet
//         </p>
//       </div>
//   )
// }

// export default Card

import React from 'react'

function Card({username, btnText = "visit me"} ) {
  console.log(username);
  
  return (
    <div className="relative h-[400px] w-[300px] rounded-md ">
  <img
    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{username}</h1>
    <p className="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      {btnText } →
    </button>
  </div>
</div>
  )
}

export default Card