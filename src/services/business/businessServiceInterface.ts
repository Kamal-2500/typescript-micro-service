export interface IBusinessService {
    getBusiness(businessId: string, storeId?: string, storeDeviceId?: string, ignoreDeactivatedDevices?: boolean): Promise<any>;
}