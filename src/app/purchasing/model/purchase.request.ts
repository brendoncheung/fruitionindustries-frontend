export type PurchaseRequest = {
    _id: string,
    url: string,
    poNumber: string
    isEmergency: boolean,
    quantity: number,
    description: string, 
    manufacturer: string,
    manufacturerNumber: string,
    fruitionPn: string,
    createDate: string,
    requestDate: string,
    catagory: string,
    createdBy: {firstname: string, lastname: string},
    isResolved: boolean
}