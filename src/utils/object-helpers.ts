

type arrItemType <T> = Array<T>


export const updateObjectInArray = (items: Array<any>, itemID : string, objPropname: string, newObjectProp: any ) => {
    return items.map(u=> {
        if (u[objPropname] === itemID) {
            return [...u, ...newObjectProp]
        }
        return u
    })
}