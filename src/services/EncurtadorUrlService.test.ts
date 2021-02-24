import GenerateUrlService from './GenerateUrlService';

const url = "https://wisereducacao.com/"

describe('TEST - URL REDUCTION SERVICE', () => {
    test('generate url hash', async () => {
        const generateHashUrl = new GenerateUrlService();

        expect(generateHashUrl.execute()).toEqual(expect.not.stringContaining("/[^a-z0-9]/gi,''"));
    });
});