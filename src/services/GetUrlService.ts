import { getRepository } from 'typeorm';

import Urls from '../models/Urls';

interface RequestDTO {
    param_url: string
}

class GetUrlService {
    public async execute({param_url}:RequestDTO): Promise<Urls>{
        const urlRepository = getRepository(Urls);

        const url_redirect = await urlRepository.findOne({
            where: { param_url }
        })

        const now = new Date();
        if(now > url_redirect.expires_at){
            throw new Error('Expired URL.');
        }

        if(!url_redirect){
            throw new Error('This URL not exist');
        }

        return url_redirect
    }
}

export default GetUrlService;