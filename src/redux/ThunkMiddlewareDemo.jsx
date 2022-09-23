function myThunk({dispatch,getstate}){
    return (next)=>{
        return (action)=>{
            if(typeof(action) === 'function'){
                return action(dispatch,getstate);
            }
            return next(action);
        }
    }
}

export default myThunk