import { Form, Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Box } from "../Box/Box";
import {
  Button,
  Input,
  Label,
  RadioLabel,
  Select,
} from "./RegisterForm.styled";
import { Error } from "../Error/Error";

const schema = yup.object({
  firstName: yup.string().required("Is a required field"),
  lastName: yup.string().required("Is a required field"),
  email: yup.string().email("Must be a valid email"),
  tel: yup
    .number()
    .typeError("Must be a `number` type")
    .required()
    .positive()
    .integer(),
  birthday: yup.date(),
});

export const RegisterForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        tel: "",
        color: "",
        gender: "",
        birthday: "",
      }}
      validationSchema={schema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
      }}
    >
      <Form>
        <Box display="flex" justifyContent="space-between" mb="5">
          <Box display="flex" flexDirection="column" width="normal" mr="4">
            <Label htmlFor="firstName">First Name</Label>
            <Input name="firstName" type="text" />
            <ErrorMessage
              render={(message) => <Error>{message}</Error>}
              name="firstName"
            />
          </Box>

          <Box display="flex" flexDirection="column" width="normal">
            <Label htmlFor="lastName">Last Name</Label>
            <Input name="lastName" type="text" />
            <ErrorMessage
              render={(message) => <Error>{message}</Error>}
              name="lastName"
            />
          </Box>
        </Box>

        <Box display="flex" justifyContent="space-between" mb="5">
          <Box display="flex" flexDirection="column" width="normal" mr="4">
            <Label htmlFor="birthday">Birthday</Label>
            <Input name="birthday" type="date" />
          </Box>

          <Box display="flex" flexDirection="column" width="normal">
            <Label>Gender</Label>
            <Box display="flex" py="4">
              <RadioLabel>
                <Field type="radio" name="gender" value="male" />
                Male
              </RadioLabel>
              <RadioLabel>
                <Field type="radio" name="gender" value="female" />
                Female
              </RadioLabel>
            </Box>
          </Box>
        </Box>

        <Box display="flex" justifyContent="space-between" mb="5">
          <Box display="flex" flexDirection="column" width="normal" mr="4">
            <Label htmlFor="email">Email</Label>
            <Input name="email" type="email" />
            <ErrorMessage
              render={(message) => <Error>{message}</Error>}
              name="email"
            />
          </Box>

          <Box display="flex" flexDirection="column" width="normal">
            <Label htmlFor="tel">Phone Number</Label>
            <Input name="tel" type="tel" />
            <ErrorMessage
              render={(message) => <Error>{message}</Error>}
              name="tel"
            />
          </Box>
        </Box>

        <Box mb="5">
          <Select as="select" name="color">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Select>
        </Box>

        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
};
