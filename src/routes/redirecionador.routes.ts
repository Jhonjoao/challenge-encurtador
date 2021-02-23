import { Router } from 'express';
import { getRepository } from 'typeorm';

import Urls from '../models/Urls';

const redirecionadorRoutes = Router();

redirecionadorRoutes.post('/:param_url', async (request, response) => {
    const urlRepository = getRepository(Urls);
    const { param_url } = request.params;

    console.log(await urlRepository.find())

    const url_redirect = await urlRepository.findOne({
        where: { param_url }
    })

    if(!url_redirect){
        return response.status(404).send();
    }

    return response.redirect(url_redirect.url)
});

export default redirecionadorRoutes;
