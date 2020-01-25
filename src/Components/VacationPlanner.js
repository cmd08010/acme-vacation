import React, { useState } from "react"

export default function VacationPlanner({ user, events }) {
  return (
    <div className="planner-body">
      <h1>
        Acme Vacation Planner for {user}({events.length})
      </h1>
      <input type="text" id="start-date"></input>
      <input type="text" id="end-date"></input>
      <button id="create">Create</button>
    </div>
  )
}
