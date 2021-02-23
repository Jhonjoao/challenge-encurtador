import { Router } from 'express';
import encurtadorRoutes from './encurtador.routes';
import redirecionadorRoutes from './redirecionador.routes';

const routes = Router();

routes.use('/encurtador', encurtadorRoutes);
routes.use('/', redirecionadorRoutes);

export default routes;
