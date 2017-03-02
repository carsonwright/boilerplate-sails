export default function(){
    Api.User.me().then((response)=>{
        App.setState((state)=>{
            state.me = response;
            state.initialized = true;
        })
    }).catch((response)=>{
        App.setState((state)=>{
            state.initialized = true;
        })
    })
}