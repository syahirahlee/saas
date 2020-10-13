import React, {Component} from "react";
import Form from "./Form";
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

class Submit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            user: localStorage.getItem('loginUser'),
            books: localStorage.getItem('books')
        };
    }

    onChange = updatedValue => {
       this.setState({
           fields: {
              ...this.state.fields,
              ...updatedValue,
              approved: false
            }
        });
    };
    approve(book){
        let books = JSON.parse(this.state.books);
        let user = JSON.parse(this.state.user);
        if(user.role === 'moderator') {
            if(books.filter(item => item.title === book.title).length > 1){
                alert('Book duplicate.');
                return;
            }
            if(!book.author || book.author.trim().length === 0){
                alert("Not credible!");
                return;
            }
            if(!book.source || book.source.trim().length === 0){
                alert("Not a empirical study!");
                return;
            }
            books.find(item => item.title === book.title).moderatorApproved = true;
        }else if(user.role === 'analyst'){
            books.find(item => item.title === book.title).adminApproved = true;
        }
        localStorage.setItem('books', JSON.stringify(books));
        window.location.reload();
    }
    reject(book){
        let books = JSON.parse(this.state.books);
        books.find(item => item.title === book.title).rejectedBy = JSON.parse(this.state.user).email;
        localStorage.setItem('books', JSON.stringify(books));
        window.location.reload();
    }


    render(){
        let form, bookList;
        if(!this.state.user) return;
        if(this.state.user && JSON.parse(this.state.user).role === 'guest'){
            form = <Form onChange= {fields => this.onChange(fields)} />
        } else {
            if(this.state.books) {
                let books = [];
                if(JSON.parse(this.state.user).role === 'moderator'){
                    books = JSON.parse(this.state.books).filter(book => !book.moderatorApproved && !book.adminApproved && !book.rejectedBy)
                }else if(JSON.parse(this.state.user).role === 'analyst'){
                    books = JSON.parse(this.state.books).filter(book => book.moderatorApproved && !book.adminApproved && !book.rejectedBy)
                }

                books = books.map(book => <ListGroup.Item style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p>{book.title}</p>
                    <div>
                        <Button variant="danger" onClick={this.reject.bind(this, book)} style={{marginRight: '5px'}}>Reject</Button>
                        <Button variant="success" onClick={this.approve.bind(this, book)}>Approve</Button>
                    </div>
                </ListGroup.Item>);

                bookList = <ListGroup style={{width: '50%', margin: '10px auto'}}>{books}</ListGroup>;
            }
        }
        return (
            <div className="Submit">
                {form}
                {bookList}
            </div>
        );
    }
}

export default Submit;
