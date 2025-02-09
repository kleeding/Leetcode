const API_URL = `https://leetcode.com/graphql?query=query
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

export default API_URL