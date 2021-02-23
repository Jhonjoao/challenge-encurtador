import crypto from 'crypto';

class GenerateUrlService {
    public execute():string{
        //select number caracteres random
        //Math.random() * (max - min) + min => max: 10, min: 5
        const quantityCaracteres = Math.floor(Math.random() * 5 + 5)
        //set random value js, with crypto
        const hashUrl = crypto.randomBytes(10).toString('HEX').substr(1, quantityCaracteres)

        return hashUrl
    }
}

export default GenerateUrlService;