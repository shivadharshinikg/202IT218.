import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: "",
            list: [],
        };
    }


    updateInput(value) {
        this.setState({
            userInput: value,
        });
    }


    addItem() {
        if (this.state.userInput !== "") {
            const userInput = {

                id: Math.random(),
                value: this.state.userInput,
            };
            const list = [...this.state.list];
            list.push(userInput);
            this.setState({
                list,
                userInput: "",
            });
        }
    }

    deleteItem(key) {
        const list = [...this.state.list];
        const updateList = list.filter((item) => item.id !== key);
        this.setState({
            list: updateList,
        });
    }

    editItem = (index) => {
      const todos = [...this.state.list];
      const editedTodo = prompt('Edit the todo:');
      if (editedTodo !== null && editedTodo.trim() !== '') {
        let updatedTodos = [...todos]
        updatedTodos[index].value= editedTodo
        this.setState({
          list: updatedTodos,
      });
      }
    }

    render() {
        return (
            <Container>
                <Row
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "3rem",
                        fontWeight: "bolder",
                    }}
                >
                    TRAIN SCHEDULE
                </Row>



export default App;