import { Terminal } from "./terminal"

export type Applicator = { 
    _id: string,
    terminals: [Terminal]
    description: string, 
    fruitionAppId: string, 
    manufacturerNumber: string,
    manufacturer: string,
    strokeLength: number,
    type: string, 
    wireCrimpWidthMin: number,
    wireCrimpWidthMax: number,
    wireInsulationWidthMin: number,
    wireInsulationWidthMax: number, 
    drawingUrl: string,
    isLeased: boolean
    leaseEndDate: string,
}