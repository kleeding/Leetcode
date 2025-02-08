import Home from './components/Home/Home'
import axios from "axios";
import { useQuery } from 'react-query';
import './App.css'

const endpoint = 'https://leetcode.com/graphql/'

const PROFILE_QUERY = ` 
  {
    matchedUser(username: "kehneh") {
        username
        profile {
        ranking
        }
        submitStats: submitStatsGlobal 
        {
        acSubmissionNum 
        {
            difficulty
            count
            submissions
        }
        totalSubmissionNum
        {
            difficulty
            count
            submissions
        }
        }
        languageProblemCount {
        languageName
        problemsSolved
        }
        tagProblemCounts {
        advanced {
            tagName
            tagSlug
            problemsSolved
        }
        intermediate {
            tagName
            tagSlug
            problemsSolved
        }
        fundamental {
            tagName
            tagSlug
            problemsSolved
        }
        }
    }
    allQuestionsCount
    {
        difficulty
        count
    }
  }`

// const endpoint = "https://api.spacex.land/graphql/";
// const PROFILE_QUERY = `
//   {
//     launchesPast(limit: 10) {
//       id
//       mission_name
//     }
//   }
// `;

function App() {
  const { data, isLoading, error } = useQuery( "profile", () => {
    return axios({
      url: endpoint,
      method: "POST",
      data: {
        query: PROFILE_QUERY
      }
    }).then(response => response.data.data);
  });

  if (isLoading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  // console.log(data)

  return (
      <Home />
  )
}

export default App
