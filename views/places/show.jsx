const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <div >
                <img src={data.place.pic} alt={`${data.place.name}`} />
            </div>
            <div >
                <h1>{data.place.name}</h1>

                <h2>Rating</h2>
                <p>Not Rated</p>

                <h2>Description</h2>
                <p>located in {data.place.city}, {data.place.state} and is a {data.place.breed}</p>
                <h2>Comments</h2>
                <p>No comments yet!</p>    
            </div>

            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                Edit
            </a>
            <form action={`/places/${data.id}?_method=DELETE`} method="POST">
                <button type="submit" className='btn btn-danger' value="DELETE">
                    Delete
                </button> 
            </form>
            
          </main>
        </Def>
    )
}

module.exports = show
