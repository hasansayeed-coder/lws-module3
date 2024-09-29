import { type } from "@testing-library/user-event/dist/type"
import { COLORCHANGED, STATUSCHANGED } from "./actions"

export const statusChanged = (status) => {
    return {
        type : STATUSCHANGED ,
        payload : status ,
    }
}

export const colorChanged = (color , changeType) => {
    return {
        type : COLORCHANGED , 
        payload : {
            color , 
            changeType ,
        }
    }
}