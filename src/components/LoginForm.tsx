const LoginForm = () => {
  return (
    <div className="flex justify-center items-center">
      <form className="flex flex-col  justify-center items-center w-[700px] h-[200px] p-8 shadow-2xl">
        <div className=" w-full flex flex-col justify-between">
          <div className="w-full flex my-2  justify-between">
            <label htmlFor="email">E-mail</label>
            <input
              className="w-3/4 border outline-0 px-2 py-1 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 "
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="w-full flex my-2 justify-between">
            <label htmlFor="password">password</label>
            <input
              className="w-3/4 border outline-0 px-2 py-1 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 "
              type="password"
              name="password"
              id="password"
            />
          </div>
          <div className="w-full flex flex-col my-2 justify-between items-center">
            <button className="bg-fuchsia-600 py-2 px-6 rounded-lg" type="submit">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
