import 'reflect-metadata';
import { Container } from 'inversify';
import { CONST } from '../utils';
import { BusinessService, IBusinessService, IPoyntService, PoyntService } from '../services';
import { BusinessController } from '../controllers';

export const container = new Container();

container.bind(CONST.BUSINESS_CONTROLLER).to(BusinessController);
container.bind<IBusinessService>(CONST.BUSINESS_SERVICE).to(BusinessService);
container.bind<IPoyntService>(CONST.POYNT_SERVICE).to(PoyntService);
