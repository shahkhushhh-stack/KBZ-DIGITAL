import { useState, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const ROI = 10.75; // Rate of Interest

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);
};

export default function EmiCalculatorPage() {
  const [price, setPrice] = useState(150000);
  const [downPayment, setDownPayment] = useState(30000);
  const [tenure, setTenure] = useState(24);

  const loanAmount = useMemo(() => Math.max(0, price - downPayment), [price, downPayment]);
  const monthlyInterestRate = useMemo(() => ROI / 12 / 100, []);

  const emi = useMemo(() => {
    if (loanAmount <= 0 || tenure <= 0) return 0;
    const numerator = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenure);
    const denominator = Math.pow(1 + monthlyInterestRate, tenure) - 1;
    if (denominator === 0) return 0;
    return numerator / denominator;
  }, [loanAmount, monthlyInterestRate, tenure]);

  const totalPayment = useMemo(() => emi * tenure, [emi, tenure]);
  const totalInterest = useMemo(() => Math.max(0, totalPayment - loanAmount), [totalPayment, loanAmount]);

  const chartData = [
    { name: 'Principal', value: loanAmount },
    { name: 'Interest', value: totalInterest },
  ];

  const COLORS = ['#4f46e5', '#ef4444'];

  return (
    <div className="bg-dark-bg min-h-screen text-white pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold tracking-tight">EMI Calculator</h1>
          <p className="mt-4 text-lg text-gray-400">Plan your purchase with our easy-to-use EMI calculator. See your monthly payments and total costs upfront.</p>
        </div>

        <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Calculator Inputs */}
          <div className="bg-card-bg border border-border-color rounded-xl p-8 space-y-8">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">VEHICLE PRICE (₹)</label>
              <input 
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full bg-white/5 border border-white/10 rounded-md py-3 px-4 text-white text-2xl font-semibold focus:outline-none focus:ring-2 focus:ring-brand-red"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">DOWN PAYMENT (₹)</label>
              <input 
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full bg-white/5 border border-white/10 rounded-md py-3 px-4 text-white text-2xl font-semibold focus:outline-none focus:ring-2 focus:ring-brand-red"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">LOAN TENURE (Months)</label>
              <input 
                type="range"
                min={6}
                max={60}
                step={6}
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-center text-xl font-semibold mt-2">{tenure} Months</div>
            </div>
            <div className="text-center text-gray-400 text-sm pt-4 border-t border-border-color">
              Rate of Interest: <span className="font-semibold text-white">{ROI}% p.a.</span> (fixed)
            </div>
          </div>

          {/* Results Display */}
          <div className="bg-card-bg border border-border-color rounded-xl p-8 sticky top-24">
            <h2 className="text-2xl font-bold text-center mb-6">Loan Breakdown</h2>
            <div className="text-center mb-8">
              <p className="text-gray-400">Your Monthly EMI</p>
              <p className="text-5xl font-extrabold text-brand-red">{formatCurrency(emi)}</p>
            </div>
            
            <div className="h-64 w-full mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" labelLine={false}>
                    {chartData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                  </Pie>
                  <Tooltip formatter={(value) => formatCurrency(value as number)} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-3 text-lg">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Loan Amount</span>
                <span className="font-semibold">{formatCurrency(loanAmount)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Total Interest</span>
                <span className="font-semibold">{formatCurrency(totalInterest)}</span>
              </div>
              <div className="flex justify-between items-center text-xl border-t border-border-color pt-3 mt-3">
                <span className="text-gray-300">Total Payment</span>
                <span className="font-bold text-white">{formatCurrency(totalPayment)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
