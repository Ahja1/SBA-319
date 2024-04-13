const React = require('react');
const DefaultLayout = require('../layout/Default')

class Index extends React.Component {
    render() {
        const { characters } = this.props;

        return (
            <DefaultLayout title={"Characters Index Page"}>
                <nav>
                    <a href="/characters/new">Create a New Character</a>
                </nav>
                <ul>
                    {characters.map((character, i) => {
                        return (
                            <li>
                                The {' '}
                                <a href={`/characters/${character._id}`}>
                                    {character.name}
                                </a> {' '}
                                is {character.color} <br></br>
                                {character.superPower
                                ? `Do they have a super power`
                            :   `They do NOT have a super power`}
                            <br />
                            <a href={`/characters/${character._id}/edit`}>Edit This Character</a>
                            <form action={`/characters/${character._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="DELETE"/>
                            </form>
                            </li>
                        )
                    })

                    }
                </ul>
            </DefaultLayout>
        )
    }
}

module.exports = Index;