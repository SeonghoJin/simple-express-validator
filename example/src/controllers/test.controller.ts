import { NextFunction, Request, Response } from 'express';
import { Body } from 'simple-express-validator';


class TestController {
    public index = (req: Request, res: Response, next: NextFunction): void => {
        try {
            const string = Body.getString(req, '1');
            const number = Body.getNumber(req, '2', { pipe: true });
            const object = Body.getObject(req, '3');
            const boolean = Body.getBoolean(req, '4', { pipe: true });
            const notEmptyString = Body.getNotEmptyString(req, '5');
            console.log(string, number, object, boolean, notEmptyString);
            res.sendStatus(200);
        } catch (error) {
            next(error);
        }
    };
}

export default TestController;
