export interface IPoyntService {
    getBusiness (businessId: string, storeId?: string, storeDeviceId?: string, ignoreDeactivatedDevices?: boolean): Promise<any>;
}