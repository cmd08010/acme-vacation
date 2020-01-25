import React, { useState, useEffect } from "react"
import axios from "axios"
import "./App.css"
import VacationPlanner from "./Components/VacationPlanner"

function App() {
  const [events, setEvents] = useState([])
  const [user, setUser] = useState("")

  useEffect(() => {
    axios
      .get("https://acme-users-api-rev.herokuapp.com/api/users/random")
      .then(user => {
        const userFullName = user.data.fullName
        //setUser(userFullName)
      })
  })

  return (
    <div className="App">
      <VacationPlanner events={events} user={user} />
    </div>
  )
}

export default App
