import handler from '../../pages/api/towns';

describe('handler', () => {
    it('should return a list of towns when a GET request is made', async () => {
        // Arrange
        const req: any = {
            method: 'GET',
        };
        const res: any = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Act
        await handler(req, res);

        // Assert
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(["Montpellier", "Paris", "Lyon", "Marseille"]);
    });

    it('should add a town to the list and return the updated list when a POST request is made with a string body', async () => {
        // Arrange
        const req: any = {
            method: 'POST',
            body: 'Toulouse',
        };
        const res: any = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Act
        const result = await handler(req, res);

        // Assert
        expect(res.status).not.toHaveBeenCalled();
        expect(result).toEqual(["Montpellier", "Paris", "Lyon", "Marseille", "Toulouse"]);
    });

    it('should return a 400 error if a POST request is made with a non-string body', async () => {
        // Arrange
        const req: any = {
            method: 'POST',
            body: 123,
        };
        const res: any = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Act
        await handler(req, res);

        // Assert
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ error: 'Request body must be a string' });
    });
});
