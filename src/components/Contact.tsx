import Title from "./Title";

const Contact = () => {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/b845a6e5-d78b-43c9-8531-848e6af89250"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <h4>
            <p>Email me:</p>
            <a href="mailto:ntnirvana91@gmail.com">ntnirvana91@gmail.com</a>
          </h4>
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={10}
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <button
            type="button"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
          >
            Work with me
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
