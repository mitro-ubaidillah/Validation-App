import * as Yup from 'yup';
import { nricValidation } from './nricValidation';

const unitNumberRegExp = /[0-9]{2}-[0-9a-zA-Z]{2}/g;
const addressRegExp = /[a-zA-Z][0-9]$/;

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
    postal_code: Yup.string().min(6, 'Min length 6 digit').required(),
    unit_number: Yup.string().matches(unitNumberRegExp, `Must contain a number(or letter) and hyphen symbol`).max(6, 'Max length 6 digit').required(),
    // address: Yup.string().when('address', (val, schema) => {
    //     if(val?.length > 0) {
    //         return Yup.string().matches(addressRegExp, 'Address can`t only use digit').required()
    //     }else{
    //         return Yup.string().notRequired();
    //     }
    // }),
    address: Yup.string().when("address", (val, schema) => {
        console.log(val.length)
        if (val?.length > 0) {  //if address exist then apply min max else not
            return Yup.string().min(5, "min 5").max(255, "max 255").required("Required");
        } else {
            return Yup.string().notRequired();
        }
    }),
    remarks: Yup.string().optional()
}, [['address', 'address'], 'name', 'donation', 'email', 'id_number', 'postal_code', 'unit_number', 'remarks']).required();