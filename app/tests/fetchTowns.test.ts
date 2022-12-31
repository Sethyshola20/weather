import { fetchMyApiForTownArray } from '../page'
describe('fetchMyApiForTownArray', () => {
    it('should return an array of town names', async () => {
        const towns = await fetchMyApiForTownArray();
        expect(towns).toBeInstanceOf(Array);
        expect(towns.every((town) => typeof town === 'string')).toBe(true);
    });

    it('should throw an error if the request fails', async () => {
        // You can mock the fetch function to simulate a failed request
        jest.mock('node-fetch', () => jest.fn().mockImplementation(() => Promise.reject(new Error())));

        await expect(fetchMyApiForTownArray()).rejects.toThrow('There is something wrong with the request to your api');
    });
});
