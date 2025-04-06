import { useState } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-900 to-gray-900 text-white">
      <div className="w-full max-w-md mx-auto p-8 bg-gray-800 rounded-xl shadow-2xl border border-gray-700">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-400">
          Currency Converter
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="mb-6">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>
          <div className="relative w-full h-0.5 my-8">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
              onClick={swap}
            >
              🔄 Swap
            </button>
          </div>
          <div className="mb-6">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;