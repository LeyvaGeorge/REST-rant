const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div id='ramen'>
                    <img src="/images/Beef Ramen.jpg" alt="Beef Ramen" />
                    <div>
                        <p>Photo by <a href='https://unsplash.com/@fla5h904'>David Hunter</a> on <a href='https://unsplash.com/'>Unsplash</a></p>
                    </div>
                </div>

                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home

