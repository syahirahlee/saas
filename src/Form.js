import React from 'react';
//GOTO LINK https://www.youtube.com/watch?v=qH4pJISKeoI&list=LLYVED1NSxtL6Khp2XPsmC_g&index=113
export default class Form extends React.Component {

state = {
// The absolute state of this class before.
title: "",
author: "",
year: "",
source: "",
DOI: "",
number: "",
volume: "",
pageNumber: "",
moderatorApproved: false,
adminApproved: false,
rejectedBy: null,
from: JSON.parse(localStorage.getItem('loginUser')).email
};

change = e => {
    this.props.onChange({[e.target.name]: e.target.value });

    this.setState({
        [e.target.name]: e.target.value
});
};
//Fixed an issue of using () to e.
onSubmit = e => {
    let books = localStorage.getItem('books');
    books = books ? JSON.parse(books) : [];
    books.push(this.state);

    localStorage.setItem('books', JSON.stringify(books))
    e.preventDefault();
  //this.props.onSubmit(this.state);
  //   this.setState({
  //       title: "abc",
  //       author: "",
  //       year: "",
  //       source: "",
  //       DOI: "",
  //       number: "",
  //       volume: "",
  //       pageNumber: "",
  //   });
  //
  //   this.props.onChange({
  //       title: "abc",
  //       author: "",
  //       year: "",
  //       source: "",
  //       DOI: "",
  //       number: "",
  //       volume: "",
  //       pageNumber: "",
  //   });
};


 render () {
    return (
        <form> 
            <input
            name = "title"
            placeholder ="Title"
            value = {this.state.title}
            onChange = {e => this.change(e)}
            />
            <br />
          <input
            name = "author"
            placeholder = "Author"
            value = {this.state.author}
            onChange = {e => this.change(e)}
              />
             <br />
             <input 
            name = "year"
            placeholder = "Year"
            value = {this.state.year}
            onChange = {e => this.change(e)}
              />
              <br />        
        <input 
            name = "source"
            placeholder = "Source"
            value = {this.state.source}
            onChange = {e => this.change(e)}
              />
                 <br />
    <input 
            name = "DOI"
            placeholder = "DOI"
            value = {this.state.DOI}
            onChange = {e => this.change(e)}
              />
   <br />
            <input 
            name = "number"
            placeholder = "Number"
            value = {this.state.number}
            onChange = {e => this.change(e)}
              />
   <br />
            <input 
            name = "volume"
            placeholder = "Volume"
            value = {this.state.volume}
            onChange = {e => this.change(e)}
              />
   <br />
            <input 
            name = "pageNumber"
            placeholder ="Page Number"
            value = {this.state.pageNumber}
            onChange = {e => this.change(e)}
              />
        <br />
              <button onClick= {e => this.onSubmit(e)}>Submit</button>
        </form>
    );
 }
}
