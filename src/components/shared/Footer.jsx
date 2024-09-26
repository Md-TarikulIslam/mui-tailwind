const Footer = () => {
  return (
    <div className="sticky top-0 block rounded-2xl bg-childLight p-4 text-black dark:bg-dark dark:text-white">
      <div className="flex w-full items-center justify-between text-xs font-medium text-black dark:text-white md:text-base">
        <p>
          Copyright © 2024{" "}
          <a
            className="text-blue-500"
            target="_blank"
            href="https://sierrasolution.com/"
          >
            sierrasolution.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
