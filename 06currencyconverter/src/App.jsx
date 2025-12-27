import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const { data: currencyInfo, loading, error } = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const reset = () => {
    setAmount(0)
    setConvertedAmount(0)
    setFrom("usd")
    setTo("inr")
  }
  
  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to])
      console.log('Converted:', amount, 'from', from, 'to', to, '=', amount * currencyInfo[to])
    } else {
      console.log('Currency not found:', to)
    }
  }

  return (
    <div
        className="w-full min-h-screen flex flex-wrap justify-center items-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4"
    >
        <div className="w-full max-w-md">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Currency Converter
                    </h1>
                    <p className="text-gray-300 text-sm">Convert currencies instantly with real-time rates</p>
                </div>
                
                {loading && (
                    <div className="flex justify-center items-center mb-6">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                        <span className="ml-3 text-white">Loading currencies...</span>
                    </div>
                )}
                
                {error && (
                    <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 mb-6">
                        <div className="flex items-center">
                            <span className="text-red-400 mr-2">⚠️</span>
                            <span className="text-red-300 text-sm">Error: {error}</span>
                        </div>
                    </div>
                )}
                
                <form className="space-y-6">
                    <div className="space-y-4">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                        
                        <div className="flex justify-center">
                            <button
                                type="button"
                                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white p-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                                onClick={swap}
                                disabled={loading || error}
                            >
                                <span className="text-xl">⇅</span>
                            </button>
                        </div>
                        
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    
                    <div className="space-y-3">
                        <button 
                            type="button" 
                            className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={convert} 
                            disabled={loading || error}
                        >
                            <span className="flex items-center justify-center">
                                <span className="mr-2">🔄</span>
                                Convert {from.toUpperCase()} to {to.toUpperCase()}
                            </span>
                        </button>
                        
                        <button 
                            type="button" 
                            className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={reset} 
                            disabled={loading || error}
                        >
                            <span className="flex items-center justify-center">
                                <span className="mr-2">🔄</span>
                                Reset
                            </span>
                        </button>
                    </div>
                </form>
                
                <div className="text-center mt-8 pt-6 border-t border-white/20">
                    <p className="text-gray-400 text-xs">
                        Data provided by exchangerate-api.com
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                        Built with ❤️ using React & Tailwind CSS
                    </p>
                </div>
            </div>
        </div>
    </div>
);
}

export default App