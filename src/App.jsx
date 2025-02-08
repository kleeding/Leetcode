import Layout from './components/Layout'
import Home from './components/Home/Home'
// import { useQuery, gql } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

// const endpoint = 'https://leetcode.com/graphql/'

// const PROFILE_QUERY = ` 
//   {
//     matchedUser(username: "kehneh") {
//         username
//         profile {
//         ranking
//         }
//         submitStats: submitStatsGlobal 
//         {
//         acSubmissionNum 
//         {
//             difficulty
//             count
//             submissions
//         }
//         totalSubmissionNum
//         {
//             difficulty
//             count
//             submissions
//         }
//         }
//         languageProblemCount {
//         languageName
//         problemsSolved
//         }
//         tagProblemCounts {
//         advanced {
//             tagName
//             tagSlug
//             problemsSolved
//         }
//         intermediate {
//             tagName
//             tagSlug
//             problemsSolved
//         }
//         fundamental {
//             tagName
//             tagSlug
//             problemsSolved
//         }
//         }
//     }
//     allQuestionsCount
//     {
//         difficulty
//         count
//     }
//   }`

// const FILMS_QUERY = gql`
//   {
//     matchedUser(username: "kehneh") {
//         username
//         profile {
//         ranking
//         }
//         submitStats: submitStatsGlobal 
//         {
//         acSubmissionNum 
//         {
//             difficulty
//             count
//             submissions
//         }
//         totalSubmissionNum
//         {
//             difficulty
//             count
//             submissions
//         }
//         }
//         languageProblemCount {
//         languageName
//         problemsSolved
//         }
//         tagProblemCounts {
//         advanced {
//             tagName
//             tagSlug
//             problemsSolved
//         }
//         intermediate {
//             tagName
//             tagSlug
//             problemsSolved
//         }
//         fundamental {
//             tagName
//             tagSlug
//             problemsSolved
//         }
//         }
//     }
//     allQuestionsCount
//     {
//         difficulty
//         count
//     }
//   }`

function App() {
  // const { data, isLoading, error } = useQuery("profile", () => {
  //   return fetch(endpoint, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ query: PROFILE_QUERY })
  //   })
  //     .then((response) => {
  //       if (response.status >= 400) {
  //         throw new Error("Error fetching data")
  //       } else {
  //         return response.json()
  //       }
  //     })
  //       .then((data) => data.data)
  // })

  // const { data, loading, error } = useQuery(FILMS_QUERY);

  // if (loading) return "Loading..."
  // if (error) return <pre>{ error.message }</pre>

  // console.log(data)

  return (
      <Router>
        <Routes>
          <Route element={<Layout />} />
          <Route path="/leetcode" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
  )
}

export default App
