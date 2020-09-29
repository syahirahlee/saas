import React from 'react';

export default class Form extends React.Component {

    state = {
title = '',
author = '',
year = '',
source = '',
DOI = '',
number = '',
volume = '',
pageNumber = '',

 }

 render (){

    return (
        <form> 
            <input placeholder ="title" {this.state.title} />
        </form>
    );
 }



}