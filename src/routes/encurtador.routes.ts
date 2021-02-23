import { Router } from 'express';
import EncurtadorUrlService from '../services/EncurtadorUrlService';

const encurtadorRoutes = Router();

encurtadorRoutes.post('/', async (request, response) => {
    const { url } = request.body;

    const encurtarUrl = new EncurtadorUrlService();

    const newUrl = await encurtarUrl.execute({ url })

    return response.json({ newUrl })
});

export default encurtadorRoutes;
