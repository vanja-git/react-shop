

const initialState = {
    nesto: 'bla bla'
};


const rootReducer = (state: any = initialState, action: any) => {
    switch (action.type) {

        case 'NEKI_ACTION':
            return state
            break;

        default:
            return state;
            break;
    }
};

export default rootReducer;