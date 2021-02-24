import { Router } from 'express';
import GetUrlService from '../services/GetUrlService';

const redirecionadorRoutes = Router();

redirecionadorRoutes.get('/:param_url', async (request, response) => {
    try{
        const { param_url } = request.params;

        const getUrl = new GetUrlService();
        const url_redirect = await getUrl.execute({ param_url })
    
        return response.redirect(url_redirect.url)
    } catch(err){
        return response.status(404).json({ error: err.message });
    }
   
});

export default redirecionadorRoutes;
