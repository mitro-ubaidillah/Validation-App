import * as Yup from 'yup';
import { nricValidation } from './nricValidation';

const unitNumberRegExp = /[0-9]{2}-[0-9a-zA-Z]{2}/g;
const addressRegExp = /[a-zA-Z][0-9]*/;
const postalCodeRegExp = /[0-9]/;

export const inputValidation = Yup.object().shape({
    name: Yup.string().required(),
    donation: Yup.number('Only numbers').required(),
    email: Yup.string().email().required(),
    id_number: Yup.string().test('NRIC validation', function (value) {
        const validation = nricValidation(value);
        if (validation === false) {
            return this.createError({
                path: this.path,
                message: 'NRIC wong',
            });
        } else {
            return true;
        }
    }
    ).required(),
    postal_code: Yup.string().min(6, 'Min length 6 digit').max(6, 'Out of range').matches(postalCodeRegExp, 'Only number area').required(),
    unit_number: Yup.string().matches(unitNumberRegExp, `Must contain a number(or letter) and hyphen symbol`).max(6, 'Max length 6 digit').required(),
    address: Yup.string().when('address', (val, schema) => {
        if(val != '') {
            return Yup.string().matches(addressRegExp, 'Address can`t only use digit')
        }else{
            return Yup.string().optional();
        }
    }),
    remarks: Yup.string().optional()
}, [['address', 'address'], 'name', 'donation', 'email', 'id_number', 'postal_code', 'unit_number', 'remarks']).required();