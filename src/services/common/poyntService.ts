import { IPoyntService } from "./poyntServiceInterface";
import { inject, injectable } from "inversify";

@injectable()
export class PoyntService implements IPoyntService {

    private readonly _poynt;

    constructor() {
        this._poynt = "poynt";
        // require("poynt")({
        //     applicationId: "urn:aid:your-application-id",
        //     filename: __dirname + "/key.pem",
        // });
    }
    async getBusiness(businessId: string, storeId?: string | undefined, storeDeviceId?: string | undefined, ignoreDeactivatedDevices?: boolean | undefined): Promise<any> {
        try {
            return new Promise((resolve, reject) => {
                let business = {
                    "acquirer": "ELAVON",
                    "activeSince": "1970-01-01T00:00:00Z",
                    "address": {
                        "city": "Palo Alto",
                        "countryCode": "USA",
                        "createdAt": "2017-01-04T22:04:33Z",
                        "id": 48119,
                        "line1": "4151 Middlefield Road",
                        "line2": "Level 2",
                        "postalCode": "94303",
                        "status": "ADDED",
                        "territory": "California",
                        "territoryType": "STATE",
                        "type": "BUSINESS",
                        "updatedAt": "2017-08-25T01:05:33Z"
                    },
                    "attributes": {},
                    "businessUrl": "http://lawrence-s-last-straw.com",
                    "createdAt": "2017-01-04T22:04:34Z",
                    "description": "Just another test merchant",
                    "doingBusinessAs": "Lawrence's Last Straw",
                    "emailAddress": "lawrence-s-last-straw@gmail.com",
                    "externalMerchantId": "lawrence's0226",
                    "id": "18f071cc-5ed4-4b33-80c1-305056d42bfb",
                    "industryType": "Restaurant",
                    "legalName": "Lawrence's Last Straw",
                    "mcc": "5812",
                    "mockProcessor": false,
                    "phone": {
                        "areaCode": "575",
                        "createdAt": "2017-01-04T22:04:33Z",
                        "id": 50700,
                        "ituCountryCode": "1",
                        "localPhoneNumber": "2040375",
                        "status": "ADDED",
                        "type": "BUSINESS",
                        "updatedAt": "2017-08-25T01:05:33Z"
                    },
                    "processor": "ELAVON",
                    "sic": "5812",
                    "status": "ACTIVATED",
                    "stores": [
                        {
                            "acquirer": "ELAVON",
                            "address": {
                                "city": "Palo Alto",
                                "countryCode": "USA",
                                "createdAt": "2017-01-04T22:04:33Z",
                                "id": 48120,
                                "line1": "10617 Business Drive",
                                "line2": "Suite 424",
                                "postalCode": "94301",
                                "status": "ADDED",
                                "territory": "California",
                                "territoryType": "STATE",
                                "type": "BUSINESS",
                                "updatedAt": "2017-08-16T02:59:42Z"
                            },
                            "attributes": {},
                            "currency": "USD",
                            "displayName": "Lawrence's Last Straw 488",
                            "externalStoreId": "161779901711",
                            "fixedLocation": true,
                            "id": "c394627f-4f68-47fb-90a5-684ea801a352",
                            "latitude": 37.4457,
                            "longitude": -122.162,
                            "mockProcessor": false,
                            "phone": {
                                "areaCode": "575",
                                "createdAt": "2017-01-04T22:04:33Z",
                                "id": 50701,
                                "ituCountryCode": "1",
                                "localPhoneNumber": "2040375",
                                "status": "ADDED",
                                "type": "BUSINESS",
                                "updatedAt": "2017-08-16T02:59:42Z"
                            },
                            "processor": "ELAVON",
                            "processorData": {},
                            "status": "ACTIVE",
                            "storeDevices": [
                                {
                                    "businessAgreements": {
                                        "EULA": {
                                            "acceptedAt": "2017-07-25T01:36:14Z",
                                            "current": true,
                                            "type": "EULA",
                                            "userId": 5247838,
                                            "version": "1f",
                                            "versionOutdated": false
                                        }
                                    },
                                    "catalogId": "9deca670-8761-4133-b1a9-b05b9fb01cb6",
                                    "createdAt": "2017-01-04T22:10:00Z",
                                    "deviceId": "urn:tid:48c54303-6d51-39af-bdeb-4af53f621652",
                                    "externalTerminalId": "8024696638530",
                                    "name": "LAWRENCE'S LAST STRAW DON'T MESS",
                                    "publicKey": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyl+Sa2C1E6xcv9d9Mm9N\ngtzDtSsjWd9k7PZPDLy3JRq3dhGU9rQtopfEUrtqRUDRS7xpP3842enns39Z427+\nwOuAq7aqVLHzCIio8+D0m21mmsKpE8rSH54dCKciSypuj/MF4o+jIMA43+ov6dba\nN/6WFH/+c4MzTqz673XldP9RAvrK8k55lKoZW5bvX5Bx0xmFbtey17Uyby+y6kT+\nTyQArYwzEFBA2RQ+LKf/XwIgoh6RcdMVlNahe5LNW2rl5FQGm+HxnvYG6ZQGQ4oX\nFEGClsvOQabdjVXNNA6rVmJeeKmSekVNFjA3ZqEcmq8E6ijmT/H1upmiZ5fI0Eag\nSwIDAQAB\n-----END PUBLIC KEY-----\n",
                                    "serialNumber": "P61SWA231FS000416",
                                    "status": "ACTIVATED",
                                    "storeId": "c394627f-4f68-47fb-90a5-684ea801a352",
                                    "type": "TERMINAL",
                                    "updatedAt": "2017-08-16T04:26:19Z"
                                }
                            ],
                            "timezone": "America/Los_Angeles"
                        }
                    ],
                    "timezone": "America/Los_Angeles",
                    "type": "TEST_MERCHANT",
                    "updatedAt": "2017-08-25T01:05:33Z"
                }

                resolve(business);
                // this._poynt.getBusiness(
                //     {
                //         businessId: businessId,
                //     },
                //     function (err: any, business: any) {
                //         if (err) {
                //             reject(err);
                //         } else {
                //             resolve(business);
                //         }
                //     }
                // );
            })
        } catch (error) {
            throw error;
        }
    }

}