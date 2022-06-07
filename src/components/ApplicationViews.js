import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Taskboard"
import { taskCard } from "./task/taskCard"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/tasks">
                <AnimalCard />
            </Route>
        </>
    )
}