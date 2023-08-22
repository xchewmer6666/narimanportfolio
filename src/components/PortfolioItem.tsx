const PortfolioItem = ({ title, imgUrl, stack, link }: any) => {
  return (
    <div className="border-2 border-stones-900 rounded-md dark:border-white overflow-hidden">
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p>
          {stack.map((item: any) => (
            <span>{item}</span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default PortfolioItem;
