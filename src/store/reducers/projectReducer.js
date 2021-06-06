const initState = {}
// const initState = {
//     projects: [
//         { id: '1', title: 'help me find peach', content: 'blah blah' },
//         { id: '2', title: 'collect all start', content: 'blah blah' },
//         {id:'3', title: 'collect a', content:'blah blah'}
//     ]
// }

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('cteated pro', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('error at', action.err)
            return state;
            case 'UPDATE_PROJECT':
                console.log('cteated pro', action.project)
                return state;
            case 'UPDATE_PROJECT_ERROR':
                console.log('error at', action.err)
                return state;
        default:
            return state;
    }

} 
export default projectReducer;
 