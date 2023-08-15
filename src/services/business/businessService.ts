import { IPoyntService, PoyntService } from "../common";
import { IBusinessService } from "./businessServiceInterface";
import { inject, injectable } from "inversify";
import { CONST } from "../../utils"; 

@injectable()
export class BusinessService implements IBusinessService {

    constructor(
        @inject(CONST.POYNT_SERVICE) private poyntService: IPoyntService
    ) 
    {}

    async getBusiness(businessId: string, storeId?: string | undefined, storeDeviceId?: string | undefined, ignoreDeactivatedDevices?: boolean | undefined): Promise<any> {
        try {
            console.log("this2: ", this);
            let business = await this.poyntService.getBusiness(businessId);
            return business;
        } catch (error) {
            throw error;
        }
    }

}