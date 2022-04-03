import { NextFunction, Request, Response } from 'express';
import {
    getString,
    getNumber,
    getNotEmptyString,
    getBoolean,
    getObject
} from 'soft-express-validator/dist/cjs';

class TestController {
    public index = (req: Request, res: Response, next: NextFunction): void => {
        console.log("Hello");
        try {
            const string = getString(req, '1');
            const number = getNumber(req, '2', { pipe: true });
            const object = getObject(req, '3');
            const boolean = getBoolean(req, '4', { pipe: true });
            const notEmptyString = getNotEmptyString(req, '5');
            console.log(string, number, object, boolean, notEmptyString);
            res.sendStatus(200);
        } catch (error) {
            next(error);
        }
    };
}

export default TestController;
