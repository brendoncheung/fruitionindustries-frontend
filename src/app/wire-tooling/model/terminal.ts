import { Applicator } from "./applicator";
import { TerminalSpecification } from "./terminal-spec";

export type Terminal = {
    _id: string,
    description: string,
    applicators: [Applicator]
    specification: [TerminalSpecification],
    fruitionNumber: string,
    manufacturer: string,
    manufacturerNumber: string,
    stripLengthMin: string,
    stripLengthMax: string,
    imgUrl: string,
    // below is optional
    ratedVoltageMin: number;
    ratedVoltageMax: number,
    ratedCurrentMin: number,
    ratedCurrentMax: number,
    ratedTempMin: number,
    ratedTempMax: number,
    baseMaterial: string,
    plateMaterial: string,
    insulationMaterial: string,
    conductorCrimpDial: number,
    insulationCrimpDial: number,
}