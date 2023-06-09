const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
            <h1>New Pup</h1>
            <form  action = "/places" method = "POST">
                <div className='form-group'>
                    <label htmlFor="name">Pup's Name</label>
                    <input className='form-control' type="text" id="name" name="name" required/>
                </div>
                
                <div className = 'form-group'>
                    <label htmlFor="city">City</label>
                    <input className='form-control' type="text" id="city" name="city" />
                </div>

                <div className = 'form-group'>
                    <label htmlFor="state">State</label>
                    <input className='form-control' type="text" id="state" name="state" />
                </div>

                <div className = 'form-group'>
                    <label htmlFor="breed">Breed</label>
                    <input className='form-control' type="text" id="breed" name="breed" required/>
                </div>

                <div className = 'form-group'>
                    <label htmlFor="pic">Picture URL</label>
                    <input className='form-control'type="url" id="pic" name="pic" />
                </div>

                <div className="form-group">
                    <label for="founded">Founded Year</label>
                    <input className="form-control" id="founded" name="founded" />
                </div>

                <div>
                    <input className='btn btn-primary' type="submit" value='New Pup'/>
                </div>
            </form>
        </Def>
    )
}

module.exports = new_form