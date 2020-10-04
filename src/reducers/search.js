import data from '../function';

function searchFunc(filter){
    if(filter.query.trim().length == 0 && filter.min==1990 && filter.max==2020) return data;

    return data.filter(item => {
        return item.title.toLowerCase().includes(filter.query.toLowerCase()) && item.year >= parseInt(filter.min) && item.year <= parseInt(filter.max);
    })
}

const search = (state=data, action) => {
    let query = action.query;
    let min = action.min || 1990;
    let max = action.max || 2020;

    switch (action.type){
        case 'search': return searchFunc({query, min, max});
        default: return state;
    }
}

export default search;