import React from 'react';
import Nav from '../components/Nav';
import {createPostAction} from "../actions/post-actions";
import {connect} from 'react-redux';



class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };
    };



    handleSetTitle = event => {
        this.setState({
            title:
            event.target.value,
        })
    };

    handleSetBody = event => {
        this.setState({
            body:
                event.target.value,
            }
        );
    };

    submitNewPost = event => {
        event.preventDefault();
        this.props.createPostAction(this.state.title, this.state.body)
    };


render () {
    return (
        <>
            <Nav/>
            <div>
                <form>
                    <div>
                        <label>
                            Введите заголовок поста
                            <input type='text'
                                   value={this.state.title}
                                   onChange={this.handleSetTitle}
                            ></input>
                        </label>
                    </div>
                    <div>
                        <label>
                            Введите содержание
                            <input type='text'
                                   value={this.state.body}
                                   onChange={this.handleSetBody}
                            ></input>
                        </label>
                    </div>
                    <div>
                        <button type="submit"
                                onClick={this.submitNewPost}>вход
                        </button>
                    </div>

                </form>
            </div>
        </>
    )}
};



const mapDispatchToProps = {
    createPostAction
};


export default connect(null, mapDispatchToProps)(CreatePost);
