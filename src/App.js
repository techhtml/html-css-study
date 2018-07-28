import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foods: null
    }

    // this.props.db
    // 아까 index.js에서 내려준 database (firestore)

    // this.props.db.collection("food");
    // 어떤 collection을 가져다가 사용할거니?

    // this.props.db.collection("food").get() // READ

    // this.props.db.collection("food").get().then()
    // 비동기 함수 (A라는 행위가 끝나면 B를 하렴)
    // 모든 AJAX 관련 함수는 비동기입니다.

    // then(함수)
    // 함수 : () => {}

    /* 
     * (snapshot) => {
     *   snapshot은 내가 데이터베이스를 읽어 온 시점의 데이터베이스
     *   snapshot
     * }
     */
    

    this.props.db.collection("food").get().then((snapshot) => {
      const foods = [];

      snapshot.forEach((doc) => {
        foods.push(doc.data());
      })

      this.setState({
        foods: foods
      })
    })
  }

  render() {
    let foodList = <div className="is-loading">Loading</div>;

    if(this.state.foods) {
      foodList = this.state.foods.map((food, index) => (
        <div className="food" key={index}>
          <h1>{food.name}</h1>
          <p>{food.price}</p>
          <Post contents={food.contents} />
        </div>
      ))
    }

    return (
      <div className="App">
        {foodList}
      </div>
    );
  }
}

export default App;
