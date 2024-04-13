const React = require('react');
const DefaultLayout = require('../layout/Default')

class New extends React.Component {
    render () {
        return (
            <DefaultLayout title={'Add a New Character'}>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action='/characters' method="POST">
                    Name: <input type="text" name="name" /><br />
                    Color: < input type="text" name="color"/> <br />
                    Does have a Super Power: <input type="checkbox" name="superPower"/> <br />
                    <input type="submit" name="" value="Create Character"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New;