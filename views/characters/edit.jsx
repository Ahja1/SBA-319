const React = require('react');
// As you can see we are using the app layout
const DefaultLayout = require('../layout/Default.jsx')

class Edit extends React.Component {
    render() {
        return (
            <DefaultLayout title="Edit Page">
                {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
                {/* form is not complete we will do that below*/}
                <form action={`/characters/${this.props.character._id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={this.props.character.name} /><br />
                    Color: <input type="text" name="color" defaultValue={this.props.character.color} /><br />
                    Super Power:
                    {this.props.character.superPower ? <input type="checkbox" name="superPower" defaultChecked /> : <input type="checkbox" name="superPower" />}
                    <br />
                    <input type="submit" value="Submit Changes" />
                </form>
            </DefaultLayout>
        )
    }
}
module.exports = Edit;