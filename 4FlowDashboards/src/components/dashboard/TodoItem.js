import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {Accordion, Card} from 'react-bootstrap';
import SubTaskList from './SubTaskList';

export class TodoItem extends Component {
    render() {
        const {id, title} = this.props.todo;
        return (
            <Card style={{border: '1px solid black', borderRadius: '5px', margin: '15px', padding: '10px', backgroundColor: '#F8F8F8',}}>
                <Accordion.Toggle as={Card.Header} eventKey={id}>
                    {title}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={id}>
                    <SubTaskList subTasks={this.props.todo.subTasks} key={id} todoId={id}
                                 toggleSubTask={this.props.toggleSubTask}/>
                </Accordion.Collapse>
            </Card>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
};

export default TodoItem
