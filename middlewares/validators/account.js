import Joi from 'joi';

const performEventActionValidator = (payload) => {

    const schema = Joi.object({
        type: Joi.string().required(),
        amount: Joi.number().required()
    });
    return schema.validate(payload, {allowUnknown: true});
};

export  {
    performEventActionValidator
}

