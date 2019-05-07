import actionTypes from '../actions/ActionTypes';

const initState = {
    newsData: []
}

export const NewsReducer = (state = initState, action) => {
    let newsData = [...state.newsData]
    switch (action.type) {
        case actionTypes.RENDER_NEWS:
            newsData = action.data.articles;
            return Object.assign({}, state, {newsData: newsData})

        default:
            return state
    }
}

export default NewsReducer;