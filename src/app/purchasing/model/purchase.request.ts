export type PurchaseRequest = {
    url: string,
    isEmergency: boolean,
    quantity: number,
    description: string, 
    manufacturer: string,
    frutionPn: string,
    createDate: string,
    requestDate: string,
    catagory: string,
    createdBy: {firstname: string, lastname: string},
    isResolved: boolean
}