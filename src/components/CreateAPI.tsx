import { type FC, useState, useEffect } from 'react'
import { Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useNavigate } from 'react-router-dom'

interface CreateAPIProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export const CreateAPI: FC<CreateAPIProps> = ({ isDarkMode, setIsDarkMode }) => {
  const navigate = useNavigate();
  const [domain, setDomain] = useState('loan');
  const [subdomain, setSubdomain] = useState('account');
  const [action, setAction] = useState('enquiry');
  const [apiUri, setApiUri] = useState('/loan/account');

  useEffect(() => {
    setApiUri(`/${domain}/${subdomain}`);
  }, [domain, subdomain]);
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gradient-to-br dark:from-gray-900 dark:to-blue-900 transition-colors">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md transition-colors">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-blue-400 font-['Poppins']">ProjectX</h1>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <div className="flex flex-col items-end">
            <span className="text-xs text-gray-600 dark:text-gray-400 mb-0.5">Powered by</span>
            <span className="text-sm font-bold text-gray-800 dark:text-white tracking-wide">theapimasters.com</span>
          </div>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-64px)]">
        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 mb-8 border border-gray-200 dark:border-gray-700 transition-colors">
            <h2 className="text-xl font-bold text-gray-900 dark:text-blue-400 mb-6 font-['Poppins']">Create New API</h2>
            
            {/* API Creation Form */}
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-['Inter']">Domain</label>
                <select
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="loan">Loan</option>
                  <option value="deposit">Deposit</option>
                  <option value="cards">Cards</option>
                  <option value="customer">Customer</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-['Inter']">Sub Domain</label>
                <select
                  value={subdomain}
                  onChange={(e) => setSubdomain(e.target.value)}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="account">Account</option>
                  <option value="credit">Credit</option>
                  <option value="debit">Debit</option>
                  <option value="personal-loan">Personal Loan</option>
                  <option value="vehicle-loan">Vehicle Loan</option>
                  <option value="fixed-deposit">Fixed Deposit</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-['Inter']">Action</label>
                <select
                  value={action}
                  onChange={(e) => setAction(e.target.value)}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="enquiry">Enquiry</option>
                  <option value="transaction">Transaction</option>
                  <option value="update-data">Update Data</option>
                  <option value="delete">Delete</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-['Inter']">API URI</label>
                <Input
                  type="text"
                  value={apiUri}
                  onChange={(e) => setApiUri(e.target.value)}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-['Inter']">Data Model</label>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
                  <p className="text-gray-600 dark:text-gray-400">Drag &amp; Drop</p>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Button
                  type="button"
                  className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold py-2 px-4 rounded-md transition-colors"
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
                  onClick={() => navigate('/contract')}
                >
                  Create API
                </Button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}
