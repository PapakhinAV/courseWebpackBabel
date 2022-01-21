import './profile.css'

export default ({ name, location }) => {
    const nameElem = document.querySelector('.profile_name')
    const locationElem = document.querySelector('.profile_location')

    nameElem.textContent = name
    locationElem.textContent = `from ${location}`
}
