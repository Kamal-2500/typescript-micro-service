import { Request, Response } from "express";
import { BusinessService, IBusinessService } from "../services";
import { inject, injectable } from "inversify";
import { CONST } from "../utils";

@injectable()
export class BusinessController {
    constructor(
        @inject(CONST.BUSINESS_SERVICE) private businessService: IBusinessService,
    ) { 
        this.getBusiness = this.getBusiness.bind(this); 
    }
    
    async getBusiness(req: Request, res: Response): Promise<void> {
        try {
            let result = await this.businessService.getBusiness(req.params.id);
            res.send(result);
        } catch (error) {
            console.log("error: ", error);
            res.status(500).json({ message: "INTERNAL SERVER ERROR" });
        }
    }
}