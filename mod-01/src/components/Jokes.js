import React, { Component } from "react";

class Jokes extends Component {
  state = {
    loading: true,
    jokes: []
  };

  async componentDidMount() {
    const rsp = await fetch(
      "http://api.icndb.com/jokes/random/10/?limitTo=[nerdy]&escape=javascript"
    );
    if (rsp.ok) {
      const data = await rsp.json();
      this.setState({ jokes: data.value, loading: false });
    }
  }

  render() {
    const { jokes, loading } = this.state;

    if (loading) {
      return <div>Loading....</div>;
    }

    return (
      <div>
        <ul>
          {jokes.map(joke => (
            <li key={joke.id}>{joke.joke}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Jokes;
