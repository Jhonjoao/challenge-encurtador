import { getRepository } from 'typeorm';
import Urls from '../models/Urls';
import GenerateUrlService from './GenerateUrlService';

interface RequestDTO {
    url: string
}

class EncurtadorUrlService {
    public async execute({ url }: RequestDTO): Promise<string>{
        const urlRepository = getRepository(Urls);
        const generateUrl = new GenerateUrlService();
        let hashUrl:string;
        //loop if exist hash
        while(true){
            hashUrl = generateUrl.execute();
            //check code url not exist
            const checkCodeUrlExists = await urlRepository.findOne({
                where: { param_url: hashUrl }
            })
            if(!checkCodeUrlExists){
                break;
            }
        }

        const now = new Date();
        now.setHours(now.getHours() + 1);

        //save url and new url in database
        const saveNewUrl = urlRepository.create({
            url,
            param_url: hashUrl,
            expires_at: now,
        })

        await urlRepository.save(saveNewUrl);

        const newUrl = `${process.env.APP_URL}/${hashUrl}`

        return newUrl
    }
};

export default EncurtadorUrlService;