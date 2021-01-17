import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import users from 'constants/api/users';

import { setAuthorizationHeader } from 'configs/axios';

import useForm from 'helpers/hooks/useForm';

import Select from 'components/Form/Select';
import Input from 'components/Form/Input';

import fieldErrors from 'helpers/fieldErrors';

function RegisterForm({ history }) {
  const dispatch = useDispatch();

  const [
    { name, email, password, profession, otherProfession },
    setState,
  ] = useForm({
    name: '',
    email: '',
    password: '',
    profession: '',
    otherProfession: '',
  });

  const [errors, setErrors] = useState(null);

  function submit(e) {
    e.preventDefault();

    users
      .register({
        name,
        email,
        password,
        profession: profession === 'others' ? otherProfession : profession,
      })
      .then((res) => {
        history.push('/login');
      })
      .catch((error) => {
        setErrors(error?.response?.data?.message);
      });
  }

  const ERRORS = fieldErrors(errors);

  return (
    <div className="flex justify-center items-center pb-24">
      <div className="w-3/12">
        <h1 className="text-4xl text-gray-900 mb-6">
          <span className="font-bold">Grow Skills</span> From, <br />
          Finish your <span className="font-bold">Goals</span>
        </h1>
        <form onSubmit={submit}>
          <Input
            error={ERRORS?.name.message}
            name="name"
            onChange={setState}
            placeholder="Your Name"
            labelName="Full Name"
            value={name}
          />

          <Input
            error={ERRORS?.email.message}
            name="email"
            type="email"
            onChange={setState}
            placeholder="Your email address"
            labelName="Email Address"
            value={name}
          />

          <Input
            error={ERRORS?.password.message}
            name="password"
            type="password"
            onChange={setState}
            placeholder="Your password"
            labelName="Password"
            value={name}
          />

          <Select
            labelName="Occupation"
            name="profession"
            value={profession}
            fallbackText="Select your focus"
            onClick={setState}
          >
            <option value="">Select your focus</option>
            <option value="Web Developer">Web Designer</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="others">Others</option>
          </Select>

          {profession === 'others' && (
            <Input
              error={ERRORS?.otherProfession?.message}
              name="otherProfession"
              onChange={setState}
              placeholder="Your occupation"
              labelName="Other's Occupation"
              value={name}
            />
          )}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3"
          >
            Daftar Now
          </button>
        </form>
      </div>

      <div className="w-1/12"></div>

      <div className="w-5/12 flex justify-end pt-24 pr-16">
        <div className="relative" style={{ width: 369, height: 440 }}>
          <div
            className="absolute border-indigo-700 border-2 -mt-8 -ml-16 left-0"
            style={{ width: 324, height: 374 }}
          ></div>
          <div className="absolute w-full h-full -mb-8 -ml-8">
            <img src="/assets/images/james.jpg" alt="Mas James caem" />
          </div>
          <div
            className="absolute z-10 bg-white bottom-0 right-0 -mr-12 py-3 px-4 mt-24"
            style={{ width: 290 }}
          >
            <p className="text-gray-900 mb-2">
              Metode belajar yang santai seperti nonton drakor di Netflix
            </p>
            <span className="text-gray-600">James, Apps Developer</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(RegisterForm);
