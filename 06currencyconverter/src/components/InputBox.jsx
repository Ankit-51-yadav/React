import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputId = useId()

    return (
        <div className={`bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-white/80 mb-2 inline-block text-sm font-medium">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-white/80 mb-2 w-full text-sm font-medium">Currency</p>
                <select
                    className="rounded-lg px-3 py-2 bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency} className="bg-gray-800 text-white">
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;