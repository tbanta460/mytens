const config = {
    github: "https://api.github.com/users"
}
export const getGithubApi = async (userName, type) => {
    return await fetch(`${config.github}/${userName}${type}`)
    .then(res => res.json())
    .then(data => data)
    .catch(error => error.response)
}