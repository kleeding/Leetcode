import Home from './components/Home/Home'
import QUERY from './assets/queries'
import leet from './assets/leetcode'
import './App.css'

// async function getData() {
//   console.log("Loading new profile data")

//   const API_URL = QUERY
//   // const API_URL = 'https://alfa-leetcode-api.onrender.com/userProfile/qeetcode'

//   try {
//     const response = await fetch(API_URL)
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`)
//     }
//     const data = await response.json()
//     console.log(data)
//     // return data
//   } catch (error) {
//     console.error(error.message)
//   }
// }

// function loadData() {
//   console.log("Local Storage:", localStorage)
//   const current_time = Math.floor(Date.now())
//   console.log("Current time:", current_time)
  
//   let profile = JSON.parse(localStorage.getItem('profile'))
//   let age = 9999999
//   if (profile) {
//     console.log("Profile:", profile)
//     let save_time = JSON.parse(localStorage.getItem('profile_save'))
//     age = current_time - save_time
//   }
//   console.log("Current age:", age)

//   if (age > 1000000) {
//     console.log("Needs updating.")
//     profile = getData()
//     let save = Math.floor(Date.now())
//     localStorage.setItem('profile_save', JSON.stringify(save))
//     localStorage.setItem('profile', profile)
//     profile = JSON.parse(profile)
//     console.log("Profile:", profile)
//     return profile
//   }

//   if (profile) {
//     return profile
//   }
//   else {
//     return null
//   }
// }

function App() {
  console.log(5)
  // let leet = require('./leetcode');
  // leet()

  // const data = loadData()
  // console.log("profile data:", data)

  return (
    <>
      <Home />
    </>
  )
}

export default App
