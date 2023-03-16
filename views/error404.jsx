const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404:PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/images/Broken bowl.png" alt="Broken Bowl"/>
                    <div>
                        <p>Photo by <a href='https://www.artsy.net/artist/jon-keenan'>Jon Keenan</a> on <a href='https://www.artsy.net/'>Artsy</a></p>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404