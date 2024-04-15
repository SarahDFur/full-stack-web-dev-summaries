import React from "react"

/*
Challenge 19: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card() {
    return (
        <section className="card">
            <img src="../images/katie-zaferes.png" className="card--katie"/>
            <div className="card-rating">
                <img src="../images/star.png" className="star--rating"/>
                <p className="card--rating-stars">5.0</p>
                <p className="card--place">(6)•USA</p>
            </div>
            <div className="card--title">
                <p>Life lessons with Katie Zaferes</p>
            </div>
            <div className="card--pricing">
                <p><strong>From $136</strong> / person</p>
            </div>
        </section>
    )
}