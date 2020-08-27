import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = () => {
    return (
        <div style={{display:'inline-block',position:'absolute',left:'50%',top:'50%',transform:'translet(-50%,-50%)'}}>
            <CircularProgress/>
        </div>
    )
}

export default Loading
