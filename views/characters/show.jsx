const React = require('react');
const DefaultLayout = require('../layout/Default')

class Show extends React.Component {
    render() {
        const character = this.props.character;

        return (
            <DefaultLayout title="Show an Individual Character">
                <p>The {character.name} is {character.color}</p>
                {character.superPower ? 'Does have Super Power' : "Does Not!"}
                <br />
                <a href={`/characters/${character._id}/edit`}>Edit This Chracter</a>
                <form action={`/chracters/${character._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                </form>
                <a href="/characters">Back to Index</a>
            </DefaultLayout >

        )
    }
}

module.exports = Show;