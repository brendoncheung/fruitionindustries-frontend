import { createInjectableType } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Applicator } from "src/app/applicator/model/applicator-model";
import { ApplicatorStatus } from "src/app/applicator/model/applicator-status";
import { ApplicatorPCMRPDatastore } from "./applicator-pcmrp-datastore";

@Injectable()
export class ApplicatorRepository {

    private applicators: Applicator[]= [
        {id: "00001", applicatorId: "App101" ,description: 'Applicators, Pneumatic Feed, OCEAN, Male Adapter Post - Atlantic Style Interface, 40 mm (1.62") Stroke Terminator / 30 mm (1.12") Stroke Terminator', manufacturer: "TE", manufacturingNumber: "2152023", strokeLength: 30, wireCrimpWidthMin: 12, wireCrimpWidthMax: 25, insulationDiaMax: 10, insulationDiaMin: 2, type: "mechanical", isLeased: true, drawingUrl: "" },
        {id: "00001", applicatorId: "App101" ,description: 'Applicators, Pneumatic Feed, OCEAN, Male Adapter Post - Atlantic Style Interface, 40 mm (1.62") Stroke Terminator / 30 mm (1.12") Stroke Terminator', manufacturer: "TE", manufacturingNumber: "2152023", strokeLength: 30, wireCrimpWidthMin: 12, wireCrimpWidthMax: 25, insulationDiaMax: 10, insulationDiaMin: 2, type: "mechanical", isLeased: false, drawingUrl: "" },
        {id: "00001", applicatorId: "App101" ,description: 'Applicators, Pneumatic Feed, OCEAN, Male Adapter Post - Atlantic Style Interface, 40 mm (1.62") Stroke Terminator / 30 mm (1.12") Stroke Terminator', manufacturer: "TE", manufacturingNumber: "2152023", strokeLength: 30, wireCrimpWidthMin: 12, wireCrimpWidthMax: 25, insulationDiaMax: 10, insulationDiaMin: 2, type: "mechanical", isLeased: true, drawingUrl: "" },
        {id: "00001", applicatorId: "App101" ,description: 'Applicators, Pneumatic Feed, OCEAN, Male Adapter Post - Atlantic Style Interface, 40 mm (1.62") Stroke Terminator / 30 mm (1.12") Stroke Terminator', manufacturer: "TE", manufacturingNumber: "2152023", strokeLength: 30, wireCrimpWidthMin: 12, wireCrimpWidthMax: 25, insulationDiaMax: 10, insulationDiaMin: 2, type: "mechanical", isLeased: false, drawingUrl: "" },
    ];

    constructor(private datastore: ApplicatorPCMRPDatastore) {}

    public getApplicators(): Applicator[] {
        return this.applicators;
    }

    public getApplicatorsById(id: number) {
        throw new Error("method not implemented")
    }

    public addApplicator(app: Applicator): boolean {
        this.applicators.push(app);
        return true;
    }

    public updateApplicator(app: Applicator) {
        throw new Error("method not implemented")
    }
}