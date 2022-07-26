import React from "react";
import validationSignup from '../assets/portfolio/validation-login-signup.png'
import tradingProtocol from '../assets/portfolio/trading-protocol.png'
import smallCrypto from '../assets/portfolio/small-crypto-search.png'
import shopping from '../assets/portfolio/shoppin.png'
import cryptoFull from '../assets/portfolio/crypto-full.png'
import coinSearch from '../assets/portfolio/coin-search.png'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: validationSignup,
      href1:'https://super-dango-2e221f.netlify.app',
      href2:'https://github.com/Ayoubfrontend92/Sign-Up'
    },
    {
      id: 2,
      src: shopping,
      href1:'https://shopping-page-test.netlify.app',
      href2:'https://github.com/Ayoubfrontend92/Shopping-Page'
    },
    {
      id: 3,
      src: smallCrypto,
      href1:'https://smal-crypt-app.netlify.app/',
      href2:'https://github.com/Ayoubfrontend92/Crypto-small-App'
    },
    {
      id: 4,
      src: cryptoFull,
      href1:'https://crypto-ayoub.netlify.app/',
      href2:'https://github.com/Ayoubfrontend92/Crypto-professional'
    },
    {
      id: 5,
      src: tradingProtocol,
      href1:'https://github.com/Ayoubfrontend92/Trading',
      href2:'https://github.com/Ayoubfrontend92/Sign-Up'
    },
    {
      id: 6,
      src: coinSearch,
      href1:'https://crypto-search-ayoub.netlify.app/',
      href2:'https://github.com/Ayoubfrontend92/Sign-Up'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,href1,href2 }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={href1}
                   target="_blank"
                   rel="noreferrer"
                  >Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a  href={href2}
                  target="_blank"
                  rel="noreferrer"
                  >Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;