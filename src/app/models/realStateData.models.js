export class GeneralDataEstate{
    EstateId: string;
    EstateType: string;
    Municipality: string;
    Stratum: string;
    Bedrooms: string;
    Bathrooms: string;
    EstateDestination: string;
    Exclusiveness: boolean;
    Tracing: boolean;
    newEstate: boolean;

    constructor(eEstateId: string,eEstateType: string, eMunicipality: string, eStratum: string, eBedrooms: string, eBathrooms: string, eEstateDestination: string, eExclusiveness: boolean, eTracing: boolean, eNewEstate: boolean ){
        this.EstateId = eEstateId;
        this.EstateType = eEstateType;
        this.Municipality = eMunicipality;
        this.Stratum = eStratum;
        this.Bedrooms = eBathrooms;
        this.Bathrooms = eBedrooms;
        this.EstateDestination = eEstateDestination;
        this.Exclusiveness = eExclusiveness;
        this.Tracing = eTracing;
        this.newEstate = eNewEstate;
    }
}