/* eslint-disable @typescript-eslint/no-explicit-any */
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const handleSignup = async (event: any) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const user = { email, password };

    if (!email) {
      return toast.error('please provide email');
    }

    if (!password) {
      return toast.error('please provide password');
    }

    try {
      const res = await fetch('http://localhost:5000/api/v1/auth/create-user', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      console.log(data);
      if (data.success == true) {
        toast.success(data.message);
        navigate('/Signin');
      } else if (data.success == false) {
        toast.error(data.message);
      }
    } catch {
      toast.error('Signup failed');
    }
  };

  return (
    <section className="bg-[#F4F7FF] py-10 lg:py-[60px]">
      <div className="container mx-auto">
        <div className="w-full px-4 ">
          <div className="relative mx-auto max-w-[450px] overflow-hidden rounded-lg bg-white py-8 px-10 text-center sm:px-12 md:px-[30px]">
            <div className="mb-10 text-center md:mb-8">
              <Link to="/#" className="mx-auto inline-block max-w-[160px]">
                <div className="max-w-full px-4 w-60 flex items-center">
                  <img
                    src="https://st2.depositphotos.com/1364916/6359/v/450/depositphotos_63590137-stock-illustration-blue-book-logo-vector.jpg"
                    alt="logo"
                    className="w-14"
                  />
                  <h2 className="text-xl text-yellow-500 font-bold px-2">
                    BOIGHOR
                  </h2>
                </div>
              </Link>
            </div>
            <form onSubmit={handleSignup}>
              <InputBox
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <InputBox
                type="password"
                name="password"
                placeholder="Password"
                required
              />

              <div className="mb-10">
                <button
                  className="border-primary w-full cursor-pointer rounded-md border bg-primary py-3 px-5 text-base text-white transition hover:bg-opacity-90"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>

            <p className="text-base text-[#adadad]">
              Already Have an Account?
              <Link to="/Signin" className="text-primary hover:underline">
                Sign In
              </Link>
            </p>
            <div>
              <span className="absolute top-1 right-1">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="1.39737"
                    cy="38.6026"
                    r="1.39737"
                    transform="rotate(-90 1.39737 38.6026)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.39737"
                    cy="1.99122"
                    r="1.39737"
                    transform="rotate(-90 1.39737 1.99122)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="13.6943"
                    cy="38.6026"
                    r="1.39737"
                    transform="rotate(-90 13.6943 38.6026)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="13.6943"
                    cy="1.99122"
                    r="1.39737"
                    transform="rotate(-90 13.6943 1.99122)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="25.9911"
                    cy="38.6026"
                    r="1.39737"
                    transform="rotate(-90 25.9911 38.6026)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="25.9911"
                    cy="1.99122"
                    r="1.39737"
                    transform="rotate(-90 25.9911 1.99122)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="38.288"
                    cy="38.6026"
                    r="1.39737"
                    transform="rotate(-90 38.288 38.6026)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="38.288"
                    cy="1.99122"
                    r="1.39737"
                    transform="rotate(-90 38.288 1.99122)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.39737"
                    cy="26.3057"
                    r="1.39737"
                    transform="rotate(-90 1.39737 26.3057)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="13.6943"
                    cy="26.3057"
                    r="1.39737"
                    transform="rotate(-90 13.6943 26.3057)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="25.9911"
                    cy="26.3057"
                    r="1.39737"
                    transform="rotate(-90 25.9911 26.3057)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="38.288"
                    cy="26.3057"
                    r="1.39737"
                    transform="rotate(-90 38.288 26.3057)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.39737"
                    cy="14.0086"
                    r="1.39737"
                    transform="rotate(-90 1.39737 14.0086)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="13.6943"
                    cy="14.0086"
                    r="1.39737"
                    transform="rotate(-90 13.6943 14.0086)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="25.9911"
                    cy="14.0086"
                    r="1.39737"
                    transform="rotate(-90 25.9911 14.0086)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="38.288"
                    cy="14.0086"
                    r="1.39737"
                    transform="rotate(-90 38.288 14.0086)"
                    fill="#3056D3"
                  />
                </svg>
              </span>
              <span className="absolute left-1 bottom-1">
                <svg
                  width="29"
                  height="40"
                  viewBox="0 0 29 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="2.288"
                    cy="25.9912"
                    r="1.39737"
                    transform="rotate(-90 2.288 25.9912)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="14.5849"
                    cy="25.9911"
                    r="1.39737"
                    transform="rotate(-90 14.5849 25.9911)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="26.7216"
                    cy="25.9911"
                    r="1.39737"
                    transform="rotate(-90 26.7216 25.9911)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="2.288"
                    cy="13.6944"
                    r="1.39737"
                    transform="rotate(-90 2.288 13.6944)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="14.5849"
                    cy="13.6943"
                    r="1.39737"
                    transform="rotate(-90 14.5849 13.6943)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="26.7216"
                    cy="13.6943"
                    r="1.39737"
                    transform="rotate(-90 26.7216 13.6943)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="2.288"
                    cy="38.0087"
                    r="1.39737"
                    transform="rotate(-90 2.288 38.0087)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="2.288"
                    cy="1.39739"
                    r="1.39737"
                    transform="rotate(-90 2.288 1.39739)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="14.5849"
                    cy="38.0089"
                    r="1.39737"
                    transform="rotate(-90 14.5849 38.0089)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="26.7216"
                    cy="38.0089"
                    r="1.39737"
                    transform="rotate(-90 26.7216 38.0089)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="14.5849"
                    cy="1.39761"
                    r="1.39737"
                    transform="rotate(-90 14.5849 1.39761)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="26.7216"
                    cy="1.39761"
                    r="1.39737"
                    transform="rotate(-90 26.7216 1.39761)"
                    fill="#3056D3"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;

const InputBox = ({ type, placeholder, name }: any) => {
  return (
    <div className="mb-6">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
      />
    </div>
  );
};
